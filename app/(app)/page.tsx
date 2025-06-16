import { supabaseServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const supabase = supabaseServer();
  // For now, we'll just redirect to workspace creation
  // In Step 9, we'll add proper workspace selection
  redirect("/workspace/create");
} 