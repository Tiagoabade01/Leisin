import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit } from "lucide-react";

const riskLevels = [
  { level: "Baixo", range: "80–100", color: "green", meaning: "Empresa sólida e regular." },
  { level: "Moderado", range: "60–79", color: "yellow", meaning: "Pendências menores." },
  { level: "Alto", range: "40–59", color: "orange", meaning: "Riscos jurídicos ou fiscais relevantes." },
  { level: "Crítico", range: "0–39", color: "red", meaning: "Alto risco de conformidade ou integridade." },
];

const ClassificacaoRisco = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Algoritmo de Risco (IA)</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Nível</TableHead><TableHead>Faixa</TableHead><TableHead>Significado</TableHead></TableRow></TableHeader>
            <TableBody>
              {riskLevels.map(item => (
                <TableRow key={item.level} className="border-gray-700">
                  <TableCell><Badge className={`bg-${item.color}-500/20 text-${item.color}-400 border-${item.color}-500/30`}>
                    {item.level === 'Baixo' && '🟢'}
                    {item.level === 'Moderado' && '🟡'}
                    {item.level === 'Alto' && '🟠'}
                    {item.level === 'Crítico' && '🔴'}
                    {' '}{item.level}
                  </Badge></TableCell>
                  <TableCell>{item.range}</TableCell>
                  <TableCell>{item.meaning}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white">Fatores Avaliados</CardTitle></CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
              <li>Situação cadastral e fiscal</li>
              <li>Processos trabalhistas, cíveis e tributários</li>
              <li>PEP (Pessoa Exposta Politicamente)</li>
              <li>Relações com entes públicos</li>
              <li>Infrações ambientais e ESG</li>
              <li>Reputação pública e mídia negativa</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-tech-green" /><CardTitle className="text-white">IA Explicativa</CardTitle></CardHeader>
          <CardContent>
            <p className="text-sm text-gray-300">“O risco elevado (52 pts) se deve à reincidência em processos trabalhistas e divergência cadastral estadual.”</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClassificacaoRisco;