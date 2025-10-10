import { Shield, MapPin, Phone, Mail, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-secondary text-muted-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-white">T3 Diligence</span>
            </div>
            <p className="text-sm max-w-xs">
              A nova inteligência jurídica da era digital. Uma solução T3 NEXO.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h3 className="font-semibold text-white mb-4">Plataforma</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-primary transition-colors">Jurídico Operacional</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Compliance & Risco</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Imobiliário Integrado</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Financeiro & Contábil</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">CRM Jurídico</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">IA & Automação</a></li>
            </ul>
          </div>

          {/* Column 3: Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#clients" className="hover:text-primary transition-colors">Cases de Sucesso</a></li>
              <li><a href="#plans" className="hover:text-primary transition-colors">Planos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>Av. Faria Lima, 4055, Itaim Bibi, São Paulo - SP, 04538-133</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+5511999998888" className="hover:text-primary transition-colors">(11) 99999-8888</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:contato@t3diligence.com" className="hover:text-primary transition-colors">contato@t3diligence.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} T3 Diligence. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
            <Link to="/master/visao-geral" title="Acessar Área Administrativa" className="hover:text-primary transition-colors">
              <Shield className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};