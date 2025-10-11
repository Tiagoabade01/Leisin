import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranch } from "lucide-react";

const RelacionamentosJuridicos = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Relacionamentos Jurídicos</CardTitle></CardHeader>
      <CardContent>
        <div className="font-mono text-sm space-y-2 bg-gray-900/50 p-4 rounded-lg">
          <div className="flex items-center gap-2"><GitBranch className="h-4 w-4 text-blue-400" /> Lei 10.257/2001 (Estatuto da Cidade)</div>
          <div className="pl-6 border-l border-gray-600 ml-2 space-y-2">
            <p>↳ Decreto 5.790/2006 (Regulamentação)</p>
            <p>↳ Norma ABNT NBR 9050 (Acessibilidade)</p>
            <p>↳ Lei 13.465/2017 (Regularização Fundiária)</p>
          </div>
        </div>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “A NBR 9050 tem correlação direta com a Lei 10.098/2000. Essa relação foi identificada e adicionada ao seu dossiê de acessibilidade.”</p>
      </CardContent>
    </Card>
  );
};

export default RelacionamentosJuridicos;