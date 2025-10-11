import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const payments = [
  { date: "10/10/25", client: "Advocacia Atlas", type: "Cartão", value: "R$ 1.290", status: "✅ Pago", gateway: "Stripe" },
  { date: "10/10/25", client: "Grupo Nexus", type: "Boleto", value: "R$ 890", status: "⚙️ Processando", gateway: "Asaas" },
  { date: "09/10/25", client: "Construtora Vale Verde", type: "Cartão", value: "R$ 3.980", status: "✅ Pago", gateway: "Pagar.me" },
  { date: "09/10/25", client: "Escritório Borges", type: "Cartão", value: "R$ 390", status: "❌ Falhou", gateway: "Mercado Pago" },
];

const PagamentosHistorico = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Pagamentos e Histórico Financeiro</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Data</TableHead><TableHead>Cliente</TableHead><TableHead>Tipo</TableHead><TableHead>Valor</TableHead><TableHead>Status</TableHead><TableHead>Gateway</TableHead></TableRow></TableHeader>
          <TableBody>
            {payments.map(item => (
              <TableRow key={item.client + item.date} className="border-gray-700">
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.client}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.value}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.gateway}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Pagamento do Escritório Borges falhou 2 vezes consecutivas. IA recomenda bloqueio temporário do acesso ao módulo Financeiro.”</p>
      </CardContent>
    </Card>
  );
};

export default PagamentosHistorico;