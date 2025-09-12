"use client"

import { useEffect, useState } from "react"
import { Star, Award, Users } from "lucide-react"

export function EnhancedHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative">
      {/* Floating achievement badges */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-20 left-10 bg-primary/20 backdrop-blur-sm rounded-full p-3 border border-primary/30 animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <Star className="w-6 h-6 text-primary" />
        </div>

        <div
          className="absolute top-32 right-16 bg-primary/20 backdrop-blur-sm rounded-full p-3 border border-primary/30 animate-float"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * 0.03}px)`,
            transition: "transform 0.1s ease-out",
            animationDelay: "1s",
          }}
        >
          <Award className="w-6 h-6 text-primary" />
        </div>

        <div
          className="absolute bottom-32 left-20 bg-primary/20 backdrop-blur-sm rounded-full p-3 border border-primary/30 animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * -0.02}px)`,
            transition: "transform 0.1s ease-out",
            animationDelay: "2s",
          }}
        >
          <Users className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Enhanced stats with glow effects */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div className="group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-black/40 backdrop-blur-sm border border-primary/30 rounded-lg p-4 group-hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold gradient-text mb-1">500+</div>
                <div className="text-white/70 text-sm">Alunos Transformados</div>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-black/40 backdrop-blur-sm border border-primary/30 rounded-lg p-4 group-hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold gradient-text mb-1">15+</div>
                <div className="text-white/70 text-sm">Anos de Experiência</div>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-black/40 backdrop-blur-sm border border-primary/30 rounded-lg p-4 group-hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold gradient-text mb-1">98%</div>
                <div className="text-white/70 text-sm">Taxa de Sucesso</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
