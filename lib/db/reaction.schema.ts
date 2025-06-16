import { pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core';
import { messages } from './message.schema';
import { users } from './user.schema';

export const reactions = pgTable('reactions', {
  id: serial('id').primaryKey(),
  message_id: integer('message_id').references(() => messages.id),
  user_id: integer('user_id').references(() => users.id),
  emoji: text('emoji').notNull(),
  created_at: timestamp('created_at').defaultNow(),
}); 

export type Reaction = typeof reactions.$inferSelect;