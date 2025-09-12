"use client"

import { useEffect, useState } from "react"
import { Sparkles, Star, Zap } from "lucide-react"

export function PremiumAnimations() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            {i % 3 === 0 && <Sparkles className="w-4 h-4 text-primary" />}
            {i % 3 === 1 && <Star className="w-3 h-3 text-yellow-400" />}
            {i % 3 === 2 && <Zap className="w-5 h-5 text-blue-400" />}
          </div>
        ))}
      </div>

      {/* Mouse trail effect */}
      <div
        className="fixed pointer-events-none z-20 transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 50,
          top: mousePosition.y - 50,
        }}
      >
        <div className="w-24 h-24 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-xl animate-pulse" />
      </div>

      {/* Gradient orbs */}
      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </>
  )
}
