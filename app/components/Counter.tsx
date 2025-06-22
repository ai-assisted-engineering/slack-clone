'use client'

import { useState, useEffect, useRef } from 'react'
import { Plus, Minus } from 'lucide-react'
import { Subject, debounceTime, filter, tap, reduce, map, merge, fromEvent, count, scan, startWith } from 'rxjs'
import { getCounter, updateCounterByAmount } from '../actions'

const DEBOUNCE_MS = 1000
let scanState = 0;

export default function Counter() {

  const [value, setValue] = useState(0); // UI value
  const change$ = useRef(new Subject<number>()).current
  const resetScan$ = new Subject<void>()

  const [loading, setLoading] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  
  // Create a subject for handling counter changes
  const counterChanges$ = useRef(new Subject<number>())

  useEffect(() => {
    const loadCounter = async () => {
      const counter = await getCounter()
      setValue(counter.value)
      setIsInitialized(true)
    }
    loadCounter()
  }, [])

  useEffect(() => {
    // Subscribe to counter changes with debouncing and accumulation
    const subscription = change$
    .pipe(
      scan((acc, curr) => acc + curr, scanState), // accumulate changes
      debounceTime(DEBOUNCE_MS) // wait for inactivity
    )
    .subscribe(async (finalValue) => {
      
      try {
        console.log("Amount to update: ", finalValue - scanState)
        const updated = await updateCounterByAmount(finalValue - scanState)
        if (updated) {
          setValue(updated.value)
          scanState = finalValue;
        }
      } catch (error) {
        console.error('Failed to sync changes:', error)
      } finally {
        setLoading(false)
      }
    });
    
    return () => subscription.unsubscribe()
  }, [])

  const handleChange = (delta: number) => {
    //setPersisted((v) => v + delta);
    setValue((v) => v + delta);
    change$.next(delta);
  };


  return (
    <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
      <button 
        id="decrement-button"
        onClick={() => handleChange(-1)}
        disabled={loading || !isInitialized}
        className="flex items-center justify-center w-12 h-12 bg-red-500 text-white rounded-full hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Minus size={20} />
      </button>
      
      <div className="flex items-center justify-center w-20 h-12 bg-gray-100 rounded-lg">
        <span className="text-2xl font-bold text-gray-800">{value}</span>
      </div>
      
      <button
        id="increment-button"
        onClick={() => handleChange(1)}
        disabled={loading || !isInitialized}
        className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Plus size={20} />
      </button>
      
      {loading && (
        <div className="text-sm text-gray-500">
          Syncing...
        </div>
      )}
    </div>
  )
} 