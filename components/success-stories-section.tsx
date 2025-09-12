"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, TrendingUp, Users, Heart, ArrowRight, Sparkles } from "lucide-react"

export function SuccessStoriesSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 scroll-animate bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/20">
              <img
                src="/images/success-story.png"
                alt="Formandos celebrando conquista"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center space-x-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="text-white font-semibold">Turma 2024</span>
                </div>
                <p className="text-white/90 text-sm">
                  "Mais uma turma realizando o sonho de se tornar profissionais qualificados!"
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/90 backdrop-blur-sm border border-primary rounded-full px-4 py-2 mb-6">
                <Heart className="w-4 h-4 text-primary-foreground" />
                <span className="text-primary-foreground font-bold text-sm">HISTÓRIAS DE SUCESSO</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                <span className="gradient-text">Transforme</span> Sua Paixão em
                <br />
                <span className="text-foreground">Realização Profissional</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Cada certificado representa uma vida transformada, um sonho realizado e um futuro próspero. Nossos
                alunos não apenas aprendem técnicas, eles descobrem seu potencial e constroem carreiras sólidas.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="group hover-lift border-0 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold gradient-text">95%</div>
                  <div className="text-sm text-muted-foreground">Taxa de Empregabilidade</div>
                </CardContent>
              </Card>

              <Card className="group hover-lift border-0 bg-gradient-to-br from-orange-400/10 to-orange-400/5 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-orange-400">500+</div>
                  <div className="text-sm text-muted-foreground">Vidas Transformadas</div>
                </CardContent>
              </Card>
            </div>

            {/* Motivational Quote */}
            <div className="bg-gradient-to-r from-primary/10 to-orange-400/10 rounded-xl p-6 border border-primary/20">
              <blockquote className="text-lg font-medium text-foreground mb-4 italic">
                "O conhecimento é a chave que abre as portas do sucesso. Cada técnica aprendida, cada habilidade
                desenvolvida é um passo em direção à sua independência profissional."
              </blockquote>
              <div className="flex items-center justify-between">
                <cite className="text-sm text-muted-foreground">- Filosofia BarberClass</cite>
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              onClick={() => scrollToSection("inscricao")}
              className="bg-gradient-to-r from-primary to-orange-400 text-white hover:from-primary/90 hover:to-orange-400/90 text-lg px-8 py-6 h-auto pulse-glow hover:scale-105 transition-all duration-300 group w-full sm:w-auto"
            >
              <GraduationCap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Comece Sua Jornada Agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
