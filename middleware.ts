import { supabaseAuthMiddleware } from './lib/supabase/middleware';

export function middleware(req: any, res: any, next: any) {
  return supabaseAuthMiddleware(req, res, next);
} 