import { Shield, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1: Logo e Descrição */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold text-white">T3 Diligence</span>
            </Link>
            <p className="text-sm">
              Transformando a diligência jurídica e imobiliária com tecnologia, automação e inteligência artificial.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Coluna 2: Produto */}
          <div>
            <h3 className="font-semibold text-white mb-4">Produto</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white">Funcionalidades</a></li>
              <li><a href="#plans" className="hover:text-white">Planos</a></li>
              <li><a href="#" className="hover:text-white">MatrículaLens</a></li>
              <li><a href="#" className="hover:text-white">Risk Mapper</a></li>
              <li><a href="#" className="hover:text-white">CláusulaCopilot</a></li>
            </ul>
          </div>

          {/* Coluna 3: Empresa */}
          <div>
            <h3 className="font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#contact" className="hover:text-white">Contato</a></li>
              <li><a href="#" className="hover:text-white">Trabalhe Conosco</a></li>
              <li>
                <Link to="/master/visao-geral" className="flex items-center hover:text-white">
                  <Settings className="w-4 h-4 mr-2" />
                  <span>Painel Master</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                <span>Av. Paulista, 1000, São Paulo - SP, CEP: 01310-100</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3" />
                <span>(11) 4002-8922</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3" />
                <span>contato@t3diligence.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} T3 Diligence. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};