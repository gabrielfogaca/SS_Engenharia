import { 
  Building2, 
  Paintbrush, 
  Scale, 
  Layers, 
  Combine, 
  Map,
  FileCheck, 
  Eye,
  Hammer,
  Briefcase,
  Wrench,
  Home,
  Zap,
  Droplets,
  ArrowRight,
  Ruler
} from 'lucide-react';
import { Card } from './ui/card';
import { FadeIn } from './FadeIn';

export function Services() {
  // Número do WhatsApp da empresa (formato: código do país + DDD + número)
  const whatsappNumber = '5555992026573'; // SUBSTITUIR pelo número real da empresa
  
  const services = [
    {
      icon: Hammer,
      title: 'Reformas',
      description: 'Planejamento e execução de reformas residenciais e comerciais com qualidade e eficiência.',
    },
    {
      icon: Paintbrush,
      title: 'Projetos de Interiores',
      description: 'Design de interiores personalizado, unindo funcionalidade e estética para ambientes únicos.',
    },
    {
      icon: Ruler,
      title: 'Retificação de Áreas',
      description: 'Correção de medidas e áreas em documentação de imóveis com precisão técnica.',
    },
    {
      icon: Layers,
      title: 'Fracionamento de Áreas',
      description: 'Parcelamento de solo em conformidade com as legislações vigentes.',
    },
    {
      icon: Combine,
      title: 'Fusão de Áreas',
      description: 'Unificação de terrenos e lotes com toda documentação legal necessária.',
    },
    {
      icon: Map,
      title: 'Projetos para Loteamento',
      description: 'Desenvolvimento completo de projetos de loteamento e parcelamento de solo.',
    },
    {
      icon: FileCheck,
      title: 'Averbação de Construção',
      description: 'Registro de construções em matrícula junto aos órgãos competentes.',
    },
    {
      icon: Home,
      title: 'Memorial e Projeto para Usucapião',
      description: 'Elaboração de documentação técnica para processos de usucapião.',
    },
    {
      icon: Eye,
      title: 'Laudos Técnicos',
      description: 'Laudos de avaliação, inspeção e vistoria técnica de edificações.',
    },
    {
      icon: Briefcase,
      title: 'Acompanhamento de Obra',
      description: 'Fiscalização e gestão técnica durante todas as fases da construção.',
    },
    {
      icon: Wrench,
      title: 'Consultoria e Assessoria',
      description: 'Consultoria especializada em engenharia para tomada de decisões estratégicas.',
    },
    {
      icon: Building2,
      title: 'Projetos de Engenharia',
      description: 'Projetos diversos: geotécnico, fundações, estrutural, arquitetônico, elétrico, hidráulico, esgoto sanitário, pluvial e plano de prevenção e proteção contra incêndios.',
    },
    {
      icon: Building2,
      title: 'Projeto Arquitetônico',
      description: 'Desenvolvimento de projetos arquitetônicos completos e personalizados.',
    },
    {
      icon: Zap,
      title: 'Projeto Elétrico',
      description: 'Projetos de instalações elétricas residenciais, comerciais e industriais.',
    },
    {
      icon: Droplets,
      title: 'Projeto Hidrossanitário',
      description: 'Projetos de água fria, água quente, esgoto e sistemas hidráulicos.',
    },
    {
      icon: Droplets,
      title: 'Projeto de Drenagem Pluvial',
      description: 'Sistemas de captação e drenagem de águas pluviais para edificações.',
    },
  ];

  const handleServiceRequest = (serviceName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de solicitar o serviço de ${serviceName}.`);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="mb-4">
              <span className="text-sm uppercase tracking-wider text-gray-500">
                Nossos Serviços
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900">
              Soluções completas para seu projeto
            </h2>
            <p className="text-lg text-gray-600">
              Ofereço um portifólio completo de serviços de engenharia, arquitetura e regularização de imóveis, atendendo todas as necessidades do seu imóvel e/ou empreendimento.
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={index} delay={index * 0.05}>
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-gray-200 h-full group flex flex-col">
                  <div className="mb-4 w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">{service.description}</p>
                  
                  <button
                    onClick={() => handleServiceRequest(service.title)}
                    className="w-full mt-auto flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm group/btn"
                  >
                    Solicitar Serviço
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}