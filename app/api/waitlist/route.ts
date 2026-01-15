import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/client";

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
        // Since we are using the standard client.ts, we need to ensure the DB allows this or use a server-side only client.
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
            // Handle duplicate entries (if unique constraint on email+course_slug)
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
