import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Clock, CheckCircle2, ListChecks } from "lucide-react";
import { PrazoProcessual } from '@/pages/tarefas/PrazosProcessuais';
import { differenceInDays, parse } from 'date-fns';

interface PrazosKPIsProps {
  prazos: PrazoProcessual[];
}

const PrazosKPIs = ({ prazos }: PrazosKPIsProps) => {
  const today = new Date();
  const atrasados = prazos.filter(p => {
    const deadline = parse(p.data, 'dd/MM/yy', new Date());
    return differenceInDays(deadline, today) < 0 && p.status !== 'Concluído';
  }).length;

  const vencendoHoje = prazos.filter(p => {
    const deadline = parse(p.data, 'dd/MM/yy', new Date());
    return differenceInDays(deadline, today) === 0 && p.status !== 'Concluído';
  }).length;

  const concluidosMes = prazos.filter(p => p.status === 'Concluído').length; // Simplificado
  const totalAtivos = prazos.filter(p => p.status !== 'Concluído').length;

  const kpiData = [
    { title: "Prazos Atrasados", value: atrasados, icon: AlertTriangle, color: "text-red-400" },
    { title: "Vencendo Hoje", value: vencendoHoje, icon: Clock, color: "text-yellow-400" },
    { title: "Concluídos (Mês)", value: concluidosMes, icon: CheckCircle2, color: "text-tech-green" },
    { title: "Total de Prazos Ativos", value: totalAtivos, icon: ListChecks, color: "text-gray-300" },
  ];

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

export default PrazosKPIs;