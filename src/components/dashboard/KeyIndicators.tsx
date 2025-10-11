import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowUp, Briefcase, Signature, ListChecks, DollarSign, Shield, Users } from "lucide-react";

const kpis = [
  { title: "Processos ativos", value: "742", change: "+6%", icon: Briefcase },
  { title: "Contratos vigentes", value: "328", change: "+4%", icon: Signature },
  { title: "Tarefas concluídas (30d)", value: "1.420", change: "+9%", icon: ListChecks },
  { title: "Receita recorrente (Mês)", value: "R$ 218.400", change: "+11%", icon: DollarSign },
  { title: "Índice de risco médio", value: "2,8 / 5", change: "", icon: Shield },
  { title: "Clientes ativos", value: "189", change: "+3%", icon: Users },
];

const KeyIndicators = () => {
  return (
    <div className="space-y-4">
      {/* Filtros */}
      <div className="flex flex-wrap items-center gap-2 p-2 bg-petroleum-blue rounded-lg">
        <Select defaultValue="30d"><SelectTrigger className="w-[150px] bg-gray-800 border-gray-700"><SelectValue /></SelectTrigger><SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="7d">Últimos 7 dias</SelectItem><SelectItem value="30d">Últimos 30 dias</SelectItem><SelectItem value="90d">Últimos 90 dias</SelectItem></SelectContent></Select>
        <Select><SelectTrigger className="w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Unidade / Filial" /></SelectTrigger></Select>
        <Select><SelectTrigger className="w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Área jurídica" /></SelectTrigger></Select>
        <Select><SelectTrigger className="w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Cliente / Responsável" /></SelectTrigger></Select>
        <Button variant="secondary" className="ml-auto">Aplicar Filtros</Button>
      </div>
      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {kpis.map((kpi) => (
          <Card key={kpi.title} className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between text-gray-400">
                <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
                <kpi.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{kpi.value}</p>
              {kpi.change && <p className="text-xs text-tech-green flex items-center"><ArrowUp className="h-3 w-3 mr-1" /> {kpi.change}</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default KeyIndicators;