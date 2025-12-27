import { motion } from 'motion/react';
// Para desenvolvimento local: substitua pelas logos das empresas parceiras
const bernardiLogo = '/SS_Engenharia/images/empresa1.jpg';
const stabilizeLogo = '/SS_Engenharia/images/empresa2.jpg';
const natiHintzLogo = '/SS_Engenharia/images/empresa3.jpg';
const imobiliariaLiderLogo = '/SS_Engenharia/images/empresa4.jpg';
const geoeLogo = '/SS_Engenharia/images/empresa5.jpg';
const donattoLogo = '/SS_Engenharia/images/empresa6.jpg';
const mdEletricasLogo = '/SS_Engenharia/images/empresa7.jpg';
const partners = [
  { name: 'Bernardi, Schwerz & Rohenkohl', logo: bernardiLogo },
  { name: 'Stabilize Engenharia Estrutural', logo: stabilizeLogo },
  { name: 'Nati Hintz - Designer de Interiores', logo: natiHintzLogo },
  { name: 'Imobiliária Líder - CRECI 623', logo: imobiliariaLiderLogo },
  { name: 'gEOe Engenharia', logo: geoeLogo },
  { name: 'Donatto Advocacia', logo: donattoLogo },
  { name: 'MD Instalações Elétricas', logo: mdEletricasLogo },
];

export function Partners() {
  // Duplicamos o array para criar scroll infinito perfeito
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-neutral-900 mb-2">Empresas Parceiras</h2>
          <p className="text-neutral-600">
            Confiança de líderes do mercado de construção civil
          </p>
        </div>

        <div className="relative">
          {/* Gradient overlay nas bordas */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral-50 to-transparent z-10" />

          {/* Container de scroll */}
          <div className="flex">
            <motion.div
              className="flex gap-12 pr-12"
              animate={{
                x: [0, -(192 + 48) * partners.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 flex items-center justify-center"
                >
                  <div className="w-full h-full bg-white rounded-lg border border-neutral-200 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow p-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}