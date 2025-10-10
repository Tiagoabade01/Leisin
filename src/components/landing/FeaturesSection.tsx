import { Briefcase, FileSignature, SearchCheck, BrainCircuit, Wallet, Handshake } from 'lucide-react';

const features = [
  { icon: <Briefcase className="w-8 h-8 text-primary" />, title: "Gestão Jurídica", description: "Casos, timesheets e documentos." },
  { icon: <FileSignature className="w-8 h-8 text-primary" />, title: "Contratos Inteligentes", description: "Automação de minutas e assinaturas." },
  { icon: <SearchCheck className="w-8 h-8 text-primary" />, title: "Due Diligence IA", description: "Análise de risco em segundos." },
  { icon: <BrainCircuit className="w-8 h-8 text-primary" />, title: "Inteligência de Mercado", description: "Insights para operações imobiliárias." },
  { icon: <Wallet className="w-8 h-8 text-primary" />, title: "Financeiro", description: "Honorários, faturamento e DRE." },
  { icon: <Handshake className="w-8 h-8 text-primary" />, title: "CRM", description: "Gestão de clientes e parceiros." },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-background text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Uma Plataforma. Controle Absoluto.</h2>
          <p className="text-lg text-muted-foreground mt-2">Do operacional ao estratégico, a T3 Diligence centraliza tudo.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-secondary/50 p-6 rounded-lg border border-transparent hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};