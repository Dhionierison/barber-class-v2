"use client"

import { Instagram, Facebook, Youtube, Mail, Phone, Scissors, MapPin, Clock, Star } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center space-x-3 group">
                <div className="p-3 bg-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Scissors className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold">
                  <span className="gradient-text font-extrabold">Barber</span>
                  <span className="text-secondary-foreground font-extrabold">Class</span>
                </h3>
              </div>

              <p className="text-secondary-foreground/80 text-lg leading-relaxed max-w-md">
                Transformando paixões em profissões de sucesso. Mais que um curso, uma jornada de crescimento pessoal e
                profissional que vai mudar sua vida.
              </p>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary">Siga-nos nas redes</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="group p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="group p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="group p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  >
                    <Youtube className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-primary flex items-center">
                <Star className="w-5 h-5 mr-2" />
                Navegação
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Início", id: "inicio" },
                  { name: "Sobre", id: "sobre" },
                  { name: "Palestrantes", id: "palestrantes" },
                  { name: "Depoimentos", id: "depoimentos" },
                  { name: "Inscrição", id: "inscricao" },
                ].map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-secondary-foreground/80 hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-primary/50 rounded-full mr-3 group-hover:bg-primary transition-colors"></span>
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-primary flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Contato
              </h4>
              <div className="space-y-4">
                <div className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <Mail className="w-5 h-5 text-primary mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-secondary-foreground/60">Email</p>
                    <span className="text-secondary-foreground/80">contato@barberclass.com.br</span>
                  </div>
                </div>

                <div className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <Phone className="w-5 h-5 text-primary mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-secondary-foreground/60">WhatsApp</p>
                    <span className="text-secondary-foreground/80">(11) 99999-9999</span>
                  </div>
                </div>

                <div className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <MapPin className="w-5 h-5 text-primary mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-secondary-foreground/60">Localização</p>
                    <span className="text-secondary-foreground/80">São Paulo, SP</span>
                  </div>
                </div>

                <div className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <Clock className="w-5 h-5 text-primary mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-secondary-foreground/60">Atendimento</p>
                    <span className="text-secondary-foreground/80">Seg-Sex: 9h às 18h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gradient-to-r from-transparent via-primary/30 to-transparent">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-secondary-foreground/60">
                <span>© 2025 BarberClass</span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline">Todos os direitos reservados</span>
                <span className="hidden md:inline">•</span>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-secondary-foreground/80">500+ Alunos Ativos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-secondary-foreground/80">4.9/5 Avaliação</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
