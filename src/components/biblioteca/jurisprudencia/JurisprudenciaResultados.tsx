import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const JurisprudenciaResultados = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>STJ - REsp 1.834.321/SP</CardTitle>
          <Badge variant="secondary">Jurisprudência consolidada (Tema 971)</Badge>
        </div>
        <p className="text-sm text-gray-400">Rel. Min. Nancy Andrighi | Data: 15/06/2023</p>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-2 text-white">Ementa</h3>
        <p className="text-sm text-gray-300 border-l-2 border-dourado-tributario pl-4 italic">
          A incorporadora responde solidariamente pelos vícios de construção do empreendimento, ainda que terceirize a execução da obra...
        </p>
        <p className="mt-4"><strong className="text-white">Resultado:</strong> Recurso não provido.</p>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “O Tema 971 do STJ foi aplicado em 63% das ações recentes de responsabilidade construtiva. Impacto jurídico: médio/alto para incorporadoras.”</p>
      </CardContent>
    </Card>
  );
};

export default JurisprudenciaResultados;