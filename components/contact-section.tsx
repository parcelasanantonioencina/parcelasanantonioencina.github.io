import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Contáctanos</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Estamos aquí para ayudarte a encontrar la parcela perfecta. Contáctanos y te brindaremos toda la información
            que necesitas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardContent>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf9MFHB8V-zsSGIko6u9Lj1QQodAPgWu67-w3qcx28rFTtDTA/viewform?embedded=true"
                width="100%"
                height="1100"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg"
              >
                Cargando…
              </iframe>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                    <p className="text-muted-foreground">+56 9 6695 5017</p>
                    <p className="text-muted-foreground">+56 9 8195 6378</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
