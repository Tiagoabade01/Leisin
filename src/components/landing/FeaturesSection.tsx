import { BrainCircuit, Share2, FileCog, ShieldCheck, Briefcase, Wallet } from 'lucide-react';

const features = [
  { icon: <BrainCircuit className="w-7 h-7 text-white" />, title: "IA Jurídica Avançada", description: "Analise matrículas, contratos e certidões em segundos com nossa IA treinada (MatrículaLens & CláusulaCopilot)." },
  { icon: <Share2 className="w-7 h-7 text-white" />, title: "Risk Mapper Integrado", description: "Visualize grafos de relações complexas entre pessoas, empresas e imóveis para identificar riscos ocultos." },
  { icon: <FileCog className="w-7 h-7 text-white" />, title: "Automação de Documentos", description: "Gere dossiês completos, relatórios de diligência e minutas de contrato com base em seus templates." },
  { icon: <ShieldCheck className="w-7 h-7 text-white" />, title: "Compliance Centralizado", description: "Monitore certidões, processos e pendências de forma automática, garantindo conformidade contínua." },
  { icon: <Briefcase className="w-7 h-7 text-white" />, title: "Gestão de Casos", description: "Organize todos os seus casos, tarefas, prazos e documentos em um único local acessível para toda a equipe." },
  { icon: <Wallet className="w-7 h-7 text-white" />, title: "Módulo Financeiro", description: "Controle honorários, custos de projeto e faturamento, integrando a operação jurídica à gestão financeira." },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-secondary text-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Uma plataforma, <span className="text-primary">infinitas possibilidades</span></h2>
          <p className="text-lg text-muted-foreground mt-2">Ferramentas poderosas para cada etapa da sua operação.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="bg-primary p-6 rounded-lg text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white font-sans">{feature.title}</h3>
              <p className="opacity-90 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};