import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const AnaliseIA = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader className="flex flex-row items-center gap-2">
        <BrainCircuit className="h-5 w-5 text-tech-green" />
        <CardTitle>Análise e Interpretação IA (Leisin Lex)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2 text-white">Resumo Executivo</h3>
          <p className="text-sm text-gray-300">A Lei 14.133/2021, nova Lei de Licitações, moderniza o processo de contratação pública, introduzindo modalidades como o diálogo competitivo e focando em governança e planejamento.</p>
        </div>
        <div className="p-4 bg-gray-800/50 rounded-lg">
          <h3 className="font-semibold mb-2 text-white">Interpretação Contextual</h3>
          <p className="text-sm text-gray-300">"Como esta lei impacta o contrato atual?"</p>
          <p className="text-sm text-tech-green mt-2">A nova lei exige a inclusão de cláusulas de integridade e compliance, além de matriz de riscos. O contrato atual não possui tais cláusulas e precisa ser adequado.</p>
        </div>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “A Lei 14.133/2021 substitui a antiga 8.666/1993 em licitações públicas. IA atualizou automaticamente as cláusulas padrão de contratos administrativos.”</p>
      </CardContent>
    </Card>
  );
};

export default AnaliseIA;