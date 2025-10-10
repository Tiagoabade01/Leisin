import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, TrendingUp, TrendingDown, Repeat, Target } from "lucide-react";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";

const mrrData = [
  { name: 'Jan', MRR: 4000 }, { name: 'Fev', MRR: 3000 }, { name: 'Mar', MRR: 5000 },
  { name: 'Abr', MRR: 4780 }, { name: 'Mai', MRR: 5890 }, { name: 'Jun', MRR: 6390 },
];

const churnData = [
  { name: 'Jan', Churn: 2.5 }, { name: 'Fev', Churn: 3.1 }, { name: 'Mar', Churn: 1.9 },
  { name: 'Abr', Churn: 2.2 }, { name: 'Mai', Churn: 1.5 }, { name: 'Jun', Churn: 1.2 },
];

const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

const SaaSMetricsDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"><CardTitle className="text-sm font-medium">LTV (Lifetime Value)</CardTitle><Repeat className="h-4 w-4 text-gray-300" /></CardHeader>
          <CardContent><div className="text-2xl font-bold">{formatCurrency(4350.75)}</div><p className="text-xs text-gray-300">+5% vs. último mês</p></CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"><CardTitle className="text-sm font-medium">CAC (Custo de Aquisição)</CardTitle><Target className="h-4 w-4 text-gray-300" /></CardHeader>
          <CardContent><div className="text-2xl font-bold">{formatCurrency(850.20)}</div><p className="text-xs text-gray-300">-10% vs. último mês</p></CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"><CardTitle className="text-sm font-medium">ARPA</CardTitle><DollarSign className="h-4 w-4 text-gray-300" /></CardHeader>
          <CardContent><div className="text-2xl font-bold">{formatCurrency(1850.50)}</div><p className="text-xs text-gray-300">+2% vs. último mês</p></CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"><CardTitle className="text-sm font-medium">Usuários Ativos</CardTitle><Users className="h-4 w-4 text-gray-300" /></CardHeader>
          <CardContent><div className="text-2xl font-bold">480</div><p className="text-xs text-gray-300">+12 desde ontem</p></CardContent>
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader><CardTitle>Crescimento de MRR</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mrrData}>
                <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} />
                <YAxis stroke="#a1a1aa" fontSize={12} tickFormatter={(value) => formatCurrency(value as number)} />
                <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
                <Legend />
                <Line type="monotone" dataKey="MRR" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader><CardTitle>Taxa de Churn (%)</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={churnData}>
                <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} />
                <YAxis stroke="#a1a1aa" fontSize={12} tickFormatter={(value) => `${value}%`} />
                <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
                <Legend />
                <Bar dataKey="Churn" fill="#82ca9d" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SaaSMetricsDashboard;