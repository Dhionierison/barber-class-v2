"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Play, Sparkles } from "lucide-react"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "NÃO ERA APENAS SOBRE CABELO."

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40 z-10" />
        <img
          src="/images/hero-bg.png"
          alt="Barbeiro profissional em ação"
          className="w-full h-full object-cover object-center scale-105 floating"
        />
        {/* Animated particles */}
        <div className="absolute inset-0 z-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-6 flex justify-center">
          <div className="flex items-center space-x-2 bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/30">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm">BARBERCLASS 2025</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 text-balance">
          <span className="gradient-text block mb-2 scale-in">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
          <span className="text-white/90 slide-in-left" style={{ animationDelay: "2s" }}>
            ERA SOBRE MUDAR
          </span>
          <br />
          <span className="gradient-text slide-in-right" style={{ animationDelay: "2.5s" }}>
            UMA HISTÓRIA.
          </span>
        </h1>

        <p
          className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-12 text-balance scale-in"
          style={{ animationDelay: "3s" }}
        >
          Uma oportunidade única de transformar sua paixão em
          <br />
          <span className="gradient-text font-bold">um negócio de sucesso.</span>
        </p>

        <div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center scale-in"
          style={{ animationDelay: "3.5s" }}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("inscricao")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 h-auto pulse-glow hover:scale-105 transition-all duration-300 group"
          >
            <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Garantir Meu Ingresso
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("sobre")}
            className="border-2 border-white/50 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:text-white hover:border-white/70 text-lg px-10 py-6 h-auto hover:scale-105 transition-all duration-300 group"
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Ver Prévia
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto scale-in" style={{ animationDelay: "4s" }}>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">500+</div>
            <div className="text-white/70 text-sm">Alunos Formados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">15+</div>
            <div className="text-white/70 text-sm relative z-40">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">98%</div>
            <div className="text-white/70 text-sm">Satisfação</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div
          className="flex flex-col items-center space-y-2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection("sobre")}
        >
          <span className="text-white/70 text-xs uppercase tracking-wider">Role para baixo</span>
          <ChevronDown className="w-6 h-6 text-primary animate-pulse" />
        </div>
      </div>
    </section>
  )
}
