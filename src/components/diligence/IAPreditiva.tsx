import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const IAPreditiva = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader className="flex flex-row items-center gap-2">
        <BrainCircuit className="h-5 w-5 text-tech-green" />
        <CardTitle className="text-white">IA Preditiva e Ações Automáticas</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-3 text-sm text-gray-300">
          <li>Sugere reanálises automáticas em 30/60/90 dias com base no nível de risco.</li>
          <li>Identifica padrões de risco por setor, região ou grupo econômico para análises proativas.</li>
          <li>Detecta inconsistências em documentos anexados, como assinaturas faltantes ou dados divergentes.</li>
          <li>Conecta dados com o módulo SLAs & Automação para gerar tarefas automáticas de mitigação de risco.</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default IAPreditiva;