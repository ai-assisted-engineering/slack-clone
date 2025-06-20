'use server'

import { db } from '@/db'
import { counters } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { Counter } from '@/db/schema'

export async function getCounter() : Promise<Counter> {
  const result = await db.select().from(counters).limit(1)
  if (result.length === 0) {
    // Create initial counter if none exists
    const [newCounter] = await db.insert(counters).values({ value: 0 }).returning()
    return newCounter
  }
  return result[0]
}

export async function incrementCounter() : Promise<Counter> {
  const counter = await getCounter()
  const [updated] = await db
    .update(counters)
    .set({ value: counter.value + 1, updatedAt: new Date() })
    .where(eq(counters.id, counter.id))
    .returning()
  return updated
}

export async function decrementCounter() : Promise<Counter> {
  const counter = await getCounter()
  const [updated] = await db
    .update(counters)
    .set({ value: counter.value - 1, updatedAt: new Date() })
    .where(eq(counters.id, counter.id))
    .returning()
  return updated
} 