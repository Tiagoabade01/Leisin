import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Download, BrainCircuit } from "lucide-react";

const policies = [
  { name: "Política de Privacidade do Escritório", version: "2.3", status: "Vigente", lastUpdate: "10/10/2024" },
  { name: "Termos de Uso da Plataforma Leisin", version: "1.8", status: "Vigente", lastUpdate: "01/09/2024" },
  { name: "Política de Retenção e Eliminação de Dados", version: "1.2", status: "Em Revisão", lastUpdate: "15/10/2025" },
  { name: "Política de Compartilhamento com Terceiros", version: "1.5", status: "Vigente", lastUpdate: "20/08/2024" },
];

const getStatusBadge = (status: string) => {
  if (status === "Vigente") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Vigente</Badge>;
  if (status === "Em Revisão") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟠 Em Revisão</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const PoliticasTermos = () => {
  return (
    <Layout>
      <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
        <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white font-serif">Políticas e Termos</h1>
            <p className="text-gray-400 max-w-3xl">
              Repositório oficial das políticas internas, termos de uso, consentimento e privacidade.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary"><PlusCircle className="h-4 w-4 mr-2" /> Nova Política</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar</Button>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle>Gerenciamento de Políticas</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Documento</TableHead><TableHead>Versão</TableHead><TableHead>Status</TableHead><TableHead>Última Atualização</TableHead></TableRow></TableHeader>
                <TableBody>
                  {policies.map(policy => (
                    <TableRow key={policy.name} className="border-gray-700">
                      <TableCell>{policy.name}</TableCell>
                      <TableCell>{policy.version}</TableCell>
                      <TableCell>{getStatusBadge(policy.status)}</TableCell>
                      <TableCell>{policy.lastUpdate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader className="flex flex-row items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-tech-green" />
              <CardTitle>IA Insight</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-risk-gold">“A versão 2.3 da Política de Privacidade expirará em 5 dias. Deseja gerar automaticamente a nova revisão com base nas diretrizes atualizadas da ANPD?”</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PoliticasTermos;