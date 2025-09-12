"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scissors, TrendingUp, Users, Award, Target, Zap, ArrowRight, Sparkles } from "lucide-react"

export function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="sobre"
      className="py-20 scroll-animate bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <img
          src="/images/barber-tools-learning.jpg"
          alt="Ferramentas de barbeiro"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">NOSSA MISSÃO</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
                <span className="gradient-text">BARBERCLASS</span> NÃO É SOBRE ONDE VOCÊ ESTÁ.
                <br />É SOBRE <span className="gradient-text">ATÉ ONDE VOCÊ PODE CHEGAR.</span>
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Mais do que um curso, o Barberclass é uma jornada de transformação. Aqui você não aprende apenas
                técnicas de corte, mas desenvolve uma mentalidade empreendedora que vai revolucionar sua carreira e sua
                vida.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="group hover-lift border-0 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/20 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                      <Scissors className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Técnicas Avançadas</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Aprenda com os melhores profissionais do mercado e domine técnicas exclusivas
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover-lift border-0 bg-gradient-to-br from-orange-400/10 to-orange-400/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-orange-400/20 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="font-semibold text-lg">Mentalidade Empreendedora</h3>
                  </div>
                  <p className="text-muted-foreground">Desenvolva habilidades de negócio e liderança para o sucesso</p>
                </CardContent>
              </Card>

              <Card className="group hover-lift border-0 bg-gradient-to-br from-green-400/10 to-green-400/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-green-400/20 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                      <Users className="w-5 h-5 text-green-400" />
                    </div>
                    <h3 className="font-semibold text-lg">Networking Poderoso</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Conecte-se com profissionais e construa uma rede de contatos valiosa
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover-lift border-0 bg-gradient-to-br from-purple-400/10 to-purple-400/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-purple-400/20 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                      <Award className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="font-semibold text-lg">Certificação Reconhecida</h3>
                  </div>
                  <p className="text-muted-foreground">Receba certificação que abre portas no mercado profissional</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-orange-400/10 rounded-xl p-6 border border-primary/20">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-lg font-medium text-foreground mb-3 italic">
                    "Transforme sua paixão em profissão. O conhecimento é o único investimento que sempre dá retorno."
                  </blockquote>
                  <Button
                    onClick={() => scrollToSection("palestrantes")}
                    className="bg-gradient-to-r from-primary to-orange-400 text-white hover:from-primary/90 hover:to-orange-400/90 group"
                  >
                    <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    Conheça Nossos Mestres
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />

            <div className="relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/20">
              <div className="aspect-square">
                <img
                  src="/images/instructor-1.png"
                  alt="Instrutor Barberclass"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="absolute bottom-4 right-4 bg-gradient-to-r from-primary to-orange-400 text-white p-4 rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-300 max-w-[140px]">
                <div className="flex items-center space-x-2 mb-1">
                  <Users className="w-4 h-4 flex-shrink-0" />
                  <p className="font-bold text-xl">500+</p>
                </div>
                <p className="text-xs opacity-90 leading-tight">Alunos Transformados</p>
              </div>

              <div
                className="absolute top-4 left-4 bg-gradient-to-r from-green-400 to-emerald-400 text-white p-3 rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-300 max-w-[120px]"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-center space-x-2 mb-1">
                  <Award className="w-3 h-3 flex-shrink-0" />
                  <p className="font-bold text-lg">98%</p>
                </div>
                <p className="text-xs opacity-90 leading-tight">Taxa de Sucesso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
