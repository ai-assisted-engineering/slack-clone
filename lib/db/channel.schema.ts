import { pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core';
import { workspaces } from './workspace.schema';

export const channels = pgTable('channels', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  workspace_id: integer('workspace_id').references(() => workspaces.id),
  created_at: timestamp('created_at').defaultNow(),
}); 

export type Channel = typeof channels.$inferSelect;