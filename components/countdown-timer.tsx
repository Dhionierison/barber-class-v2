"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set target date to 30 days from now
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded-lg shadow-lg animate-pulse-glow">
      <div className="flex items-center justify-center mb-2">
        <Clock className="w-5 h-5 mr-2" />
        <span className="font-bold text-sm">OFERTA TERMINA EM:</span>
      </div>
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="bg-white/20 rounded p-2">
          <div className="text-xl font-bold">{timeLeft.days}</div>
          <div className="text-xs">DIAS</div>
        </div>
        <div className="bg-white/20 rounded p-2">
          <div className="text-xl font-bold">{timeLeft.hours}</div>
          <div className="text-xs">HORAS</div>
        </div>
        <div className="bg-white/20 rounded p-2">
          <div className="text-xl font-bold">{timeLeft.minutes}</div>
          <div className="text-xs">MIN</div>
        </div>
        <div className="bg-white/20 rounded p-2">
          <div className="text-xl font-bold">{timeLeft.seconds}</div>
          <div className="text-xs">SEG</div>
        </div>
      </div>
    </div>
  )
}
