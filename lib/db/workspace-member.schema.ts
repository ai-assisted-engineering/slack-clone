import { pgTable, integer, timestamp, index } from 'drizzle-orm/pg-core';
import { workspaces } from './workspace.schema';
import { users } from './user.schema';

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

export type WorkspaceMember = typeof workspaceMembers.$inferSelect;