import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown, ListChecks, CheckCircle, Clock, Percent, BarChart, Users } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, BarChart as RechartsBarChart, Bar, Tooltip, XAxis, YAxis, Legend } from 'recharts';

const kpis = [
  { title: "Tarefas ativas", value: "187", change: "+8%", icon: ListChecks, changeType: 'increase' },
  { title: "Concluídas (mês)", value: "312", change: "+12%", icon: CheckCircle, changeType: 'increase' },
  { title: "Média de horas/caso", value: "4.3h", change: "-5%", icon: Clock, changeType: 'decrease' },
  { title: "Cumprimento de prazos", value: "96%", change: "+4%", icon: Percent, changeType: 'increase' },
  { title: "Retrabalho", value: "3%", change: "-2%", icon: BarChart, changeType: 'decrease' },
  { title: "Eficiência média", value: "87%", change: "+6%", icon: Users, changeType: 'increase' },
];

const evolutionData = [
  { name: 'Sem 1', Criadas: 80, Concluídas: 75 },
  { name: 'Sem 2', Criadas: 90, Concluídas: 82 },
  { name: 'Sem 3', Criadas: 85, Concluídas: 88 },
  { name: 'Sem 4', Criadas: 78, Concluídas: 91 },
];

const productivityData = [
  { name: 'Ana Faria', value: 92 },
  { name: 'João Lima', value: 85 },
  { name: 'Maria Souza', value: 88 },
];

const ProductivityDashboard = () => {
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
              <p className={`text-xs flex items-center ${kpi.changeType === 'increase' ? 'text-tech-green' : 'text-red-400'}`}>
                {kpi.changeType === 'increase' ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                {kpi.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white text-base">Evolução de Tarefas</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={evolutionData}>
                <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} />
                <YAxis stroke="#a1a1aa" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: '#1C2A3A', border: '1px solid #334155' }} />
                <Legend />
                <Line type="monotone" dataKey="Criadas" stroke="#F8C74E" />
                <Line type="monotone" dataKey="Concluídas" stroke="#2EF3C1" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white text-base">Produtividade por Advogado (%)</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <RechartsBarChart data={productivityData}>
                <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} />
                <YAxis stroke="#a1a1aa" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: '#1C2A3A', border: '1px solid #334155' }} />
                <Bar dataKey="value" fill="#F8C74E" name="Eficiência" radius={[4, 4, 0, 0]} />
              </RechartsBarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <p className="text-sm text-risk-gold text-center">💡 “A equipe jurídica atingiu 87% de eficiência geral — principal gargalo: tarefas contratuais com revisões sucessivas.”</p>
    </div>
  );
};

export default ProductivityDashboard;