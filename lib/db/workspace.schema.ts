import { pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core';
import { users } from './user.schema';

export const workspaces = pgTable('workspaces', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  owner_id: integer('owner_id').references(() => users.id),
  created_at: timestamp('created_at').defaultNow(),
}); 

export type Workspace = typeof workspaces.$inferSelect;