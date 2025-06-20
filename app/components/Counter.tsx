'use client'

import { useState, useEffect } from 'react'
import { Plus, Minus } from 'lucide-react'
import { getCounter, incrementCounter, decrementCounter } from '../actions'

export default function Counter() {
  const [value, setValue] = useState<number>(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadCounter = async () => {
      const counter = await getCounter()
      setValue(counter.value)
    }
    loadCounter()
  }, [])

  const handleIncrement = async () => {
    setLoading(true)
    try {
      const updated = await incrementCounter()
      setValue(updated.value)
    } catch (error) {
      console.error('Failed to increment:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDecrement = async () => {
    setLoading(true)
    try {
      const updated = await decrementCounter()
      setValue(updated.value)
    } catch (error) {
      console.error('Failed to decrement:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
      <button
        onClick={handleDecrement}
        disabled={loading}
        className="flex items-center justify-center w-12 h-12 bg-red-500 text-white rounded-full hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Minus size={20} />
      </button>
      
      <div className="flex items-center justify-center w-20 h-12 bg-gray-100 rounded-lg">
        <span className="text-2xl font-bold text-gray-800">{value}</span>
      </div>
      
      <button
        onClick={handleIncrement}
        disabled={loading}
        className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Plus size={20} />
      </button>
    </div>
  )
} 