"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Clock, Users, Award, Sparkles } from "lucide-react"

export function RegistrationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", city: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <section id="inscricao" className="py-20 scroll-animate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="text-center glass-effect border-green-500/20 scale-in">
              <CardContent className="p-12">
                <div className="relative mb-6">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto animate-bounce" />
                  <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Inscrição Realizada com Sucesso!</h3>
                <p className="text-muted-foreground mb-6">
                  Entraremos em contato em breve com mais informações sobre o curso.
                </p>
                <Button
                  className="bg-green-500 hover:bg-green-600 text-white pulse-glow hover:scale-105 transition-all duration-300"
                  onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
                >
                  Falar no WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="inscricao"
      className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10 scroll-animate"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-red-600 text-white rounded-full px-4 py-2 mb-6 shadow-lg">
              <Clock className="w-4 h-4" />
              <span className="font-semibold text-sm">VAGAS LIMITADAS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Garanta Seu <span className="gradient-text">Ingresso Agora!</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Vagas limitadas. Não perca a oportunidade de transformar sua carreira.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <Card className="hover-lift glass-effect border-primary/20 order-2 lg:order-1">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                <CardTitle className="text-2xl flex items-center">
                  <Sparkles className="w-6 h-6 mr-2 text-primary" />
                  Formulário de Inscrição
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold">
                      Nome Completo
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className="transition-all duration-300 focus:scale-105 focus:shadow-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="transition-all duration-300 focus:scale-105 focus:shadow-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold">
                      Telefone/WhatsApp
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="transition-all duration-300 focus:scale-105 focus:shadow-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-sm font-semibold">
                      Cidade
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Sua cidade"
                      className="transition-all duration-300 focus:scale-105 focus:shadow-lg"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 pulse-glow hover:scale-105 transition-all duration-300 group"
                  >
                    <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Quero Me Inscrever
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6 order-1 lg:order-2">
              <Card className="hover-lift glass-effect border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-4 flex items-center">
                    <Award className="w-6 h-6 mr-2 text-primary" />O que você vai receber:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Certificado de conclusão reconhecido",
                      "Material didático completo",
                      "Acesso ao grupo exclusivo de alunos",
                      "Mentoria individual",
                      "Kit profissional de ferramentas",
                      "Suporte pós-curso por 6 meses",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center group">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="group-hover:text-primary transition-colors">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary to-orange-400 text-white hover-lift pulse-glow overflow-hidden">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                    <h3 className="font-bold text-xl sm:text-2xl">Oferta Especial</h3>
                  </div>
                  <p className="text-base sm:text-lg mb-4 text-white/90">Primeiras 50 inscrições</p>
                  <div className="text-2xl sm:text-3xl font-bold">
                    <span className="line-through text-white/70 text-lg sm:text-xl">R$ 2.997</span>
                    <br />
                    <span className="text-3xl sm:text-4xl">R$ 1.497</span>
                  </div>
                  <p className="text-xs sm:text-sm mt-2 text-white/80">Ou 12x de R$ 124,75</p>

                  <div className="mt-4 flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-2 sm:space-y-0 text-xs sm:text-sm">
                    <div className="flex items-center justify-center">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      <span>Oferta limitada</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      <span>32 vagas restantes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
