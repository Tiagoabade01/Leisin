import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const kpis = [
  { indicador: "Casos encerrados/mês", valor: "134", meta: "120", status: "🟢 Superou" },
  { indicador: "Tempo médio de tramitação", valor: "19 dias", meta: "22 dias", status: "🟢" },
  { indicador: "Taxa de retrabalho", valor: "6,2%", meta: "< 8%", status: "🟢" },
  { indicador: "Satisfação do cliente (pós-atendimento)", valor: "4,7 / 5", meta: "≥ 4,5", status: "🟢" },
  { indicador: "Taxa de ganho de causas", valor: "82%", meta: "80%", status: "🟢" },
];

const KpisOperacionais = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>KPIs Operacionais e Jurídicos</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Indicador</TableHead><TableHead>Valor</TableHead><TableHead>Meta</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {kpis.map(item => (
              <TableRow key={item.indicador} className="border-gray-700">
                <TableCell>{item.indicador}</TableCell>
                <TableCell>{item.valor}</TableCell>
                <TableCell>{item.meta}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Taxa de retrabalho aumentou 12% no jurídico contencioso. IA recomenda revisão de templates automáticos de peças processuais.”</p>
      </CardContent>
    </Card>
  );
};

export default KpisOperacionais;