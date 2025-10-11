import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const CertificatesAIInsights = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-tech-green" />
          <CardTitle className="text-white">IA de Conformidade</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm mb-2 text-white">Emissão Automática</h4>
          <p className="text-xs text-gray-300">A IA identifica, coleta e valida certidões aplicáveis a um CNPJ/CPF, cruzando dados com fontes oficiais.</p>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <h4 className="font-semibold text-sm mb-2 text-white">Validação Manual</h4>
          <p className="text-xs text-gray-300">Leitura OCR e extração de dados para verificação cruzada de documentos enviados manualmente.</p>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <h4 className="font-semibold text-sm mb-2 text-white">Insights Preditivos</h4>
          <div className="space-y-3">
            <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Probabilidade de irregularidade fiscal no próximo trimestre: 21%.”</p>
            <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“CND Estadual tende a expirar antes da Federal — sincronizar renovações.”</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificatesAIInsights;