import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold text-primary tracking-wider uppercase">Plataforma de Inteligência Jurídica</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight my-4">
              A Plataforma Definitiva para <span className="text-primary">Diligência Jurídica</span> e Imobiliária
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Automatize processos, mitigue riscos e feche negócios com mais segurança e velocidade. Transforme sua operação com a T3 Diligence.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link to="/app">
                <Button size="lg">Começar Teste Gratuito de 14 Dias</Button>
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <img src="/placeholder.svg" alt="Advogado utilizando a plataforma T3 Diligence" className="rounded-lg shadow-2xl w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};