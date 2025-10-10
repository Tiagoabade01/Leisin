import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const PlatformPreviewSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">IA Jurídica: Assistente com IA da T3 Diligence</h2>
            <p className="text-muted-foreground mb-6">
              Acelere a leitura de publicações e melhore a tomada de decisão das análises processuais com insights gerados pela nossa IA.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Resumos automáticos para elaboração de estratégias.</span></li>
              <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Interpretação processual com teses de defesa e jurisprudência.</span></li>
              <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Agendamento automático de audiências.</span></li>
            </ul>
            <Button>Solicite uma demonstração</Button>
          </div>
          <div className="order-1 md:order-2">
            <img src="/placeholder.svg" alt="Demonstração da Inteligência Artificial da plataforma" className="rounded-lg shadow-xl w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};