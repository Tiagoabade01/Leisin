import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, AlertTriangle, FileWarning, BarChart, Percent } from "lucide-react";
import { Bar, BarChart, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, Cell } from "recharts";

const kpiData = [
  { title: "Receita Mensal (MRR)", value: "R$ 188.420", icon: DollarSign },
  { title: "Receita Anual (ARR)", value: "R$ 2.210.000", icon: TrendingUp },
  { title: "Inadimplência", value: "3,7%", icon: Percent },
  { title: "Faturas Abertas", value: "41", icon: FileWarning },
  { title: "Pagamentos Pendentes", value: "R$ 28.540", icon: AlertTriangle },
  { title: "Ticket Médio", value: "R$ 2.490", icon: BarChart },
];

const mrrData = [
  { name: 'Jan', MRR: 120000 }, { name: 'Fev', MRR: 135000 }, { name: 'Mar', MRR: 150000 },
  { name: 'Abr', MRR: 162000 }, { name: 'Mai', MRR: 175000 }, { name: 'Jun', MRR: 188420 },
];

const paymentMethodData = [ { name: 'Cartão', value: 70 }, { name: 'Pix', value: 20 }, { name: 'Boleto', value: 10 } ];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const VisaoGeralFinanceiro = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
        {kpiData.map(kpi => (
          <Card key={kpi.title} className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4 text-gray-300" />
            </CardHeader>
            <CardContent><div className="text-2xl font-bold">{kpi.value}</div></CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 bg-gray-800 border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white">Evolução de MRR (Últimos 6 meses)</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mrrData}>
                <XAxis dataKey="name" stroke="#a1a1aa" />
                <YAxis stroke="#a1a1aa" tickFormatter={(v) => `R$${(v/1000)}k`} />
                <Tooltip contentStyle={{ backgroundColor: '#333' }} />
                <Legend />
                <Line type="monotone" dataKey="MRR" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white">Pagamentos por Método</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={paymentMethodData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                  {paymentMethodData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
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

export default VisaoGeralFinanceiro;