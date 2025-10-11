import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const faturamentoData = [
  { cliente: "Construtora Vale Verde", tipo: "Honorários Mensais", data: "10/10/25", valor: 22000, status: "Pago" },
  { cliente: "Atlas Engenharia", tipo: "Assessoria Contratual", data: "08/10/25", valor: 8500, status: "Em processamento" },
  { cliente: "Grupo Realiza", tipo: "Consultoria Due Diligence", data: "03/10/25", valor: 15000, status: "Pendente" },
  { cliente: "Residencial São José", tipo: "Contrato Imobiliário", data: "05/10/25", valor: 9800, status: "Pago" },
];

const getStatusBadge = (status: string) => {
  if (status === "Pago") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">✅ Pago</Badge>;
  if (status === "Em processamento") return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">⚙️ Em processamento</Badge>;
  if (status === "Pendente") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">⏳ Pendente</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

const ReceitasFaturamento = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Receitas e Faturamento</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Cliente / Contrato</TableHead><TableHead>Tipo</TableHead><TableHead>Data</TableHead><TableHead>Valor</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {faturamentoData.map(item => (
              <TableRow key={item.cliente} className="border-gray-700">
                <TableCell>{item.cliente}</TableCell>
                <TableCell>{item.tipo}</TableCell>
                <TableCell>{item.data}</TableCell>
                <TableCell>{formatCurrency(item.valor)}</TableCell>
                <TableCell>{getStatusBadge(item.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “O contrato com o Grupo Realiza está há 14 dias pendente de pagamento. IA sugere notificação automática via Playbook Financeiro.”</p>
      </CardContent>
    </Card>
  );
};

export default ReceitasFaturamento;