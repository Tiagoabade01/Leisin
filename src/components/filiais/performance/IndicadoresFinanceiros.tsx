import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const kpis = [
  { metrica: "Receita Bruta", valor: "R$ 382.000", tendencia: "▲ +8,4%", status: "🟢" },
  { metrica: "Custo Operacional", valor: "R$ 211.000", tendencia: "▼ -2,1%", status: "🟢" },
  { metrica: "Lucro Líquido", valor: "R$ 121.000", tendencia: "▲ +3,6%", status: "🟢" },
  { metrica: "Custo por Contrato", valor: "R$ 2.340", tendencia: "▲ +1,2%", status: "🟡" },
  { metrica: "ROI Regional", valor: "142%", tendencia: "▲ +5,4%", status: "🟢" },
];

const IndicadoresFinanceiros = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Indicadores Financeiros e de Custos</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Métrica</TableHead><TableHead>Valor</TableHead><TableHead>Tendência</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {kpis.map(item => (
              <TableRow key={item.metrica} className="border-gray-700">
                <TableCell>{item.metrica}</TableCell>
                <TableCell>{item.valor}</TableCell>
                <TableCell>{item.tendencia}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “A filial Porto Alegre reduziu o custo médio por contrato em 9% com renegociação de fornecedores. Deseja replicar esse modelo?”</p>
      </CardContent>
    </Card>
  );
};

export default IndicadoresFinanceiros;