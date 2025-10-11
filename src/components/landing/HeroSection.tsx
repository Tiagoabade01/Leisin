import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className="relative text-white bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg" // NOTA: Substitua por uma imagem de fundo de alta qualidade
          alt="Advogado em um escritório moderno"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="min-h-[70vh] flex items-center py-20">
          <div className="max-w-2xl text-center md:text-left">
            <p className="text-sm font-semibold text-primary tracking-wider uppercase">Plataforma de Inteligência Jurídica</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight my-4 font-serif text-white">
              A Plataforma Definitiva para <span className="text-primary">Diligência Jurídica</span> e Imobiliária
            </h1>
            <p className="text-lg text-gray-300 mb-8 font-sans">
              Automatize processos, mitigue riscos e feche negócios com mais segurança e velocidade. Transforme sua operação com a T3norma.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link to="/app">
                <Button size="lg">Começar Teste Gratuito de 14 Dias</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};