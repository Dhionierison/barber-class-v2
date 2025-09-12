"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Rocket, Crown, Diamond, Sparkles, TrendingUp } from "lucide-react"

export function ModernFeatures() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const features = [
    {
      icon: Zap,
      title: "Metodologia Exclusiva",
      description: "Sistema de ensino revolucionário desenvolvido por especialistas",
      color: "from-yellow-400 to-orange-500",
      delay: "0s",
    },
    {
      icon: Rocket,
      title: "Resultados Rápidos",
      description: "Veja transformações reais em apenas 30 dias de curso",
      color: "from-blue-400 to-purple-500",
      delay: "0.2s",
    },
    {
      icon: Crown,
      title: "Mentoria VIP",
      description: "Acompanhamento personalizado com os melhores profissionais",
      color: "from-purple-400 to-pink-500",
      delay: "0.4s",
    },
    {
      icon: Diamond,
      title: "Certificação Premium",
      description: "Certificado reconhecido nacionalmente no mercado",
      color: "from-emerald-400 to-teal-500",
      delay: "0.6s",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-primary/20 to-orange-400/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-orange-400/10 rounded-full px-6 py-3 mb-6 border border-primary/20">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-primary font-bold text-sm">DIFERENCIAIS EXCLUSIVOS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Por que o <span className="gradient-text">Barberclass</span> é único?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubra os elementos que fazem do nosso curso a escolha número 1 dos profissionais que querem se destacar
            no mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:scale-105 transition-all duration-500 cursor-pointer"
                style={{ animationDelay: feature.delay }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <CardContent className="p-8 relative z-10">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>

                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Saiba mais</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
