import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BrainCircuit, PlusCircle } from "lucide-react";

const campaigns = [
  { name: 'Black Law Week', type: 'Global', discount: '20%', validity: '01-10 → 15-10', applications: 118, status: 'Ativo' },
  { name: 'Upgrade Premium', type: 'Upgrade', discount: '15%', validity: '10 dias', applications: 34, status: 'Encerrando' },
];

const PromocoesCupons = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="text-white">Campanhas Promocionais</CardTitle>
          <Button><PlusCircle className="h-4 w-4 mr-2" /> Criar Campanha</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800"><TableHead>Campanha</TableHead><TableHead>Tipo</TableHead><TableHead>Desconto</TableHead><TableHead>Validade</TableHead><TableHead>Aplicações</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
            <TableBody>
              {campaigns.map(c => (
                <TableRow key={c.name} className="border-gray-700">
                  <TableCell>{c.name}</TableCell><TableCell>{c.type}</TableCell><TableCell>{c.discount}</TableCell><TableCell>{c.validity}</TableCell><TableCell>{c.applications}</TableCell>
                  <TableCell><Badge variant={c.status === 'Ativo' ? 'default' : 'secondary'}>{c.status}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-blue-400" /><CardTitle className="text-white">Sugestões da IA</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300">"Alta taxa de churn no plano Starter — sugerir campanha de desconto anual para retenção."</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PromocoesCupons;