import { Card, CardContent } from "@/components/ui/card"
import { HelpCircle, Star, Award, Users, Crown, Trophy, Zap } from "lucide-react"

export function SpeakersSection() {
  const speakers = [
    {
      id: 1,
      name: "João Silva",
      role: "Palestrante Principal & Mestre Barbeiro",
      image: "/images/instructor-2.png",
      description: "15 anos de experiência, referência nacional em técnicas tradicionais e inovação",
      achievements: ["500+ alunos", "Prêmio Nacional", "15 anos exp.", "Mestre Certificado"],
      isPrincipal: true,
    },
    {
      id: 2,
      name: "Carlos Santos",
      role: "Empreendedor e Mentor",
      image: "/images/instructor-3.png",
      description: "Fundador de 3 barbearias de sucesso, especialista em gestão",
      achievements: ["3 barbearias", "R$ 1M+ faturamento", "Mentor top"],
      isPrincipal: false,
    },
  ]

  return (
    <section id="palestrantes" className="py-20 scroll-animate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm">MESTRES DA PROFISSÃO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Nossos <span className="gradient-text">Palestrantes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aprenda com os melhores profissionais do mercado, que transformaram suas paixões em negócios de sucesso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <Card
              key={speaker.id}
              className={`group hover-lift border-0 overflow-hidden relative ${
                speaker.isPrincipal
                  ? "md:col-span-2 bg-gradient-to-br from-primary/20 via-card to-primary/5 ring-2 ring-primary/30"
                  : "bg-gradient-to-br from-card to-card/50"
              } backdrop-blur-sm`}
            >
              {speaker.isPrincipal && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-primary to-orange-400 rounded-full p-2 animate-pulse">
                  <Crown className="w-5 h-5 text-white" />
                </div>
              )}

              <CardContent className="p-0">
                <div className="relative">
                  <div className={`${speaker.isPrincipal ? "aspect-[2/1]" : "aspect-square"} overflow-hidden`}>
                    <img
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full p-2">
                    {speaker.isPrincipal ? (
                      <Trophy className="w-4 h-4 text-primary-foreground" />
                    ) : (
                      <Award className="w-4 h-4 text-primary-foreground" />
                    )}
                  </div>

                  {speaker.isPrincipal && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-orange-400/10 opacity-50" />
                  )}
                </div>

                <div className="p-6">
                  <h3
                    className={`font-bold mb-2 group-hover:text-primary transition-colors ${
                      speaker.isPrincipal ? "text-2xl" : "text-xl"
                    }`}
                  >
                    {speaker.name}
                    {speaker.isPrincipal && <Zap className="inline-block w-5 h-5 ml-2 text-primary animate-pulse" />}
                  </h3>
                  <p className="gradient-text font-semibold mb-3">{speaker.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{speaker.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {speaker.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className={`text-xs px-2 py-1 rounded-full ${
                          speaker.isPrincipal
                            ? "bg-gradient-to-r from-primary/20 to-orange-400/20 text-primary border border-primary/30"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {[1, 2].map((index) => (
            <Card
              key={`mystery-${index}`}
              className="group hover-lift border-0 bg-gradient-to-br from-muted/50 to-muted/20 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="relative">
                      <HelpCircle className="w-16 h-16 text-primary/60 group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-orange-400 rounded-full p-2">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                    Palestrante Surpresa
                  </h3>
                  <p className="gradient-text font-semibold mb-3">Em Breve!</p>
                  <p className="text-muted-foreground text-sm mb-4">
                    Prepare-se para uma surpresa especial que vai revolucionar sua visão sobre a profissão.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-gradient-to-r from-primary/20 to-orange-400/20 text-primary px-2 py-1 rounded-full">
                      Revelação em breve
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
