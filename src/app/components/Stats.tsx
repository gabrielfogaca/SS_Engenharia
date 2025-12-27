import { FadeIn } from './FadeIn';

export function Stats() {
  const stats = [
    {
      number: '100+',
      label: 'Projetos realizados',
    },
    {
      number: '5+',
      label: 'Anos de experiência',
    },
    {
      number: '96%',
      label: 'Clientes satisfeitos',
    },
    {
      number: '+20',
      label: 'Tipos de serviços disponíveis',
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl mb-2">{stat.number}</div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}