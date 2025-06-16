import { pgTable, serial, text, timestamp, integer, index } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name'),
  avatar_url: text('avatar_url'),
  created_at: timestamp('created_at').defaultNow(),
});

export type User = typeof users.$inferSelect;

export const workspaces = pgTable('workspaces', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  owner_id: integer('owner_id').references(() => users.id),
  created_at: timestamp('created_at').defaultNow(),
});

export const channels = pgTable('channels', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  workspace_id: integer('workspace_id').references(() => workspaces.id),
  created_at: timestamp('created_at').defaultNow(),
});

export const messages = pgTable('messages', {
  id: serial('id').primaryKey(),
  channel_id: integer('channel_id').references(() => channels.id),
  user_id: integer('user_id').references(() => users.id),
  content: text('content').notNull(),
  created_at: timestamp('created_at').defaultNow(),
});

export const reactions = pgTable('reactions', {
  id: serial('id').primaryKey(),
  message_id: integer('message_id').references(() => messages.id),
  user_id: integer('user_id').references(() => users.id),
  emoji: text('emoji').notNull(),
  created_at: timestamp('created_at').defaultNow(),
});

export const workspaceMembers = pgTable(
  'workspace_members',
  {
    workspace_id: integer('workspace_id').references(() => workspaces.id),
    user_id: integer('user_id').references(() => users.id),
    joined_at: timestamp('joined_at').defaultNow(),
  },
  (table) => [
    index('workspace_members_pk').on(table.workspace_id, table.user_id)
  ]
); 