import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const performanceData = [
  { usuario: "Dr. Felipe Ramos", tarefas: 72, concluidas: 69, eficiencia: "95,8%", tempoMedio: "1h 12m", scoreIA: 9.6 },
  { usuario: "Dra. Bianca Prado", tarefas: 55, concluidas: 50, eficiencia: "90,9%", tempoMedio: "1h 45m", scoreIA: 9.1 },
  { usuario: "Ana Souza", tarefas: 38, concluidas: 38, eficiencia: "100%", tempoMedio: "58m", scoreIA: 9.8 },
  { usuario: "Lucas Martins", tarefas: 23, concluidas: 19, eficiencia: "82,6%", tempoMedio: "2h 10m", scoreIA: 8.4 },
];

const productivityData = [
    { name: 'Jurídico', produtividade: 93 },
    { name: 'Financeiro', produtividade: 98 },
    { name: 'Admin/CRM', produtividade: 85 },
];

const MetasDesempenho = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle>Desempenho Operacional</CardTitle></CardHeader>
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
        </CardContent>
      </Card>
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle>Produtividade Mensal por Setor (%)</CardTitle></CardHeader>
        <CardContent>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={productivityData}>
                    <XAxis dataKey="name" stroke="#a1a1aa" />
                    <YAxis stroke="#a1a1aa" />
                    <Tooltip contentStyle={{ backgroundColor: '#1C2A3A' }} />
                    <Bar dataKey="produtividade" fill="#2EF3C1" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </CardContent>
      </Card>
      <p className="text-sm text-risk-gold text-center">💡 IA Insight: “O setor financeiro superou a meta de eficiência em 12%. A IA sugere criar uma bonificação automatizada via módulo Financeiro.”</p>
    </div>
  );
};

export default MetasDesempenho;