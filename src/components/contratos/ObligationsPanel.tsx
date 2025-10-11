import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const obligations = [
  { obligation: "Pagamento mensal", contract: "CT-204", responsible: "Financeiro", date: "15/10/25", status: "✅ Cumprido", type: "Financeira" },
  { obligation: "Entrega de relatório técnico", contract: "CT-219", responsible: "Jurídico", date: "20/10/25", status: "🕒 Pendente", type: "Técnica" },
  { obligation: "Renovação de certidão", contract: "CT-212", responsible: "Compliance", date: "30/10/25", status: "⚠️ A vencer", type: "Documental" },
];

const ObligationsPanel = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Obrigações e Vencimentos</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Obrigação</TableHead><TableHead>Contrato</TableHead><TableHead>Responsável</TableHead><TableHead>Data</TableHead><TableHead>Status</TableHead><TableHead>Tipo</TableHead></TableRow></TableHeader>
          <TableBody>
            {obligations.map(item => (
              <TableRow key={item.obligation} className="border-gray-700">
                <TableCell>{item.obligation}</TableCell>
                <TableCell>{item.contract}</TableCell>
                <TableCell>{item.responsible}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 “Há 7 obrigações críticas vencendo nos próximos 10 dias — 4 delas financeiras.”</p>
      </CardContent>
    </Card>
  );
};

export default ObligationsPanel;