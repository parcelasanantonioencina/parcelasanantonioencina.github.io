"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Image from "next/image"

interface Contact {
  name: string
  phone: string
  avatar: string
}

const contacts: Contact[] = [
  {
    name: "Hector",
    phone: "+56966955017", // Replace with actual phone numbers
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Rodrigo",
    phone: "+56981956378", // Replace with actual phone numbers
    avatar: "/placeholder-user.jpg",
  },
]

export function WhatsAppWidget() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openWhatsApp = (phone: string, name: string) => {
    const message = encodeURIComponent(
      `Hola ${name}, me interesa obtener información sobre las Parcelas San Antonio Encina.`,
    )
    const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${message}`
    window.open(whatsappUrl, "_blank")
    setIsModalOpen(false)
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
        </svg>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsModalOpen(false)} />

          {/* Modal Content */}
          <div className="relative bg-white rounded-lg shadow-xl max-w-sm w-full mx-4 overflow-hidden">
            {/* Header */}
            <div className="bg-green-600 text-white p-4 relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-200"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg">Contáctanos</h3>
                  <p className="text-sm text-green-100">Contáctanos vía Whatsapp</p>
                </div>
              </div>
            </div>

            {/* Contact List */}
            <div className="p-4 space-y-3">
              {contacts.map((contact, index) => (
                <button
                  key={index}
                  onClick={() => openWhatsApp(contact.phone, contact.name)}
                  className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <Image
                    src={contact.avatar || "/placeholder.svg"}
                    alt={contact.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="font-medium text-gray-800">{contact.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
