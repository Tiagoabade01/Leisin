import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown, CheckSquare, AlertTriangle, Clock, Settings } from "lucide-react";

const kpis = [
  { title: "Certidões ativas", value: "1.284", change: "+12%", status: "green" },
  { title: "Certidões vencidas", value: "64", change: "-8%", status: "orange" },
  { title: "Em processamento", value: "42", change: "+6%", status: "yellow" },
  { title: "Certidões críticas", value: "11", change: "+2", status: "red" },
  { title: "Fontes integradas", value: "27", icon: Settings },
];

const CertificatesKPIs = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {kpis.map(kpi => (
        <Card key={kpi.title} className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-400">{kpi.title}</CardTitle>
              {kpi.icon && <kpi.icon className="h-4 w-4 text-gray-400" />}
            </div>
          </CardHeader>
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
  );
};

export default CertificatesKPIs;