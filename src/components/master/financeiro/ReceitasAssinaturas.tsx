import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";

const revenueByPlanData = [
  { name: 'Starter', value: 15000 },
  { name: 'Pro', value: 65000 },
  { name: 'Business', value: 85000 },
  { name: 'Enterprise', value: 23420 },
];

const ReceitasAssinaturas = () => {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Receita Recorrente por Plano</CardTitle></CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={revenueByPlanData} layout="vertical">
            <XAxis type="number" stroke="#a1a1aa" tickFormatter={(v) => `R$${v/1000}k`} />
            <YAxis type="category" dataKey="name" stroke="#a1a1aa" width={80} />
            <Tooltip contentStyle={{ backgroundColor: '#333' }} />
            <Bar dataKey="value" fill="#82ca9d" name="MRR" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ReceitasAssinaturas;