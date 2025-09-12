"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote, Heart, TrendingUp } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Rafael Oliveira",
      city: "São Paulo, SP",
      text: "O Barberclass mudou minha vida completamente. Saí de funcionário para dono da minha própria barbearia em menos de 1 ano!",
      rating: 5,
      image: "/placeholder-x45s5.png",
      profession: "Proprietário de Barbearia",
      achievement: "De funcionário a empresário em 1 ano",
    },
    {
      id: 2,
      name: "Marcos Silva",
      city: "Rio de Janeiro, RJ",
      text: "As técnicas que aprendi aqui me fizeram triplicar minha clientela. Hoje tenho fila de espera!",
      rating: 5,
      image: "/placeholder-hitsm.png",
      profession: "Barbeiro Especialista",
      achievement: "Triplicou a clientela",
    },
    {
      id: 3,
      name: "André Costa",
      city: "Belo Horizonte, MG",
      text: "Não era só sobre cortar cabelo, era sobre construir um futuro. Hoje sou referência na minha cidade.",
      rating: 5,
      image: "/placeholder-s2sio.png",
      profession: "Referência Regional",
      achievement: "Líder no mercado local",
    },
    {
      id: 4,
      name: "Lucas Ferreira",
      city: "Brasília, DF",
      text: "O networking que fiz no curso foi fundamental. Hoje temos uma rede de barbearias parceiras.",
      rating: 5,
      image: "/placeholder-noq86.png",
      profession: "Empresário",
      achievement: "Rede de barbearias",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section
      id="depoimentos"
      className="py-20 scroll-animate bg-gradient-to-br from-muted/30 via-background to-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/90 backdrop-blur-sm border border-primary rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-primary-foreground" />
            <span className="text-primary-foreground font-bold text-sm">HISTÓRIAS DE SUCESSO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            O que nossos <span className="gradient-text">alunos dizem?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de transformação e sucesso de quem passou pelo Barberclass e mudou de vida.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="group hover-lift border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              <CardContent className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                <p className="text-lg mb-6 leading-relaxed text-balance">"{testimonial.text}"</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full mr-4 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all"
                      />
                      <div className="absolute -bottom-0 -right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-background"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-primary text-sm font-medium">{testimonial.profession}</p>
                      <p className="text-muted-foreground text-xs mt-1">{testimonial.city}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="inline-flex items-center space-x-1 bg-primary/10 rounded-full px-3 py-1">
                      <TrendingUp className="w-3 h-3 text-primary" />
                      <span className="text-xs text-primary font-medium">{testimonial.achievement}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Card className="group hover-lift border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute top-4 right-4 opacity-20">
              <Quote className="w-12 h-12 text-primary" />
            </div>

            <CardContent className="p-8 relative z-10">
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-lg mb-6 leading-relaxed">"{testimonials[currentIndex].text}"</p>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full mr-4 ring-2 ring-primary/20"
                  />
                  <div>
                    <p className="font-semibold">{testimonials[currentIndex].name}</p>
                    <p className="text-primary text-sm">{testimonials[currentIndex].profession}</p>
                    <p className="text-muted-foreground text-xs mt-1">{testimonials[currentIndex].city}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="hover:scale-110 transition-transform bg-transparent"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="hover:scale-110 transition-transform bg-transparent"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentIndex(index)
                        setIsAutoPlaying(false)
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex ? "bg-primary w-6" : "bg-primary/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
