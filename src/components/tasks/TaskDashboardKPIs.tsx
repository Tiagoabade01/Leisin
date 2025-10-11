import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Clock, CheckCircle2, ListChecks } from "lucide-react";

const kpiData = [
  { title: "Tarefas Atrasadas", value: "5", icon: AlertCircle, color: "text-red-400" },
  { title: "Pendentes Hoje", value: "8", icon: Clock, color: "text-yellow-400" },
  { title: "Concluídas (Semana)", value: "42", icon: CheckCircle2, color: "text-tech-green" },
  { title: "Total de Tarefas Ativas", value: "187", icon: ListChecks, color: "text-gray-300" },
];

const TaskDashboardKPIs = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {kpiData.map(kpi => (
        <Card key={kpi.title} className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between text-gray-400">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <p className={`text-3xl font-bold ${kpi.color}`}>{kpi.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TaskDashboardKPIs;