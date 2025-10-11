import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const performanceData = [
  { usuario: "Dr. Felipe Ramos", tarefas: 72, concluidas: 69, eficiencia: "95,8%", tempoMedio: "1h 12m", scoreIA: 9.6 },
  { usuario: "Dra. Bianca Prado", tarefas: 55, concluidas: 50, eficiencia: "90,9%", tempoMedio: "1h 45m", scoreIA: 9.1 },
  { usuario: "Ana Souza", tarefas: 38, concluidas: 38, eficiencia: "100%", tempoMedio: "58m", scoreIA: 9.8 },
  { usuario: "Lucas Martins", tarefas: 23, concluidas: 19, eficiencia: "82,6%", tempoMedio: "2h 10m", scoreIA: 8.4 },
];

const metasData = [
    { setor: "Jurídico Operacional", meta: "120 casos/mês", realizado: "138", percent: "115%", status: "🟢 Superou" },
    { setor: "Financeiro", meta: "R$ 220 mil", realizado: "R$ 204 mil", percent: "93%", status: "🟡 Abaixo" },
    { setor: "CRM Jurídico", meta: "40 propostas", realizado: "37", percent: "92%", status: "🟡 Próximo" },
    { setor: "Contábil", meta: "100 lançamentos", realizado: "110", percent: "110%", status: "🟢 Ok" },
];

const MetasDesempenho = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle>Metas e Indicadores de Equipe</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Setor</TableHead><TableHead>Meta</TableHead><TableHead>Realizado</TableHead><TableHead>%</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
            <TableBody>
              {metasData.map(item => (
                <TableRow key={item.setor} className="border-gray-700">
                  <TableCell>{item.setor}</TableCell>
                  <TableCell>{item.meta}</TableCell>
                  <TableCell>{item.realizado}</TableCell>
                  <TableCell>{item.percent}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “O Financeiro da filial Recife está abaixo da meta de faturamento em 8%. Sugiro revisar playbooks de cobrança.”</p>
        </CardContent>
      </Card>
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle>Produtividade e Desempenho</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Usuário</TableHead><TableHead>Tarefas/Mês</TableHead><TableHead>Concluídas</TableHead><TableHead>Eficiência</TableHead><TableHead>Tempo Médio</TableHead><TableHead>Score IA</TableHead></TableRow></TableHeader>
            <TableBody>
              {performanceData.map(item => (
                <TableRow key={item.usuario} className="border-gray-700">
                  <TableCell>{item.usuario}</TableCell>
                  <TableCell>{item.tarefas}</TableCell>
                  <TableCell>{item.concluidas}</TableCell>
                  <TableCell>{item.eficiencia}</TableCell>
                  <TableCell>{item.tempoMedio}</TableCell>
                  <TableCell>{item.scoreIA}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “A equipe contábil de Campinas tem o menor tempo médio de execução (6 h por tarefa). Esse padrão pode ser replicado em outras filiais.”</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default MetasDesempenho;