import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, Briefcase, Signature, CheckCircle, Clock, BarChart, Users } from "lucide-react";

const kpis = [
  { title: "Casos ativos", value: "742", change: "+6%", icon: Briefcase, changeType: 'increase' },
  { title: "Contratos vigentes", value: "328", change: "+4%", icon: Signature, changeType: 'increase' },
  { title: "Taxa de sucesso", value: "87%", change: "+3%", icon: CheckCircle, changeType: 'increase' },
  { title: "Tempo médio de resolução", value: "22 dias", change: "-9%", icon: Clock, changeType: 'decrease' },
  { title: "SLA médio de atendimento", value: "7h 20min", change: "+1%", icon: Clock, changeType: 'increase' },
  { title: "Produtividade média", value: "52/mês", change: "+12%", icon: BarChart, changeType: 'increase' },
];

const PerformanceKPIs = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2 p-2 bg-petroleum-blue rounded-lg">
        <Select defaultValue="30d"><SelectTrigger className="w-[150px] bg-gray-800 border-gray-700"><SelectValue /></SelectTrigger><SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="7d">Últimos 7 dias</SelectItem><SelectItem value="30d">Últimos 30 dias</SelectItem><SelectItem value="90d">Últimos 90 dias</SelectItem></SelectContent></Select>
        <Select><SelectTrigger className="w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Área jurídica" /></SelectTrigger></Select>
        <Select><SelectTrigger className="w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Cliente" /></SelectTrigger></Select>
        <Select><SelectTrigger className="w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Tipo" /></SelectTrigger></Select>
        <Select><SelectTrigger className="w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Responsável" /></SelectTrigger></Select>
        <Button variant="secondary" className="ml-auto">Aplicar</Button>
      </div>
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
              <p className={`text-xs flex items-center ${kpi.changeType === 'increase' ? 'text-tech-green' : 'text-red-400'}`}>
                {kpi.changeType === 'increase' ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                {kpi.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PerformanceKPIs;