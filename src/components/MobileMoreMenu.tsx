import React from "react";
import { NavLink } from "react-router-dom";
import { Ellipsis, Home, FolderKanban, ListChecks, Shield, Building, DollarSign, Calculator, MessageSquare, Handshake, BrainCircuit, Building2, Users, Book, Lock, LayoutTemplate } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LinkItem = {
  to: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

const quickLinks: LinkItem[] = [
  { to: "/dashboard/visao-executiva", label: "Visão Executiva", icon: Home },
  { to: "/juridico/contratos-obrigacoes", label: "Contratos", icon: FolderKanban },
  { to: "/tarefas/fluxo-de-tarefas", label: "Fluxo de Tarefas", icon: ListChecks },
  { to: "/compliance/due-diligence-corporativa", label: "Due Diligence", icon: Shield },
  { to: "/imobiliario/analise-juridico-urbanistica", label: "Jurídico-Urbanística", icon: Building },
  { to: "/financeiro/fluxo-caixa", label: "Fluxo de Caixa", icon: DollarSign },
  { to: "/contabil/lancamentos-contabeis", label: "Lançamentos", icon: Calculator },
  { to: "/comunicacao/notificacoes-agendamentos", label: "Notificações", icon: MessageSquare },
  { to: "/crm/pipeline-oportunidades", label: "Pipeline CRM", icon: Handshake },
  { to: "/ia/central", label: "IA Central", icon: BrainCircuit },
  { to: "/filiais/cadastro-dados-gerais", label: "Filiais", icon: Building2 },
  { to: "/gestao/usuarios-permissoes", label: "Usuários", icon: Users },
  { to: "/biblioteca/leis-decretos", label: "Leis & Decretos", icon: Book },
  { to: "/governanca/politicas-termos", label: "Governança", icon: Lock },
  { to: "/painel-master/visao-geral", label: "Painel Master", icon: LayoutTemplate },
];

const MobileMoreMenu: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="flex flex-col items-center gap-1 px-2 py-1 h-auto bg-transparent text-gray-400 hover:text-white"
        >
          <Ellipsis className="w-5 h-5" />
          <span className="text-[11px] leading-none">Mais</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="p-3 sm:p-4">
        <SheetHeader>
          <SheetTitle className="text-left">Acesso rápido</SheetTitle>
        </SheetHeader>
        <div className="mt-3 max-h-[70vh] overflow-y-auto no-scrollbar">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-2 rounded-md border border-gray-700 px-3 py-2 text-xs",
                      isActive ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    )
                  }
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </NavLink>
              );
            })}
          </div>
          <div className="h-4" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMoreMenu;