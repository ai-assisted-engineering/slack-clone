import { supabaseServer } from "@/lib/supabase/server";

export async function getSession() {
  const supabase = supabaseServer();
  const { data } = await supabase.auth.getSession();
  return data.session;
}

export async function isAuthenticated() {
  return Boolean(await getSession());
} 