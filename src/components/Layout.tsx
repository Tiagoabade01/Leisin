import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Home, BarChart2, Activity, AlertTriangle, FileText, Download,
  Briefcase, FolderKanban, Signature, ListTodo, Users,
  Shield, SearchCheck, BarChart, FileBadge, Share2, CheckSquare,
  Building, ScanSearch, BookCopy, Plug, FileOutput,
  ArrowLeftRight, TrendingUp, Wallet, PieChart,
  Calculator, Landmark, FileSpreadsheet, FileClock, Link,
  MessageSquare, Inbox, History, Bell, Bot,
  Handshake, Filter, Contact, CalendarCheck, FilePenLine,
  BrainCircuit, ScanText, Microscope, BookOpen, FileCog,
  Building2, Users2, DollarSign, AreaChart, Combine,
  Settings, Store, ExternalLink, Ticket, SlidersHorizontal,
  Wrench, Palette, Cog, ShieldCheck, Receipt,
  Book, Scale, Files, Search, HistoryIcon,
  Lock, DatabaseZap, ShieldAlert, FileLock, Siren,
  ChevronDown, ChevronsLeft, ChevronsRight, ListChecks, KanbanSquare, Calendar, Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

const navItems = [
  {
    title: "Dashboard",
    icon: Home,
    subItems: [
      { to: "/", label: "Visão Executiva", icon: BarChart2 },
      { to: "/dashboard/performance-juridica", label: "Performance Jurídica", icon: Activity },
      { to: "/dashboard/riscos-compliance", label: "Riscos e Compliance", icon: AlertTriangle },
      { to: "/dashboard/atividades-recentes", label: "Atividades Recentes", icon: FileText },
      { to: "/dashboard/relatorios-exportacoes", label: "Relatórios e Exportações", icon: Download },
    ]
  },
  {
    title: "Jurídico Operacional",
    icon: Briefcase,
    subItems: [
      { to: "/juridico/casos-processos", label: "Casos e Processos", icon: FolderKanban },
      { to: "/juridico/contratos-obrigacoes", label: "Contratos e Obrigações", icon: Signature },
      { to: "/juridico/tarefas-timesheets", label: "Tarefas e Timesheets", icon: ListTodo },
      { to: "/juridico/documentos-relatorios", label: "Documentos e Relatórios", icon: FileText },
      { to: "/juridico/clientes-juridicos", label: "Clientes Jurídicos", icon: Users },
    ]
  },
  {
    title: "Tarefas",
    icon: ListChecks,
    subItems: [
      { to: "/tarefas/minha-caixa", label: "Minha Caixa", icon: Inbox },
      { to: "/tarefas/quadros-kanban", label: "Quadros (Kanban)", icon: KanbanSquare },
      { to: "/tarefas/prazos-processuais", label: "Prazos Processuais", icon: Scale },
      { to: "/tarefas/agenda-calendario", label: "Agenda & Calendário", icon: Calendar },
      { to: "/tarefas/slas-automacao", label: "SLAs & Automação", icon: Zap },
    ]
  },
  {
    title: "Compliance / Risco",
    icon: Shield,
    subItems: [
      { to: "/compliance/due-diligence-corporativa", label: "Due Diligence Corporativa", icon: SearchCheck },
      { to: "/compliance/analises-risco", label: "Análises de Risco", icon: BarChart },
      { to: "/compliance/certidoes-documentos-oficiais", label: "Certidões e Documentos", icon: FileBadge },
      { to: "/compliance/risk-mapper", label: "Risk Mapper", icon: Share2 },
      { to: "/compliance/conformidade-auditoria", label: "Conformidade e Auditoria", icon: CheckSquare },
    ]
  },
  {
    title: "Imobiliário Integrado",
    icon: Building,
    subItems: [
      { to: "/imobiliario/cadastro-imoveis", label: "Cadastro de Imóveis", icon: Building },
      { to: "/imobiliario/analise-juridico-urbanistica", label: "Análise Jurídico-Urbanística", icon: ScanSearch },
      { to: "/imobiliario/dossies-propriedade", label: "Dossiês de Propriedade", icon: BookCopy },
      { to: "/imobiliario/integracoes-cartoriais", label: "Integrações Cartoriais", icon: Plug },
      { to: "/imobiliario/relatorios-imovel", label: "Relatórios de Imóvel", icon: FileOutput },
    ]
  },
  {
    title: "Financeiro",
    icon: DollarSign,
    subItems: [
      { to: "/financeiro/contas-pagar", label: "Contas a Pagar", icon: ArrowLeftRight },
      { to: "/financeiro/contas-receber", label: "Contas a Receber", icon: TrendingUp },
      { to: "/financeiro/fluxo-caixa", label: "Fluxo de Caixa", icon: Wallet },
      { to: "/financeiro/gestao-orcamento", label: "Gestão de Orçamento", icon: PieChart },
      { to: "/financeiro/relatorios-financeiros", label: "Relatórios Financeiros", icon: BarChart2 },
    ]
  },
  {
    title: "Contábil",
    icon: Calculator,
    subItems: [
      { to: "/contabil/centro-custos", label: "Centro de Custos", icon: Landmark },
      { to: "/contabil/lancamentos-contabeis", label: "Lançamentos Contábeis", icon: FileSpreadsheet },
      { to: "/contabil/dre-balancetes", label: "DRE e Balancetes", icon: BarChart },
      { to: "/contabil/relatorios-fiscais", label: "Relatórios Fiscais", icon: FileClock },
      { to: "/contabil/integracoes-contabeis", label: "Integrações Contábeis", icon: Link },
    ]
  },
  {
    title: "Comunicação",
    icon: MessageSquare,
    subItems: [
      { to: "/comunicacao/inbox-unificada", label: "Inbox Unificada", icon: Inbox },
      { to: "/comunicacao/conversas-historicos", label: "Conversas e Históricos", icon: History },
      { to: "/comunicacao/notificacoes-agendamentos", label: "Notificações e Agendamentos", icon: Bell },
      { to: "/comunicacao/mensagens-oficiais", label: "Mensagens Oficiais", icon: FileText },
      { to: "/comunicacao/chat-copilot", label: "Chat Copilot (IA)", icon: Bot },
    ]
  },
  {
    title: "CRM Jurídico",
    icon: Handshake,
    subItems: [
      { to: "/crm/pipeline-oportunidades", label: "Pipeline de Oportunidades", icon: Filter },
      { to: "/crm/clientes", label: "Clientes", icon: Contact },
      { to: "/crm/parceiros-comerciais", label: "Parceiros Comerciais", icon: Users },
      { to: "/crm/tarefas-followups", label: "Tarefas e Follow-ups", icon: CalendarCheck },
      { to: "/crm/propostas-negociacoes", label: "Propostas e Negociações", icon: FilePenLine },
    ]
  },
  {
    title: "IA e Automação",
    icon: BrainCircuit,
    subItems: [
      { to: "/ia/central", label: "IA Central (Jurídica)", icon: BrainCircuit },
      { to: "/ia/clausula-copilot", label: "CláusulaCopilot", icon: ScanText },
      { to: "/ia/matricula-lens", label: "MatrículaLens", icon: Microscope },
      { to: "/ia/playbooks-operacoes", label: "Playbooks de Operações", icon: BookOpen },
      { to: "/ia/dossies-automaticos", label: "Dossiês Automáticos", icon: FileCog },
    ]
  },
  {
    title: "Filiais",
    icon: Building2,
    subItems: [
      { to: "/filiais/cadastro-dados-gerais", label: "Cadastro e Dados Gerais", icon: Building2 },
      { to: "/filiais/equipes-responsaveis", label: "Equipes e Responsáveis", icon: Users2 },
      { to: "/filiais/faturamento-custos", label: "Faturamento e Custos", icon: DollarSign },
      { to: "/filiais/indicadores-performance", label: "Indicadores de Performance", icon: AreaChart },
      { to: "/filiais/relatorios-consolidados", label: "Relatórios Consolidados", icon: Combine },
    ]
  },
  {
    title: "Área Master",
    icon: Settings,
    subItems: [
      { to: "/master/painel", label: "Painel Master", icon: Settings },
      { to: "/master/marketplace", label: "Marketplace de Extensões", icon: Store },
      { to: "/master/portais-externos", label: "Portais Externos", icon: ExternalLink },
      { to: "/master/planos-licencas", label: "Planos e Licenças", icon: Ticket },
      { to: "/master/configuracoes-avancadas", label: "Configurações Avançadas", icon: SlidersHorizontal },
    ]
  },
  {
    title: "Gestão / Core",
    icon: Wrench,
    subItems: [
      { to: "/gestao/usuarios-permissoes", label: "Usuários e Permissões", icon: Users },
      { to: "/gestao/personalizacao-plataforma", label: "Personalização da Plataforma", icon: Palette },
      { to: "/gestao/configuracoes-gerais", label: "Configurações Gerais", icon: Cog },
      { to: "/gestao/auditoria-seguranca", label: "Auditoria e Segurança", icon: ShieldCheck },
      { to: "/gestao/licencas-billing", label: "Licenças e Billing", icon: Receipt },
    ]
  },
  {
    title: "Biblioteca Jurídica",
    icon: Book,
    subItems: [
      { to: "/biblioteca/leis-decretos", label: "Leis e Decretos", icon: Scale },
      { to: "/biblioteca/jurisprudencia-pareceres", label: "Jurisprudência e Pareceres", icon: Files },
      { to: "/biblioteca/modelos-internos", label: "Modelos Internos", icon: FileText },
      { to: "/biblioteca/pesquisa-ia", label: "Pesquisa por IA", icon: Search },
      { to: "/biblioteca/historico-revisoes", label: "Histórico e Revisões", icon: HistoryIcon },
    ]
  },
  {
    title: "Governança & LGPD",
    icon: Lock,
    subItems: [
      { to: "/governanca/politicas-termos", label: "Políticas e Termos", icon: FileLock },
      { to: "/governanca/controle-dados-sensiveis", label: "Controle de Dados Sensíveis", icon: DatabaseZap },
      { to: "/governanca/auditoria-acessos", label: "Auditoria de Acessos", icon: ShieldAlert },
      { to: "/governanca/relatorios-conformidade", label: "Relatórios de Conformidade", icon: FileBadge },
      { to: "/governanca/incident-response", label: "Incident Response", icon: Siren },
    ]
  },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const findOpenSection = () => {
    if (location.pathname === "/") {
      return "Dashboard";
    }
    return navItems.find(section => 
      section.subItems.some(item => location.pathname.startsWith(item.to) && item.to !== "/")
    )?.title || null;
  };

  const [openSection, setOpenSection] = useState<string | null>(findOpenSection());

  return (
    <aside
      className={cn(
        "hidden md:flex flex-col bg-gray-900 text-gray-200 border-r border-gray-700 transition-all duration-300 ease-in-out relative" ,
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-6 -right-3 z-10 h-6 w-6 rounded-full bg-gray-800 text-gray-400 border-2 border-gray-700 hover:bg-gray-700 hover:text-white"
          onClick={() => setIsCollapsed(!isCollapsed)}
      >
          {isCollapsed ? <ChevronsRight className="h-4 w-4" /> : <ChevronsLeft className="h-4 w-4" />}
          <span className="sr-only">Ocultar/Expandir</span>
      </Button>

      <div className={cn(
        "border-b border-gray-700 flex items-center h-20",
        isCollapsed ? "justify-center" : "p-4"
      )}>
        <div className="flex items-center">
            <h1 className={cn("text-xl font-bold text-white whitespace-nowrap", isCollapsed && "hidden")}>T3 Diligence</h1>
            <Shield className={cn("text-white", !isCollapsed && "hidden", isCollapsed ? "w-8 h-8" : "w-8 h-8")} />
        </div>
      </div>

      <nav className="flex-1 p-2 space-y-1 overflow-y-auto no-scrollbar">
        {navItems.map((section) =>
          isCollapsed ? (
            <Popover key={section.title}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" className="w-full justify-center h-12 text-gray-400 hover:bg-gray-800 hover:text-white">
                      <section.icon className="w-6 h-6" />
                    </Button>
                  </PopoverTrigger>
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-gray-800 text-white border-gray-700">
                  {section.title}
                </TooltipContent>
              </Tooltip>
              <PopoverContent side="right" align="start" className="ml-2 w-auto bg-gray-900 border-gray-700 text-white p-1">
                <div className="flex flex-col space-y-1">
                  {section.subItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap",
                          isActive ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white"
                        )
                      }
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <Collapsible key={section.title} open={openSection === section.title} onOpenChange={() => setOpenSection(openSection === section.title ? null : section.title)}>
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md text-gray-400 hover:bg-gray-800 hover:text-white">
                  <div className="flex items-center">
                    <section.icon className="w-5 h-5 mr-3" />
                    <span>{section.title}</span>
                  </div>
                  <ChevronDown className={cn("w-4 h-4 transition-transform", openSection === section.title && "rotate-180")} />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-6">
                <div className="space-y-1 py-1">
                  {section.subItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                          isActive ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white"
                        )
                      }
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      <span>{item.label}</span>
                    </NavLink>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          )
        )}
      </nav>
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div className={cn("ml-3", isCollapsed && "sr-only")}>
            <p className="text-sm font-medium text-white">Advogado(a)</p>
            <p className="text-xs text-gray-400">Incorporadora T3</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-white dark:bg-black">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;