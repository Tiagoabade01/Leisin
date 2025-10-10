import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, ShieldCheck, FileText, Home, Briefcase, Landmark, Users, Settings, MessageSquare, Sparkles, Globe, PanelLeft, Folder, FileBadge, Map, FileArchive, Plug, Handshake, Receipt, BarChart, Inbox, Bot, BookOpen, FileCog, UserCog, Store, ExternalLink, ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

const navItems = [
  {
    title: "Gestão / Core",
    icon: Briefcase,
    subItems: [
      { to: "/", label: "Dashboard", icon: LayoutDashboard },
      { to: "/configuracoes", label: "Configurações", icon: Settings },
      { to: "/licenses", label: "Licenças", icon: FileBadge },
      { to: "/users", label: "Usuários", icon: Users },
    ]
  },
  {
    title: "Jurídico Operacional",
    icon: Users,
    subItems: [
      { to: "/law-ops", label: "Escritório Jurídico", icon: Users },
      { to: "/contracts", label: "Contratos", icon: FileText },
      { to: "/documents", label: "Documentos", icon: Folder },
    ]
  },
  {
    title: "Compliance / Risco",
    icon: ShieldCheck,
    subItems: [
      { to: "/diligence", label: "Due Diligence", icon: ShieldCheck },
      { to: "/certidoes", label: "Certidões", icon: FileBadge },
      { to: "/risk-mapper", label: "Risk Mapper", icon: Map },
    ]
  },
  {
    title: "Imobiliário Integrado",
    icon: Home,
    subItems: [
      { to: "/terrenos", label: "Terrenos", icon: Home },
      { to: "/dossies", label: "Dossiês", icon: FileArchive },
      { to: "/integrations", label: "Integrações", icon: Plug },
    ]
  },
  {
    title: "Financeiro / Contábil",
    icon: Landmark,
    subItems: [
      { to: "/honorarios", label: "Honorários", icon: Handshake },
      { to: "/faturamento", label: "Faturamento", icon: Receipt },
      { to: "/dre", label: "DRE", icon: BarChart },
    ]
  },
  {
    title: "Comunicação / CRM",
    icon: MessageSquare,
    subItems: [
      { to: "/crm", label: "CRM Jurídico", icon: Briefcase },
      { to: "/inbox", label: "Inbox", icon: Inbox },
      { to: "/chat-copilot", label: "Chat Copilot", icon: Bot },
    ]
  },
  {
    title: "IA e Automação",
    icon: Sparkles,
    subItems: [
      { to: "/ia-central", label: "IA Central", icon: Sparkles },
      { to: "/playbooks", label: "Playbooks", icon: BookOpen },
      { to: "/dossies-automaticos", label: "Dossiês Automáticos", icon: FileCog },
    ]
  },
  {
    title: "Área master",
    icon: Globe,
    subItems: [
      { to: "/painel-master", label: "Painel Master", icon: UserCog },
      { to: "/marketplace", label: "Marketplace", icon: Store },
      { to: "/portais-externos", label: "Portais externos", icon: ExternalLink },
    ]
  },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const findOpenSection = () => {
    return navItems.find(section => 
      section.subItems.some(item => item.to === location.pathname)
    )?.title || null;
  };

  const [openSection, setOpenSection] = useState<string | null>(findOpenSection());

  return (
    <aside
      className={cn(
        "hidden md:flex flex-col bg-gray-900 text-gray-200 border-r border-gray-700 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <div className="p-4 border-b border-gray-700 flex items-center h-20 justify-center">
        <h1 className={cn("text-xl font-bold text-white whitespace-nowrap", isCollapsed && "sr-only")}>T3 Diligence</h1>
        {isCollapsed && <ShieldCheck className="w-8 h-8 text-white" />}
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
        <div className="flex items-center mb-4">
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div className={cn("ml-3", isCollapsed && "sr-only")}>
            <p className="text-sm font-medium text-white">Advogado(a)</p>
            <p className="text-xs text-gray-400">Incorporadora T3</p>
          </div>
        </div>
        <Button variant="outline" className="w-full bg-transparent border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white" onClick={() => setIsCollapsed(!isCollapsed)}>
          <PanelLeft className={cn("w-4 h-4 transition-transform", !isCollapsed && "mr-2", isCollapsed && "rotate-180")} />
          <span className={cn(isCollapsed && "sr-only")}>Ocultar</span>
        </Button>
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