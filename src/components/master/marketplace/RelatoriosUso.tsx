import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const kpis = [
  { metric: "Extensões ativas", value: "12", trend: "+2%" },
  { metric: "Downloads (30d)", value: "342", trend: "+14%" },
  { metric: "Receita gerada", value: "R$ 18.740", trend: "+7%" },
  { metric: "Erros de API", value: "3", trend: "-60%" },
];

const RelatoriosUso = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Relatórios e Controle de Uso</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Métrica</TableHead><TableHead>Valor Atual</TableHead><TableHead>Tendência</TableHead></TableRow></TableHeader>
          <TableBody>
            {kpis.map(kpi => (
              <TableRow key={kpi.metric} className="border-gray-700">
                <TableCell>{kpi.metric}</TableCell>
                <TableCell>{kpi.value}</TableCell>
                <TableCell className={kpi.trend.startsWith('+') ? 'text-tech-green' : 'text-red-400'}>{kpi.trend}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 A extensão IA Contratual é a mais utilizada entre escritórios de médio porte. Recomendado destaque na vitrine principal.</p>
      </CardContent>
    </Card>
  );
};

export default RelatoriosUso;