import { 
  LayoutDashboard, Briefcase, ListChecks, Shield, Building, Wallet, Calculator, MessageSquare, 
  Handshake, BrainCircuit, Building2, Wrench, Book, Lock
} from 'lucide-react';

const features = [
  { icon: LayoutDashboard, title: "Dashboard Executivo", description: "Visão 360º da sua operação com KPIs em tempo real para decisões estratégicas." },
  { icon: Briefcase, title: "Jurídico Operacional", description: "Gerencie casos, contratos, tarefas e documentos em um local centralizado e seguro." },
  { icon: ListChecks, title: "Gestão de Tarefas e Prazos", description: "Nunca mais perca um prazo com quadros Kanban, alertas e automação de SLAs." },
  { icon: Shield, title: "Compliance e Análise de Risco", description: "Mitigue riscos com Due Diligence, Risk Mapper e auditorias de conformidade." },
  { icon: Building, title: "Imobiliário Integrado", description: "Solução completa para o setor, com dossiês de propriedade e integrações cartoriais." },
  { icon: Wallet, title: "Financeiro", description: "Controle contas a pagar/receber, fluxo de caixa e orçamentos por projeto." },
  { icon: Calculator, title: "Contábil", description: "Simplifique sua contabilidade com centros de custo, DREs e integrações." },
  { icon: MessageSquare, title: "Comunicação Unificada", description: "Centralize E-mail e WhatsApp, com históricos e Chat Copilot com IA." },
  { icon: Handshake, title: "CRM Jurídico", description: "Gerencie o pipeline de oportunidades, clientes e propostas de forma integrada." },
  { icon: BrainCircuit, title: "IA e Automação", description: "Use IA para analisar matrículas, redigir cláusulas e automatizar dossiês." },
  { icon: Building2, title: "Gestão de Filiais", description: "Controle equipes, faturamento e relatórios consolidados de múltiplas unidades." },
  { icon: Wrench, title: "Gestão / Core", description: "Personalize a plataforma, gerencie usuários, permissões e faturamento." },
  { icon: Book, title: "Biblioteca Jurídica", description: "Centralize seu conhecimento com pesquisa por IA em leis, modelos e jurisprudência." },
  { icon: Lock, title: "Governança & LGPD", description: "Garanta a conformidade com controle de dados sensíveis e auditoria de acessos." },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Uma plataforma, <span className="text-primary">infinitas possibilidades</span></h2>
          <p className="text-lg text-muted-foreground mt-2">Explore os módulos que transformarão sua operação jurídica.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="bg-card p-6 rounded-lg shadow-sm border hover:border-primary hover:-translate-y-1 transition-all duration-300">
              <feature.icon className="w-7 h-7 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2 font-sans">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};