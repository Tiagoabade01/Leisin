import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="w-7 h-7 text-primary" />
          <span className="text-xl font-bold text-foreground">leisim</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm text-muted-foreground hover:text-primary">Funcionalidades</a>
          <a href="#plans" className="text-sm text-muted-foreground hover:text-primary">Planos</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-primary">Contato</a>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/app">
            <Button variant="ghost" className="text-foreground hover:text-primary">Login</Button>
          </Link>
          <Link to="/app">
            <Button>Agendar demonstração</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};