"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SpeakersSection } from "@/components/speakers-section"
import { SuccessStoriesSection } from "@/components/success-stories-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { RegistrationSection } from "@/components/registration-section"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { ScrollProgress } from "@/components/scroll-progress"
import { InteractiveCursor } from "@/components/interactive-cursor"
import { MagicSparkles } from "@/components/magic-sparkles"

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll(".scroll-animate")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden relative">
      <FloatingElements />
      <ScrollProgress />
      <InteractiveCursor />
      <MagicSparkles />

      <Header />
      <section id="inicio" className="scroll-animate">
        <HeroSection />
      </section>
      <section id="sobre" className="scroll-animate min-h-[50vh] py-20">
        <AboutSection />
      </section>
      <section id="palestrantes" className="scroll-animate min-h-[50vh] py-20">
        <SpeakersSection />
      </section>
      <section id="historias-de-sucesso" className="scroll-animate min-h-[50vh] py-20">
        <SuccessStoriesSection />
      </section>
      <section id="depoimentos" className="scroll-animate min-h-[50vh] py-20">
        <TestimonialsSection />
      </section>
      <section id="inscricao" className="scroll-animate min-h-[50vh] py-20">
        <RegistrationSection />
      </section>
      <Footer />
    </main>
  )
}