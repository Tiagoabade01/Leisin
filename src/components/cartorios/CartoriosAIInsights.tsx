import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const CartoriosAIInsights = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-tech-green" />
          <CardTitle className="text-white">IA – Motor de Verificação Registral</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm mb-2 text-white">Funções</h4>
          <ul className="list-disc list-inside space-y-2 text-xs text-gray-300">
            <li>Detecta diferenças entre matrículas e cadastros fiscais.</li>
            <li>Cruza informações de titularidade e ônus.</li>
            <li>Gera alertas de irregularidade e vencimento.</li>
            <li>Classifica imóveis por risco cartorial.</li>
            <li>Sugere retificações ou regularizações.</li>
          </ul>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <h4 className="font-semibold text-sm mb-2 text-white">Alertas Preditivos</h4>
          <div className="space-y-3">
            <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Matrícula nº 56.210 não possui averbação correspondente ao projeto aprovado.”</p>
            <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“O imóvel está com registro de hipoteca vencido, sem baixa cartorial.”</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartoriosAIInsights;