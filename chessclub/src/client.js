import { createClient } from '@supabase/supabase-js';

// ✅ Use import.meta.env instead of process.env in Vite
const VITE_SUPABASE_URL="https://ehfuscdimxdanpxxjsko.supabase.co"
const VITE_SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoZnVzY2RpbXhkYW5weHhqc2tvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxMTg0MDUsImV4cCI6MjA2MDY5NDQwNX0.lgZb-1OBwkLscMEpo9zE2qM6-EWsZ4LT33vn6TmPTr4"
// const url = import.meta.env.VITE_SUPABASE_URL;
// console.log(url);
// const key = import.meta.env.VITE_SUPABASE_KEY;

// export const supabase = createClient(url, key);
export const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);
