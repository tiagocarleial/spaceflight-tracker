import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Server-side client with service role (full access — use only in API routes/server)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

// Public client with anon key (use in client components if needed)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
