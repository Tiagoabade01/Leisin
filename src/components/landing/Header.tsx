import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="w-7 h-7 text-white" />
          <span className="text-xl font-bold text-white">T3 Diligence</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Funcionalidades</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Planos</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Contato</a>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/app">
            <Button variant="ghost" className="text-white hover:bg-gray-800">Login</Button>
          </Link>
          <Link to="/app">
            <Button>Começar Agora</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};