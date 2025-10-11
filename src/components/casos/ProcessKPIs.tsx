import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown, Briefcase, CheckCircle, Clock, BarChart, Users } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, PieChart, Pie, Tooltip, XAxis, YAxis, Legend, Cell } from 'recharts';

const kpis = [
  { title: "Casos ativos", value: "742", change: "+6%", icon: Briefcase, changeType: 'increase' },
  { title: "Encerrados (mês)", value: "89", change: "+11%", icon: CheckCircle, changeType: 'increase' },
  { title: "Taxa de êxito", value: "87%", change: "+3%", icon: CheckCircle, changeType: 'increase' },
  { title: "Tempo de tramitação", value: "118 dias", change: "-9%", icon: Clock, changeType: 'decrease' },
  { title: "Casos com risco alto", value: "12", change: "", icon: BarChart, changeType: 'neutral' },
  { title: "Audiências programadas", value: "24", change: "+2", icon: Users, changeType: 'increase' },
];

const evolutionData = [
  { name: 'Jan', Abertos: 40, Encerrados: 30 },
  { name: 'Fev', Abertos: 45, Encerrados: 35 },
  { name: 'Mar', Abertos: 50, Encerrados: 42 },
  { name: 'Abr', Abertos: 48, Encerrados: 45 },
];

const distributionData = [ { name: 'Trabalhista', value: 43 }, { name: 'Cível', value: 25 }, { name: 'Imobiliário', value: 18 }, { name: 'Fiscal', value: 14 } ];
const COLORS = ['#6A5ACD', '#2EF3C1', '#FFBB28', '#FF8042'];

const ProcessKPIs = () => {
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
              {kpi.change && <p className={`text-xs flex items-center ${kpi.changeType === 'increase' ? 'text-tech-green' : 'text-red-400'}`}>
                {kpi.changeType === 'increase' ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                {kpi.change}
              </p>}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white text-base">Evolução de Casos</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={evolutionData}>
                <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} />
                <YAxis stroke="#a1a1aa" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: '#1C2A3A', border: '1px solid #334155' }} />
                <Legend />
                <Line type="monotone" dataKey="Abertos" stroke="#6A5ACD" />
                <Line type="monotone" dataKey="Encerrados" stroke="#2EF3C1" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white text-base">Distribuição por Área</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={distributionData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>
                  {distributionData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1C2A3A', border: '1px solid #334155' }} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <p className="text-sm text-risk-gold text-center">💡 “Área trabalhista representa 43% das ações ativas, mas responde por 62% do risco jurídico total.”</p>
    </div>
  );
};

export default ProcessKPIs;