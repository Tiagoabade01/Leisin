import React, { useState, FormEvent } from 'react';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Download, Brain, ListChecks } from "lucide-react";
import ContractKPIs from "@/components/contratos/ContractKPIs";
import ContractList from "@/components/contratos/ContractList";
import ObligationsPanel from "@/components/contratos/ObligationsPanel";
import ContractAIInsights from "@/components/contratos/ContractAIInsights";
import { showSuccess } from '@/utils/toast';

export interface Contract {
  id: string;
  type: string;
  client: string;
  lawyer: string;
  status: string;
  risk: 'Baixo' | 'Médio' | 'Alto';
  expiry: string;
  value: number;
  object: string;
}

const initialContracts: Contract[] = [
  { id: "CT-204", type: "Prestação de serviços", client: "Mettri Arquitetura", lawyer: "Ana Faria", status: "Vigente", risk: "Baixo", expiry: "15/11/2025", value: 15000, object: "Assessoria jurídica mensal." },
  { id: "CT-212", type: "Compra e venda", client: "Terlla Incorporadora", lawyer: "João Lima", status: "Revisão", risk: "Médio", expiry: "08/12/2025", value: 2500000, object: "Aquisição de terreno na Zona Sul." },
  { id: "CT-219", type: "Parceria comercial", client: "Nivem Construtora", lawyer: "Maria Souza", status: "Em execução", risk: "Alto", expiry: "03/01/2026", value: 500000, object: "Parceria para construção de empreendimento." },
];

const ContratosObrigacoes = () => {
  const [contracts, setContracts] = useState<Contract[]>(initialContracts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingContract, setEditingContract] = useState<Partial<Contract> | null>(null);

  const handleOpenModal = (contract?: Partial<Contract>) => {
    setEditingContract(contract || {});
    setIsModalOpen(true);
  };

  const handleGenerateWithAI = () => {
    handleOpenModal({
      id: `CT-${Math.floor(Math.random() * 100) + 220}`,
      type: "Prestação de Serviços (Gerado por IA)",
      client: "Novo Cliente",
      lawyer: "IA Copilot",
      status: "Rascunho",
      risk: "Médio",
      expiry: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      object: "Minuta inicial gerada pela IA para assessoria jurídica."
    });
    showSuccess("Minuta de contrato gerada com IA!");
  };

  const handleSaveContract = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const contractData = {
      id: formData.get('id') as string,
      type: formData.get('type') as string,
      client: formData.get('client') as string,
      lawyer: formData.get('lawyer') as string,
      status: formData.get('status') as string,
      risk: (formData.get('risk') as 'Baixo' | 'Médio' | 'Alto') || 'Baixo',
      expiry: new Date(formData.get('expiry') as string).toLocaleDateString('pt-BR'),
      value: parseFloat(formData.get('value') as string),
      object: formData.get('object') as string,
    };

    if (editingContract?.id && contracts.some(c => c.id === editingContract.id)) {
      setContracts(contracts.map(c => c.id === editingContract.id ? { ...c, ...contractData } : c));
      showSuccess("Contrato atualizado com sucesso!");
    } else {
      setContracts([contractData, ...contracts]);
      showSuccess("Novo contrato criado com sucesso!");
    }
    setIsModalOpen(false);
  };

  const handleDeleteContract = (id: string) => {
    setContracts(contracts.filter(c => c.id !== id));
    showSuccess("Contrato excluído com sucesso!");
  };

  return (
    <Layout>
      <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8">
        <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white font-serif">Contratos & Obrigações</h1>
            <p className="text-gray-400 max-w-3xl">
              Gestão inteligente de contratos, obrigações e aditivos — automação, revisão e conformidade jurídica com IA.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => handleOpenModal()}><PlusCircle className="h-4 w-4 mr-2" /> Novo Contrato</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={handleGenerateWithAI}><Brain className="h-4 w-4 mr-2" /> Gerar Minuta IA</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => showSuccess("Exportação de dados iniciada.")}><Download className="h-4 w-4 mr-2" /> Exportar Dados</Button>
            <Button variant="secondary" onClick={() => showSuccess("Visualizando painel de obrigações.")}><ListChecks className="h-4 w-4 mr-2" /> Ver Obrigações</Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <ContractKPIs />
            <ContractList contracts={contracts} onEdit={handleOpenModal} onDelete={handleDeleteContract} />
            <ObligationsPanel />
          </div>
          <div className="lg:col-span-1">
            <ContractAIInsights />
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700 max-w-2xl">
          <DialogHeader><DialogTitle>{editingContract?.id && contracts.some(c => c.id === editingContract.id) ? 'Editar' : 'Novo'} Contrato</DialogTitle></DialogHeader>
          <form onSubmit={handleSaveContract}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 max-h-[70vh] overflow-y-auto pr-4">
              <div className="space-y-2"><Label htmlFor="id">Nº / Nome</Label><Input id="id" name="id" defaultValue={editingContract?.id} className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="type">Tipo</Label><Input id="type" name="type" defaultValue={editingContract?.type} className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="client">Cliente/Fornecedor</Label><Input id="client" name="client" defaultValue={editingContract?.client} className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="lawyer">Responsável</Label><Input id="lawyer" name="lawyer" defaultValue={editingContract?.lawyer} className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="status">Status</Label><Input id="status" name="status" defaultValue={editingContract?.status} className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="value">Valor (R$)</Label><Input id="value" name="value" type="number" step="0.01" defaultValue={editingContract?.value} className="bg-gray-800 border-gray-600" /></div>
              <div className="space-y-2"><Label htmlFor="expiry">Vencimento</Label><Input id="expiry" name="expiry" type="date" defaultValue={editingContract?.expiry ? new Date(editingContract.expiry.split('/').reverse().join('-')).toISOString().split('T')[0] : ''} className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2 md:col-span-2"><Label htmlFor="object">Objeto do Contrato</Label><Textarea id="object" name="object" defaultValue={editingContract?.object} className="bg-gray-800 border-gray-600" /></div>
            </div>
            <DialogFooter><Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button><Button type="submit">Salvar</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default ContratosObrigacoes;