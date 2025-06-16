import { pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core';
import { channels } from './channel.schema';
import { users } from './user.schema';

export const messages = pgTable('messages', {
  id: serial('id').primaryKey(),
  channel_id: integer('channel_id').references(() => channels.id),
  user_id: integer('user_id').references(() => users.id),
  content: text('content').notNull(),
  created_at: timestamp('created_at').defaultNow(),
}); 

export type Message = typeof messages.$inferSelect;