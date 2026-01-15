
import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { supabase } from '@/lib/supabase/client';
import { sendWelcomeEmail } from '@/lib/mail';

export async function POST(request: Request) {
    try {
        const rawBody = await request.text();
        const signature = request.headers.get('x-paystack-signature');
        const secret = process.env.PAYSTACK_SECRET_KEY; // OR use a separate PAYSTACK_WEBHOOK_SECRET if configured

        // 1. Verify Signature (Security Critical)
        if (!secret || !signature) {
            return NextResponse.json({ error: 'Missing secret or signature' }, { status: 401 });
        }

        const hash = crypto.createHmac('sha512', secret).update(rawBody).digest('hex');

        if (hash !== signature) {
            return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
        }

        // 2. Parse Event
        const event = JSON.parse(rawBody);

        // 3. Handle 'charge.success'
        if (event.event === 'charge.success') {
            const { reference, metadata } = event.data;

            // metadata content: { courseSlug, userId, plan }

            console.log(`Processing successful payment for reference: ${reference}`);

            // 4. Idempotency Check: Check current status
            const { data: existingOrder } = await supabase
                .from('orders')
                .select('status')
                .eq('paystack_reference', reference)
                .single();

            if (existingOrder && existingOrder.status === 'paid') {
                console.log(`Reference ${reference} already processed. Skipping.`);
                return NextResponse.json({ message: 'Order already processed' });
            }

            // 5. Update Order Status in Supabase
            // We use the reference to find the order.
            const { data: order, error } = await supabase
                .from('orders')
                .update({ status: 'paid', updated_at: new Date() })
                .eq('paystack_reference', reference)
                .select()
                .single();

            if (error) {
                console.error('Failed to update order status:', error);
                // We return 200 to Paystack anyway so they stop retrying, but we log the error for manual fix.
                return NextResponse.json({ message: 'Order update failed', error }, { status: 200 });
            }

            // 6. Trigger Welcome Email
            // We need email and name. Paystack metadata has what we initiated with.
            // Earlier init call: metadata: { courseSlug, courseTitle, userId, plan, fullName }
            // Paystack event.data.customer also has email.
            const email = event.data.customer.email;
            const name = metadata.fullName || "Student";

            await sendWelcomeEmail(email, name, metadata.courseTitle, metadata.courseSlug);

            return NextResponse.json({ message: 'Order processed successfully' });
        }

        // Handle other events or ignore
        return NextResponse.json({ message: 'Event ignored' });

    } catch (err) {
        console.error('Webhook Error:', err);
        return NextResponse.json({ error: 'Server Error' }, { status: 500 });
    }
}
