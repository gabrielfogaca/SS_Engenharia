import { CircleCheck } from 'lucide-react';
import { FadeIn } from './FadeIn';
// Para desenvolvimento local: substitua pela foto da Sabrina
const aboutImage = '/images/sobre.jpg';

export function About() {
  const values = [
    'Excelência técnica em cada projeto',
    'Compromisso com prazos e qualidade',
    'Inovação e sustentabilidade',
    'Atendimento personalizado',
  ];

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <FadeIn>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                  src={aboutImage}
                  alt="Sabrina Schreiber - Engenheira e Arquiteta"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gray-900 rounded-2xl -z-10"></div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.2}>
            <div>
              <div className="mb-4">
                <span className="text-sm uppercase tracking-wider text-gray-500">
                  Sobre Nós
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900">
                Sabrina Schreiber Engenharia & Arquitetura
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Somos uma empresa especializada em soluções completas de 
                engenharia e arquitetura, oferecendo serviços personalizados 
                que unem funcionalidade, estética e inovação.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                Com uma equipe altamente qualificada e experiência em projetos 
                residenciais, comerciais e industriais, transformamos suas 
                ideias em projetos sólidos e sustentáveis.
              </p>

              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CircleCheck className="w-6 h-6 text-gray-900 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}