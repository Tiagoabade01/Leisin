import React from 'react';
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Download, BarChart2, BrainCircuit, Link as LinkIcon, Search, Check } from "lucide-react";
import { showSuccess } from '@/utils/toast';

const kpis = [
  { title: "Tributos Municipais (ISS, IPTU)", value: "R$ 42.800", status: "green" },
  { title: "Tributos Estaduais (ICMS)", value: "R$ 31.600", status: "green" },
  { title: "Tributos Federais (IRPJ, CSLL, PIS, COFINS)", value: "R$ 89.200", status: "orange" },
  { title: "Obrigações Entregues", value: "94%", status: "green" },
  { title: "Pendências / Erros", value: "3", status: "red" },
];

const obrigacoes = [
  { obrigacao: "ISS", competencia: "Set/2025", status: "Entregue", valor: "R$ 18.340", lastUpdate: "10/10/25" },
  { obrigacao: "PIS / COFINS", competencia: "Set/2025", status: "Em revisão", valor: "R$ 22.700", lastUpdate: "11/10/25" },
  { obrigacao: "IRPJ / CSLL", competencia: "Trimestre 03/2025", status: "Concluído", valor: "R$ 46.000", lastUpdate: "09/10/25" },
  { obrigacao: "DCTF Mensal", competencia: "Set/2025", status: "Erro encontrado", valor: "R$ —", lastUpdate: "08/10/25" },
  { obrigacao: "EFD Fiscal (SPED ICMS/IPI)", competencia: "Set/2025", status: "Entregue", valor: "—", lastUpdate: "09/10/25" },
];

const declaracoes = [
  { declaracao: "SPED ECD", tipo: "Contábil", periodo: "Ano 2025", status: "Validado", action: "Baixar", icon: Download },
  { declaracao: "SPED ECF", tipo: "Fiscal", periodo: "Ano 2025", status: "Gerado", action: "Enviar", icon: LinkIcon },
  { declaracao: "DCTF", tipo: "Federal", periodo: "Set/2025", status: "Revisar", action: "Auditoria", icon: Search },
  { declaracao: "EFD Contribuições", tipo: "Federal", periodo: "Set/2025", status: "Erro", action: "Corrigir", icon: BrainCircuit },
  { declaracao: "ISS Digital", tipo: "Municipal", periodo: "Set/2025", status: "Enviado", action: "OK", icon: Check },
];

const getStatusBadge = (status: string) => {
  if (status.includes("Entregue") || status.includes("Concluído")) return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 {status}</Badge>;
  if (status.includes("revisão")) return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟠 {status}</Badge>;
  if (status.includes("Erro")) return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">🔴 {status}</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const getDeclaracaoStatusBadge = (status: string) => {
    if (status === "Validado" || status === "Gerado" || status === "Enviado") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 {status}</Badge>;
    if (status === "Revisar") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟠 {status}</Badge>;
    if (status === "Erro") return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">🔴 {status}</Badge>;
    return <Badge variant="secondary">{status}</Badge>;
};

const RelatoriosFiscaisPage = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Relatórios Fiscais</h1>
          <p className="text-gray-400 max-w-3xl">
            Apuração fiscal e obrigações acessórias automatizadas, com geração inteligente de relatórios e auditoria tributária via IA Leisin.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => showSuccess("Gerando relatório...")}>Gerar Relatório</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => showSuccess("Iniciando validação com IA...")}>Validar IA</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => showSuccess("Exportando dados...")}>Exportar</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => showSuccess("Enviando declaração...")}>Enviar Declaração</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          {/* KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {kpis.map(kpi => (
              <Card key={kpi.title} className="bg-petroleum-blue border-gray-700 text-white">
                <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-400">{kpi.title}</CardTitle></CardHeader>
                <CardContent>
                  <p className={`text-2xl font-bold text-${kpi.status}-400`}>{kpi.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Apurações e Obrigações */}
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Apurações e Obrigações</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Obrigações</TableHead><TableHead>Competência</TableHead><TableHead>Status</TableHead><TableHead>Valor</TableHead><TableHead>Última Atualização</TableHead></TableRow></TableHeader>
                <TableBody>
                  {obrigacoes.map(item => (
                    <TableRow key={item.obrigacao} className="border-gray-700">
                      <TableCell>{item.obrigacao}</TableCell>
                      <TableCell>{item.competencia}</TableCell>
                      <TableCell>{getStatusBadge(item.status)}</TableCell>
                      <TableCell>{item.valor}</TableCell>
                      <TableCell>{item.lastUpdate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Declarações Oficiais */}
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Declarações Oficiais (SPED, DCTF, ECD, etc.)</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Declaração</TableHead><TableHead>Tipo</TableHead><TableHead>Período</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Ação</TableHead></TableRow></TableHeader>
                <TableBody>
                  {declaracoes.map(item => (
                    <TableRow key={item.declaracao} className="border-gray-700">
                      <TableCell>{item.declaracao}</TableCell>
                      <TableCell>{item.tipo}</TableCell>
                      <TableCell>{item.periodo}</TableCell>
                      <TableCell>{getDeclaracaoStatusBadge(item.status)}</TableCell>
                      <TableCell className="text-right"><Button variant="ghost" size="sm"><item.icon className="h-4 w-4 mr-2" />{item.action}</Button></TableCell>
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
            <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-tech-green" /><CardTitle className="text-white">IA Fiscal</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Há 3 obrigações com inconsistências: EFD Contribuições e DCTF do último mês apresentam divergência de R$ 1.420 entre créditos e débitos.”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“A apuração de PIS/COFINS tem 7 notas duplicadas — reprocessar pode reduzir o valor em R$ 1.980.”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Identificada inconsistência entre créditos de ICMS e notas fiscais canceladas — risco de multa em caso de envio sem ajuste.”</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const RelatoriosFiscais = () => (
  <Layout>
    <RelatoriosFiscaisPage />
  </Layout>
);

export default RelatoriosFiscais;