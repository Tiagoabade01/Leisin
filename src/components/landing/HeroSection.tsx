import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          A Inteligência Jurídica que Transforma sua Operação
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          Automatize processos, mitigue riscos e feche negócios com mais segurança e velocidade. A T3 Diligence é a plataforma definitiva para escritórios de advocacia e departamentos jurídicos modernos.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/app">
            <Button size="lg">Começar Teste Gratuito</Button>
          </Link>
          <Link to="/app">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
              Agendar Demonstração
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};