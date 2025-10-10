import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Shield className={cn("w-7 h-7 transition-colors", isScrolled ? "text-primary" : "text-white")} />
          <span className={cn("text-xl font-bold transition-colors", isScrolled ? "text-foreground" : "text-white")}>T3 Diligence</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className={cn("transition-colors text-sm", isScrolled ? "text-muted-foreground hover:text-primary" : "text-gray-300 hover:text-white")}>Funcionalidades</a>
          <a href="#plans" className={cn("transition-colors text-sm", isScrolled ? "text-muted-foreground hover:text-primary" : "text-gray-300 hover:text-white")}>Planos</a>
          <a href="#contact" className={cn("transition-colors text-sm", isScrolled ? "text-muted-foreground hover:text-primary" : "text-gray-300 hover:text-white")}>Contato</a>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/app">
            <Button variant="ghost" className={cn(isScrolled ? "text-foreground hover:text-primary" : "text-white hover:bg-white/10 hover:text-white")}>Login</Button>
          </Link>
          <Link to="/app">
            <Button className={cn(isScrolled ? "bg-primary text-primary-foreground" : "bg-white text-primary hover:bg-gray-200")}>Agendar demonstração</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};