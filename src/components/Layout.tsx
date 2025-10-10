import React from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  ShieldCheck,
  FileText,
  ScrollText,
  Briefcase,
  Landmark,
  Users,
  Settings,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Sidebar = () => (
  <aside className="hidden md:flex flex-col w-64 bg-gray-50 dark:bg-gray-900 border-r">
    <div className="p-4 border-b">
      <h1 className="text-2xl font-bold text-primary">T3 Diligence</h1>
    </div>
    <nav className="flex-1 p-4 space-y-2">
      <Link to="/" className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-gray-200 dark:bg-gray-800 text-primary">
        <LayoutDashboard className="w-5 h-5 mr-3" />
        Painel
      </Link>
      <Link to="/diligence" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-gray-800">
        <ShieldCheck className="w-5 h-5 mr-3" />
        Diligence
      </Link>
      <Link to="/contracts" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-gray-800">
        <FileText className="w-5 h-5 mr-3" />
        Contratos
      </Link>
      <Link to="/records" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-gray-800">
        <ScrollText className="w-5 h-5 mr-3" />
        Matrículas
      </Link>
      <Link to="/crm" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-gray-800">
        <Briefcase className="w-5 h-5 mr-3" />
        CRM
      </Link>
      <Link to="/financial" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-gray-800">
        <Landmark className="w-5 h-5 mr-3" />
        Financeiro
      </Link>
      <Link to="/office" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-gray-800">
        <Users className="w-5 h-5 mr-3" />
        Escritório
      </Link>
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
        <Button variant="ghost" size="icon" className="ml-auto">
          <Settings className="w-4 h-4" />
        </Button>
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