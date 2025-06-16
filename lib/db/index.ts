import { drizzle } from 'drizzle-orm/postgres-js';
import { config } from 'dotenv';
import postgres from 'postgres';
import * as schema from './schema';

config({ path: ".env.local" })

const queryClient = postgres(process.env.DATABASE_URL!);
export const db = drizzle(queryClient, { schema }); 