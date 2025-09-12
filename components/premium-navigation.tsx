"use client"

import { useState, useEffect } from "react"

export function PremiumNavigation() {
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "sobre", "palestrantes", "depoimentos", "inscricao"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-full p-2 space-y-2">
        {[
          { id: "inicio", label: "Início" },
          { id: "sobre", label: "Sobre" },
          { id: "palestrantes", label: "Palestrantes" },
          { id: "depoimentos", label: "Depoimentos" },
          { id: "inscricao", label: "Inscrição" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`group relative w-4 h-4 rounded-full transition-all duration-300 ${
              activeSection === item.id ? "bg-primary scale-125" : "bg-white/30 hover:bg-white/50"
            }`}
          >
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                {item.label}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
