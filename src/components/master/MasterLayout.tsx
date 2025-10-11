import React, { useState } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard, ShoppingCart, Users, Package, Banknote, Tag, BarChart3,
  Users2, PlugZap, ArrowLeft, Shield, ListChecks, LayoutTemplate,
  ChevronsLeft, ChevronsRight, Store, ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const navItems = [
  { to: "/painel-master", label: "Visão Geral", icon: LayoutDashboard, end: true },
  { to: "/painel-master/vendas-assinaturas", label: "Vendas & Assinaturas", icon: ShoppingCart },
  { to: "/painel-master/gestao-clientes", label: "Gestão de Clientes", icon: Users },
  { to: "/painel-master/gestao-modulos", label: "Gestão de Módulos & Acessos", icon: Package },
  { to: "/painel-master/gestao-tarefas", label: "Gestão de Tarefas", icon: ListChecks },
  { to: "/painel-master/financeiro-cobrancas", label: "Financeiro & Cobranças", icon: Banknote },
  { to: "/painel-master/planos-precificacao", label: "Planos & Precificação", icon: Tag },
  { to: "/painel-master/relatorios-metricas", label: "Relatórios & Métricas", icon: BarChart3 },
  { to: "/painel-master/gestao-site", label: "Gestão do Site", icon: LayoutTemplate },
  { to: "/painel-master/equipes-usuarios", label: "Equipes & Usuários Internos", icon: Users2 },
  { to: "/painel-master/integracoes-api", label: "Integrações & API", icon: PlugZap },
];

const MasterLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      <aside className={cn(
        "relative flex-shrink-0 bg-gray-950/50 border-r border-gray-800 flex flex-col transition-all duration-300",
        isCollapsed ? "w-20" : "w-64"
      )}>
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
          "h-20 flex items-center border-b border-gray-800",
          isCollapsed ? "justify-center" : "justify-center px-4"
        )}>
          <Shield className="w-8 h-8 text-white flex-shrink-0" />
          <h1 className={cn("text-xl font-bold text-white ml-2 whitespace-nowrap", isCollapsed && "hidden")}>Painel Master</h1>
        </div>

        <nav className="flex-1 p-2 space-y-1 overflow-y-auto no-scrollbar">
          {navItems.map((item) => (
            isCollapsed ? (
              <Tooltip key={item.to} delayDuration={0}>
                <TooltipTrigger asChild>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center justify-center h-12 text-sm font-medium rounded-md transition-colors",
                        isActive
                          ? "bg-gray-800 text-white"
                          : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
                      )
                    }
                  >
                    <item.icon className="w-6 h-6" />
                  </NavLink>
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-gray-800 text-white border-gray-700">
                  {item.label}
                </TooltipContent>
              </Tooltip>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "bg-gray-800 text-white"
                      : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
                  )
                }
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
              </NavLink>
            )
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <Link to="/app" className={cn(
            "flex items-center justify-center w-full px-3 py-2 text-sm font-medium rounded-md text-gray-400 hover:bg-gray-800/50 hover:text-white",
            isCollapsed && "h-12"
          )}>
            <ArrowLeft className={cn("w-5 h-5 flex-shrink-0", !isCollapsed && "mr-3")} />
            <span className={cn("whitespace-nowrap", isCollapsed && "hidden")}>Voltar para o App</span>
          </Link>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MasterLayout;