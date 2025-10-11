import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const kpiData = [
  { metrica: "Portais ativos", valor: "32", tendencia: "+12%" },
  { metrica: "Usuários externos", valor: "1.245", tendencia: "+9%" },
  { metrica: "Sessões médias diárias", valor: "480", tendencia: "+15%" },
  { metrica: "Tempo médio de sessão", valor: "7m45s", tendencia: "—" },
  { metrica: "Taxa de engajamento", valor: "84%", tendencia: "+5%" },
];

const RelatoriosMetricasUso = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Relatórios e Métricas de Uso</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Métrica</TableHead><TableHead>Valor Atual</TableHead><TableHead>Tendência</TableHead></TableRow></TableHeader>
          <TableBody>
            {kpiData.map(item => (
              <TableRow key={item.metrica} className="border-gray-700">
                <TableCell>{item.metrica}</TableCell>
                <TableCell>{item.valor}</TableCell>
                <TableCell className={item.tendencia.startsWith('+') ? 'text-tech-green' : 'text-gray-400'}>{item.tendencia}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “O portal ‘InvestLegal Partners’ teve 4 tentativas de login indevido. Bloqueio automático ativado.”</p>
      </CardContent>
    </Card>
  );
};

export default RelatoriosMetricasUso;