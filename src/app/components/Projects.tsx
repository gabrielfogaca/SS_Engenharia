import { Card } from "./ui/card";
import { FadeIn } from "./FadeIn";
// Para desenvolvimento local: substitua pelas imagens dos projetos
const regularizacaoImage = "/images/matricula.png";
const projetosDiversosImage = "/images/projetosdiversos.jpg";

export function Projects() {
  const projects = [
    {
      title: "Projeto de Interiores",
      category: "Arquitetura Residencial",
      image:
        "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMG1vZGVybnxlbnwxfHx8fDE3NjY3NzIyODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Projetos pensados para unir estética, funcionalidade e conforto, valorizando o espaço, o estilo do cliente e as necessidades do dia a dia.",
    },
    {
      title: "Projetos Diversos",
      category: "Projetos de Infraestrutura e sistemas prediais",
      image: projetosDiversosImage,
      description:
        "Desenvolvimento de projetos abrangendo estrutura, arquitetura, elétrica, hidráulica e planejamento integrado.",
    },
    {
      title: "Reforma e Ampliação",
      category: "Consultoria",
      image:
        "https://images.unsplash.com/photo-1608303588026-884930af2559?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBwbGFubmluZ3xlbnwxfHx8fDE3NjY4MDM2MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Consultoria e projeto de reforma com aproveitamento de estrutura existente.",
    },
    {
      title: "Regularização de Imóveis",
      category: "Regularização",
      image: regularizacaoImage,
      description:
        "Assessoria completa para regularização de imóveis junto aos órgãos competentes, incluindo documentação, matrículas e adequação às normas vigentes.",
    },
  ];

  return (
    <section id="projetos" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="mb-4">
              <span className="text-sm uppercase tracking-wider text-gray-500">
                Portfólio
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900">
              Projetos realizados
            </h2>
            <p className="text-lg text-gray-600">
              Conheça alguns dos projetos que desenvolvemos com
              excelência e dedicação aos detalhes.
            </p>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-200">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-2">
                    <span className="text-sm text-gray-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl mb-3 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    {project.description}
                  </p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}