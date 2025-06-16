import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { db } from './index';

async function runMigrate() {
  await migrate(db, { migrationsFolder: './drizzle/migrations' });
  console.log('Migrations complete');
}

runMigrate().catch(console.error); 