import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const kpis = [
  { title: "Receita Bruta Mensal", value: "R$ 382.000", change: "+8,4%", changeType: "increase" },
  { title: "Custo Operacional", value: "R$ 211.000", change: "-2,1%", changeType: "decrease" },
  { title: "Margem Líquida", value: "31,7%", change: "+3,6%", changeType: "increase" },
  { title: "Repasses à Matriz", value: "R$ 48.000", change: "+1,2%", changeType: "increase" },
  { title: "Despesas com Equipe", value: "R$ 119.000", change: "-1,0%", changeType: "decrease" },
];

const revenueCostData = [
    { name: 'Jul', Receita: 350000, Custo: 215000 },
    { name: 'Ago', Receita: 365000, Custo: 218000 },
    { name: 'Set', Receita: 371000, Custo: 212000 },
    { name: 'Out', Receita: 382000, Custo: 211000 },
];

const costByCategoryData = [
    { name: 'Pessoal', value: 45 },
    { name: 'Estrutura', value: 20 },
    { name: 'Jurídico', value: 15 },
    { name: 'Tecnologia', value: 10 },
    { name: 'Outros', value: 10 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A9A9A9'];

const VisaoGeralFinanceira = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {kpis.map(kpi => (
          <Card key={kpi.title} className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-400">{kpi.title}</CardTitle></CardHeader>
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
          <CardHeader><CardTitle className="text-base">Receita vs. Custo</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={revenueCostData}>
                <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} />
                <YAxis stroke="#a1a1aa" fontSize={12} tickFormatter={(v) => `R$${v/1000}k`} />
                <Tooltip contentStyle={{ backgroundColor: '#1C2A3A' }} />
                <Legend />
                <Line type="monotone" dataKey="Receita" stroke="#2EF3C1" />
                <Line type="monotone" dataKey="Custo" stroke="#FF8042" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader><CardTitle className="text-base">Custos por Área</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={costByCategoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>
                  {costByCategoryData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1C2A3A' }} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <p className="text-sm text-risk-gold text-center">💡 IA Insight: “A filial de Belo Horizonte apresentou aumento de 14% na margem após revisão dos contratos de prestação de serviço. Deseja aplicar o mesmo modelo em São Paulo?”</p>
    </div>
  );
};

export default VisaoGeralFinanceira;