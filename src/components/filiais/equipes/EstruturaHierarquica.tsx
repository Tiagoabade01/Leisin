import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranch } from "lucide-react";

const EstruturaHierarquica = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Organograma e Hierarquia</CardTitle></CardHeader>
      <CardContent>
        <div className="font-mono text-sm space-y-2 bg-gray-900/50 p-4 rounded-lg">
          <div className="flex items-center gap-2"><GitBranch className="h-4 w-4 text-blue-400" /> Diretoria Regional ─ Dra. Larissa Campos</div>
          <div className="pl-6 border-l border-gray-600 ml-2 space-y-2">
            <div>
              <p>├─ Jurídico Operacional ─ Dr. Felipe Ramos</p>
              <div className="pl-6 border-l border-gray-600 ml-2 space-y-1">
                <p>├─ Advogados Plenos (3)</p>
                <p>└─ Estagiários (2)</p>
              </div>
            </div>
            <div>
              <p>├─ Financeiro e Contábil ─ Ana Souza</p>
            </div>
            <div>
              <p>├─ CRM e Comunicação ─ Pedro Lima</p>
            </div>
            <div>
              <p>└─ Administrativo ─ Carla Mendes</p>
            </div>
          </div>
        </div>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “O setor jurídico da filial Porto Alegre tem 28% mais tarefas por pessoa do que a média. Sugere-se redistribuição de casos.”</p>
      </CardContent>
    </Card>
  );
};

export default EstruturaHierarquica;