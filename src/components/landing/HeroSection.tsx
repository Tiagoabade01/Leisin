import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-background text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{ backgroundImage: "url('/img/hero-background.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-muted-foreground">
          A nova inteligência jurídica da era digital.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Automatize contratos, due diligences, análises de risco e gestão de escritórios em uma única plataforma.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/app">
            <Button size="lg">Ver Demonstração</Button>
          </Link>
          <Link to="/app">
            <Button size="lg" variant="outline" className="text-white border-secondary hover:bg-secondary hover:text-white">
              Solicitar Acesso
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};