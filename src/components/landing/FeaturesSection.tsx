import React, { useState } from 'react';
import { 
  LayoutDashboard, Briefcase, ListChecks, Shield, Building, Wallet, Calculator, MessageSquare, 
  Handshake, BrainCircuit, Building2, Wrench, Book, Lock, LucideIcon 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    id: 'dashboard',
    icon: LayoutDashboard,
    title: "Dashboard Executivo",
    description: "Tenha uma visão 360º da sua operação. Acompanhe KPIs em tempo real, performance jurídica, riscos de compliance e atividades recentes em um painel centralizado, projetado para a tomada de decisão estratégica.",
    image: "/placeholder.svg"
  },
  {
    id: 'juridico',
    icon: Briefcase,
    title: "Jurídico Operacional",
    description: "O coração do sistema. Gerencie casos e processos, controle contratos e obrigações, registre tarefas e timesheets, e organize todos os documentos em um único local seguro e de fácil acesso para toda a equipe.",
    image: "/placeholder.svg"
  },
  {
    id: 'tarefas',
    icon: ListChecks,
    title: "Gestão de Tarefas e Prazos",
    description: "Nunca mais perca um prazo. Utilize quadros Kanban, gerencie prazos processuais com alertas automáticos, organize sua agenda e defina SLAs para garantir a máxima produtividade e eficiência do seu time.",
    image: "/placeholder.svg"
  },
  {
    id: 'compliance',
    icon: Shield,
    title: "Compliance e Análise de Risco",
    description: "Mitigue riscos com ferramentas poderosas. Realize Due Diligence corporativa, automatize a busca de certidões, visualize grafos de relações com o Risk Mapper e conduza auditorias de conformidade com total segurança.",
    image: "/placeholder.svg"
  },
  {
    id: 'imobiliario',
    icon: Building,
    title: "Imobiliário Integrado",
    description: "A solução definitiva para o setor imobiliário. Cadastre imóveis e terrenos, realize análises jurídico-urbanísticas, crie dossiês de propriedade completos e integre-se diretamente com sistemas cartoriais.",
    image: "/placeholder.svg"
  },
  {
    id: 'financeiro',
    icon: Wallet,
    title: "Financeiro",
    description: "Controle total sobre as finanças do seu escritório. Gerencie contas a pagar e a receber, visualize o fluxo de caixa, crie orçamentos por projeto e gere relatórios financeiros detalhados para uma gestão precisa.",
    image: "/placeholder.svg"
  },
  {
    id: 'contabil',
    icon: Calculator,
    title: "Contábil",
    description: "Simplifique sua contabilidade. Organize lançamentos por centro de custo, gere DREs e balancetes, prepare relatórios fiscais e integre-se facilmente com os principais sistemas contábeis do mercado.",
    image: "/placeholder.svg"
  },
  {
    id: 'comunicacao',
    icon: MessageSquare,
    title: "Comunicação Unificada",
    description: "Centralize a comunicação com clientes e equipe. Utilize uma inbox unificada (Email, WhatsApp), mantenha históricos de conversas, agende notificações e use nosso Chat Copilot com IA para respostas rápidas.",
    image: "/placeholder.svg"
  },
  {
    id: 'crm',
    icon: Handshake,
    title: "CRM Jurídico",
    description: "Fortaleça o relacionamento com seus clientes. Gerencie o pipeline de oportunidades, cadastre clientes e parceiros, controle tarefas de follow-up e elabore propostas, tudo dentro da mesma plataforma.",
    image: "/placeholder.svg"
  },
  {
    id: 'ia',
    icon: BrainCircuit,
    title: "IA e Automação",
    description: "O futuro da advocacia, hoje. Use o CláusulaCopilot para redigir contratos, o MatrículaLens para analisar matrículas em segundos, crie playbooks de operações e gere dossiês automáticos com nossa IA de ponta.",
    image: "/placeholder.svg"
  },
  {
    id: 'filiais',
    icon: Building2,
    title: "Gestão de Filiais",
    description: "Para escritórios com múltiplas unidades. Cadastre filiais, gerencie equipes e responsáveis, controle faturamento e custos por unidade e consolide relatórios para uma visão completa do seu grupo.",
    image: "/placeholder.svg"
  },
  {
    id: 'gestao',
    icon: Wrench,
    title: "Gestão e Core da Plataforma",
    description: "Personalize a plataforma para o seu negócio. Gerencie usuários e permissões, customize campos e fluxos de trabalho, realize auditorias de segurança e controle licenças e faturamento (billing).",
    image: "/placeholder.svg"
  },
  {
    id: 'biblioteca',
    icon: Book,
    title: "Biblioteca Jurídica Inteligente",
    description: "Seu conhecimento, centralizado e potencializado. Armazene leis, jurisprudência e modelos internos. Utilize a pesquisa por IA para encontrar informações relevantes em segundos e mantenha um histórico de revisões.",
    image: "/placeholder.svg"
  },
  {
    id: 'governanca',
    icon: Lock,
    title: "Governança & LGPD",
    description: "Garanta a conformidade e a segurança dos dados. Gerencie políticas e termos, controle o acesso a dados sensíveis, audite acessos e prepare-se para responder a incidentes de acordo com a LGPD.",
    image: "/placeholder.svg"
  }
];

export const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const selectedFeature = features.find(f => f.id === activeFeature) || features[0];

  return (
    <section id="features" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Uma plataforma, <span className="text-primary">infinitas possibilidades</span></h2>
          <p className="text-lg text-gray-400 mt-2">Explore os módulos que transformarão sua operação jurídica.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Coluna de Seleção de Módulos */}
          <div className="lg:col-span-1 space-y-2">
            {features.map(feature => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={cn(
                  "w-full flex items-center text-left p-3 rounded-lg transition-colors duration-200",
                  activeFeature === feature.id 
                    ? "bg-primary text-white" 
                    : "hover:bg-gray-800 text-gray-300"
                )}
              >
                <feature.icon className={cn("w-5 h-5 mr-4 flex-shrink-0", activeFeature === feature.id ? "text-white" : "text-primary")} />
                <span className="font-medium">{feature.title}</span>
              </button>
            ))}
          </div>

          {/* Coluna de Exibição do Conteúdo */}
          <div className="lg:col-span-2 sticky top-24">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div key={selectedFeature.id} className="animate-fade-in">
                <img src={selectedFeature.image} alt={selectedFeature.title} className="w-full h-64 object-cover rounded-md mb-6 bg-gray-700" />
                <h3 className="text-2xl font-bold text-white mb-3 font-sans">{selectedFeature.title}</h3>
                <p className="text-gray-300">{selectedFeature.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};