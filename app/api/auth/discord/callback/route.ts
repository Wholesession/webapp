
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/client';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const state = searchParams.get('state');

    const baseUrl = (process.env.NEXT_PUBLIC_APP_URL || '').replace(/\/$/, '');

    if (!code || !state) {
        return NextResponse.redirect(`${baseUrl}/checkout/success?error=discord_auth_failed`);
    }

    try {
        // 1. Decode the state to get the original payment reference
        const decodedState = JSON.parse(atob(state));
        const reference = decodedState.reference;

        if (!reference) throw new Error('Invalid state');

        // 2. Verify the order exists and is paid in our DB
        const { data: order, error: orderError } = await supabase
            .from('orders')
            .select('*, users!inner(*)')
            .eq('paystack_reference', reference)
            .single();

        if (orderError || !order || order.status !== 'paid') {
            console.error('Discord Auth: Order not found or not paid', orderError);
            return NextResponse.redirect(`${baseUrl}/checkout/success?error=order_not_verified`);
        }

        // 3. Exchange Code for Access Token
        const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
            method: 'POST',
            body: new URLSearchParams({
                client_id: process.env.DISCORD_CLIENT_ID!,
                client_secret: process.env.DISCORD_CLIENT_SECRET!,
                grant_type: 'authorization_code',
                code,
                redirect_uri: `${baseUrl}/api/auth/discord/callback`,
            }),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });

        const tokenData = await tokenResponse.json();
        if (!tokenData.access_token) throw new Error('Failed to get Discord access token');

        // 4. Get Discord User Info
        const userResponse = await fetch('https://discord.com/api/users/@me', {
            headers: { Authorization: `Bearer ${tokenData.access_token}` },
        });
        const discordUser = await userResponse.json();

        // 5. Save Discord Info to User Record
        const { error: updateError } = await supabase
            .from('users')
            .update({
                discord_id: discordUser.id,
                discord_username: `${discordUser.username}#${discordUser.discriminator === '0' ? '' : discordUser.discriminator}`
            })
            .eq('id', order.user_id);

        if (updateError) console.error('Failed to update user with Discord ID', updateError);

        // 6. JOINS THE SERVER & ASSIGN ROLE
        // We use the BOT TOKEN for this, not the user's access token.
        const guildId = process.env.DISCORD_GUILD_ID;
        const roleId = process.env.DISCORD_ROLE_ID;

        const joinResponse = await fetch(`https://discord.com/api/guilds/${guildId}/members/${discordUser.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                access_token: tokenData.access_token,
                roles: [roleId]
            }),
            headers: {
                Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
                'Content-Type': 'application/json',
            },
        });

        if (!joinResponse.ok) {
            const joinError = await joinResponse.text();
            console.error('Failed to add user to guild or assign role', joinError);
            // We continue anyway since we have their Discord ID now.
        }

        // 7. Success! Redirect back to success page with success flag
        return NextResponse.redirect(`${baseUrl}/checkout/success?reference=${reference}&discord=success`);

    } catch (err) {
        console.error('Discord Callback Error:', err);
        return NextResponse.redirect(`${baseUrl}/checkout/success?error=callback_error`);
    }
}
