import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, Users, TrendingDown, ListChecks, Signature, BrainCircuit, ArrowUp, ArrowDown } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, PieChart, Pie, Tooltip, XAxis, YAxis, Legend, Cell } from 'recharts';

const kpiData = [
  { title: "Receita mensal (MRR)", value: "R$ 182.900", change: "+12%", changeType: "increase", icon: DollarSign },
  { title: "Clientes ativos", value: "184", change: "+9%", changeType: "increase", icon: Users },
  { title: "Taxa de churn", value: "2,4%", change: "-0,8%", changeType: "decrease", icon: TrendingDown },
  { title: "Tarefas concluídas", value: "1.234", change: "+21%", changeType: "increase", icon: ListChecks },
  { title: "Contratos vigentes", value: "382", change: "+6%", changeType: "increase", icon: Signature },
  { title: "IA ativa (módulos)", value: "87%", change: "", changeType: "neutral", icon: BrainCircuit },
];

const revenueChurnData = [
  { name: 'Jan', Receita: 150000, Churn: 3.2 }, { name: 'Fev', Receita: 160000, Churn: 2.8 },
  { name: 'Mar', Receita: 175000, Churn: 2.5 }, { name: 'Abr', Receita: 182900, Churn: 2.4 },
];

const planDistributionData = [ { name: 'Starter', value: 53 }, { name: 'Business', value: 32 }, { name: 'White Label', value: 4 }, { name: 'Pro', value: 95 } ];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const VisaoGeralMetricas = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-4 p-4 bg-gray-800/50 rounded-lg">
        <Select defaultValue="30"><SelectTrigger className="w-[180px] bg-gray-700 border-gray-600"><SelectValue /></SelectTrigger><SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="7">Últimos 7 dias</SelectItem><SelectItem value="30">Últimos 30 dias</SelectItem><SelectItem value="90">Últimos 90 dias</SelectItem></SelectContent></Select>
        <Select><SelectTrigger className="w-[180px] bg-gray-700 border-gray-600"><SelectValue placeholder="Filtrar por Filial" /></SelectTrigger></Select>
        <Button variant="outline" className="bg-gray-700 border-gray-600">Aplicar Filtros</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
        {kpiData.map(kpi => (
          <Card key={kpi.title} className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"><CardTitle className="text-sm font-medium text-gray-300">{kpi.title}</CardTitle><kpi.icon className="h-4 w-4 text-gray-300" /></CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className={`text-xs flex items-center ${kpi.changeType === 'increase' ? 'text-green-400' : 'text-red-400'}`}>
                {kpi.changeType === 'increase' && <ArrowUp className="h-3 w-3 mr-1" />}
                {kpi.changeType === 'decrease' && <ArrowDown className="h-3 w-3 mr-1" />}
                {kpi.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white">Receita vs. Churn</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueChurnData}>
                <XAxis dataKey="name" stroke="#a1a1aa" />
                <YAxis yAxisId="left" stroke="#8884d8" tickFormatter={(v) => `R$${v/1000}k`} />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" tickFormatter={(v) => `${v}%`} />
                <Tooltip contentStyle={{ backgroundColor: '#333' }} />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="Receita" stroke="#8884d8" />
                <Line yAxisId="right" type="monotone" dataKey="Churn" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white">Distribuição de Clientes por Plano</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={planDistributionData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                  {planDistributionData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
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

export default VisaoGeralMetricas;