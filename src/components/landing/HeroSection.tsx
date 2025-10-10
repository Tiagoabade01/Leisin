import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold text-primary tracking-wider uppercase">Software Jurídico para Advogados | Plataforma Jurídica</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight my-4">
              Software de Gestão Jurídica <span className="text-primary">Completo</span> para Escritórios e Departamentos Jurídicos
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Automatize rotinas, acompanhe grandes volumes de processos, aumente a produtividade e ganhe mais inteligência estratégica com um software de gestão jurídica completo.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link to="/app">
                <Button size="lg">Solicite uma demonstração</Button>
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