
import { Resend } from 'resend';
import { WelcomeEmail } from '@/emails/welcome-email';
import { render } from '@react-email/render';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(email: string, name: string, courseTitle: string, courseSlug: string) {
    if (!process.env.RESEND_API_KEY) {
        console.log("Resend API Key missing. Skipping email send.");
        return;
    }

    try {
        const emailHtml = await render(WelcomeEmail({ firstName: name.split(' ')[0], courseTitle, courseSlug }));

        const { data, error } = await resend.emails.send({
            from: 'Wholesession <onboarding@wholesession.com>',
            to: [email],
            subject: `Welcome to ${courseTitle} | Wholesession`,
            html: emailHtml,
        });

        if (error) {
            console.error('Email sending failed:', error);
            return { success: false, error };
        }

        return { success: true, data };
    } catch (error) {
        console.error('Email sending error:', error);
        return { success: false, error };
    }
}
