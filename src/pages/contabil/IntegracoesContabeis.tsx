import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Download, BarChart2, BrainCircuit, RefreshCw, TestTube2 } from "lucide-react";
import { showSuccess } from '@/utils/toast';

const connections = [
  { name: "Financeiro Leisin", status: "Ativo", lastUpdate: "11/10/25 - 22:31", synced: "1.284" },
  { name: "Bancos (Open Finance)", status: "Ativo", lastUpdate: "11/10/25 - 22:17", synced: "836" },
  { name: "Receita Federal / SPED", status: "Parcial", lastUpdate: "11/10/25 - 19:50", synced: "248" },
  { name: "ERP Externo (Omie)", status: "Ativo", lastUpdate: "11/10/25 - 20:41", synced: "473" },
  { name: "Prefeitura (ISS Digital)", status: "Erro", lastUpdate: "11/10/25 - 18:05", synced: "82" },
];

const syncHistory = [
  { date: "11/10/25 22:31", origin: "Financeiro", records: 248, status: "OK", time: "00:02:37" },
  { date: "11/10/25 21:45", origin: "SPED Fiscal", records: 36, status: "Avisos", time: "00:01:14" },
  { date: "11/10/25 20:17", origin: "Bancos", records: 83, status: "OK", time: "00:00:49" },
  { date: "11/10/25 19:55", origin: "ERP SAP", records: 127, status: "OK", time: "00:02:02" },
  { date: "11/10/25 18:05", origin: "Prefeitura SP", records: 19, status: "Falhou", time: "00:00:23" },
];

const getStatusBadge = (status: string) => {
  if (status === "Ativo" || status === "OK") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 {status}</Badge>;
  if (status === "Parcial" || status === "Avisos") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟠 {status}</Badge>;
  if (status === "Erro" || status === "Falhou") return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">🔴 {status}</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const IntegracoesContabeis = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Integrações Contábeis</h1>
          <p className="text-gray-400 max-w-3xl">
            O elo entre sistemas — contabilidade automatizada, sincronizada e sem fronteiras, com integrações inteligentes e IA fiscal-contábil.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => showSuccess("Abrindo catálogo de integrações...")}><PlusCircle className="h-4 w-4 mr-2" /> Nova Integração</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => showSuccess("Testando todas as conexões...")}><TestTube2 className="h-4 w-4 mr-2" /> Testar Todas</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => showSuccess("Visualizando logs...")}>Ver Logs</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => showSuccess("Executando diagnóstico com IA...")}><BrainCircuit className="h-4 w-4 mr-2" /> Diagnóstico IA</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          {/* Painel de Conexões */}
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Painel de Integrações</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Integração</TableHead><TableHead>Status</TableHead><TableHead>Última Atualização</TableHead><TableHead>Sincronizações (30d)</TableHead></TableRow></TableHeader>
                <TableBody>
                  {connections.map(conn => (
                    <TableRow key={conn.name} className="border-gray-700">
                      <TableCell className="font-medium">{conn.name}</TableCell>
                      <TableCell>{getStatusBadge(conn.status)}</TableCell>
                      <TableCell>{conn.lastUpdate}</TableCell>
                      <TableCell>{conn.synced}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Histórico de Sincronizações */}
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Histórico de Sincronizações</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Data</TableHead><TableHead>Origem</TableHead><TableHead>Registros</TableHead><TableHead>Status</TableHead><TableHead>Tempo</TableHead></TableRow></TableHeader>
                <TableBody>
                  {syncHistory.map(item => (
                    <TableRow key={item.date} className="border-gray-700">
                      <TableCell>{item.date}</TableCell>
                      <TableCell>{item.origin}</TableCell>
                      <TableCell>{item.records}</TableCell>
                      <TableCell>{getStatusBadge(item.status)}</TableCell>
                      <TableCell>{item.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Painel Lateral IA */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
            <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-tech-green" /><CardTitle className="text-white">IA Leisin Sync</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“A integração com a prefeitura apresentou erro de autenticação — recomendada atualização do certificado digital A1 antes da próxima execução automática.”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“A integração SAP possui 3 lançamentos com códigos de centro ausentes — corrigir antes de sincronizar novamente.”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Detectada divergência de 0,8% entre saldos do ERP e registros contábeis — diferença atribuída à nota fiscal duplicada (NF#78924). Corrigir para próxima execução.”</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IntegracoesContabeis;