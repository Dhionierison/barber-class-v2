"use client"

import { useState, useEffect } from "react"
import { Menu, X, Scissors } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    console.log("[v0] Attempting to scroll to section:", sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      console.log("[v0] Element found:", element)
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      console.log("[v0] Scrolling to position:", elementPosition)
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    } else {
      console.log("[v0] Element not found with ID:", sectionId)
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect shadow-lg"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      } border-b border-border`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex-shrink-0 flex items-center space-x-2 group cursor-pointer"
            onClick={() => scrollToSection("inicio")}
          >
            <div className="p-2 bg-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Scissors className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold">
              <span className="gradient-text font-extrabold">Barber</span>
              <span className="text-foreground font-extrabold">Class</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
            >
              Início
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
            >
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("palestrantes")}
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
            >
              Palestrantes
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("historias-de-sucesso")}
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
            >
              Histórias de Sucesso
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
            >
              Depoimentos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("inscricao")}
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
            >
              Inscrição
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection("inscricao")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-glow hover:scale-105 transition-all duration-300"
            >
              Garantir Ingresso
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:scale-110 transition-transform duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden slide-in-left">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-effect border-t border-border rounded-b-lg">
              {[
                { name: "Início", id: "inicio" },
                { name: "Sobre", id: "sobre" },
                { name: "Palestrantes", id: "palestrantes" },
                { name: "Histórias de Sucesso", id: "historias-de-sucesso" },
                { name: "Depoimentos", id: "depoimentos" },
                { name: "Inscrição", id: "inscricao" },
              ].map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection("inscricao")}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 pulse-glow"
                >
                  Garantir Ingresso
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
