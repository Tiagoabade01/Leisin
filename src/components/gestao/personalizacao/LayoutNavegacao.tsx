import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { BrainCircuit } from "lucide-react";

const LayoutNavegacao = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Layout e Navegação</CardTitle></CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-semibold text-white">Módulos Visíveis</h3>
          <div className="space-y-2 p-3 bg-gray-800/50 rounded-md">
            <div className="flex items-center justify-between"><Label>Jurídico Operacional</Label><Switch defaultChecked /></div>
            <div className="flex items-center justify-between"><Label>Financeiro</Label><Switch defaultChecked /></div>
            <div className="flex items-center justify-between"><Label>Contábil</Label><Switch /></div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold text-white">Estilo de Navegação</h3>
          <div className="space-y-2 p-3 bg-gray-800/50 rounded-md">
            <p>🧱 Barra lateral fixa</p>
            <p>🔲 Menu superior expansível</p>
            <p>🪟 Interface híbrida (moderna, tipo Notion)</p>
          </div>
          <div className="flex items-start gap-2 mt-4">
            <BrainCircuit className="h-5 w-5 text-tech-green flex-shrink-0 mt-1" />
            <p className="text-sm text-risk-gold">“Usuários com layout compacto realizam tarefas 11% mais rápido. Deseja aplicar esse formato para todos?”</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LayoutNavegacao;