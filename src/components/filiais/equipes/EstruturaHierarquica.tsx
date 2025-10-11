import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranch } from "lucide-react";

const EstruturaHierarquica = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Organograma da Filial</CardTitle></CardHeader>
      <CardContent>
        <div className="font-mono text-sm space-y-2 bg-gray-900/50 p-4 rounded-lg">
          <div className="flex items-center gap-2"><GitBranch className="h-4 w-4 text-blue-400" /> Diretora Regional (Dra. Larissa Campos)</div>
          <div className="pl-6 border-l border-gray-600 ml-2 space-y-2">
            <div>
              <p>├─ Jurídico</p>
              <div className="pl-6 border-l border-gray-600 ml-2 space-y-1">
                <p>├─ Dr. Felipe Ramos (Coordenador)</p>
                <p>├─ Dra. Bianca Prado (Advogada Plena)</p>
                <p>└─ Lucas Martins (Estagiário)</p>
              </div>
            </div>
            <div>
              <p>├─ Financeiro</p>
              <div className="pl-6 border-l border-gray-600 ml-2 space-y-1">
                <p>├─ Ana Souza (Controller)</p>
                <p>└─ Fernanda Dias (Assistente)</p>
              </div>
            </div>
            <div>
              <p>└─ Administrativo / CRM</p>
              <div className="pl-6 ml-2 space-y-1">
                <p>├─ Pedro Lima (Suporte)</p>
                <p>└─ IA Copilot (Assistente Virtual)</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “O setor jurídico está com 67% das tarefas concentradas em 2 advogados. Sugere-se redistribuir processos ou adicionar um apoio remoto.”</p>
      </CardContent>
    </Card>
  );
};

export default EstruturaHierarquica;