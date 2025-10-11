import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Task } from '@/pages/tarefas/MinhaCaixa';

interface UrgentTasksProps {
  tasks: Task[];
}

const UrgentTasksList = ({ tasks }: UrgentTasksProps) => {
  const urgentTasks = tasks.filter(t => t.priority === 'Alta' && t.status !== 'Concluída');
  
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white text-base">Tarefas Urgentes</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Tarefa</TableHead><TableHead>Cliente</TableHead><TableHead>Prazo</TableHead><TableHead>Responsável</TableHead></TableRow></TableHeader>
          <TableBody>
            {urgentTasks.map(task => (
              <TableRow key={task.id} className="border-gray-700">
                <TableCell className="font-medium">{task.title}</TableCell>
                <TableCell>{task.client}</TableCell>
                <TableCell><Badge variant="destructive">{task.deadline}</Badge></TableCell>
                <TableCell>{task.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default UrgentTasksList;