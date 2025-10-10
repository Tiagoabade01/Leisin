import { BrainCircuit, Share2, FileCog, ShieldCheck, Briefcase, Wallet } from 'lucide-react';

const features = [
  { icon: <BrainCircuit className="w-7 h-7 text-white" />, title: "IA Jurídica Avançada", description: "Extraia dados, identifique cláusulas de risco e resuma matrículas imobiliárias complexas em segundos. Nossa IA, treinada por especialistas, acelera sua análise e reduz erros humanos drasticamente." },
  { icon: <Share2 className="w-7 h-7 text-white" />, title: "Risk Mapper Integrado", description: "Navegue por um mapa visual de conexões societárias, processos e vínculos imobiliários. O Risk Mapper revela relações que passariam despercebidas, antecipando riscos de compliance e fraude." },
  { icon: <FileCog className="w-7 h-7 text-white" />, title: "Automação de Documentos", description: "Crie dossiês de due diligence, relatórios personalizados e minutas contratuais padronizadas com um único clique. Integre seus próprios templates e garanta consistência e agilidade." },
  { icon: <ShieldCheck className="w-7 h-7 text-white" />, title: "Compliance Centralizado", description: "Automatize o monitoramento de CNDs, processos judiciais e pendências. Receba alertas proativos sobre vencimentos e alterações, mantendo seus casos e clientes sempre em conformidade." },
  { icon: <Briefcase className="w-7 h-7 text-white" />, title: "Gestão de Casos", description: "Centralize todas as informações de seus casos, desde documentos e prazos até tarefas e timesheets. Colabore com sua equipe em um ambiente seguro e organizado, com visibilidade total." },
  { icon: <Wallet className="w-7 h-7 text-white" />, title: "Módulo Financeiro", description: "Faça a gestão de honorários, custas processuais e faturamento por caso ou cliente. Tenha uma visão clara da rentabilidade do seu escritório e otimize seu fluxo de caixa." },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Uma plataforma, <span className="text-primary">infinitas possibilidades</span></h2>
          <p className="text-lg text-gray-400 mt-2">Ferramentas poderosas para cada etapa da sua operação.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="bg-primary p-6 rounded-lg shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300">
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