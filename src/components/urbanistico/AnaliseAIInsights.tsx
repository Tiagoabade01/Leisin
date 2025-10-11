import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const AnaliseAIInsights = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-tech-green" />
          <CardTitle className="text-white">IA – Interpretação Legal</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-3 bg-gray-800/50 rounded-lg">
          <h4 className="font-semibold text-sm mb-2 text-white">Análise Preditiva</h4>
          <p className="text-sm text-gray-300">“O uso comercial é permitido mediante fachada ativa e CA adicional via outorga onerosa.”</p>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <h4 className="font-semibold text-sm mb-2 text-white">Ações Automáticas</h4>
          <p className="text-sm text-gray-300">“Necessário recuo mínimo de 5m devido à via classificada como coletora.”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnaliseAIInsights;