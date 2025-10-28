import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const PlatformPreviewSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4 text-white">Visualize o Futuro da sua Operação Jurídica</h2>
            <p className="text-gray-300 mb-6">
              Nossa plataforma transforma dados complexos em insights claros e acionáveis, permitindo que você se concentre no que realmente importa: a estratégia.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-gray-200">
                <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                Analise matrículas imobiliárias em segundos com o <strong className="text-white">MatrículaLens</strong>.
              </li>
              <li className="flex items-start text-gray-200">
                <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                Gere minutas contratuais inteligentes com o <strong className="text-white">CláusulaCopilot</strong>.
              </li>
              <li className="flex items-start text-gray-200">
                <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                Mapeie conexões e riscos societários com o <strong className="text-white">Risk Mapper</strong>.
              </li>
            </ul>
            <a href="#contact">
              <Button>Solicite uma demonstração</Button>
            </a>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-3">
              <div className="rounded-lg overflow-hidden ring-1 ring-gray-700/60 bg-gray-800">
                <img
                  src="/placeholder.svg"
                  alt="Demonstração da Inteligência Artificial da plataforma"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">Preview ilustrativo das capacidades de IA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};