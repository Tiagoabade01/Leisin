import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const history = [
  { date: "10/10/25 14:22", type: "Contratos", user: "IA Copilot", module: "Jurídico", status: "Sucesso" },
  { date: "09/10/25 18:40", type: "DRE", user: "Ana Paula", module: "Financeiro", status: "Sucesso" },
  { date: "09/10/25 15:12", type: "Risco", user: "Sistema", module: "Compliance", status: "Alerta" },
  { date: "08/10/25 17:00", type: "Produtividade", user: "João Lima", module: "Operacional", status: "Sucesso" },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Sucesso": return <Badge className="bg-tech-green/10 text-tech-green border-tech-green/20">✅ {status}</Badge>;
    case "Alerta": return <Badge variant="default" className="bg-alert-orange text-white">⚠️ {status}</Badge>;
    default: return <Badge variant="outline">{status}</Badge>;
  }
};

const ReportHistory = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Histórico e Logs de Relatórios</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Data</TableHead><TableHead>Tipo</TableHead><TableHead>Gerado por</TableHead><TableHead>Módulo</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Ações</TableHead></TableRow></TableHeader>
          <TableBody>
            {history.map(item => (
              <TableRow key={item.date} className="border-gray-700">
                <TableCell className="font-mono text-xs">{item.date}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.user}</TableCell>
                <TableCell>{item.module}</TableCell>
                <TableCell>{getStatusBadge(item.status)}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon"><Search className="h-4 w-4" /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ReportHistory;