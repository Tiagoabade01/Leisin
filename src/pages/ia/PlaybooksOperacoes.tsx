import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  PlusCircle, BrainCircuit, FileText, BookOpen, BarChart2,
  ArrowRight, Upload, Signature, Users, Banknote, ShieldCheck, Bell, MessageSquare, Handshake, Download
} from "lucide-react";

// --- MOCK DATA & SUBCOMPONENTS ---

const playbooksData = [
  { name: "Due Diligence Completa", status: "Ativo", execucoes: 42, ultima: "11/10/25 17:40", responsavel: "IA Leisin" },
  { name: "Contrato + Faturamento", status: "Ativo", execucoes: 58, ultima: "11/10/25 18:00", responsavel: "Dr. Felipe" },
  { name: "Regularização de Imóvel", status: "Em Teste", execucoes: 17, ultima: "11/10/25 16:15", responsavel: "Dra. Larissa" },
  { name: "Integração Cartorial", status: "Pausado", execucoes: 6, ultima: "10/10/25 19:30", responsavel: "Sistema" },
  { name: "Fluxo de Vendas Jurídicas", status: "Ativo", execucoes: 83, ultima: "11/10/25 18:10", responsavel: "IA CRM" },
];

const getStatusBadge = (status: string) => {
  if (status === "Ativo") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Ativo</Badge>;
  if (status === "Em Teste") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟡 Em Teste</Badge>;
  if (status === "Pausado") return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">🔴 Pausado</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const PainelDePlaybooks = () => (
  <Card className="bg-petroleum-blue border-gray-700 text-white">
    <CardHeader><CardTitle>Painel de Automações</CardTitle></CardHeader>
    <CardContent>
      <Table>
        <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Playbook</TableHead><TableHead>Status</TableHead><TableHead>Execuções</TableHead><TableHead>Última Ação</TableHead><TableHead>Responsável</TableHead></TableRow></TableHeader>
        <TableBody>
          {playbooksData.map(item => (
            <TableRow key={item.name} className="border-gray-700">
              <TableCell>{item.name}</TableCell>
              <TableCell>{getStatusBadge(item.status)}</TableCell>
              <TableCell>{item.execucoes}</TableCell>
              <TableCell>{item.ultima}</TableCell>
              <TableCell>{item.responsavel}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className="text-sm text-risk-gold mt-4">💡 Insight IA: “O playbook Contrato + Faturamento apresenta atraso médio de 3h entre assinatura e emissão de nota. Sugere-se adicionar automação de cobrança instantânea.”</p>
    </CardContent>
  </Card>
);

const CriadorDeFluxos = () => (
  <Card className="bg-petroleum-blue border-gray-700 text-white">
    <CardHeader><CardTitle>Criador de Fluxos (Flow Builder)</CardTitle></CardHeader>
    <CardContent className="text-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 bg-gray-900/50 rounded-lg">
        <Card className="bg-gray-800 border-roxo-automacao w-64">
          <CardHeader><CardTitle className="text-base text-roxo-automacao">Gatilho</CardTitle></CardHeader>
          <CardContent><p>Upload de Matrícula</p></CardContent>
        </Card>
        <ArrowRight className="h-8 w-8 text-gray-500" />
        <Card className="bg-gray-800 border-roxo-automacao w-64">
          <CardHeader><CardTitle className="text-base text-roxo-automacao">Condição</CardTitle></CardHeader>
          <CardContent><p>Se matrícula possui ônus</p></CardContent>
        </Card>
        <ArrowRight className="h-8 w-8 text-gray-500" />
        <Card className="bg-gray-800 border-roxo-automacao w-64">
          <CardHeader><CardTitle className="text-base text-roxo-automacao">Ação</CardTitle></CardHeader>
          <CardContent><p>Criar tarefa no Compliance</p></CardContent>
        </Card>
      </div>
      <p className="text-sm text-risk-gold mt-4">💡 IA Leisin Flow Suggest: “Deseja que, após o upload da matrícula, o sistema gere automaticamente o dossiê de propriedade e notifique o advogado responsável?”</p>
    </CardContent>
  </Card>
);

const AcoesEGatilhos = () => (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle>Ações e Gatilhos Inteligentes</CardTitle></CardHeader>
        <CardContent>
            <Table>
                <TableHeader><TableRow className="border-gray-700"><TableHead>Tipo</TableHead><TableHead>Exemplo de Gatilho</TableHead><TableHead>Ação da IA</TableHead></TableRow></TableHeader>
                <TableBody>
                    <TableRow className="border-gray-700"><TableCell>Contratual</TableCell><TableCell>“Contrato aprovado”</TableCell><TableCell>Envia para assinatura digital e gera cobrança.</TableCell></TableRow>
                    <TableRow className="border-gray-700"><TableCell>Cartorial</TableCell><TableCell>“Nova matrícula importada”</TableCell><TableCell>Executa MatrículaLens e cria relatório.</TableCell></TableRow>
                    <TableRow className="border-gray-700"><TableCell>Compliance</TableCell><TableCell>“Risco alto detectado”</TableCell><TableCell>Cria tarefa e envia notificação ao jurídico.</TableCell></TableRow>
                    <TableRow className="border-gray-700"><TableCell>Financeiro</TableCell><TableCell>“Pagamento recebido”</TableCell><TableCell>Atualiza DRE e fecha ordem de serviço.</TableCell></TableRow>
                    <TableRow className="border-gray-700"><TableCell>CRM</TableCell><TableCell>“Nova lead cadastrada”</TableCell><TableCell>Inicia fluxo de contrato + proposta.</TableCell></TableRow>
                </TableBody>
            </Table>
            <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Você pode vincular o Playbook ‘Imóvel com Risco’ ao módulo Compliance para gerar alertas automáticos com pontuação de risco de 0 a 100.”</p>
        </CardContent>
    </Card>
);

const RelatoriosDeExecucao = () => (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle>Relatórios de Execução e Logs</CardTitle></CardHeader>
        <CardContent>
            <Table>
                <TableHeader><TableRow className="border-gray-700"><TableHead>Data</TableHead><TableHead>Playbook</TableHead><TableHead>Etapa</TableHead><TableHead>Duração</TableHead><TableHead>Status</TableHead><TableHead>Usuário</TableHead></TableRow></TableHeader>
                <TableBody>
                    <TableRow className="border-gray-700"><TableCell>11/10/25</TableCell><TableCell>Due Diligence Completa</TableCell><TableCell>MatrículaLens</TableCell><TableCell>00:22</TableCell><TableCell>✅ Concluído</TableCell><TableCell>IA</TableCell></TableRow>
                    <TableRow className="border-gray-700"><TableCell>11/10/25</TableCell><TableCell>Contrato + Faturamento</TableCell><TableCell>Emissão NF</TableCell><TableCell>00:03</TableCell><TableCell>✅ Concluído</TableCell><TableCell>IA</TableCell></TableRow>
                    <TableRow className="border-gray-700"><TableCell>11/10/25</TableCell><TableCell>Regularização Imóvel</TableCell><TableCell>Consulta CND</TableCell><TableCell>00:45</TableCell><TableCell>⚠️ Atrasado</TableCell><TableCell>Dra. Larissa</TableCell></TableRow>
                </TableBody>
            </Table>
            <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “A automação ‘Due Diligence Completa’ reduziu o tempo médio de execução de 3h para 18min nas últimas 50 operações.”</p>
        </CardContent>
    </Card>
);

const ModelosProntos = () => (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle>Modelos Prontos e Templates</CardTitle></CardHeader>
        <CardContent className="space-y-3">
            {["Due Diligence Completa", "Contrato + Faturamento Automático", "Dossiê Imobiliário Integrado", "Proposta + Negociação CRM Jurídico"].map(template => (
                <div key={template} className="p-3 bg-gray-800/50 rounded-lg flex justify-between items-center">
                    <span className="text-sm">{template}</span>
                    <Button size="sm" variant="secondary">Usar Template</Button>
                </div>
            ))}
            <p className="text-sm text-risk-gold pt-4 border-t border-gray-700">💡 IA Flow Builder Pro: “Com base no histórico de uso, sugiro criar um playbook que conecta MatrículaLens + CláusulaCopilot + Financeiro, automatizando o pipeline de análise → contrato → cobrança.”</p>
        </CardContent>
    </Card>
);

const PlaybooksOperacoes = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Playbooks de Operações</h1>
          <p className="text-gray-400 max-w-3xl">
            Automatize fluxos complexos com lógica jurídica, financeira e imobiliária — o cérebro operacional do Leisin.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary"><PlusCircle className="h-4 w-4 mr-2" /> Novo Playbook</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700">Executar Teste</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar Logs</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BookOpen className="h-4 w-4 mr-2" /> Ver Templates</Button>
        </div>
      </header>

      <Tabs defaultValue="painel" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-800">
          <TabsTrigger value="painel">Painel de Playbooks</TabsTrigger>
          <TabsTrigger value="criador">Criador de Fluxos</TabsTrigger>
          <TabsTrigger value="acoes">Ações e Gatilhos</TabsTrigger>
          <TabsTrigger value="relatorios">Relatórios e Logs</TabsTrigger>
          <TabsTrigger value="modelos">Modelos Prontos</TabsTrigger>
        </TabsList>

        <TabsContent value="painel" className="mt-6"><PainelDePlaybooks /></TabsContent>
        <TabsContent value="criador" className="mt-6"><CriadorDeFluxos /></TabsContent>
        <TabsContent value="acoes" className="mt-6"><AcoesEGatilhos /></TabsContent>
        <TabsContent value="relatorios" className="mt-6"><RelatoriosDeExecucao /></TabsContent>
        <TabsContent value="modelos" className="mt-6"><ModelosProntos /></TabsContent>
      </Tabs>
    </div>
  );
};

export default PlaybooksOperacoes;