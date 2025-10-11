import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const ActivityFilters = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 p-2 bg-petroleum-blue rounded-lg">
      <div className="relative flex-grow sm:flex-grow-0 sm:w-64">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input placeholder="Buscar por usuário, cliente..." className="bg-gray-800 border-gray-700 pl-9" />
      </div>
      <Select defaultValue="24h"><SelectTrigger className="w-full sm:w-[150px] bg-gray-800 border-gray-700"><SelectValue /></SelectTrigger><SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="24h">Últimas 24h</SelectItem><SelectItem value="7d">Últimos 7 dias</SelectItem><SelectItem value="30d">Últimos 30 dias</SelectItem></SelectContent></Select>
      <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Tipo de Atividade" /></SelectTrigger></Select>
      <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Status" /></SelectTrigger></Select>
      <Button variant="secondary" className="w-full sm:w-auto sm:ml-auto">Aplicar Filtros</Button>
    </div>
  );
};

export default ActivityFilters;