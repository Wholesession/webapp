
import { Resend } from 'resend';
import { WelcomeEmail } from '@/emails/welcome-email';
import { WaitlistConfirmationEmail } from '@/emails/waitlist-confirmation-email';
import { render } from '@react-email/render';

const apiKey = process.env.RESEND_API_KEY || '';
const resend = apiKey ? new Resend(apiKey) : null;

export async function sendWaitlistConfirmationEmail(email: string, name: string, courseTitle: string) {
    console.log(`📧 Attempting to send Waitlist confirmation to: ${email} for course: ${courseTitle}`);

    if (!process.env.RESEND_API_KEY) {
        console.error("❌ Resend API Key missing in environment variables.");
        return;
    }

    try {
        if (!resend) {
            console.error('❌ Resend client not initialized properly.');
            return { success: false, error: 'Resend not initialized' };
        }

        const emailHtml = await render(WaitlistConfirmationEmail({
            firstName: name.split(' ')[0],
            courseTitle,
        }));

        const { data, error } = await resend.emails.send({
            from: 'Wholesession <onboarding@wholesession.com>',
            to: [email],
            subject: `You're on the list! ${courseTitle} | Wholesession`,
            html: emailHtml,
        });

        if (error) {
            console.error('❌ Resend API Error (Waitlist):', error);
            return { success: false, error };
        }

        console.log('✅ Waitlist email sent successfully:', data);
        return { success: true, data };
    } catch (error) {
        console.error('❌ Critical Waitlist Email error:', error);
        return { success: false, error };
    }
}

export async function sendWelcomeEmail(email: string, name: string, courseTitle: string, courseSlug: string, reference: string) {
    console.log(`📧 Attempting to send email to: ${email} for course: ${courseTitle}`);

    if (!process.env.RESEND_API_KEY) {
        console.error("❌ Resend API Key missing in environment variables.");
        return;
    }

    try {
        if (!resend) {
            console.error('❌ Resend client not initialized properly.');
            return { success: false, error: 'Resend not initialized' };
        }

        const emailHtml = await render(WelcomeEmail({
            firstName: name.split(' ')[0],
            courseTitle,
            courseSlug,
            reference
        }));

        const { data, error } = await resend.emails.send({
            from: 'Wholesession <onboarding@wholesession.com>',
            to: [email],
            subject: `Welcome to ${courseTitle} | Wholesession`,
            html: emailHtml,
        });

        if (error) {
            console.error('❌ Resend API Error:', error);
            return { success: false, error };
        }

        console.log('✅ Email sent successfully:', data);
        return { success: true, data };
    } catch (error) {
        console.error('❌ Critical Email error:', error);
        return { success: false, error };
    }
}
