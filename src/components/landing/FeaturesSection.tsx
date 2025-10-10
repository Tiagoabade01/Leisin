import { BrainCircuit, Share2, FileCog, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary" />,
    title: "IA Jurídica Avançada",
    description: "Analise matrículas, contratos e certidões em segundos com nossa IA treinada para o mercado brasileiro."
  },
  {
    icon: <Share2 className="w-10 h-10 text-primary" />,
    title: "Risk Mapper Integrado",
    description: "Visualize grafos de relações complexas entre pessoas, empresas e imóveis para identificar riscos ocultos."
  },
  {
    icon: <FileCog className="w-10 h-10 text-primary" />,
    title: "Automação de Documentos",
    description: "Gere dossiês completos, minutas de contrato e relatórios de due diligence com um único clique."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Compliance Simplificado",
    description: "Monitore certidões, prazos e obrigações de forma automática, garantindo conformidade contínua."
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Uma Plataforma, Controle Total</h2>
          <p className="text-lg text-gray-400 mt-2">Do operacional ao estratégico, tudo que seu escritório precisa.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};