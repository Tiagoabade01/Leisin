import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";

const profitData = [
  { name: 'Neoway', lucro: 5200 }, { name: 'ARISP', lucro: 1800 }, { name: 'JusBrasil', lucro: 2100 },
];

const costUsageData = [
  { name: 'Jan', Custo: 1200, Uso: 50000 }, { name: 'Fev', Custo: 1500, Uso: 65000 },
  { name: 'Mar', Custo: 1800, Uso: 80000 }, { name: 'Abr', Custo: 2100, Uso: 95000 },
];

const FaturamentoConsumo = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white">Lucro Líquido por Integração</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={profitData}>
                <XAxis dataKey="name" stroke="#a1a1aa" />
                <YAxis stroke="#a1a1aa" tickFormatter={(v) => `R$${v/1000}k`} />
                <Tooltip contentStyle={{ backgroundColor: '#333' }} />
                <Bar dataKey="lucro" fill="#82ca9d" name="Lucro" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white">Custo vs. Uso (APIs Externas)</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={costUsageData}>
                <XAxis dataKey="name" stroke="#a1a1aa" />
                <YAxis yAxisId="left" stroke="#8884d8" tickFormatter={(v) => `R$${v/1000}k`} />
                <YAxis yAxisId="right" orientation="right" stroke="#ff8042" tickFormatter={(v) => `${v/1000}k`} />
                <Tooltip contentStyle={{ backgroundColor: '#333' }} />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="Custo" stroke="#8884d8" />
                <Line yAxisId="right" type="monotone" dataKey="Uso" stroke="#ff8042" name="Requisições" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-blue-400" /><CardTitle className="text-white">IA Financeira</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300">"A margem média da integração Neoway é de 84%. Sugere-se reduzir custo por requisição via plano Enterprise."</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FaturamentoConsumo;