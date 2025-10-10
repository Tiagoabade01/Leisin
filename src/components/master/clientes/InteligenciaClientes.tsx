import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, TrendingDown, ArrowUpRight, Smile } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const InteligenciaClientes = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><TrendingDown className="h-5 w-5 text-red-400" /><CardTitle>Previsão de Churn</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300 mb-4">IA analisando uso, pagamentos e suporte para prever cancelamentos.</p>
          <ul className="space-y-3">
            <li className="text-sm"><strong>Advocacia Pontes:</strong> <span className="text-red-400">85% Risco</span><Progress value={85} className="h-2 [&>*]:bg-red-500" /></li>
            <li className="text-sm"><strong>Mariana Costa:</strong> <span className="text-yellow-400">40% Risco</span><Progress value={40} className="h-2 [&>*]:bg-yellow-500" /></li>
          </ul>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><ArrowUpRight className="h-5 w-5 text-green-400" /><CardTitle>Detecção de Upsell</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300 mb-4">Clientes atingindo limites do plano atual.</p>
          <ul className="space-y-2">
            <li className="text-sm"><strong>Nivem Construtora:</strong> Atingiu 90% do limite de usuários. Sugerir upgrade para Enterprise.</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="md:col-span-2 bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><Smile className="h-5 w-5 text-blue-400" /><CardTitle>Análise de Satisfação (CSAT/NPS)</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300">IA resume feedbacks de tickets e pesquisas para gerar um score de satisfação.</p>
          <p className="text-2xl font-bold mt-4">Score Geral da Base: <span className="text-green-400">8.9/10</span></p>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteligenciaClientes;