"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWaze } from "@fortawesome/free-brands-svg-icons"

export function LocationSection() {
  const coordinates = "-35.8572905,-71.5127983"
  const address = "San Antonio, Encina, Chile"

  const openWaze = () => {
    window.open(`https://waze.com/ul?ll=${coordinates}&navigate=yes`, "_blank")
  }

  const openGoogleMaps = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${coordinates}`, "_blank")
  }

  const openLargerMap = () => {
    window.open(`https://www.google.com/maps/place/${coordinates}/@${coordinates},15z`, "_blank")
  }

  return (
    <section id="ubicacion" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ubicación</h2>

          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Parcelas San Antonio Encina se encuentra ubicado en en la ruta L-409, Kilometro 5.1, sector San Antonio Encina, Linares, VII Region Del Maule, Chile
          </p>

          {/* Google Maps Embed */}
          <Card className="mb-6 overflow-hidden">
            <CardContent className="p-0">
              <div className="h-[70vh] sm:h-[60vh] md:aspect-[16/10] relative">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.123456789!2d${coordinates.split(",")[1]}!3d${coordinates.split(",")[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDUxJzI2LjIiUyA3McKwMzAnNDYuMSJX!5e0!3m2!1sen!2scl!4v1234567890123!5m2!1sen!2scl`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />

                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[280px] sm:max-w-none">
                  <div className="text-sm font-medium text-gray-800 mb-1">41°11'19.9"S 73°00'13...</div>
                  <button onClick={openLargerMap} className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                    Ver mapa más grande
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              onClick={openWaze}
              variant="outline"
              size="lg"
              className="flex items-center justify-start gap-4 h-14 flex-1 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 px-6"
            >
              <div className="w-8 h-8 bg-[#33CCFF] rounded-full flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon icon={faWaze} className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-700 font-medium">Cómo llegar con Waze</span>
            </Button>

            <Button
              onClick={openGoogleMaps}
              variant="outline"
              size="lg"
              className="flex items-center justify-start gap-4 h-14 flex-1 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 px-6"
            >
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.3 132.3" className="w-6 h-6">
                  <path
                    fill="#1a73e8"
                    d="M60.2 2.2C55.8.8 51 0 46.1 0 32 0 19.3 6.4 10.8 16.5l21.8 18.3L60.2 2.2z"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="M10.8 16.5C4.1 24.5 0 34.9 0 46.1c0 8.7 1.7 15.7 4.6 22l28-33.3-21.8-18.3z"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="M46.2 28.5c9.8 0 17.7 7.9 17.7 17.7 0 4.3-1.6 8.3-4.2 11.4 0 0 13.9-16.6 27.5-32.7-5.6-10.8-15.3-19-27-22.7L32.6 34.8c3.3-3.8 8.1-6.3 13.6-6.3"
                  ></path>
                  <path
                    fill="#fbbc04"
                    d="M46.2 63.8c-9.8 0-17.7-7.9-17.7-17.7 0-4.3 1.5-8.3 4.1-11.3l-28 33.3c4.8 10.6 12.8 19.2 21 29.9l34.1-40.5c-3.3 3.9-8.1 6.3-13.5 6.3"
                  ></path>
                  <path
                    fill="#34a853"
                    d="M59.1 109.2c15.4-24.1 33.3-35 33.3-63 0-7.7-1.9-14.9-5.2-21.3L25.6 98c2.6 3.4 5.3 7.3 7.9 11.3 9.4 14.5 6.8 23.1 12.8 23.1s3.4-8.7 12.8-23.2"
                  ></path>
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Cómo llegar con Google Maps</span>
            </Button>
          </div>

          {/* Additional Information */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-4">En Parcelas San Antonio Encina estás a:</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>20 minutos de Plaza de Armas de Linares</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span>10 minutos de Panimávida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
