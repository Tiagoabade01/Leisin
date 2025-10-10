import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, AlertTriangle } from "lucide-react";

const InteligenciaAnalitica = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-blue-400" /><CardTitle className="text-white">Análise Automática de Tendências</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300">"A curva de receita crescerá 12% no próximo trimestre se mantida a taxa de retenção atual."</p>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><AlertTriangle className="h-5 w-5 text-yellow-400" /><CardTitle className="text-white">Detecção de Anomalias</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300">"Receita caiu 8% no módulo IA — verificar falhas na cobrança."</p>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-blue-400" /><CardTitle className="text-white">Previsão de Churn e Crescimento</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300">"Com base nos padrões de uso, 6 clientes podem cancelar nos próximos 30 dias."</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteligenciaAnalitica;