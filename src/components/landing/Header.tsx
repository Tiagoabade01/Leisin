import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link to="/" className="flex items-center gap-2 mr-6">
          <Shield className="w-6 h-6 text-primary" />
          <span className="font-bold">leisin</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <a href="#features" className="text-muted-foreground transition-colors hover:text-foreground">
            Funcionalidades
          </a>
          <a href="#pricing" className="text-muted-foreground transition-colors hover:text-foreground">
            Preços
          </a>
          <a href="#contact" className="text-muted-foreground transition-colors hover:text-foreground">
            Contato
          </a>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" asChild>
            <Link to="/login">Entrar</Link>
          </Button>
          <Button asChild>
            <Link to="/login">Cadastre-se Grátis</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};