import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown, Signature, Clock, AlertTriangle, BarChart, CheckSquare } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, PieChart, Pie, Tooltip, XAxis, YAxis, Legend, Cell } from 'recharts';

const kpis = [
  { title: "Contratos ativos", value: "326", change: "+5%", icon: Signature, changeType: 'increase' },
  { title: "Vencendo em 30 dias", value: "27", change: "+8%", icon: Clock, changeType: 'increase' },
  { title: "Encerrados (mês)", value: "14", change: "-3%", icon: CheckSquare, changeType: 'decrease' },
  { title: "Obrigações pendentes", value: "41", change: "+2%", icon: AlertTriangle, changeType: 'increase' },
  { title: "Aditivos recentes", value: "9", change: "+1%", icon: BarChart, changeType: 'increase' },
  { title: "Risco contratual médio", value: "2.4/5", change: "-6%", icon: AlertTriangle, changeType: 'decrease' },
];

const evolutionData = [
  { name: 'Jan', Novos: 20, Encerrados: 15 },
  { name: 'Fev', Novos: 25, Encerrados: 18 },
  { name: 'Mar', Novos: 30, Encerrados: 12 },
  { name: 'Abr', Novos: 28, Encerrados: 14 },
];

const typeData = [ { name: 'Serviços', value: 45 }, { name: 'Locação', value: 20 }, { name: 'Compra/Venda', value: 15 }, { name: 'Societário', value: 10 }, { name: 'Outros', value: 10 } ];
const COLORS = ['#6A5ACD', '#2EF3C1', '#FFBB28', '#FF8042', '#A9A9A9'];

const ContractKPIs = () => {
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
              <p className={`text-xs flex items-center ${kpi.changeType === 'increase' ? 'text-red-400' : 'text-tech-green'}`}>
                {kpi.changeType === 'increase' ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                {kpi.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white text-base">Novos Contratos vs. Encerrados</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={evolutionData}>
                <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} />
                <YAxis stroke="#a1a1aa" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: '#1C2A3A', border: '1px solid #334155' }} />
                <Legend />
                <Line type="monotone" dataKey="Novos" stroke="#6A5ACD" />
                <Line type="monotone" dataKey="Encerrados" stroke="#FF8042" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white text-base">Contratos por Tipo</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={typeData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>
                  {typeData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1C2A3A', border: '1px solid #334155' }} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <p className="text-sm text-risk-gold text-center">💡 “78% dos contratos estão conformes — 22% possuem pendências documentais ou cláusulas críticas.”</p>
    </div>
  );
};

export default ContractKPIs;