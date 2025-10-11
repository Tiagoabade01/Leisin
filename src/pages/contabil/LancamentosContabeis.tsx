import React, { useState, FormEvent } from 'react';
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Download, BarChart2, BrainCircuit, FileText, GitBranch } from "lucide-react";
import { showSuccess } from '@/utils/toast';

const kpis = [
  { title: "Lançamentos no Período", value: "12.436", status: "green" },
  { title: "Lançamentos com Erros", value: "17", status: "red" },
  { title: "Conciliações Pendentes", value: "23", status: "orange" },
  { title: "Centros Vinculados", value: "98%", status: "green" },
];

const initialLancamentos = [
  { data: "10/10/25", debito: "2.1.1.01", credito: "1.1.1.01", historico: "Pagamento fornecedor", valor: 8940.00, centro: "CC-2102", status: "🟢" },
  { data: "10/10/25", debito: "3.1.1.01", credito: "1.1.1.01", historico: "Fatura SaaS", valor: 2340.00, centro: "CC-2104", status: "🟢" },
  { data: "09/10/25", debito: "2.2.3.01", credito: "1.1.1.01", historico: "IRRF Folha", valor: 4190.00, centro: "CC-2101", status: "🟠" },
  { data: "09/10/25", debito: "4.1.2.01", credito: "1.1.1.01", historico: "Venda Licença Premium", valor: 11800.00, centro: "CC-2001", status: "🟢" },
  { data: "08/10/25", debito: "2.1.3.01", credito: "1.1.1.01", historico: "Energia Elétrica", valor: 6210.00, centro: "CC-2203", status: "🔴" },
];

const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

const LancamentosContabeisPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(false);
    showSuccess("Lançamento contábil salvo com sucesso!");
  };

  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Lançamentos Contábeis</h1>
          <p className="text-gray-400 max-w-3xl">
            Automação total da contabilidade — lançamentos integrados, auditáveis e inteligentes, com reconciliação automática e validação por IA.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => setIsModalOpen(true)}><PlusCircle className="h-4 w-4 mr-2" /> Novo Lançamento</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Importar</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700">Auditar</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Exportar</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          {/* KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {kpis.map(kpi => (
              <Card key={kpi.title} className="bg-petroleum-blue border-gray-700 text-white">
                <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-400">{kpi.title}</CardTitle></CardHeader>
                <CardContent>
                  <p className={`text-3xl font-bold text-${kpi.status}-400`}>{kpi.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tabela de Lançamentos */}
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Lançamentos do Período</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Data</TableHead><TableHead>Conta Débito</TableHead><TableHead>Conta Crédito</TableHead><TableHead>Histórico</TableHead><TableHead>Valor (R$)</TableHead><TableHead>Centro</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                <TableBody>
                  {initialLancamentos.map(item => (
                    <TableRow key={item.data + item.valor} className="border-gray-700">
                      <TableCell>{item.data}</TableCell>
                      <TableCell>{item.debito}</TableCell>
                      <TableCell>{item.credito}</TableCell>
                      <TableCell>{item.historico}</TableCell>
                      <TableCell>{formatCurrency(item.valor)}</TableCell>
                      <TableCell>{item.centro}</TableCell>
                      <TableCell>{item.status}</TableCell>
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
            <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-tech-green" /><CardTitle className="text-white">IA Accounting</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Conta ‘Energia Elétrica’ lançada em categoria incorreta. Sugestão: reclassificar para 3.2.1.01 – Despesas Operacionais.”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Há 4 lançamentos de energia sem centro vinculado.”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“3 lançamentos repetem histórico idêntico e valor — possível duplicidade.”</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>Novo Lançamento Contábil</DialogTitle></DialogHeader>
          <form onSubmit={handleSave}>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-2"><Label htmlFor="data">Data</Label><Input id="data" name="data" type="date" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="valor">Valor (R$)</Label><Input id="valor" name="valor" type="number" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="debito">Conta Débito</Label><Input id="debito" name="debito" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="credito">Conta Crédito</Label><Input id="credito" name="credito" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2 col-span-2"><Label htmlFor="historico">Histórico</Label><Input id="historico" name="historico" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2 col-span-2"><Label htmlFor="centro">Centro de Custo</Label>
                <Select name="centro"><SelectTrigger className="bg-gray-800 border-gray-600"><SelectValue placeholder="Selecione" /></SelectTrigger><SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="CC-2101">Jurídico</SelectItem><SelectItem value="CC-2102">Financeiro</SelectItem><SelectItem value="CC-2202">Comercial</SelectItem></SelectContent></Select>
              </div>
            </div>
            <DialogFooter><Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button><Button type="submit">Salvar Lançamento</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const LancamentosContabeis = () => (
  <Layout>
    <LancamentosContabeisPage />
  </Layout>
);

export default LancamentosContabeis;