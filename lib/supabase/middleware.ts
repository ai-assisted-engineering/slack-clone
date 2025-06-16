import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Placeholder for Supabase auth middleware
export function supabaseAuthMiddleware(request: NextRequest) {
  // Implement authentication logic here if needed
  return NextResponse.next();
} 