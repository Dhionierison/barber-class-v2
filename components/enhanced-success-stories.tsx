"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Star, TrendingUp, Users, Heart, ArrowRight, Sparkles, Quote, CheckCircle } from "lucide-react"

export function EnhancedSuccessStories() {
  const [activeStory, setActiveStory] = useState(0)

  const successStories = [
    {
      name: "Carlos Silva",
      role: "De funcionário a empresário",
      story: "Saiu do emprego e hoje tem 3 barbearias próprias",
      achievement: "Faturamento de R$ 50k/mês",
      image: "/placeholder-nfd7f.png",
      stats: { clients: "200+", revenue: "300%", time: "8 meses" },
    },
    {
      name: "Rafael Santos",
      role: "Jovem empreendedor",
      story: "Começou aos 18 anos e hoje é referência na cidade",
      achievement: "Triplicou a clientela em 6 meses",
      image: "/placeholder-wvs36.png",
      stats: { clients: "150+", revenue: "250%", time: "6 meses" },
    },
    {
      name: "João Oliveira",
      role: "Transformação de carreira",
      story: "Mudou de área aos 35 anos e encontrou sua vocação",
      achievement: "Barbearia premiada na região",
      image: "/placeholder-1uq54.png",
      stats: { clients: "300+", revenue: "400%", time: "1 ano" },
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/3 to-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/90 backdrop-blur-sm border border-primary rounded-full px-6 py-3 mb-6">
            <Trophy className="w-5 h-5 text-primary-foreground" />
            <span className="text-primary-foreground font-bold text-sm tracking-wide">HISTÓRIAS DE SUCESSO</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            <span className="text-foreground">Vidas</span> <span className="gradient-text">Transformadas</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos nossos alunos que transformaram suas vidas através da barbearia profissional
          </p>
        </div>

        {/* Interactive Stories */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Cards */}
          <div className="space-y-4">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 border-0 ${
                  activeStory === index
                    ? "bg-gradient-to-r from-primary/10 to-orange-400/10 scale-105 shadow-2xl"
                    : "bg-card/50 hover:bg-card/80"
                }`}
                onClick={() => setActiveStory(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <img
                        src={story.image || "/placeholder.svg"}
                        alt={story.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                      />
                      {activeStory === index && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground mb-1">{story.name}</h3>
                      <p className="text-primary font-semibold text-sm mb-2">{story.role}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{story.story}</p>

                      {activeStory === index && (
                        <div className="mt-4 flex items-center space-x-4 text-xs">
                          <div className="flex items-center space-x-1">
                            <Users className="w-3 h-3 text-primary" />
                            <span className="text-foreground font-semibold">{story.stats.clients} clientes</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-3 h-3 text-green-500" />
                            <span className="text-foreground font-semibold">+{story.stats.revenue}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-orange-400" />
                            <span className="text-foreground font-semibold">{story.stats.time}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Story */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-400/20 rounded-3xl blur-2xl" />
            <Card className="relative border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80">
                  <img
                    src={successStories[activeStory].image || "/placeholder.svg"}
                    alt={successStories[activeStory].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center space-x-2 mb-3">
                      <Quote className="w-5 h-5 text-primary" />
                      <span className="text-primary font-bold text-sm">DEPOIMENTO</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{successStories[activeStory].name}</h3>
                    <p className="text-white/90 mb-3">{successStories[activeStory].achievement}</p>

                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>Avaliação 5.0</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4 text-red-400" />
                        <span>Cliente Satisfeito</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-orange-400/10 rounded-2xl p-8 border border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Sua História de Sucesso Começa Agora</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Junte-se a centenas de profissionais que já transformaram suas vidas
            </p>

            <Button
              size="lg"
              onClick={() => scrollToSection("inscricao")}
              className="bg-gradient-to-r from-primary to-orange-400 text-white hover:from-primary/90 hover:to-orange-400/90 text-lg px-10 py-6 h-auto pulse-glow hover:scale-105 transition-all duration-300 group"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Começar Minha Transformação
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
