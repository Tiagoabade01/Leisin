import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const performanceData = [
  { metrica: "Lucro Operacional", valor: 172000, meta: 150000, tendencia: "+14,7%", status: "🟢" },
  { metrica: "Margem Média", valor: 32.5, meta: 30, tendencia: "+2,5%", status: "🟢" },
  { metrica: "Produtividade Jurídica", valor: 86, meta: 90, tendencia: "-4%", status: "🟡" },
  { metrica: "Tempo Médio de Resposta", valor: 1.75, meta: 2, tendencia: "+15%", status: "🟢" },
  { metrica: "Nível de Satisfação (NPS)", valor: 91, meta: 85, tendencia: "+6", status: "🟢" },
];

const branchComparisonData = [
    { name: 'SP', resultado: 115 },
    { name: 'Campinas', resultado: 105 },
    { name: 'BH', resultado: 92 },
    { name: 'Curitiba', resultado: 121 },
    { name: 'Recife', resultado: 88 },
];

const DashboardGlobal = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle>Dashboard Global de Desempenho</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Métrica</TableHead><TableHead>Valor Atual</TableHead><TableHead>Meta</TableHead><TableHead>Tendência</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
            <TableBody>
              {performanceData.map(item => (
                <TableRow key={item.metrica} className="border-gray-700">
                  <TableCell>{item.metrica}</TableCell>
                  <TableCell>{item.metrica.includes('Operacional') ? `R$ ${item.valor.toLocaleString('pt-BR')}` : item.metrica.includes('Tempo') ? `${item.valor}h` : `${item.valor}%`}</TableCell>
                  <TableCell>{item.metrica.includes('Operacional') ? `R$ ${item.meta.toLocaleString('pt-BR')}` : item.metrica.includes('Tempo') ? `${item.meta}h` : `${item.meta}%`}</TableCell>
                  <TableCell>{item.tendencia}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle>Resultado por Filial (%)</CardTitle></CardHeader>
        <CardContent>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={branchComparisonData}>
                    <XAxis dataKey="name" stroke="#a1a1aa" />
                    <YAxis stroke="#a1a1aa" />
                    <Tooltip contentStyle={{ backgroundColor: '#1C2A3A' }} />
                    <Bar dataKey="resultado" fill="#2EF3C1" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </CardContent>
      </Card>
      <p className="text-sm text-risk-gold text-center">💡 IA Insight: “A filial Recife teve o melhor tempo médio de resposta (38 min). Deseja replicar a rotina de triagem automática nas demais unidades?”</p>
    </div>
  );
};

export default DashboardGlobal;