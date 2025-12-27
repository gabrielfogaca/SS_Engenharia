import { FadeIn } from './FadeIn';
import { Award, Users, Target } from 'lucide-react';
// Para desenvolvimento local: substitua pela imagem de expertise
const expertiseImage = 'public/images/expertise.jpeg';

export function Expertise() {
  const highlights = [
    {
      icon: Award,
      title: 'Excelência Profissional',
      description: 'Certificações e qualificações reconhecidas no mercado',
    },
    {
      icon: Target,
      title: 'Precisão Técnica',
      description: 'Uso de tecnologia de ponta para resultados perfeitos',
    },
    {
      icon: Users,
      title: 'Equipe Qualificada',
      description: 'Profissionais experientes e comprometidos',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <FadeIn>
            <div>
              <div className="mb-4">
                <span className="text-sm uppercase tracking-wider text-gray-500">
                  Nossa Expertise
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900">
                Precisão e qualidade em cada detalhe
              </h2>
              
              <p className="text-lg text-gray-600 mb-12">
                Combinamos conhecimento técnico avançado com dedicação 
                para entregar projetos que superam expectativas. Cada 
                medição, cada cálculo, cada decisão é tomada com o máximo 
                rigor profissional.
              </p>

              <div className="space-y-8">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl mb-2 text-gray-900">
                          {highlight.title}
                        </h3>
                        <p className="text-gray-600">{highlight.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* Image */}
          <FadeIn delay={0.2}>
            <div className="relative lg:order-first">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                  src={expertiseImage}
                  alt="Profissional realizando medições técnicas"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-gray-900 rounded-2xl -z-10"></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}