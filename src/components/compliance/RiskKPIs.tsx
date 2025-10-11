import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, BarChart, FileWarning, AlertTriangle, CheckSquare, Shield } from "lucide-react";

const kpis = [
  { title: "Risco médio da carteira", value: "2,8 / 5", change: "-7%", icon: Shield, changeType: 'decrease' },
  { title: "Diligências pendentes", value: "31", change: "+4%", icon: FileWarning, changeType: 'increase' },
  { title: "Certidões vencidas", value: "9", change: "-2%", icon: FileWarning, changeType: 'decrease' },
  { title: "Índice de conformidade", value: "94%", change: "+3%", icon: CheckSquare, changeType: 'increase' },
  { title: "Alertas ativos", value: "14", change: "+8%", icon: AlertTriangle, changeType: 'increase' },
  { title: "Processos em risco alto", value: "12", change: "", icon: BarChart, changeType: 'neutral' },
];

const RiskKPIs = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2 p-2 bg-petroleum-blue rounded-lg">
        <Select defaultValue="30d"><SelectTrigger className="w-[150px] bg-gray-800 border-gray-700"><SelectValue /></SelectTrigger><SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="7d">Últimos 7 dias</SelectItem><SelectItem value="30d">Últimos 30 dias</SelectItem><SelectItem value="90d">Últimos 90 dias</SelectItem></SelectContent></Select>
        <Select><SelectTrigger className="w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Área Jurídica" /></SelectTrigger></Select>
        <Select><SelectTrigger className="w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Tipo de Risco" /></SelectTrigger></Select>
        <Select><SelectTrigger className="w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Cliente" /></SelectTrigger></Select>
        <Select><SelectTrigger className="w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Unidade" /></SelectTrigger></Select>
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
              {kpi.change && <p className={`text-xs flex items-center ${kpi.changeType === 'increase' ? 'text-red-400' : 'text-tech-green'}`}>
                {kpi.changeType === 'increase' ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                {kpi.change}
              </p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RiskKPIs;