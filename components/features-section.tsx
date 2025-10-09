import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mountain, Droplets, Zap, Car, Wifi, LandPlot, ListOrdered } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <LandPlot className="h-8 w-8" />,
      title: "Aprobado por el SAG",
      description: "Todas nuestras parcelas cuentan con plano aprobado por el SAG",
    },
    // {
    //   icon: <ListOrdered className="h-8 w-8" />,
    //   title: "ROL propio",
    //   description: "Todas nuestras parcelas cuentan con ROL propio lista para escriturar",
    // },
  ]

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Información Legal
          </h2>
          {/* <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Descubre todas las ventajas que hacen de nuestro proyecto el lugar ideal para construir tu hogar o
            inversión.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-balance">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
