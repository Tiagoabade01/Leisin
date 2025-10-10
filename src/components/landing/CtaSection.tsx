import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const CtaSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para revolucionar seu escritório?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Junte-se a centenas de escritórios que já estão operando no futuro da advocacia. Comece seu teste gratuito de 14 dias, sem compromisso.</p>
        <Link to="/app">
          <Button size="lg">Começar Agora</Button>
        </Link>
      </div>
    </section>
  );
};