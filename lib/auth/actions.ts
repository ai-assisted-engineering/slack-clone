import { supabaseServer } from "@/lib/supabase/server";

export async function login(email: string, password: string) {
  const supabase = supabaseServer();
  return supabase.auth.signInWithPassword({ email, password });
}

export async function register(email: string, password: string) {
  const supabase = supabaseServer();
  return supabase.auth.signUp({ email, password });
}

export async function resetPassword(email: string) {
  const supabase = supabaseServer();
  return supabase.auth.resetPasswordForEmail(email);
} 