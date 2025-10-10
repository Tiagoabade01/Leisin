import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard, ShoppingCart, Users, Package, Banknote, Tag, BarChart3,
  Handshake, Users2, PlugZap, ArrowLeft, Shield, ListChecks
} from 'lucide-react';

const navItems = [
  { to: "/master/visao-geral", label: "Visão Geral", icon: LayoutDashboard },
  { to: "/master/vendas-assinaturas", label: "Vendas & Assinaturas", icon: ShoppingCart },
  { to: "/master/gestao-clientes", label: "Gestão de Clientes", icon: Users },
  { to: "/master/gestao-modulos", label: "Gestão de Módulos & Acessos", icon: Package },
  { to: "/master/gestao-tarefas", label: "Gestão de Tarefas", icon: ListChecks },
  { to: "/master/financeiro-cobrancas", label: "Financeiro & Cobranças", icon: Banknote },
  { to: "/master/planos-precificacao", label: "Planos & Precificação", icon: Tag },
  { to: "/master/relatorios-metricas", label: "Relatórios & Métricas", icon: BarChart3 },
  { to: "/master/crm-interno", label: "CRM Interno", icon: Handshake },
  { to: "/master/equipes-usuarios", label: "Equipes & Usuários Internos", icon: Users2 },
  { to: "/master/integracoes-api", label: "Integrações & API", icon: PlugZap },
];

const MasterLayout = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      <aside className="w-64 flex-shrink-0 bg-gray-950/50 border-r border-gray-800 flex flex-col">
        <div className="h-20 flex items-center justify-center border-b border-gray-800">
          <Shield className="w-8 h-8 text-white mr-2" />
          <h1 className="text-xl font-bold text-white">Painel Master</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
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
          ))}
        </nav>
        <div className="p-4 border-t border-gray-800">
          <Link to="/" className="flex items-center justify-center w-full px-3 py-2 text-sm font-medium rounded-md text-gray-400 hover:bg-gray-800/50 hover:text-white">
            <ArrowLeft className="w-5 h-5 mr-3" />
            <span>Voltar para o App</span>
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