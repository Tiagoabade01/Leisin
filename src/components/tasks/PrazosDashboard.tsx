import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell, BarChart, Bar, XAxis, YAxis } from 'recharts';
import PrazosKPIs from './PrazosKPIs';
import PrazosNotasEquipe from './PrazosNotasEquipe';
import { PrazoProcessual } from '@/pages/tarefas/PrazosProcessuais';

interface PrazosDashboardProps {
  prazos: PrazoProcessual[];
}

const COLORS = ['#FF4136', '#FF851B', '#0074D9', '#2ECC40'];

const PrazosDashboard = ({ prazos }: PrazosDashboardProps) => {
  const urgenciaData = prazos.reduce((acc, prazo) => {
    const existing = acc.find(item => item.name === prazo.urgencia);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: prazo.urgencia, value: 1 });
    }
    return acc;
  }, []);

  const responsavelData = prazos.flatMap(p => p.responsavel).reduce((acc, resp) => {
    const existing = acc.find(item => item.name === resp);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: resp, value: 1 });
    }
    return acc;
  }, []);

  return (
    <div className="space-y-6">
      <PrazosKPIs prazos={prazos} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-petroleum-blue border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white text-base">Prazos por Responsável</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={responsavelData} layout="vertical">
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" stroke="#a1a1aa" fontSize={12} width={80} />
                <Tooltip contentStyle={{ backgroundColor: '#1C2A3A', border: '1px solid #334155' }} />
                <Bar dataKey="value" fill="#82ca9d" name="Prazos" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white text-base">Prazos por Urgência</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={urgenciaData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>
                  {urgenciaData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1C2A3A', border: '1px solid #334155' }} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <PrazosNotasEquipe />
    </div>
  );
};

export default PrazosDashboard;