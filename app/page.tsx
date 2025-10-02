import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LocationSection } from "@/components/location-section"
import { ParcellationSection } from "@/components/parcellation-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Metadata } from "next"
import { FeaturesSection } from "@/components/features-section"

export const metadata: Metadata = {
  title: "Parcelas San Antonio Encina - Parcelas de 5000m2",
  description:
    "Descubre las mejores parcelas de 5000m2 en San Antonio Encina, Linares, VII Region Del Maule, Chile",
  openGraph: {
    title: 'Parcelas San Antonio Encina - Parcelas de 5000m2',
    description: 'Descubre las mejores parcelas de 5000m2 en San Antonio Encina, Linares, VII Region Del Maule, Chile',
    url: 'https://parcelasanantonioencina.github.io/',
    siteName: 'Parcelas San Antonio Encina',
    images: [
          {
            url: 'https://parcelasanantonioencina.github.io/og_image-min.png', // Relative path to your OG image
            width: 1200,
            height: 630,
            alt: 'Parcelas San Antonio Encina',
          },
          // You can add more image objects here if needed
        ],
    locale: 'es',
    type: 'website',
  },
  facebook: {
    appId: '1348620446956421', // Replace with your actual Facebook App ID
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <LocationSection />
      <ParcellationSection />
      <ContactSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
