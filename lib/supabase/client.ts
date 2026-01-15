import { createClient } from '@supabase/supabase-js';

// Access Environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // IMPORTANT: Use Service Role Key for backend admin tasks

if (!supabaseUrl || !supabaseKey) {
    // We don't throw error here to allow build to pass if envs are missing during build time
    console.warn('Supabase URL or Key missing. Database operations will fail.');
}

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseKey);
