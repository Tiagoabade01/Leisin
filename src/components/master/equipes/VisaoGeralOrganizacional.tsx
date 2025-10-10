import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, Plus, KeyRound } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";

const kpiData = [
  { title: "Usuários Ativos", value: "42", icon: Users },
  { title: "Equipes Criadas", value: "7", icon: Users },
  { title: "Último Acesso (Média)", value: "3h", icon: Clock },
  { title: "Novos Usuários (Mês)", value: "5", icon: Plus },
  { title: "Sessões Ativas", value: "8", icon: Users },
  { title: "Alterações de Permissão (7d)", value: "12", icon: KeyRound },
];

const distributionData = [
  { name: 'Jurídico', value: 12 },
  { name: 'Comercial', value: 8 },
  { name: 'Financeiro', value: 6 },
  { name: 'IA & Dev', value: 10 },
  { name: 'Direção', value: 6 },
];

const VisaoGeralOrganizacional = () => {
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
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Distribuição de Usuários por Área</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={distributionData}>
              <XAxis dataKey="name" stroke="#a1a1aa" />
              <YAxis stroke="#a1a1aa" />
              <Tooltip contentStyle={{ backgroundColor: '#333' }} />
              <Bar dataKey="value" fill="#82ca9d" name="Usuários" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default VisaoGeralOrganizacional;