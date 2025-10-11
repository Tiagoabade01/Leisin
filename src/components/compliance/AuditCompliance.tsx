import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const audits = [
  { type: "Contratual", status: "🟢 Conforme", inProgress: 17 },
  { type: "Fiscal", status: "🟡 Parcial", inProgress: 5 },
  { type: "Trabalhista", status: "🔴 Crítica", inProgress: 3 },
];

const AuditCompliance = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Auditorias & Conformidade</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Tipo de Auditoria</TableHead><TableHead>Status Geral</TableHead><TableHead>Em Andamento</TableHead></TableRow></TableHeader>
          <TableBody>
            {audits.map(audit => (
              <TableRow key={audit.type} className="border-gray-700">
                <TableCell className="font-medium">{audit.type}</TableCell>
                <TableCell>{audit.status}</TableCell>
                <TableCell>{audit.inProgress}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 “Foram detectados 2 contratos com cláusulas desatualizadas – revisão automática recomendada.”</p>
      </CardContent>
    </Card>
  );
};

export default AuditCompliance;