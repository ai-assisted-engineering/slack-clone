import { supabaseServer } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export async function Sidebar() {
  const supabase = supabaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) return null;
  return (
    <aside className="w-64 border-r bg-muted/40 flex flex-col">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold">Workspaces</h2>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/workspace/create">
              <Plus className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        {/* Workspace list will be added here in Step 9 */}
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground px-2">No workspaces yet</p>
        </div>
      </div>
      <div className="flex-1 p-4 border-t">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold">Channels</h2>
          <Button variant="ghost" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        {/* Channel list will be added here in Step 11 */}
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground px-2">No channels yet</p>
        </div>
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold">Direct Messages</h2>
          <Button variant="ghost" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        {/* DM list will be added here in Step 17 */}
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground px-2">No direct messages yet</p>
        </div>
      </div>
    </aside>
  );
} 