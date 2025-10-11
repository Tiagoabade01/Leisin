import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { BrainCircuit } from "lucide-react";

const insights = [
  { insight: "Equipe jurídica sobrecarregada (+18%)", suggestion: "Redistribuir 12 tarefas para equipe de contratos." },
  { insight: "SLA contratual está subestimado (48h → 52h)", suggestion: "Ajustar automaticamente." },
  { insight: "Automação ‘Renovação Contrato’ falhou 3 vezes", suggestion: "Recriar trigger e validar API." },
];

const PredictiveAI = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Funções da IA Preditiva</CardTitle></CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Detecta SLAs inviáveis com base em carga e histórico.</li>
            <li>Sugere redistribuição automática de tarefas.</li>
            <li>Ajusta prioridades e prazos dinamicamente.</li>
            <li>Aprende com exceções e feedbacks para otimizar fluxos.</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-tech-green" /><CardTitle className="text-white">Insights e Ações Sugeridas</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Insight</TableHead><TableHead>Ação Sugerida</TableHead><TableHead>Executar</TableHead></TableRow></TableHeader>
            <TableBody>
              {insights.map(item => (
                <TableRow key={item.insight} className="border-gray-700">
                  <TableCell>{item.insight}</TableCell>
                  <TableCell>{item.suggestion}</TableCell>
                  <TableCell><Button variant="secondary" size="sm">Aplicar</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictiveAI;