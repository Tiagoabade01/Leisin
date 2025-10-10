import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ListChecks, AlertCircle, CheckCircle2, Bot, Percent, Clock, Filter } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const kpiData = [
  { title: "Tarefas Ativas", value: "248", icon: ListChecks },
  { title: "Concluídas no Mês", value: "312", icon: CheckCircle2 },
  { title: "Atrasadas", value: "22", icon: AlertCircle },
  { title: "Tarefas Automáticas", value: "47", icon: Bot },
  { title: "Taxa de Conclusão", value: "87%", icon: Percent },
  { title: "Produtividade Média", value: "14/sem", icon: Clock },
];

const evolutionData = [
  { name: 'Sem 1', concluídas: 60, pendentes: 40 },
  { name: 'Sem 2', concluídas: 75, pendentes: 35 },
  { name: 'Sem 3', concluídas: 82, pendentes: 28 },
  { name: 'Sem 4', concluídas: 95, pendentes: 22 },
];

const distributionData = [
  { name: 'Jurídico', value: 80 },
  { name: 'Comercial', value: 65 },
  { name: 'Financeiro', value: 50 },
  { name: 'Suporte', value: 35 },
  { name: 'Master', value: 18 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

const VisaoGeralTarefas = () => {
  return (
    <div className="space-y-6">
      {/* Filtros Globais */}
      <div className="flex flex-wrap items-center gap-4 p-4 bg-gray-800/50 rounded-lg">
        <Input placeholder="Buscar tarefa..." className="max-w-xs bg-gray-700 border-gray-600" />
        <Select><SelectTrigger className="w-[180px] bg-gray-700 border-gray-600"><SelectValue placeholder="Status" /></SelectTrigger><SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="pendente">Pendente</SelectItem><SelectItem value="em_andamento">Em Andamento</SelectItem><SelectItem value="concluida">Concluída</SelectItem></SelectContent></Select>
        <Select><SelectTrigger className="w-[180px] bg-gray-700 border-gray-600"><SelectValue placeholder="Responsável" /></SelectTrigger><SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="maria">Maria Lima</SelectItem><SelectItem value="tiago">Tiago Abade</SelectItem></SelectContent></Select>
        <Select><SelectTrigger className="w-[180px] bg-gray-700 border-gray-600"><SelectValue placeholder="Área" /></SelectTrigger><SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="financeiro">Financeiro</SelectItem><SelectItem value="juridico">Jurídico</SelectItem></SelectContent></Select>
        <Button variant="outline" className="bg-gray-700 border-gray-600"><Filter className="h-4 w-4 mr-2" /> Aplicar Filtros</Button>
      </div>

      {/* KPIs */}
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
        {kpiData.map(kpi => (
          <Card key={kpi.title} className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4 text-gray-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Gráficos */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white">Evolução de Tarefas (Últimas 4 semanas)</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={evolutionData}>
                <XAxis dataKey="name" stroke="#a1a1aa" />
                <YAxis stroke="#a1a1aa" />
                <Tooltip contentStyle={{ backgroundColor: '#333' }} />
                <Legend />
                <Bar dataKey="concluídas" stackId="a" fill="#82ca9d" radius={[4, 4, 0, 0]} />
                <Bar dataKey="pendentes" stackId="a" fill="#8884d8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white">Distribuição por Área</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={distributionData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                  {distributionData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#333' }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VisaoGeralTarefas;