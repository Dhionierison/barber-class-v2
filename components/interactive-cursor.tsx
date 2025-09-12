"use client"

import { useEffect, useState } from "react"
import { Scissors } from "lucide-react"

export function InteractiveCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]')

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-all duration-300 ${isHovering ? "scale-150" : "scale-100"}`}
      style={{
        left: position.x - 12,
        top: position.y - 12,
      }}
    >
      <div className="relative">
        <Scissors
          className={`w-6 h-6 text-primary transition-all duration-300 ${isHovering ? "rotate-45" : "rotate-0"}`}
        />
        <div className="absolute inset-0 w-6 h-6 bg-primary/20 rounded-full blur-sm animate-pulse" />
      </div>
    </div>
  )
}
