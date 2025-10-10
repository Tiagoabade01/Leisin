import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-secondary">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="w-7 h-7 text-primary" />
          <span className="text-xl font-bold text-white">T3 Diligence</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-muted-foreground hover:text-white transition-colors">Funcionalidades</a>
          <a href="#plans" className="text-muted-foreground hover:text-white transition-colors">Planos</a>
          <a href="#contact" className="text-muted-foreground hover:text-white transition-colors">Contato</a>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/app">
            <Button variant="ghost" className="text-white hover:bg-secondary">Login</Button>
          </Link>
          <Link to="/app">
            <Button>Solicitar Acesso</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};