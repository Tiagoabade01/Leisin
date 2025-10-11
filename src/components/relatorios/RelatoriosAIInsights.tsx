import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const RelatoriosAIInsights = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-tech-green" />
          <CardTitle className="text-white">IA – Análise Diagnóstica</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm mb-2 text-white">Funções</h4>
          <ul className="list-disc list-inside space-y-2 text-xs text-gray-300">
            <li>Consolida dados de até 20 bases distintas</li>
            <li>Interpreta e classifica o grau de risco</li>
            <li>Gera parecer descritivo com linguagem jurídica</li>
            <li>Sugere ações corretivas e preventivas</li>
            <li>Cria sumários executivos para investidores</li>
          </ul>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <h4 className="font-semibold text-sm mb-2 text-white">Exemplos de Análise</h4>
          <div className="space-y-3">
            <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Regularização pendente de alvará de construção — possível correção via certidão de uso e ocupação do solo.”</p>
            <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Alto potencial de valorização em eixo estruturador — recomendada análise de mercado para aquisição.”</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatoriosAIInsights;