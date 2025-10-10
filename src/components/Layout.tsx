import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  ShieldCheck,
  FileText,
  Home,
  Briefcase,
  Landmark,
  Users,
  Settings,
  MessageSquare,
  Sparkles,
  Globe,
  PanelLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const navSections = [
  {
    title: "Gestão / Core",
    items: [
      { to: "/", icon: LayoutDashboard, label: "Dashboard" },
    ]
  },
  {
    title: "Jurídico Operacional",
    items: [
      { to: "/law-ops", icon: Users, label: "Escritório Jurídico" },
      { to: "/contracts", icon: FileText, label: "Contratos" },
    ]
  },
  {
    title: "Compliance / Risco",
    items: [
      { to: "/diligence", icon: ShieldCheck, label: "Due Diligence" },
    ]
  },
  {
    title: "Imobiliário Integrado",
    items: [
      { to: "/properties", icon: Home, label: "Imóveis" },
    ]
  },
  {
    title: "Financeiro / Contábil",
    items: [
      { to: "/financial", icon: Landmark, label: "Financeiro" },
    ]
  },
  {
    title: "Comunicação / CRM",
    items: [
      { to: "/crm", icon: Briefcase, label: "CRM Jurídico" },
      { to: "/communication", icon: MessageSquare, label: "Comunicação" },
    ]
  },
  {
    title: "IA e Automação",
    items: [
      { to: "/ai", icon: Sparkles, label: "IA & Automação" },
    ]
  },
  {
    title: "SaaS Admin",
    items: [
        { to: "/saas-admin", icon: Globe, label: "Painel SaaS" },
    ]
  },
  {
    title: "Configurações",
    items: [
        { to: "/administration", icon: Settings, label: "Administração" },
    ]
  }
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

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
      <nav className="flex-1 p-2 space-y-2 overflow-y-auto">
        {navSections.map((section) => (
          <div key={section.title}>
            {!isCollapsed && (
              <h2 className="px-3 mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">{section.title}</h2>
            )}
            <div className="space-y-1">
              {section.items.map((item) => (
                <Tooltip key={item.to} delayDuration={0}>
                  <TooltipTrigger asChild>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                          isActive
                            ? "bg-gray-800 text-white"
                            : "text-gray-400 hover:bg-gray-800 hover:text-white",
                          isCollapsed && "justify-center"
                        )
                      }
                    >
                      <item.icon className={cn("w-5 h-5", !isCollapsed && "mr-3")} />
                      <span className={cn(isCollapsed && "sr-only")}>{item.label}</span>
                    </NavLink>
                  </TooltipTrigger>
                  {isCollapsed && (
                    <TooltipContent side="right" className="bg-gray-800 text-white border-gray-700">
                      {item.label}
                    </TooltipContent>
                  )}
                </Tooltip>
              ))}
            </div>
          </div>
        ))}
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