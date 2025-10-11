import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const IaSegurancaAlertas = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader className="flex flex-row items-center gap-2">
        <BrainCircuit className="h-5 w-5 text-tech-green" />
        <CardTitle>IA de Segurança e Alertas</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2 text-white">Principais Recursos</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Detecção de padrões anômalos em tempo real.</li>
            <li>Correção automática de permissões inseguras.</li>
            <li>Bloqueio proativo de ataques Brute Force.</li>
            <li>IA preditiva de comportamento (Machine Learning).</li>
            <li>Alertas via e-mail, painel e WhatsApp.</li>
          </ul>
        </div>
        <div className="p-4 bg-gray-800/50 rounded-lg">
          <h3 className="font-semibold mb-2 text-white">Exemplo de Insight</h3>
          <p className="text-sm text-risk-gold">“A IA detectou elevação anormal no número de exportações financeiras. Acesso temporariamente limitado para revisão.”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default IaSegurancaAlertas;