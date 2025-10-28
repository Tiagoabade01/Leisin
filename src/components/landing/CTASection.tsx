import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section id="comece-agora" className="py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl border">
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop"
            alt="Visão da plataforma"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="relative p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Pronto para elevar sua operação jurídica?</h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
              Comece grátis agora e ative o Copilot para o seu time em minutos.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/login">Começar Agora (Grátis)</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Agendar Demonstração</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};