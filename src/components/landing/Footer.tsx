import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 text-muted-foreground border-t border-secondary">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2">
            <p>&copy; {new Date().getFullYear()} T3 Diligence • Uma solução T3 NEXO</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white text-sm">Termos</a>
            <a href="#" className="hover:text-white text-sm">Privacidade</a>
            <Link to="/master/visao-geral" title="Acessar Área Administrativa" className="hover:text-white">
              <Shield className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};