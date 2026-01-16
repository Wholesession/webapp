import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/client";
import { sendWaitlistConfirmationEmail } from "@/lib/mail";

export async function POST(request: Request) {
    try {
        const { email, name, courseSlug, courseTitle } = await request.json();

        if (!email || !name || !courseSlug || !courseTitle) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Use the service role key to bypass RLS (if configured in client.ts)
        const { data, error } = await supabase
            .from("waitlist")
            .insert([{
                email,
                full_name: name,
                course_slug: courseSlug,
                course_title: courseTitle
            }]);

        if (error) {
            console.error("Supabase error (Waitlist):", error);
            if (error.code === '23505') {
                return NextResponse.json(
                    { message: "You are already on the waitlist for this course!" },
                    { status: 200 }
                );
            }
            return NextResponse.json(
                { error: "Failed to join waitlist" },
                { status: 500 }
            );
        }

        // Trigger welcome email
        const emailResult = await sendWaitlistConfirmationEmail(email, name, courseTitle);
        console.log("Waitlist email trigger result:", emailResult);

        return NextResponse.json(
            { message: "Successfully joined the waitlist" },
            { status: 200 }
        );
    } catch (err) {
        console.error("Waitlist API error:", err);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
