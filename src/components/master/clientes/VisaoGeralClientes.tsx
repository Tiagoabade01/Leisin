import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, TrendingDown, DollarSign, Star, MapPin, BrainCircuit, AlertTriangle, ArrowUpRight, UserX } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, BarChart, Bar } from 'recharts';

const kpiData = [
  { title: "Clientes Ativos", value: "480", change: "+12", icon: Users },
  { title: "Crescimento Mensal", value: "2.5%", change: "vs. mês anterior", icon: TrendingUp },
  { title: "Churn Rate", value: "1.8%", change: "vs. mês anterior", icon: TrendingDown },
  { title: "ARPU", value: "R$ 1.850", change: "Receita/Cliente", icon: DollarSign },
  { title: "LTV", value: "R$ 4.350", change: "Lifetime Value", icon: Star },
];

const evolutionData = [
  { name: 'Jan', Ativos: 400 }, { name: 'Fev', Ativos: 410 }, { name: 'Mar', Ativos: 425 },
  { name: 'Abr', Ativos: 440 }, { name: 'Mai', Ativos: 465 }, { name: 'Jun', Ativos: 480 },
];

const acquisitionData = [
  { name: 'Site', value: 120 }, { name: 'Parceiro', value: 80 }, { name: 'Venda Direta', value: 150 },
];

const iaInsights = [
  { text: "5 clientes com alto risco de churn.", icon: AlertTriangle, color: "text-red-400" },
  { text: "12 clientes com potencial de upgrade para o plano Business.", icon: ArrowUpRight, color: "text-green-400" },
  { text: "8 contas sem login há mais de 30 dias.", icon: UserX, color: "text-yellow-400" },
];

const VisaoGeralClientes = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {kpiData.map(kpi => (
          <Card key={kpi.title} className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4 text-gray-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className="text-xs text-gray-400">{kpi.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 bg-gray-800 border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white">Evolução de Clientes Ativos</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={evolutionData}>
                <XAxis dataKey="name" stroke="#a1a1aa" />
                <YAxis stroke="#a1a1aa" />
                <Tooltip contentStyle={{ backgroundColor: '#333' }} />
                <Legend />
                <Line type="monotone" dataKey="Ativos" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Canal de Aquisição</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={acquisitionData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" stroke="#a1a1aa" width={80} />
                  <Tooltip contentStyle={{ backgroundColor: '#333' }} />
                  <Bar dataKey="value" fill="#82ca9d" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5" /><CardTitle className="text-white">Insights da IA</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {iaInsights.map(insight => (
                  <li key={insight.text} className="flex items-center text-sm">
                    <insight.icon className={`h-4 w-4 mr-2 ${insight.color}`} />
                    {insight.text}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VisaoGeralClientes;