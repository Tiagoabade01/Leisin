import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} T3 Diligence. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Termos de Serviço</a>
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <Link to="/master/visao-geral" title="Acessar Área Administrativa" className="hover:text-white">
              <Shield className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};