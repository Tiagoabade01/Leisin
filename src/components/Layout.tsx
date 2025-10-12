import React, { useState } from 'react';
import { NavLink, useLocation, Link, Outlet } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Home, BarChart2, Activity, AlertTriangle, FileText, Download,
  Briefcase, FolderKanban, Signature, ListTodo, Users,
  Shield, SearchCheck, BarChart, FileBadge, Share2, CheckSquare,
  Building, ScanSearch, BookCopy, Plug, FileOutput,
  ArrowLeftRight, TrendingUp, Wallet, PieChart,
  Calculator, Landmark, FileSpreadsheet, FileClock, Link as LinkIcon,
  MessageSquare, Inbox, History, Bell, Bot,
  Handshake, Filter, Contact, CalendarCheck, FilePenLine,
  BrainCircuit, ScanText, Microscope, BookOpen, FileCog,
  Building2, Users2, DollarSign, AreaChart, Combine,
  Settings, Store, ExternalLink, Ticket, SlidersHorizontal,
  Wrench, Palette, Cog, ShieldCheck, Receipt,
  Book, Scale, Files, Search, HistoryIcon,
  Lock, DatabaseZap, ShieldAlert, FileLock, Siren,
  ChevronDown, ChevronsLeft, ChevronsRight, ListChecks, KanbanSquare, Calendar, Zap, ShoppingCart, Package, Banknote, Tag, LayoutTemplate, BarChart3, PlugZap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const navItems = [
  {
    title: "Painel Master",
    icon: Shield,
    isGroup: true,
    subItems: [
      { to: "/painel-master", label: "Visão Geral", icon: Home, end: true },
      { to: "/painel-master/vendas-assinaturas", label: "Vendas & Assinaturas", icon: ShoppingCart },
      { to: "/painel-master/gestao-clientes", label: "Gestão de Clientes", icon: Users },
      { to: "/painel-master/gestao-modulos", label: "Gestão de Módulos", icon: Package },
      { to: "/painel-master/gestao-tarefas", label: "Gestão de Tarefas", icon: ListChecks },
      { to: "/painel-master/financeiro-cobrancas", label: "Financeiro", icon: Banknote },
      { to: "/painel-master/planos-precificacao", label: "Planos & Precificação", icon: Tag },
      { to: "/painel-master/relatorios-metricas", label: "Relatórios & Métricas", icon: BarChart3 },
      { to: "/painel-master/gestao-site", label: "Gestão do Site", icon: LayoutTemplate },
      { to: "/painel-master/equipes-usuarios", label: "Equipes & Usuários", icon: Users2 },
      { to: "/painel-master/integracoes-api", label: "Integrações & API", icon: PlugZap },
    ]
  },
  {
    title: "Dashboard",
    icon: Home,
    isGroup: true,
    subItems: [
      { to: "/dashboard/visao-executiva", label: "Visão Executiva", icon: BarChart2 },
      { to: "/dashboard/performance-juridica", label: "Performance Jurídica", icon: Activity },
      { to: "/dashboard/riscos-compliance", label: "Riscos e Compliance", icon: AlertTriangle },
      { to: "/dashboard/atividades-recentes", label: "Atividades Recentes", icon: FileText },
      { to: "/dashboard/relatorios-exportacoes", label: "Relatórios e Exportações", icon: Download },
    ]
  },
  {
    title: "Jurídico Operacional",
    icon: Briefcase,
    isGroup: true,
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
    isGroup: true,
    subItems: [
      { to: "/tarefas/minha-caixa", label: "Minha Caixa", icon: Inbox },
      { to: "/tarefas/fluxo-de-tarefas", label: "Fluxo de Tarefas", icon: KanbanSquare },
      { to: "/tarefas/prazos-processuais", label: "Prazos Processuais", icon: Scale },
      { to: "/tarefas/agenda-calendario", label: "Agenda & Calendário", icon: Calendar },
      { to: "/tarefas/slas-automacao", label: "SLAs & Automação", icon: Zap },
    ]
  },
  {
    title: "Compliance / Risco",
    icon: Shield,
    isGroup: true,
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
    isGroup: true,
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
    isGroup: true,
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
    isGroup: true,
    subItems: [
      { to: "/contabil/centro-custos", label: "Centro de Custos", icon: Landmark },
      { to: "/contabil/lancamentos-contabeis", label: "Lançamentos Contábeis", icon: FileSpreadsheet },
      { to: "/contabil/dre-balancetes", label: "DRE e Balancetes", icon: BarChart },
      { to: "/contabil/relatorios-fiscais", label: "Relatórios Fiscais", icon: FileClock },
      { to: "/contabil/integracoes-contabeis", label: "Integrações Contábeis", icon: LinkIcon },
    ]
  },
  {
    title: "Comunicação",
    icon: MessageSquare,
    isGroup: true,
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
    isGroup: true,
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
    isGroup: true,
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
    isGroup: true,
    subItems: [
      { to: "/filiais/cadastro-dados-gerais", label: "Cadastro e Dados Gerais", icon: Building2 },
      { to: "/filiais/equipes-responsaveis", label: "Equipes e Responsáveis", icon: Users2 },
      { to: "/filiais/faturamento-custos", label: "Faturamento e Custos", icon: DollarSign },
      { to: "/filiais/indicadores-performance", label: "Indicadores de Performance", icon: AreaChart },
      { to: "/filiais/relatorios-consolidados", label: "Relatórios Consolidados", icon: Combine },
    ]
  },
  {
    title: "Insights",
    icon: BrainCircuit,
    isGroup: true,
    subItems: [
      { to: "/insights/marketplace", label: "Marketplace", icon: Store },
      { to: "/insights/portais-externos", label: "Portais Externos", icon: ExternalLink },
    ]
  },
  {
    title: "Gestão / Core",
    icon: Wrench,
    isGroup: true,
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
    isGroup: true,
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
    isGroup: true,
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
    return navItems.filter(item => item.isGroup).find(section => 
      section.subItems.some(item => location.pathname.startsWith(item.to))
    )?.title || "Dashboard";
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
            <h1 className={cn("text-xl font-bold text-white whitespace-nowrap", isCollapsed && "hidden")}>leisin</h1>
            <Shield className={cn("text-white", !isCollapsed && "hidden", isCollapsed ? "w-8 h-8" : "w-8 h-8")} />
        </div>
      </div>

      <nav className="flex-1 p-2 space-y-1 overflow-y-auto no-scrollbar">
        {navItems.map((item) => {
          if (item.isGroup) {
            return isCollapsed ? (
              <Popover key={item.title}>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" className="w-full justify-center h-12 text-gray-400 hover:bg-gray-800 hover:text-white">
                        <item.icon className="w-5 h-5" />
                      </Button>
                    </PopoverTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="bg-gray-800 text-white border-gray-700">
                    {item.title}
                  </TooltipContent>
                </Tooltip>
                <PopoverContent side="right" align="start" className="ml-2 w-auto bg-gray-900 border-gray-700 text-white p-1">
                  <div className="flex flex-col space-y-1">
                    {item.subItems.map((subItem) => (
                      <NavLink
                        key={subItem.to}
                        to={subItem.to}
                        className={({ isActive }) =>
                          cn(
                            "flex items-center px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap",
                            isActive ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white"
                          )
                        }
                      >
                        <subItem.icon className="w-5 h-5 mr-3" />
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <Collapsible key={item.title} open={openSection === item.title} onOpenChange={() => setOpenSection(openSection === item.title ? null : item.title)}>
                <CollapsibleTrigger className="w-full">
                  <div className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md text-gray-400 hover:bg-gray-800 hover:text-white">
                    <div className="flex items-center">
                      <item.icon className="w-5 h-5 mr-3" />
                      <span>{item.title}</span>
                    </div>
                    <ChevronDown className={cn("w-4 h-4 transition-transform", openSection === item.title && "rotate-180")} />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-6">
                  <div className="space-y-1 py-1">
                    {item.subItems.map((subItem) => (
                      <NavLink
                        key={subItem.to}
                        to={subItem.to}
                        end
                        className={({ isActive }) =>
                          cn(
                            "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                            isActive ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white"
                          )
                        }
                      >
                        <subItem.icon className="w-5 h-5 mr-3" />
                        <span>{subItem.label}</span>
                      </NavLink>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            );
          } else {
            return null; // Rota única do painel master foi removida
          }
        })}
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

const Layout = () => {
  return (
    <div className="flex h-screen bg-white dark:bg-black">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;