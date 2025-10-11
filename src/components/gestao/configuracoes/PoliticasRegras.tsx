import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { BrainCircuit } from "lucide-react";

const policies = [
  "Exigir CNPJ e CPF válidos nos cadastros.",
  "Notificações diárias automáticas às 8h.",
  "Exigir dupla validação em contratos críticos.",
  "Manter histórico de logs por 12 meses.",
];

const PoliticasRegras = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Políticas e Regras de Operação</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        {policies.map(policy => (
          <div key={policy} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-md">
            <Label className="text-sm">{policy}</Label>
            <Switch defaultChecked />
          </div>
        ))}
        <div className="flex items-start gap-2 mt-4 p-3 bg-gray-800/50 rounded-lg">
          <BrainCircuit className="h-5 w-5 text-tech-green flex-shrink-0 mt-1" />
          <p className="text-sm text-risk-gold">“O sistema identificou 4 políticas conflitantes entre CRM e IA. Deseja harmonizar automaticamente?”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PoliticasRegras;