import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const custosData = [
  { categoria: "Pessoal", descricao: "Salários e Encargos", valor: 119000, variacao: "+2,3%", status: "🟡" },
  { categoria: "Estrutura", descricao: "Aluguel e utilidades", valor: 35000, variacao: "-4,1%", status: "🟢" },
  { categoria: "Jurídico", descricao: "Custos de processos e certidões", valor: 24500, variacao: "+1,5%", status: "🟢" },
  { categoria: "Tecnologia", descricao: "Licenças e APIs", valor: 18200, variacao: "+0,8%", status: "🟢" },
  { categoria: "Marketing", descricao: "Anúncios e eventos", valor: 6400, variacao: "-2,0%", status: "🟢" },
];

const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

const CustosDespesas = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Custos e Despesas Operacionais</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Categoria</TableHead><TableHead>Descrição</TableHead><TableHead>Valor Mensal</TableHead><TableHead>Variação</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {custosData.map(item => (
              <TableRow key={item.categoria} className="border-gray-700">
                <TableCell>{item.categoria}</TableCell>
                <TableCell>{item.descricao}</TableCell>
                <TableCell>{formatCurrency(item.valor)}</TableCell>
                <TableCell>{item.variacao}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Os custos com tecnologia representam 12,6% da receita da filial SP — acima da média global (8,9%). Sugere-se reavaliar planos SaaS.”</p>
      </CardContent>
    </Card>
  );
};

export default CustosDespesas;