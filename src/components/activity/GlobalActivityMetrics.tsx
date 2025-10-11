import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown, ListChecks, Users, BrainCircuit, AlertCircle, Clock } from "lucide-react";

const metrics = [
  { title: "Ações (24h)", value: "642", change: "+12%", icon: ListChecks, changeType: 'increase' },
  { title: "Usuários ativos", value: "31", change: "+3%", icon: Users, changeType: 'increase' },
  { title: "Atividades IA", value: "198", change: "+9%", icon: BrainCircuit, changeType: 'increase' },
  { title: "Falhas críticas", value: "3", change: "", icon: AlertCircle, changeType: 'neutral' },
  { title: "Tempo médio resposta", value: "4.3 min", change: "-5%", icon: Clock, changeType: 'decrease' },
];

const GlobalActivityMetrics = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.title} className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between text-gray-400">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{metric.value}</p>
            {metric.change && <p className={`text-xs flex items-center ${metric.changeType === 'increase' ? 'text-tech-green' : 'text-red-400'}`}>
              {metric.changeType === 'increase' ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
              {metric.change}
            </p>}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default GlobalActivityMetrics;