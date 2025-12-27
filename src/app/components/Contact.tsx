import { Mail, Phone, MapPin } from 'lucide-react';
import { Card } from './ui/card';
import { FadeIn } from './FadeIn';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'EMAIL',
      content: 'engenheirasabrinaschreiber@gmail.com',
      link: 'mailto:engenheirasabrinaschreiber@gmail.com',
    },
    {
      icon: Phone,
      title: 'TELEFONE',
      content: '(55) 99202-6573',
      link: 'tel:+5555992026573',
    },
    {
      icon: MapPin,
      title: 'LOCALIZAÇÃO',
      content: 'Ijuí - RS',
      link: null,
    },
  ];

  return (
    <section id="contato" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="mb-4">
              <span className="text-sm uppercase tracking-wider text-gray-500">
                Entre em Contato
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900">
              Vamos conversar sobre seu projeto
            </h2>
            <p className="text-lg text-gray-600">
              Estamos prontos para atender você e transformar suas ideias em realidade.
            </p>
          </div>
        </FadeIn>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = info.link ? (
              <a
                href={info.link}
                className="text-gray-900 hover:text-gray-600 transition-colors text-base break-all"
              >
                {info.content}
              </a>
            ) : (
              <p className="text-gray-900 text-base">{info.content}</p>
            );

            return (
              <FadeIn key={index} delay={index * 0.1}>
                <Card className="p-8 border-gray-200 bg-white hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                      {info.title}
                    </h3>
                    {content}
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}