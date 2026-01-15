
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const reference = searchParams.get('reference');

    if (!reference) {
        return NextResponse.json({ error: 'Missing payment reference' }, { status: 400 });
    }

    const clientId = process.env.DISCORD_CLIENT_ID;
    const baseUrl = (process.env.NEXT_PUBLIC_APP_URL || '').replace(/\/$/, '');
    const redirectUri = `${baseUrl}/api/auth/discord/callback`;

    // The 'state' is our secure receipt. We encode the reference into it.
    // In production, you might want to sign/encrypt this state for extra security.
    const state = btoa(JSON.stringify({ reference }));

    // Discord OAuth2 URL
    // Scopes: 
    // - identify: to get their Discord ID/Username
    // - guilds.join: to automatically add them to your server
    const discordUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=identify%20guilds.join&state=${state}`;

    return NextResponse.redirect(discordUrl);
}
