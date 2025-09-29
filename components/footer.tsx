export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Parcelas San Antonio Encina</h3>
            <p className="text-primary-foreground/80 text-balance">
              Tu oportunidad de invertir en parcelas de 5000m2 en una ubicación privilegiada de San Antonio, con todos
              los servicios y documentación al día.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#parcelacion"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Parcelación
                </a>
              </li>
              <li>
                <a
                  href="#ubicacion"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Ubicación
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Información Legal</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Proyecto aprobado por DOM</li>
              <li>Escrituras al día</li>
              <li>Permisos municipales vigentes</li>
              <li>Estudios de suelo disponibles</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Parcelas San Antonio Encina. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
