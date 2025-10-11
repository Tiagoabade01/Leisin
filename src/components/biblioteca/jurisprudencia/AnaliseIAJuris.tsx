import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const AnaliseIAJuris = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader className="flex flex-row items-center gap-2">
        <BrainCircuit className="h-5 w-5 text-tech-green" />
        <CardTitle>IA de Interpretação (Leisin Lex)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2 text-white">Resumo Analítico</h3>
          <p className="text-sm text-gray-300">A decisão do STF consolida o entendimento de que a base de cálculo do ISS em empreendimentos imobiliários deve considerar o valor total da operação, incluindo materiais.</p>
        </div>
        <div className="p-4 bg-gray-800/50 rounded-lg">
          <h3 className="font-semibold mb-2 text-white">Sugestão Estratégica</h3>
          <p className="text-sm text-risk-gold">💡 “Esta decisão pode alterar a base de cálculo do ISS em empreendimentos imobiliários. IA recomenda atualização de cláusulas tributárias nos contratos padrão.”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnaliseIAJuris;