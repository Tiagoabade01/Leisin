import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const templates = [
  { name: "Contrato de Prestação de Serviços", type: "Contrato", author: "Dr. João", status: "Aprovado", lastUpdate: "10/10/25" },
  { name: "Petição Inicial Cível", type: "Minuta", author: "Dra. Paula", status: "Em Revisão", lastUpdate: "09/10/25" },
  { name: "Termo de Confidencialidade (NDA)", type: "Termo", author: "IA Leisin Lex", status: "Aprovado", lastUpdate: "08/10/25" },
  { name: "Procuração Ad Judicia", type: "Procuração", author: "Dr. João", status: "Arquivado", lastUpdate: "01/05/24" },
];

const getStatusBadge = (status: string) => {
  if (status === "Aprovado") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">✅ Aprovado</Badge>;
  if (status === "Em Revisão") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🔄 Em Revisão</Badge>;
  if (status === "Arquivado") return <Badge variant="outline">📦 Arquivado</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const ModelosTemplates = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Modelos e Templates Jurídicos</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Buscar modelo..." className="bg-gray-800 border-gray-700 pl-9" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Nome</TableHead><TableHead>Tipo</TableHead><TableHead>Autor</TableHead><TableHead>Status</TableHead><TableHead>Última Atualização</TableHead></TableRow></TableHeader>
          <TableBody>
            {templates.map(item => (
              <TableRow key={item.name} className="border-gray-700">
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.author}</TableCell>
                <TableCell>{getStatusBadge(item.status)}</TableCell>
                <TableCell>{item.lastUpdate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “O modelo de contrato de prestação de serviços não foi atualizado após a Lei 14.133/21. Deseja aplicar a revisão automática de cláusulas?”</p>
      </CardContent>
    </Card>
  );
};

export default ModelosTemplates;