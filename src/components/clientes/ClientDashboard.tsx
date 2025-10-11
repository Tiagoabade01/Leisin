import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, Users, Building, CheckSquare, TrendingUp, AlertCircle } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell, LineChart, Line, XAxis, YAxis, Legend } from 'recharts';

const kpis = [
  { title: "Clientes ativos", value: "138", change: "+7%", icon: Users },
  { title: "Clientes corporativos", value: "52", change: "+3%", icon: Building },
  { title: "Novos clientes (mês)", value: "11", change: "+8%", icon: Users },
  { title: "Taxa de retenção", value: "93%", change: "+2%", icon: CheckSquare },
  { title: "Contratos em vigor", value: "119", change: "+5%", icon: TrendingUp },
  { title: "Reclamações abertas", value: "2", change: "-50%", icon: AlertCircle },
];

const clientTypeData = [
  { name: 'Pessoa Jurídica', value: 52 },
  { name: 'Pessoa Física', value: 86 },
  { name: 'Incorporadora', value: 15 },
  { name: 'Construtora', value: 12 },
  { name: 'Investidor', value: 25 },
];
const COLORS = ['#6A5ACD', '#2EF3C1', '#FFBB28', '#FF8042', '#A9A9A9'];

const evolutionData = [
  { name: 'Q1', Ativos: 110 },
  { name: 'Q2', Ativos: 125 },
  { name: 'Q3', Ativos: 138 },
];

const ClientDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {kpis.map((kpi) => (
          <Card key={kpi.title} className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between text-gray-400">
                <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
                <kpi.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{kpi.value}</p>
              <p className="text-xs text-tech-green flex items-center"><ArrowUp className="h-3 w-3 mr-1" /> {kpi.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white text-base">Clientes por Tipo</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={clientTypeData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>
                  {clientTypeData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1C2A3A', border: '1px solid #334155' }} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white text-base">Evolução de Clientes Ativos</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={evolutionData}>
                <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} />
                <YAxis stroke="#a1a1aa" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: '#1C2A3A', border: '1px solid #334155' }} />
                <Line type="monotone" dataKey="Ativos" stroke="#2EF3C1" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <p className="text-sm text-risk-gold text-center">💡 “68% dos clientes possuem mais de um contrato ativo — alto potencial de cross-selling jurídico.”</p>
    </div>
  );
};

export default ClientDashboard;