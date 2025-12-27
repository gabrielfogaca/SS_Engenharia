import { FadeIn } from './FadeIn';
import { MapPin } from 'lucide-react';

export function Location() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto do Endereço */}
          <FadeIn>
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-900 rounded-lg mb-6">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl mb-8 text-gray-900">
                Nosso escritório está localizado no endereço:
              </h2>
              
              <div className="space-y-3 text-xl text-gray-700">
                <p className="flex items-baseline gap-2">
                  <span className="text-gray-900 font-medium">Rua 20 de setembro</span>
                </p>
                <p className="flex items-baseline gap-2">
                  <span className="text-gray-900 font-medium">Nº 558</span>
                </p>
                <p className="flex items-baseline gap-2">
                  <span className="text-gray-900 font-medium">Centro</span>
                </p>
                <p className="flex items-baseline gap-2">
                  <span className="text-gray-900 font-medium">Ijuí - Rio Grande do Sul</span>
                </p>
              </div>
              
              <div className="mt-8">
                <a
                  href="https://maps.app.goo.gl/your-google-maps-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  <span className="border-b border-gray-900 hover:border-gray-700">
                    Ver no Google Maps
                  </span>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Google Maps */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.8766829647844!2d-53.91800252452842!3d-28.38773719617074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95024e3e3e3e3e3f%3A0x1234567890abcdef!2sR.%2020%20de%20Setembro%2C%20558%20-%20Centro%2C%20Iju%C3%AD%20-%20RS%2C%2098700-000!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Sabrina Schreiber Engenharia"
                  className="w-full h-full"
                ></iframe>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gray-100 rounded-2xl -z-10"></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
