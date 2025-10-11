import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const timesheetData = [
  { date: "09/10/25", lawyer: "Ana Faria", case: "CT-219", activity: "Revisão contratual", start: "09:00", end: "11:00", hours: "2h", value: "720,00" },
  { date: "09/10/25", lawyer: "João Lima", case: "1012456", activity: "Audiência", start: "14:00", end: "17:30", hours: "3.5h", value: "1.260,00" },
  { date: "08/10/25", lawyer: "Maria Souza", case: "Interno", activity: "Relatório mensal", start: "10:00", end: "12:30", hours: "2.5h", value: "875,00" },
];

const Timesheet = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-white">Timesheet (Registro de Horas)</CardTitle>
          <Button variant="secondary"><PlayCircle className="h-4 w-4 mr-2" /> Iniciar Tarefa</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Data</TableHead><TableHead>Advogado</TableHead><TableHead>Caso/Contrato</TableHead><TableHead>Atividade</TableHead><TableHead>Início</TableHead><TableHead>Fim</TableHead><TableHead>Horas</TableHead><TableHead>Valor (R$)</TableHead></TableRow></TableHeader>
          <TableBody>
            {timesheetData.map(entry => (
              <TableRow key={entry.case + entry.start} className="border-gray-700">
                <TableCell>{entry.date}</TableCell>
                <TableCell>{entry.lawyer}</TableCell>
                <TableCell>{entry.case}</TableCell>
                <TableCell>{entry.activity}</TableCell>
                <TableCell>{entry.start}</TableCell>
                <TableCell>{entry.end}</TableCell>
                <TableCell>{entry.hours}</TableCell>
                <TableCell>{entry.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 “O cliente Mettri consome 42% do total de horas faturáveis — margem média: 32%.”</p>
      </CardContent>
    </Card>
  );
};

export default Timesheet;