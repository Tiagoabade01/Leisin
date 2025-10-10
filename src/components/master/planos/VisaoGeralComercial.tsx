import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, TrendingDown, Percent, Tag } from "lucide-react";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";

const kpiData = [
  { title: "Planos Ativos", value: "5", icon: Tag },
  { title: "Receita Média por Plano", value: "R$ 2.410", icon: TrendingUp },
  { title: "Assinaturas Novas (Mês)", value: "38", icon: Users },
  { title: "Upgrades / Downgrades", value: "9 / 2", icon: TrendingUp },
  { title: "Conversão Trial → Pago", value: "42%", icon: Percent },
  { title: "Churn Rate (Mês)", value: "1.8%", icon: TrendingDown },
];

const revenueByPlanData = [
  { name: 'Starter', Receita: 15370 },
  { name: 'Pro', Receita: 65800 },
  { name: 'Business', Receita: 85900 },
  { name: 'Enterprise', Receita: 23420 },
];

const subscriptionEvolutionData = [
  { name: 'Jan', Novas: 25, Canceladas: 5 },
  { name: 'Fev', Novas: 30, Canceladas: 7 },
  { name: 'Mar', Novas: 42, Canceladas: 6 },
  { name: 'Abr', Novas: 38, Canceladas: 8 },
];

const VisaoGeralComercial = () => {
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
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white">Receita por Plano (MRR)</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueByPlanData}>
                <XAxis dataKey="name" stroke="#a1a1aa" />
                <YAxis stroke="#a1a1aa" tickFormatter={(v) => `R$${v/1000}k`} />
                <Tooltip contentStyle={{ backgroundColor: '#333' }} />
                <Bar dataKey="Receita" fill="#82ca9d" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white">Evolução de Assinaturas</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={subscriptionEvolutionData}>
                <XAxis dataKey="name" stroke="#a1a1aa" />
                <YAxis stroke="#a1a1aa" />
                <Tooltip contentStyle={{ backgroundColor: '#333' }} />
                <Legend />
                <Line type="monotone" dataKey="Novas" stroke="#8884d8" />
                <Line type="monotone" dataKey="Canceladas" stroke="#ff8042" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VisaoGeralComercial;