import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const AuditAIInsights = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-tech-green" />
          <CardTitle className="text-white">IA Auditor Inteligente</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm mb-2 text-white">Análise Preditiva</h4>
          <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Risco de reincidência contratual: 37%. Sugestão: revisão de modelo padrão e ativação de checklist obrigatório.”</p>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <h4 className="font-semibold text-sm mb-2 text-white">Ações Automáticas</h4>
          <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“IA ajustou automaticamente 6 processos para conformidade plena após correção documental.”</p>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <h4 className="font-semibold text-sm mb-2 text-white">Alerta Crítico</h4>
          <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Ação irregular: documento excluído fora do fluxo de aprovação — alerta enviado ao gestor.”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuditAIInsights;