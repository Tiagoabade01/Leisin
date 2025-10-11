import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const projecaoData = [
    { name: 'Nov', Receita: 395000, Custo: 218000 },
    { name: 'Dez', Receita: 410000, Custo: 221000 },
    { name: 'Jan', Receita: 425000, Custo: 225000 },
];

const RelatoriosProjecaoIA = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Relatórios e Projeções IA</CardTitle></CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-2 text-white">Projeção de Receita e Custo (Próximos 3 meses)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={projecaoData}>
            <XAxis dataKey="name" stroke="#a1a1aa" />
            <YAxis stroke="#a1a1aa" tickFormatter={(v) => `R$${v/1000}k`} />
            <Tooltip contentStyle={{ backgroundColor: '#1C2A3A' }} />
            <Legend />
            <Line type="monotone" dataKey="Receita" stroke="#2EF3C1" />
            <Line type="monotone" dataKey="Custo" stroke="#FF8042" />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Projeção indica aumento de 11% na receita da filial Curitiba no próximo trimestre, impulsionado pelo novo contrato da Atlas Engenharia.”</p>
      </CardContent>
    </Card>
  );
};

export default RelatoriosProjecaoIA;