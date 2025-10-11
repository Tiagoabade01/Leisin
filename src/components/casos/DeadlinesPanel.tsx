import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const deadlines = [
  { date: "11/10/25", type: "Audiência de conciliação", process: "1012456-33.2025", lawyer: "Ana Faria", status: "Confirmada" },
  { date: "15/10/25", type: "Entrega de contestação", process: "402312-92.2024", lawyer: "João Lima", status: "Em andamento" },
  { date: "17/10/25", type: "Julgamento", process: "225481-88.2025", lawyer: "Maria Souza", status: "Agendada" },
];

const DeadlinesPanel = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Prazos e Audiências</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Data</TableHead><TableHead>Tipo</TableHead><TableHead>Processo</TableHead><TableHead>Responsável</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {deadlines.map(item => (
              <TableRow key={item.process} className="border-gray-700">
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.process}</TableCell>
                <TableCell>{item.lawyer}</TableCell>
                <TableCell><Badge variant={item.status === "Confirmada" ? "default" : "secondary"}>{item.status}</Badge></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 “O advogado João Lima possui 2 audiências no mesmo horário – sugerir redistribuição.”</p>
      </CardContent>
    </Card>
  );
};

export default DeadlinesPanel;