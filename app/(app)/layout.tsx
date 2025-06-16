import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabase/server";
import { AppLayout } from "@/components/layout/app-layout";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = supabaseServer();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  return <AppLayout>{children}</AppLayout>;
} 