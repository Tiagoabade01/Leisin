import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const AutomacaoAcessos = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader className="flex flex-row items-center gap-2">
        <BrainCircuit className="h-5 w-5 text-tech-green" />
        <CardTitle>Automação de Acessos (IA)</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2 text-white">Funções Inteligentes</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Rebaixar / promover permissões conforme função ativa.</li>
            <li>Detectar duplicidade de papéis e sobreposição de acessos.</li>
            <li>Notificar gestores de inatividade superior a X dias.</li>
            <li>Ajustar automaticamente acessos após mudança de setor.</li>
          </ul>
        </div>
        <div className="p-4 bg-gray-800/50 rounded-lg">
          <h3 className="font-semibold mb-2 text-white">Exemplo de Insight</h3>
          <p className="text-sm text-gray-300">“A equipe jurídica cresceu 25% este mês. IA sugere criar grupos automáticos por área com níveis de acesso padronizados.”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AutomacaoAcessos;