import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const DocumentAI = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-tech-green" />
          <CardTitle className="text-white">IA Documental & Auditoria</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-3 bg-gray-800/50 rounded-lg">
          <h4 className="font-semibold text-sm mb-2 text-yellow-400">Análise Inteligente</h4>
          <p className="text-sm text-gray-300">“Documento identificado como minuta contratual, tipo: Prestação de Serviços.”</p>
        </div>
        <div className="p-3 bg-gray-800/50 rounded-lg">
          <h4 className="font-semibold text-sm mb-2 text-yellow-400">Auditoria</h4>
          <p className="text-sm text-gray-300">“Documento CT-212.pdf sofreu alteração não registrada — sugerir revisão manual e bloqueio temporário.”</p>
        </div>
        <div className="p-3 bg-gray-800/50 rounded-lg">
          <h4 className="font-semibold text-sm mb-2">Indicadores IA</h4>
          <div className="text-xs space-y-1">
            <p>Documentos analisados: <span className="font-bold">5.128</span></p>
            <p>Erros detectados: <span className="font-bold">47</span></p>
            <p>Precisão média IA: <span className="font-bold">94%</span></p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentAI;