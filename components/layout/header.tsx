import { supabaseServer } from "@/lib/supabase/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "@/lib/auth/actions";

export async function Header() {
  const supabase = supabaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  return (
    <header className="h-14 border-b px-4 flex items-center justify-between bg-background">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold">TeamChat</h1>
      </div>
      <div className="flex items-center gap-4">
        {user && (
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.user_metadata.avatar_url} />
              <AvatarFallback>
                {user.email?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium hidden md:inline-block">
              {user.email}
            </span>
            <form action={signOut}>
              <Button variant="ghost" size="icon" type="submit">
                <LogOut className="h-4 w-4" />
              </Button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
} 