import React from "react";
import { NavLink } from "react-router-dom";
import { BarChart2, FolderKanban, ListChecks, Building, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import MobileMoreMenu from "@/components/MobileMoreMenu";

type NavItem = {
  to: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

const items: NavItem[] = [
  { to: "/dashboard/visao-executiva", label: "Dashboard", icon: BarChart2 },
  { to: "/juridico/casos-processos", label: "Jurídico", icon: FolderKanban },
  { to: "/tarefas/minha-caixa", label: "Tarefas", icon: ListChecks },
  { to: "/imobiliario/cadastro-imoveis", label: "Imóveis", icon: Building },
  { to: "/comunicacao/inbox-unificada", label: "Comms", icon: MessageSquare },
];

const MobileBottomNav: React.FC = () => {
  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-gray-900 border-t border-gray-700"
      role="navigation"
      aria-label="Navegação inferior"
    >
      <div className="flex justify-around items-center px-1 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex flex-col items-center gap-1 px-2 py-1 text-[11px] leading-none transition-colors",
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={cn("w-5 h-5", isActive ? "text-white" : "text-gray-400")} />
                  <span className="truncate max-w-[5rem]">{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
        <MobileMoreMenu />
      </div>
    </nav>
  );
};

export default MobileBottomNav;