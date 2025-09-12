"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, MapPin, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Silva",
    location: "São Paulo, SP",
    rating: 5,
    text: "O BarberClass mudou completamente minha vida profissional. Hoje tenho minha própria barbearia e uma clientela fiel.",
    image: "/placeholder.svg?height=60&width=60",
    profession: "Barbeiro Profissional",
  },
  {
    name: "Rafael Santos",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "As técnicas ensinadas são de altíssimo nível. Consegui triplicar minha renda em apenas 6 meses.",
    image: "/placeholder.svg?height=60&width=60",
    profession: "Empreendedor",
  },
  {
    name: "Lucas Oliveira",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "Investimento que mais valeu a pena na minha vida. Hoje sou referência na minha cidade.",
    image: "/placeholder.svg?height=60&width=60",
    profession: "Master Barber",
  },
]

export function EnhancedTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Histórias de Transformação</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja como nossos alunos transformaram suas vidas e carreiras
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-bold text-lg">{testimonial.name}</h4>
                            <div className="flex items-center space-x-1 text-muted-foreground">
                              <MapPin className="w-3 h-3 text-green-500" />
                              <span className="text-sm">{testimonial.location}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1 mb-3">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <div className="relative">
                            <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/30" />
                            <p className="text-muted-foreground italic pl-4 mb-2">"{testimonial.text}"</p>
                          </div>
                          <p className="text-sm font-semibold text-primary">{testimonial.profession}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary scale-125" : "bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
