"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import type { google } from "google-maps"

interface Parcel {
  id: number
  coordinates: [number, number][]
  status: "available" | "sold"
  surface: string
  price?: string
}

// Sample parcel data - 20 parcels arranged in a grid pattern
const parcels: Parcel[] = [
  {
    id: 1,
    coordinates: [
      [-35.85727324293104, -71.51286936391655],
      [-35.8570768001407, -71.51269079112001],
      [-35.85724584130358, -71.51140386302689],
      [-35.85784439605958, -71.51174950218515],
    ],
    status: "available",
    surface: "5,000 m²",
    price: "$45,000,000",
  },
  {
    id: 2,
    coordinates: [
      [-35.85724584130358, -71.51140386302689],
      [-35.85784439605958, -71.51174950218515],
      [-35.8581218941265, -71.51121304881421],
      [-35.85728338681388, -71.51073172075738],
    ],
    status: "sold",
    surface: "5,000 m²",
  },
  {
    id: 3,
    coordinates: [
      [-35.8581218941265, -71.51121304881421],
      [-35.85728338681388, -71.51073172075738],
      [-35.85753245126067, -71.51060098503736],
      [-35.85755773859327, -71.51017656902036],
      [-35.8583964866807, -71.51076342663893],
    ],
    status: "available",
    surface: "5,000 m²",
    price: "$45,000,000",
  },
  {
    id: 4,
    coordinates: [
      [-35.85755773859327, -71.51017656902036],
      [-35.8583964866807, -71.51076342663893],
      [-35.85867792497364, -71.51037102668637],
      [-35.85775686759441, -71.50973489100633],
    ],
    status: "available",
    surface: "5,000 m²",
    price: "$45,000,000",
  },
  {
    id: 5,
    coordinates: [
      [-35.85867792497364, -71.51037102668637],
      [-35.85775686759441, -71.50973489100633],
      [-35.85793732946596, -71.50934291757449],
      [-35.85892156062695, -71.51002636825424],
    ],
    status: "available",
    surface: "5,000 m²",
    price: "$45,000,000",
  },
  {
    id: 6,
    coordinates: [
      [-35.85793732946596, -71.50934291757449],
      [-35.85892156062695, -71.51002636825424],
      [-35.85913879006977, -71.50969542015399],
      [-35.8581084541583, -71.50896944942671],
    ],
    status: "available",
    surface: "5,000 m²",
    price: "$45,000,000",
  },
  {
    id: 7,
    coordinates: [
      [-35.85913879006977, -71.50969542015399],
      [-35.8581084541583, -71.50896944942671],
      [-35.85826475233866, -71.50860546745668],
      [-35.85933309773954, -71.50935205672074],
    ],
    status: "available",
    surface: "5,000 m²",
    price: "$45,000,000",
  },
  {
    id: 8,
    coordinates: [
      [-35.85755773859327, -71.51017656902036],
      [-35.85826475233866, -71.50860546745668],
      [-35.85796161671362, -71.50840432704966],
      [-35.85747778458842, -71.50947870517012],
    ],
    status: "available",
    surface: "5,000 m²",
    price: "$45,000,000",
  },
  {
    id: 9,
    coordinates: [
      [-35.85796161671362, -71.50840432704966],
      [-35.85747778458842, -71.50947870517012],
      [-35.85725298368627, -71.50783361664081],
      [-35.85799320620986, -71.50834405750857],
    ],
    status: "available",
    surface: "5,000 m²",
    price: "$45,000,000",
  },
]

export function ParcellationSection() {
  const [selectedParcel, setSelectedParcel] = useState<Parcel | null>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const polygonsRef = useRef<google.maps.Polygon[]>([])
  const markersRef = useRef<google.maps.Marker[]>([])

  const initializeMap = useCallback(() => {
    if (typeof window === "undefined" || !window.google) return

    const mapElement = document.getElementById("parcellation-map")
    if (!mapElement) return

    polygonsRef.current.forEach((polygon) => polygon.setMap(null))
    markersRef.current.forEach((marker) => marker.setMap(null))
    polygonsRef.current = []
    markersRef.current = []

    const mapInstance = new window.google.maps.Map(mapElement, {
      center: { lat: -35.85870672765954, lng: -71.50908976781585 },
      zoom: 17,
      mapTypeId: "satellite",
      mapTypeControl: true,
      streetViewControl: false,
      fullscreenControl: true,
    })

    setMap(mapInstance)

    parcels.forEach((parcel) => {
      const polygon = new window.google.maps.Polygon({
        paths: parcel.coordinates.map((coord) => ({ lat: coord[0], lng: coord[1] })),
        strokeColor: parcel.status === "available" ? "#22c55e" : "#ef4444",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: parcel.status === "available" ? "#22c55e" : "#ef4444",
        fillOpacity: 0.2,
        map: mapInstance,
      })

      polygon.addListener("click", () => {
        setSelectedParcel(parcel)
      })

      polygonsRef.current.push(polygon)

      const center = parcel.coordinates.reduce(
        (acc, coord) => ({
          lat: acc.lat + coord[0] / parcel.coordinates.length,
          lng: acc.lng + coord[1] / parcel.coordinates.length,
        }),
        { lat: 0, lng: 0 },
      )

      const marker = new window.google.maps.Marker({
        position: center,
        map: mapInstance,
        label: {
          text: parcel.id.toString(),
          color: "white",
          fontWeight: "bold",
          fontSize: "12px",
        },
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          fillColor: parcel.status === "available" ? "#22c55e" : "#ef4444",
          fillOpacity: 1,
          strokeColor: "white",
          strokeWeight: 2,
          scale: 15,
        },
      })

      marker.addListener("click", () => {
        setSelectedParcel(parcel)
      })

      markersRef.current.push(marker)
    })
  }, [])

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY"}&libraries=geometry`
      script.async = true
      script.defer = true
      script.onload = initializeMap
      document.head.appendChild(script)
    } else {
      initializeMap()
    }

    return () => {
      polygonsRef.current.forEach((polygon) => polygon.setMap(null))
      markersRef.current.forEach((marker) => marker.setMap(null))
    }
  }, [initializeMap])

  const downloadKMZ = () => {
    alert("Funcionalidad de descarga KMZ próximamente disponible")
  }

  return (
    <section id="parcelacion" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4">Parcelación</h2>
          <p className="text-muted-foreground mb-8">
            Ve la parcelación en Google Maps. Haz clic en cada parcela para ver su superficie y precio.
          </p>

          <div className="relative mb-6">
            <div id="parcellation-map" className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg" />

            {selectedParcel && (
              <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <h3 className="font-bold text-lg mb-2">Parcela {selectedParcel.id}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Estado:</strong> {selectedParcel.status === "available" ? "Disponible" : "Vendida"}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Superficie:</strong> {selectedParcel.surface}
                </p>
                {selectedParcel.price && (
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Precio:</strong> {selectedParcel.price}
                  </p>
                )}
                <button onClick={() => setSelectedParcel(null)} className="text-xs text-gray-500 hover:text-gray-700">
                  Cerrar
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Disponible</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Vendida</span>
            </div>
          </div>

          <div className="text-sm text-muted-foreground mb-6">
            <p className="mt-2">
              Los metrajes expuestos pueden sufrir variaciones, para mayor información por favor contactar a alguno de
              nuestros ejecutivos.
            </p>
          </div>

          <div className="text-center">
            <Button onClick={downloadKMZ} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              DESCARGA EL KMZ (GOOGLE EARTH)
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
