import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";

const forecastData = [
  { name: 'Jul', MRR: 195000 }, { name: 'Ago', MRR: 210000 }, { name: 'Set', MRR: 220000 },
  { name: 'Out', MRR: 235000 }, { name: 'Nov', MRR: 250000 }, { name: 'Dez', MRR: 260000 },
];

const InteligenciaFinanceira = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-blue-400" /><CardTitle className="text-white">Previsão de Receita (IA)</CardTitle></CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">Projeção de MRR para os próximos 6 meses com base em dados históricos, churn e novas vendas.</p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={forecastData}>
              <XAxis dataKey="name" stroke="#a1a1aa" />
              <YAxis stroke="#a1a1aa" tickFormatter={(v) => `R$${(v/1000)}k`} />
              <Tooltip contentStyle={{ backgroundColor: '#333' }} />
              <Legend />
              <Line type="monotone" dataKey="MRR" stroke="#8884d8" name="MRR Previsto" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-blue-400" /><CardTitle className="text-white">Análise de Comportamento</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300">"Clientes com 2 atrasos consecutivos têm <strong>74% de chance de churn</strong> nos próximos 90 dias."</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteligenciaFinanceira;