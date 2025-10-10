import React from 'react';
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
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Painel" },
  { to: "/diligence", icon: ShieldCheck, label: "Diligence" },
  { to: "/contracts", icon: FileText, label: "Contratos" },
  { to: "/properties", icon: Home, label: "Imóveis" },
  { to: "/crm", icon: Briefcase, label: "CRM" },
  { to: "/financial", icon: Landmark, label: "Financeiro" },
  { to: "/law-ops", icon: Users, label: "Escritório" },
  { to: "/communication", icon: MessageSquare, label: "Comunicação" },
  { to: "/ai", icon: Sparkles, label: "IA & Automação" },
];

const Sidebar = () => (
  <aside className="hidden md:flex flex-col w-64 bg-gray-50 dark:bg-gray-900 border-r">
    <div className="p-4 border-b">
      <h1 className="text-2xl font-bold text-primary">T3 Diligence</h1>
    </div>
    <nav className="flex-1 p-4 space-y-2">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/"}
          className={({ isActive }) =>
            `flex items-center px-3 py-2 text-sm font-medium rounded-md ${
              isActive
                ? "bg-gray-200 dark:bg-gray-800 text-primary"
                : "hover:bg-gray-200 dark:hover:bg-gray-800"
            }`
          }
        >
          <item.icon className="w-5 h-5 mr-3" />
          {item.label}
        </NavLink>
      ))}
    </nav>
    <div className="p-4 border-t">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
        <div className="ml-3">
          <p className="text-sm font-medium">Advogado(a)</p>
          <p className="text-xs text-gray-500">Incorporadora T3</p>
        </div>
        <NavLink to="/administration" className="ml-auto">
          <Button variant="ghost" size="icon">
            <Settings className="w-4 h-4" />
          </Button>
        </NavLink>
      </div>
    </div>
  </aside>
);

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