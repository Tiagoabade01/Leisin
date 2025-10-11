import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrainCircuit, FileText, Bell, CheckSquare } from "lucide-react";

const playbooks = [
  { name: "Recurso Judicial", description: "Cria tarefa, notifica e gera minuta IA." },
  { name: "Renovação Contratual", description: "Alerta, proposta IA e checklist." },
  { name: "Faturamento Padrão", description: "Tarefa automática, emissão NFe e marcar faturável." },
  { name: "Due Diligence", description: "Checklist, upload de certidões e dossiê automático." },
];

const IntelligentPlaybooks = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Modelos de Playbooks Prontos</CardTitle></CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {playbooks.map(item => (
            <div key={item.name} className="p-4 bg-gray-800/50 rounded-lg flex justify-between items-center">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
              <Button variant="secondary" size="sm">Usar</Button>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-tech-green" /><CardTitle className="text-white">Análise de Impacto IA</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300">💡 “O playbook ‘Recurso Judicial’ foi aplicado 56 vezes este mês e reduziu 41% do tempo médio de resposta.”</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default IntelligentPlaybooks;