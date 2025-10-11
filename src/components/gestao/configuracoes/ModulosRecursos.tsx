import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit } from "lucide-react";

const modules = [
  { name: "Jurídico Operacional", status: "Ativo", license: "Premium", updated: "05/10/2025" },
  { name: "Financeiro", status: "Ativo", license: "Enterprise", updated: "10/10/2025" },
  { name: "Contábil", status: "Em teste", license: "Padrão", updated: "09/10/2025" },
  { name: "CRM Jurídico", status: "Ativo", license: "Plus", updated: "07/10/2025" },
  { name: "Compliance / Risco", status: "Aguardando licença", license: "-", updated: "-" },
];

const getStatusBadge = (status: string) => {
  if (status === "Ativo") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Ativo</Badge>;
  if (status === "Em teste") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟡 Em teste</Badge>;
  return <Badge variant="secondary">🔵 {status}</Badge>;
};

const ModulosRecursos = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Módulos e Recursos Ativos</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700"><TableHead>Módulo</TableHead><TableHead>Status</TableHead><TableHead>Licença</TableHead><TableHead>Última Atualização</TableHead></TableRow></TableHeader>
          <TableBody>
            {modules.map(mod => (
              <TableRow key={mod.name} className="border-gray-700">
                <TableCell>{mod.name}</TableCell>
                <TableCell>{getStatusBadge(mod.status)}</TableCell>
                <TableCell>{mod.license}</TableCell>
                <TableCell>{mod.updated}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-start gap-2 mt-4 p-3 bg-gray-800/50 rounded-lg">
          <BrainCircuit className="h-5 w-5 text-tech-green flex-shrink-0 mt-1" />
          <p className="text-sm text-risk-gold">“O módulo Compliance / Risco está desativado há 20 dias. Recomenda-se reativação para auditoria contínua.”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModulosRecursos;