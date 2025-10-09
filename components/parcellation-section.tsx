"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import type { google } from "google-maps"

interface Parcel {
  id: number
  coordinates: [number, number][]
  status: "available" | "sold"
  discount?: number
  surface: string
  discountprice?: string
  price?: string
}

// Sample parcel data - 20 parcels arranged in a grid pattern
const routes: Parcel[] = [
  {
    id: 1,
    coordinates: [
      [-35.85727324293104, -71.51286936391655],//arriba a la izquerda
      [-35.85731637556925, -71.51290253306843],//abajo a la izquerda
      [-35.85789838250663, -71.5117760830486],// camino 1 y 2 abajo
      [-35.85817054072816, -71.51124208764571],// camino 2 y 3 abajo
      [-35.85844849486535, -71.51079486410683],// camino 3 y 4 abajo
      [-35.85872790608368, -71.51040355109336],// camino 4 y 5 abajo
      [-35.85897805458731, -71.51005857407318],// camino 5 y 6 abajo
      [-35.85919308306823, -71.50971766989667],// camino 6 y 7 abajo
      [-35.85938317627553, -71.50938568032768],// camino 13 1
      [-35.85961089408031, -71.50895683085159],// camino 13 2
      [-35.8598060290275, -71.50861606338172],// camino 13 3
      [-35.85995026305982, -71.50837205414196],// camino 13 4
      [-35.86009819331159, -71.50819942102827],// camino 13 5
      [-35.86019555792676, -71.50805011826836],// camino 13 6
      [-35.86026014620448, -71.50789969002818],// camino 13 7
      [-35.86037192398312, -71.50763237394878],// camino 13 8

      [-35.86047703791841, -71.50735334529919],// camino 16 1
      [-35.86055383563401, -71.50716866873429],// camino 16 2
      [-35.86055227004766, -71.5070031327329],// camino 16 3
      [-35.86056036723849, -71.5068618649932],// camino 16 4

      [-35.86050704537475, -71.50684723163381],//abajo a la derecha 16
      [-35.86050247402304, -71.50714494065102],//abajo medio 16
      [-35.86034665528052, -71.50753456087693],//abajo a la izquerda 16
      [-35.85979092789832, -71.50718491235121],//arriba a la izquerda 2
      [-35.85962842721126, -71.50673578555191],//arriba a la izquerda 1

      [-35.85958707619893, -71.50678468997084],//arriba a la derecha 14
      [-35.8597556406512, -71.50724329602212],//abajo a la derecha 14

      [-35.86031869491195, -71.50760106796203],//abajo a la derecha 13
      [-35.85936939546911, -71.50929718523504],//abajo a la izquerda 13
      [-35.85881747285672, -71.50891624469267],//arriba a la izquerda 13

      [-35.85838783959056, -71.50861187725251],//arriba a la izquerda 12

      [-35.85803913016363, -71.50837301768095],//arriba a la izquerda 11

      [-35.85799320620986, -71.50834405750857], //abajo a la derecha 9

      [-35.85796161671362, -71.50840432704966],//arriba a la derecha 8
      [-35.85826475233866, -71.50860546745668],//abajo a la derecha 8

      [-35.85933309773954, -71.50935205672074],//abajo a la derecha 7
      [-35.85913879006977, -71.50969542015399],//abajo a la izqyuierda 7

      [-35.85892156062695, -71.51002636825424],//6

      [-35.85867792497364, -71.51037102668637],//5

      [-35.8583964866807, -71.51076342663893],//4

      [-35.8581218941265, -71.51121304881421],// camino 2 y 3 arriba
      [-35.85784439605958, -71.51174950218515],// camino 1 y 2 arriba(final)
    ],
    status: "available",
    surface: "Camino interior",
  },
]

// Sample parcel data - 20 parcels arranged in a grid pattern
const parcels: Parcel[] = [
  {
    id: 1,
    coordinates: [
      [-35.85727324293104, -71.51286936391655],//abajo a la izquerda
      [-35.8570768001407, -71.51269079112001],//abajo a la derecha
      [-35.85724584130358, -71.51140386302689],//arriba a la derecha
      [-35.85784439605958, -71.51174950218515],//arriba a la izquerda
    ],
    status: "available",
    surface: "5.820 m²",
    price: "$45.000.000",
  },
  {
    id: 2,
    coordinates: [
      [-35.85724584130358, -71.51140386302689],
      [-35.85784439605958, -71.51174950218515],
      [-35.8581218941265, -71.51121304881421],
      [-35.85728338681388, -71.51073172075738],
    ],
    status: "available",
    discount: 30,
    surface: "5.000 m²",
    discountprice: "$31.500.000",
    price: "$45.000.000",
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
    discount: 30,
    discountprice: "$31.500.000",
    surface: "5.187 m²",
    price: "$45.000.000",
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
    surface: "5.140 m²",
    price: "$45.000.000",
    discount: 30,
    discountprice: "$31.500.000",
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
    surface: "5.002 m²",
    price: "$45.000.000",
    discount: 30,
    discountprice: "$31.500.000",
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
    surface: "5.001 m²",
    price: "$45.000.000",
    discount: 30,
    discountprice: "$31.500.000",
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
    surface: "5.003 m²",
    price: "$45.000.000",
    discount: 30,
    discountprice: "$31.500.000",
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
    surface: "5.319 m²",
    price: "$45.000.000",
    discount: 30,
    discountprice: "$31.500.000",
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
    surface: "5.580 m²",
    price: "$45.000.000",
    discount: 30,
    discountprice: "$31.500.000",
  },
  {
    id: 10,
    coordinates: [
      [-35.85725298368627, -71.50783361664081],
      [-35.85803913016363, -71.50837301768095],
      [-35.85829478858966, -71.50747470590824],
      [-35.85788108453173, -71.50745598012355],
    ],
    status: "available",
    surface: "5.095 m²",
    price: "$45.000.000",
    discount: 30,
    discountprice: "$31.500.000",
  },
  {
    id: 11,
    coordinates: [
      [-35.85803913016363, -71.50837301768095],//arriba a la izquerda
      [-35.85838783959056, -71.50861187725251],//abajo a la izquerda
      [-35.85884774436673, -71.50778726997927],//abajo a la derecha
      [-35.85835184417942, -71.5074444039178],//arriba a la derecha 1
      [-35.85829478858966, -71.50747470590824],//arriba a la derecha 2
    ],
    status: "available",
    surface: "5.010 m²",
    price: "$45.000.000",
    discount: 30,
    discountprice: "$31.500.000",
  },
  {
    id: 12,
    coordinates: [
      [-35.85838783959056, -71.50861187725251],//arriba a la izquerda
      [-35.85881747285672, -71.50891624469267],//abajo a la izquerda
      [-35.85927785390653, -71.508087747708],//abajo a la derecha
      [-35.85884774436673, -71.50778726997927],//arriba a la derecha
    ],
    status: "available",
    surface: "5.000 m²",
    price: "$45.000.000",
    discount: 30,
    discountprice: "$31.500.000",
  },
  {
    id: 13,
    coordinates: [
      [-35.85881747285672, -71.50891624469267],//arriba a la izquerda
      [-35.85936939546911, -71.50929718523504],//abajo a la izquerda
      [-35.86031869491195, -71.50760106796203],//abajo a la derecha
      [-35.8597556406512, -71.50724329602212],//arriba a la derecha
    ],
    status: "available",
    surface: "13.217 m²",
    price: "$100.000.000",
  },
  {
    id: 14,
    coordinates: [
      [-35.85884774436673, -71.50778726997927],//arriba a la izquerda
      [-35.85927785390653, -71.508087747708],//abajo a la izquerda
      [-35.8597556406512, -71.50724329602212],//abajo a la derecha
      [-35.85958707619893, -71.50678468997084],//arriba a la derecha
    ],
    status: "available",
    surface: "5.122 m²",
    price: "$45.000.000",
  },
  {
    id: 15,
    coordinates: [
      [-35.85835184417942, -71.5074444039178],//arriba a la izquerda
      [-35.85884774436673, -71.50778726997927],//abajo a la izquerda
      [-35.85958707619893, -71.50678468997084],//abajo a la derecha medio
      [-35.85962842721126, -71.50673578555191],//abajo a la derecha
      [-35.85957152809942, -71.50658352909149],//arriba a la derecha
    ],
    status: "available",
    surface: "5.095 m²",
    price: "$45.000.000",
  },
  {
    id: 16,
    coordinates: [
      [-35.85957152809942, -71.50658352909149],//arriba a la izquerda
      [-35.85962842721126, -71.50673578555191],//arriba a la izquerda 1
      [-35.85979092789832, -71.50718491235121],//arriba a la izquerda 2
      [-35.86034665528052, -71.50753456087693],//abajo a la izquerda
      [-35.86050247402304, -71.50714494065102],//abajo medio
      [-35.86050704537475, -71.50684723163381],//abajo a la derecha
    ],
    status: "available",
    surface: "5.004 m²",
    price: "$45.000.000",
  },
  {
    id: 17,
    coordinates: [
      [-35.85957152809942, -71.50658352909149],//arriba a la izquerda
      [-35.86056036723849, -71.5068618649932],//abajo a la izquerda
      [-35.86054228870971, -71.50527606618928],//derecha
    ],
    status: "available",
    surface: "8.455 m²",
    price: "$100.000.000",
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

    //route
    routes.forEach((parcel) => {
      const polygon = new window.google.maps.Polygon({
        paths: parcel.coordinates.map((coord) => ({ lat: coord[0], lng: coord[1] })),
        strokeColor: "#d8ce3fff",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#d8ce3fff",
        fillOpacity: 0.2,
        map: mapInstance,
      })

      polygonsRef.current.push(polygon)

    })
    //route
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
                {selectedParcel.discount && (
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Descuento:</strong> {selectedParcel.discount} %
                </p>
                )}
                {selectedParcel.price && (
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>Precio:</strong>{" "}
                          {selectedParcel.discountprice
                            ? <span><s>{selectedParcel.price}</s> <span className="text-sm text-gray-600 mb-1">{selectedParcel.discountprice}</span></span>
                            : <span>{selectedParcel.price}</span>
                          }
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
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Camino Interior</span>
            </div>
          </div>

          <div className="text-sm text-muted-foreground mb-6">
            <p className="mt-2">
              Los metrajes expuestos pueden sufrir variaciones, para mayor información por favor contactar a alguno de
              nuestros ejecutivos.
            </p>
          </div>

          {/* <div className="text-center">
            <Button onClick={downloadKMZ} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              DESCARGA EL KMZ (GOOGLE EARTH)
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  )
}
