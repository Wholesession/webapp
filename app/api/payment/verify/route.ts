import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/client';
import { sendWelcomeEmail } from '@/lib/mail';

export async function POST(request: Request) {
    try {
        const { reference } = await request.json();

        if (!reference) {
            return NextResponse.json({ error: 'Missing reference' }, { status: 400 });
        }

        // 1. IDEMPOTENCY CHECK: Check if order exists and is already paid
        const { data: existingOrder } = await supabase
            .from('orders')
            .select('*, users!inner(*)')
            .eq('paystack_reference', reference)
            .single();

        if (existingOrder && existingOrder.status === 'paid') {
            // Already successfully processed. Return success immediately.
            return NextResponse.json({
                success: true,
                message: 'Order already verified',
                order: existingOrder
            });
        }

        const paystackKey = process.env.PAYSTACK_SECRET_KEY;
        if (!paystackKey) {
            return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
        }

        // 2. Verify with Paystack API
        const verifyResponse = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${paystackKey}`,
            },
        });

        const verifyData = await verifyResponse.json();

        if (!verifyData.status || verifyData.data.status !== 'success') {
            return NextResponse.json({ error: 'Transaction not verified' }, { status: 400 });
        }

        const transactionData = verifyData.data;
        // const amountPaid = transactionData.amount; // In kobo

        // 3. Update Order Status in Supabase
        // We confirm the order is paid.
        const { data: order, error } = await supabase
            .from('orders')
            .update({ status: 'paid', updated_at: new Date() })
            .eq('paystack_reference', reference) // Match by reference
            .select('*, users!inner(*)') // Select returns the updated row with user data
            .single();

        if (error) {
            // If update fails, check if the error is because no row matched (should be rare if idempotency check passed, unless race condition)
            console.error('Database Update Failed:', error);
            return NextResponse.json({ error: 'Failed to update order' }, { status: 500 });
        }

        // 4. Send Welcome Email
        const metadata = transactionData.metadata || {};
        const email = transactionData.customer?.email;
        const name = metadata.fullName || "Student";

        if (email && metadata.courseTitle) {
            await sendWelcomeEmail(email, name, metadata.courseTitle, metadata.courseSlug, reference);
        }

        return NextResponse.json({
            success: true,
            message: 'Payment verified and order updated',
            order
        });

    } catch (err) {
        console.error('Verification Error:', err);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
