import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, Area, AreaChart } from 'recharts';

const revenueData = [
  { name: 'Jan', Faturamento: 180000 },
  { name: 'Fev', Faturamento: 195000 },
  { name: 'Mar', Faturamento: 210000 },
  { name: 'Abr', Faturamento: 218400 },
];

const FinancialRevenue = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Financeiro e Receita</CardTitle></CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-2">Curva de Faturamento (Ano)</h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2EF3C1" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#2EF3C1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#a1a1aa" />
            <YAxis stroke="#a1a1aa" tickFormatter={(value) => `R$${value/1000}k`} />
            <Tooltip contentStyle={{ backgroundColor: '#1C2A3A', border: '1px solid #334155' }} />
            <Area type="monotone" dataKey="Faturamento" stroke="#2EF3C1" fillOpacity={1} fill="url(#colorRevenue)" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default FinancialRevenue;