"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/natural-landscape-hero-final.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
          Parcelas San Antonio Encina
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-balance opacity-95 font-light">
          Parcelas de 5000m2 en  San Antonio Encina, Linares, VII Region Del Maule, Chile
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
            onClick={() => scrollToSection("parcelacion")}
          >
            Ver Parcelas Disponibles
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-white/50 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold bg-transparent"
            onClick={() => scrollToSection("contacto")}
          >
            Solicitar Información
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/70" />
      </div>
    </section>
  )
}
