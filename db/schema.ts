import { serial, integer, timestamp, pgSchema } from 'drizzle-orm/pg-core';
import { teamSchema } from './teamSchema';

export const counters = teamSchema.table('counters', {
  id: serial('id').primaryKey(),
  value: integer('value').notNull().default(0),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
}); 

export type Counter = typeof counters.$inferSelect;