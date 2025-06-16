import { db } from './index';
import { users, workspaces, channels, messages } from './schema';

async function seed() {
  try {
    // Add users
  await db.insert(users).values([
    { email: 'alice@example.com', name: 'Alice' },
    { email: 'bob@example.com', name: 'Bob' },
  ]);

  // Add a workspace
  await db.insert(workspaces).values([
    { name: 'General', owner_id: 1 },
  ]);

  // Add a channel
  await db.insert(channels).values([
    { name: 'general', workspace_id: 1 },
  ]);

  // Add a message
  await db.insert(messages).values([
    { channel_id: 1, user_id: 1, content: 'Hello, world!' },
  ]);

  console.log('Seed data inserted');
} finally {
  process.exit(0);
}
}

seed().catch(console.error); 