
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/client';

import { getCourseBySlug } from '@/lib/courses';

export async function POST(request: Request) {
    try {
        const { email, name, courseSlug, courseTitle, plan } = await request.json();

        // 1. Basic Validation
        if (!email || !name || !courseSlug) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // 2. SERVER-SIDE PRICING VALIDATION (CRITICAL SECURITY FIX)
        // Do not trust 'amount' from client. Fetch strictly from source.
        const course = await getCourseBySlug(courseSlug);

        if (!course) {
            return NextResponse.json({ error: 'Invalid course slug' }, { status: 400 });
        }

        const fullPrice = course.price; // Start with base price

        let amountToPayNow = fullPrice;
        let balanceDue = 0;

        if (plan === 'installment') {
            amountToPayNow = Math.floor(fullPrice / 2); // 50%
            balanceDue = fullPrice - amountToPayNow;
        }

        // 3. Upsert User in Supabase
        // We strive to keep a single record per email.
        // Note: In a real auth system, you'd check auth.users. Here we use a custom public.users table for simplicity + speed.
        const { data: user, error: userError } = await supabase
            .from('users')
            .upsert({ email, full_name: name }, { onConflict: 'email' })
            .select()
            .single();

        if (userError) {
            console.error('Database Error (User):', userError);
            return NextResponse.json({ error: 'Failed to register user' }, { status: 500 });
        }

        // 4. Initialize Paystack Transaction
        const paystackKey = process.env.PAYSTACK_SECRET_KEY;
        if (!paystackKey) {
            return NextResponse.json({ error: 'Server misconfiguration: Payment Gateway' }, { status: 500 });
        }

        const paystackResponse = await fetch('https://api.paystack.co/transaction/initialize', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${paystackKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                amount: amountToPayNow * 100, // Paystack expects Kobo. Assuming input 'amount' was Naira. If input is Kobo, remove * 100
                callback_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/checkout/success`,
                metadata: {
                    courseSlug,
                    courseTitle,
                    userId: user.id,
                    plan,
                    fullName: name
                },
            }),
        });

        const paystackData = await paystackResponse.json();

        if (!paystackData.status) {
            console.error('Paystack Error:', paystackData);
            return NextResponse.json({ error: 'Payment initialization failed' }, { status: 500 });
        }

        // 5. Create "Pending" Order in Supabase
        const { error: orderError } = await supabase
            .from('orders')
            .insert({
                user_id: user.id,
                course_slug: courseSlug,
                amount_paid: amountToPayNow * 100, // Storing in Kobo for consistency
                total_course_amount: fullPrice * 100,
                balance_due: balanceDue * 100,
                payment_plan: plan,
                paystack_reference: paystackData.data.reference,
                status: 'pending',
            });

        if (orderError) {
            console.error('Database Error (Order):', orderError);
            // Critical: We initiated Paystack but failed to save order. 
            // In production, you might want to cancel the paystack ref or log this to an alert system.
            return NextResponse.json({ error: 'Failed to create order record' }, { status: 500 });
        }

        // 6. Return Authorization URL to Frontend
        return NextResponse.json({
            authorizationUrl: paystackData.data.authorization_url,
            reference: paystackData.data.reference
        });

    } catch (err) {
        console.error('Server error:', err);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
