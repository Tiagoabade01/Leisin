import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-background text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-muted-foreground">
              A nova inteligência jurídica da era digital.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 mb-8">
              Automatize contratos, due diligences, análises de risco e gestão de escritórios em uma única plataforma.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
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
          <div className="relative hidden md:block">
            <div className="absolute -inset-2 bg-primary/10 rounded-3xl blur-2xl opacity-50"></div>
            <img 
              src="/placeholder.svg" 
              alt="Plataforma T3 Diligence" 
              className="relative w-full h-auto rounded-2xl shadow-2xl shadow-primary/10 border border-secondary" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};