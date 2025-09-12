"use client"

import { useEffect, useState } from "react"
import { Scissors, GraduationCap, Star, Zap, Crown, Trophy } from "lucide-react"

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const elements = [
    { Icon: Scissors, delay: 0, color: "text-primary" },
    { Icon: GraduationCap, delay: 1, color: "text-orange-400" },
    { Icon: Star, delay: 2, color: "text-yellow-400" },
    { Icon: Zap, delay: 3, color: "text-blue-400" },
    { Icon: Crown, delay: 4, color: "text-purple-400" },
    { Icon: Trophy, delay: 5, color: "text-green-400" },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating particles */}
      {elements.map((element, index) => (
        <div
          key={index}
          className={`absolute animate-float ${element.color} opacity-20`}
          style={{
            left: `${10 + index * 15}%`,
            top: `${20 + index * 10}%`,
            animationDelay: `${element.delay}s`,
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        >
          <element.Icon className="w-8 h-8" />
        </div>
      ))}

      {/* Animated background shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-48 h-48 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "4s" }}
      />
    </div>
  )
}
