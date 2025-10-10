import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown, Plug, BarChart, AlertTriangle, Users, Clock, DollarSign } from "lucide-react";
import { ResponsiveContainer, BarChart as RechartsBarChart, LineChart, Line, PieChart, Pie, Tooltip, XAxis, YAxis, Legend, Cell } from 'recharts';

const kpiData = [
  { title: "Integrações ativas", value: "42", change: "+6%", changeType: "increase", icon: Plug },
  { title: "Requisições API (mês)", value: "1.29M", change: "+18%", changeType: "increase", icon: BarChart },
  { title: "Falhas registradas", value: "0.9%", change: "-1.2%", changeType: "decrease", icon: AlertTriangle },
  { title: "Parceiros conectados", value: "17", change: "+3", changeType: "increase", icon: Users },
  { title: "Latência média", value: "188ms", change: "", changeType: "neutral", icon: Clock },
  { title: "Receita API (mês)", value: "R$ 21.4k", change: "+14%", changeType: "increase", icon: DollarSign },
];

const consumptionData = [
  { name: 'Neoway', value: 12400 }, { name: 'ARISP', value: 2800 }, { name: 'JusBrasil', value: 4300 },
  { name: 'OpenAI', value: 73000 }, { name: 'Stripe', value: 890 },
];

const latencyData = [
  { name: 'Neoway', ms: 180 }, { name: 'ARISP', ms: 320 }, { name: 'JusBrasil', ms: 450 },
  { name: 'OpenAI', ms: 120 }, { name: 'Stripe', ms: 90 },
];

const originData = [ { name: 'Interna', value: 60 }, { name: 'Externa', value: 25 }, { name: 'Parceiro', value: 15 } ];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const VisaoGeralIntegracoes = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
        {kpiData.map(kpi => (
          <Card key={kpi.title} className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"><CardTitle className="text-sm font-medium text-gray-300">{kpi.title}</CardTitle><kpi.icon className="h-4 w-4 text-gray-300" /></CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className={`text-xs flex items-center ${kpi.changeType === 'increase' ? 'text-green-400' : kpi.changeType === 'decrease' ? 'text-red-400' : 'text-gray-400'}`}>
                {kpi.changeType === 'increase' && <ArrowUp className="h-3 w-3 mr-1" />}
                {kpi.changeType === 'decrease' && <ArrowDown className="h-3 w-3 mr-1" />}
                {kpi.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 bg-gray-800 border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white">Consumo por Integração (Requisições)</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsBarChart data={consumptionData}>
                <XAxis dataKey="name" stroke="#a1a1aa" />
                <YAxis stroke="#a1a1aa" />
                <Tooltip contentStyle={{ backgroundColor: '#333' }} />
                <Bar dataKey="value" fill="#82ca9d" name="Requisições" radius={[4, 4, 0, 0]} />
              </RechartsBarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white">Origem das Chamadas</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={originData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                  {originData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
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

export default VisaoGeralIntegracoes;