import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Sparkles } from "lucide-react";

const IaReportGenerator = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-tech-green" />
          <CardTitle className="text-white">Relatórios Inteligentes (IA Copilot Analytics)</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Input
            placeholder="Ex: “Gerar relatório de contratos em risco do mês de setembro.”"
            className="bg-gray-800 border-gray-600"
          />
          <Button variant="secondary"><Sparkles className="h-4 w-4 mr-2" /> Gerar com IA</Button>
        </div>
        <div className="text-xs text-gray-400 mt-2 space-x-4">
          <span>Sugestões:</span>
          <button className="hover:text-white">Faturamento por área</button>
          <button className="hover:text-white">Certidões vencidas</button>
          <button className="hover:text-white">Produtividade da equipe</button>
        </div>
        <p className="text-sm text-tech-green mt-4">💡 “O módulo contratual apresentou 12% de aumento de revisões e 8% de redução no tempo médio de execução.”</p>
      </CardContent>
    </Card>
  );
};

export default IaReportGenerator;