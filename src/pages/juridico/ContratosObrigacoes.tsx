import React, { useState, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlusCircle, Download, Brain, ListChecks } from "lucide-react";
import ContractKPIs from "@/components/contratos/ContractKPIs";
import ContractList from "@/components/contratos/ContractList";
import ObligationsPanel from "@/components/contratos/ObligationsPanel";
import ContractAIInsights from "@/components/contratos/ContractAIInsights";
import { showSuccess } from '@/utils/toast';
import ContractWizardModal from '@/components/contratos/ContractWizardModal';
import ExportDataModal from '@/components/common/ExportDataModal';
import ObligationsAIModal from '@/components/contratos/ObligationsAIModal';

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
  const [exportOpen, setExportOpen] = useState(false);
  const [obligationsOpen, setObligationsOpen] = useState(false);
  const [editingContract, setEditingContract] = useState<Partial<Contract> | null>(null);
  const [contractToDelete, setContractToDelete] = useState<string | null>(null);

  const handleOpenModal = (contract?: Contract) => {
    setEditingContract(contract || {});
    setIsModalOpen(true);
  };

  const handleGenerateWithAI = () => {
    setEditingContract({});
    setIsModalOpen(true);
  };

  const handleSaveContract = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const expiryDate = formData.get('expiry') as string;
    const contractData = {
      id: formData.get('id') as string,
      type: formData.get('type') as string,
      client: formData.get('client') as string,
      lawyer: formData.get('lawyer') as string,
      status: formData.get('status') as string,
      risk: (formData.get('risk') as 'Baixo' | 'Médio' | 'Alto') || 'Baixo',
      expiry: new Date(expiryDate).toLocaleDateString('pt-BR'),
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
    setContractToDelete(id);
  };

  const confirmDelete = () => {
    if (contractToDelete) {
      setContracts(contracts.filter(c => c.id !== contractToDelete));
      showSuccess("Contrato excluído com sucesso!");
      setContractToDelete(null);
    }
  };

  return (
    <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Contratos & Obrigações</h1>
          <p className="text-gray-400 max-w-3xl">
            Gestão inteligente de contratos, obrigações e aditivos — automação, revisão e conformidade jurídica com IA.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={() => handleOpenModal()}><PlusCircle className="h-4 w-4 mr-2" /> Novo Contrato / IA</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={handleGenerateWithAI}><Brain className="h-4 w-4 mr-2" /> Gerar Minuta IA</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => setExportOpen(true)}><Download className="h-4 w-4 mr-2" /> Exportar Dados</Button>
          <Button variant="secondary" onClick={() => setObligationsOpen(true)}><ListChecks className="h-4 w-4 mr-2" /> Obrigações (IA)</Button>
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

      {/* Modal Wizard Contrato / IA */}
      <ContractWizardModal open={isModalOpen} onOpenChange={setIsModalOpen} initial={editingContract || {}} onSave={handleSaveContract} />

      {/* Modal Exportar Dados */}
      <ExportDataModal open={exportOpen} onOpenChange={setExportOpen} title="Exportar Dados Contratuais" datasetName="contratos" />

      {/* Obrigações IA */}
      <ObligationsAIModal open={obligationsOpen} onOpenChange={setObligationsOpen} context="Contratos atuais e pendências" />

      {/* Modal Confirmar Exclusão */}
      <AlertDialog open={!!contractToDelete} onOpenChange={() => setContractToDelete(null)}>
        <AlertDialogContent className="bg-gray-900 text-white border-gray-700">
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-300">
              Tem certeza que deseja excluir este contrato? Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild><Button variant="ghost">Cancelar</Button></AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} asChild><Button variant="destructive">Excluir</Button></AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ContratosObrigacoes;