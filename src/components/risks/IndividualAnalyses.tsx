import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const analyses = [
  { name: "Terlla Incorporadora", sector: "Construção", score: 82, riskType: "Jurídico/Fiscal", lastUpdate: "10/10/25", status: "Aprovada" },
  { name: "Nivem Construtora", sector: "Engenharia", score: 59, riskType: "Trabalhista", lastUpdate: "09/10/25", status: "Atenção" },
  { name: "Mettri Arquitetura", sector: "Serviços", score: 91, riskType: "Financeiro", lastUpdate: "09/10/25", status: "Regular" },
  { name: "AMV Negócios", sector: "Investimentos", score: 45, riskType: "Reputacional", lastUpdate: "08/10/25", status: "Crítico" },
];

const scoreHistory = [
  { name: 'Jan', score: 75 }, { name: 'Abr', score: 78 }, { name: 'Jul', score: 80 }, { name: 'Out', score: 82 },
];

const getScoreBadge = (score: number) => {
  if (score >= 80) return <span className="text-green-400">🟢 {score}</span>;
  if (score >= 60) return <span className="text-yellow-400">🟡 {score}</span>;
  if (score >= 40) return <span className="text-orange-400">🟠 {score}</span>;
  return <span className="text-red-500">🔴 {score}</span>;
};

const IndividualAnalyses = () => {
  const [selected, setSelected] = useState<(typeof analyses)[0] | null>(null);

  return (
    <>
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Análises Individuais (Risco Detalhado)</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Empresa / CNPJ</TableHead><TableHead>Setor</TableHead><TableHead>Score</TableHead><TableHead>Tipo de Risco</TableHead><TableHead>Última Atualização</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
            <TableBody>
              {analyses.map(item => (
                <TableRow key={item.name} onClick={() => setSelected(item)} className="cursor-pointer border-gray-700 hover:bg-gray-800/50">
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.sector}</TableCell>
                  <TableCell>{getScoreBadge(item.score)}</TableCell>
                  <TableCell>{item.riskType}</TableCell>
                  <TableCell>{item.lastUpdate}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Drawer open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DrawerContent className="bg-gray-900 text-white border-gray-700 h-[60vh]">
          {selected && (
            <div className="p-6 h-full overflow-y-auto">
              <DrawerHeader className="p-0 mb-4">
                <DrawerTitle className="text-2xl font-bold">{selected.name}</DrawerTitle>
                <DrawerDescription className="text-gray-400">{selected.sector} • Score: {getScoreBadge(selected.score)}</DrawerDescription>
              </DrawerHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Histórico de Risco</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={scoreHistory}><XAxis dataKey="name" stroke="#a1a1aa" /><YAxis domain={[0, 100]} stroke="#a1a1aa" /><Tooltip contentStyle={{ backgroundColor: '#1C2A3A' }} /><Line type="monotone" dataKey="score" stroke="#32F2C1" /></LineChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Recomendações da IA</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                    <li>Monitorar processos trabalhistas em aberto.</li>
                    <li>Solicitar CND federal a cada 90 dias.</li>
                    <li>Verificar quadro societário para Pessoas Expostas Politicamente (PEP).</li>
                  </ul>
                </div>
              </div>
              <Button className="mt-6">Gerar Relatório Completo</Button>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default IndividualAnalyses;