import { Instagram, Linkedin, Mail } from 'lucide-react';
// Para desenvolvimento local: substitua pela logo da empresa
const logo = '/images/logo2.jpeg';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <img 
              src={logo} 
              alt="SS Sabrina Schreiber Engenharia e Arquitetura" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400">
              Transformando ideias em projetos de excelência desde 2024.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('sobre');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('servicos');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('projetos');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contato');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/eng.sabrinaschreiber/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sabrina-schreiber-jesus-822807201/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:engenheirasabrinaschreiber@gmail.com"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Sabrina Schreiber Engenharia & Arquitetura. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              CREA-SC 123456
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}