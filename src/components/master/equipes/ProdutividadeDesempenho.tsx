import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const productivityData = [
  { name: 'Jurídico', value: 120 },
  { name: 'Comercial', value: 95 },
  { name: 'Financeiro', value: 80 },
];

const ProdutividadeDesempenho = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Produtividade Média por Equipe (Tarefas/Mês)</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productivityData}>
              <XAxis dataKey="name" stroke="#a1a1aa" />
              <YAxis stroke="#a1a1aa" />
              <Tooltip contentStyle={{ backgroundColor: '#333' }} />
              <Bar dataKey="value" fill="#8884d8" name="Tarefas" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-blue-400" /><CardTitle className="text-white">Análise da IA</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300">"Equipe Jurídico superou a média de produtividade em +23% neste mês."</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProdutividadeDesempenho;