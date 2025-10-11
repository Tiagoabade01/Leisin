import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BrainCircuit } from "lucide-react";

const backups = [
  { action: "Backup total de dados", frequency: "Diário", location: "Nuvem AWS", status: "🟢" },
  { action: "Backup diferencial", frequency: "6h", location: "Azure", status: "🟢" },
  { action: "Exportação de logs", frequency: "Semanal", location: "S3", status: "🟢" },
  { action: "Logs de auditoria IA", frequency: "Contínuo", location: "Interno", status: "🟢" },
];

const BackupsLogs = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Backups e Logs do Sistema</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700"><TableHead>Ação</TableHead><TableHead>Frequência</TableHead><TableHead>Local</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {backups.map(b => (
              <TableRow key={b.action} className="border-gray-700">
                <TableCell>{b.action}</TableCell>
                <TableCell>{b.frequency}</TableCell>
                <TableCell>{b.location}</TableCell>
                <TableCell>{b.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-start gap-2 mt-4 p-3 bg-gray-800/50 rounded-lg">
          <BrainCircuit className="h-5 w-5 text-tech-green flex-shrink-0 mt-1" />
          <p className="text-sm text-risk-gold">“Backup de ontem apresentou 1 arquivo inconsistente (módulo CRM). Deseja restaurar cópia anterior?”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BackupsLogs;