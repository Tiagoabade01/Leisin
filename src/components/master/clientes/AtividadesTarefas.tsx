import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const activities = [
  { id: 1, type: 'Ligação', client: 'Nivem Construtora', responsible: 'João Silva', date: '10/10/2025', status: 'Concluída' },
  { id: 2, type: 'Follow-up Inadimplência', client: 'Advocacia Pontes', responsible: 'Sistema', date: '11/10/2025', status: 'Pendente' },
  { id: 3, type: 'Reunião', client: 'T3 Partners', responsible: 'Maria Costa', date: '12/10/2025', status: 'Agendada' },
];

const AtividadesTarefas = () => {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-white">Atividades e Tarefas de Relacionamento</CardTitle>
          <Button>Nova Tarefa</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800/50"><TableHead className="text-gray-200">Atividade</TableHead><TableHead className="text-gray-200">Cliente</TableHead><TableHead className="text-gray-200">Responsável</TableHead><TableHead className="text-gray-200">Data</TableHead><TableHead className="text-gray-200">Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {activities.map(activity => (
              <TableRow key={activity.id} className="border-gray-700">
                <TableCell className="font-medium">{activity.type}</TableCell>
                <TableCell>{activity.client}</TableCell>
                <TableCell>{activity.responsible}</TableCell>
                <TableCell>{activity.date}</TableCell>
                <TableCell><Badge variant={activity.status === 'Pendente' ? 'destructive' : 'secondary'}>{activity.status}</Badge></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AtividadesTarefas;