import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const kpis = [
  { title: "Tarefas em andamento", value: "118", status: "orange" },
  { title: "Tarefas concluídas", value: "672", status: "green" },
  { title: "Follow-ups pendentes", value: "34", status: "yellow" },
  { title: "Prazos vencidos", value: "11", status: "red" },
];

const taskData = [
  { name: 'Sem 1', concluídas: 150 },
  { name: 'Sem 2', concluídas: 180 },
  { name: 'Sem 3', concluídas: 165 },
  { name: 'Sem 4', concluídas: 195 },
];

const TaskDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="grid grid-cols-2 gap-4">
        {kpis.map(kpi => (
          <Card key={kpi.title} className="bg-gray-800/50 border-gray-700 text-white">
            <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-400">{kpi.title}</CardTitle></CardHeader>
            <CardContent>
              <p className={`text-3xl font-bold text-${kpi.status}-400`}>{kpi.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="bg-gray-800/50 border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white text-base">Tarefas Concluídas por Semana</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={taskData}>
              <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} />
              <YAxis stroke="#a1a1aa" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: '#1C2A3A', border: '1px solid #334155' }} />
              <Bar dataKey="concluídas" fill="#2EF3C1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskDashboard;