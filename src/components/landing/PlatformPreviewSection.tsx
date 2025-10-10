import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const PlatformPreviewSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">Visualize o Futuro da sua Operação Jurídica</h2>
            <p className="text-muted-foreground mb-6">
              Nossa plataforma transforma dados complexos em insights claros e acionáveis, permitindo que você se concentre no que realmente importa: a estratégia.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Analise matrículas imobiliárias em segundos com o <strong>MatrículaLens</strong>.</span></li>
              <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Gere minutas contratuais inteligentes com o <strong>CláusulaCopilot</strong>.</span></li>
              <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Mapeie conexões e riscos societários com o <strong>Risk Mapper</strong>.</span></li>
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