import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img
                src="/public/lovable-uploads/weDesc_branco.png"
                alt="WeDesc Logo"
                className="h-8"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Soluções em Tecnologia para empresas que buscam excelência,
              segurança e eficiência em seus ambientes de TI.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-wedesc-yellow transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-wedesc-yellow transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-wedesc-yellow transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-wedesc-yellow transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Serviços</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/it-support"
                  className="text-gray-400 hover:text-wedesc-yellow transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>
                  Gestão e Suporte de TI
                </Link>
              </li>
              <li>
                <Link
                  to="/security"
                  className="text-gray-400 hover:text-wedesc-yellow transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>
                  Soluções em Segurança
                </Link>
              </li>
              <li>
                <Link
                  to="/cloud"
                  className="text-gray-400 hover:text-wedesc-yellow transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>
                  Soluções em Nuvem
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Segmentos</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/segment/retail"
                  className="text-gray-400 hover:text-wedesc-yellow transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>
                  Varejo
                </Link>
              </li>
              <li>
                <Link
                  to="/segment/industry"
                  className="text-gray-400 hover:text-wedesc-yellow transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>
                  Indústria
                </Link>
              </li>
              <li>
                <Link
                  to="/segment/service"
                  className="text-gray-400 hover:text-wedesc-yellow transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>
                  Serviços
                </Link>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-6">Institucional</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-wedesc-yellow transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="text-gray-400 hover:text-wedesc-yellow transition-colors flex items-center"
                >
                  <span className="mr-2">•</span>
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-wedesc-yellow mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Av. Adolfo Bastos, 598
                  <br />
                  Santo André - SP
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-wedesc-yellow mr-3 flex-shrink-0" />
                <span className="text-gray-300">(11) 4040-5072</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-wedesc-yellow mr-3 flex-shrink-0" />
                <span className="text-gray-300">contato@wedesc.com.br</span>
              </li>
            </ul>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center bg-wedesc-yellow hover:bg-wedesc-yellow/90 text-black px-6 py-3 rounded-md transition-colors"
              >
                <span>Fale Conosco</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center cursor-pointer text-gray-700 transition-colors duration-300 hover:text-gray-400">
          <p>
            © {currentYear} WeDesc. Soluções em Tecnologia. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
