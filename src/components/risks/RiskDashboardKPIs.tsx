import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

const kpis = [
  { title: "Entidades analisadas", value: "483", change: "+17%", status: "green" },
  { title: "Riscos críticos detectados", value: "27", change: "+3", status: "red" },
  { title: "Conformidade média", value: "88%", change: "-2%", status: "orange" },
  { title: "Leisin Score Médio", value: "76/100", change: "", status: "green" },
];

const RiskDashboardKPIs = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpis.map(kpi => (
          <Card key={kpi.title} className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-400">{kpi.title}</CardTitle></CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{kpi.value}</p>
              {kpi.change && (
                <p className={`text-xs flex items-center ${kpi.status === 'green' ? 'text-tech-green' : kpi.status === 'red' ? 'text-red-500' : 'text-yellow-400'}`}>
                  {kpi.change.startsWith('+') ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                  {kpi.change}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-sm text-risk-gold text-center">💡 Insight da IA: “Empresas com 3+ processos trabalhistas ativos apresentam 45% mais risco de inadimplência fiscal nos próximos 12 meses.”</p>
    </div>
  );
};

export default RiskDashboardKPIs;