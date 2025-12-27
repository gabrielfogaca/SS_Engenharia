import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { FadeIn } from './FadeIn';

export function CTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Pronto para começar seu projeto?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos transformar 
              suas ideias em realidade com excelência e dedicação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 group"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => window.open('https://wa.me/5555992026573', '_blank')}
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-900 transition-all"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}