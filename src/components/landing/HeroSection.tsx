import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container text-center">
        <div className="bg-primary/10 text-primary font-semibold rounded-full px-4 py-1 inline-block mb-4">
          A plataforma jurídica que impulsiona seu negócio
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          Inteligência Jurídica,{' '}
          <span className="text-primary">Resultados Exponenciais</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
          Automatize tarefas, gerencie processos e obtenha insights valiosos com a Leisin. A solução completa para departamentos jurídicos e escritórios de advocacia modernos.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link to="/login">Começar Agora (É Grátis)</Link>
          </Button>
          <Button size="lg" variant="outline">
            Agendar Demonstração
          </Button>
        </div>
      </div>
    </section>
  );
};