import React, { useState, FormEvent } from 'react';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlusCircle, Download, Brain, Calendar } from "lucide-react";
import ProcessKPIs from "@/components/casos/ProcessKPIs";
import ProcessList from "@/components/casos/ProcessList";
import DeadlinesPanel from "@/components/casos/DeadlinesPanel";
import LegalAIInsights from "@/components/casos/LegalAIInsights";
import { showSuccess } from '@/utils/toast';

export interface Process {
  id: string;
  type: string;
  client: string;
  lawyer: string;
  status: string;
  risk: 'Baixo' | 'Médio' | 'Alto';
  lastUpdate: string;
}

const initialProcesses: Process[] = [
  { id: "1012456-33.2025.8.26.0100", type: "Cível", client: "Mettri Arquitetura", lawyer: "Ana Faria", status: "Em andamento", risk: "Médio", lastUpdate: "09/10/25" },
  { id: "402312-92.2024.8.26.0450", type: "Trabalhista", client: "Nivem Construtora", lawyer: "João Lima", status: "Em recurso", risk: "Alto", lastUpdate: "07/10/25" },
  { id: "225481-88.2025.8.26.0001", type: "Imobiliário", client: "Terlla", lawyer: "Maria Souza", status: "Encerrado", risk: "Baixo", lastUpdate: "02/10/25" },
];

const CasosProcessos = () => {
  const [processes, setProcesses] = useState<Process[]>(initialProcesses);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProcess, setEditingProcess] = useState<Process | null>(null);

  const handleOpenModal = (process?: Process) => {
    setEditingProcess(process || null);
    setIsModalOpen(true);
  };

  const handleSaveProcess = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const processData = {
      id: formData.get('id') as string,
      type: formData.get('type') as string,
      client: formData.get('client') as string,
      lawyer: formData.get('lawyer') as string,
      status: formData.get('status') as string,
      risk: formData.get('risk') as 'Baixo' | 'Médio' | 'Alto',
      lastUpdate: new Date().toLocaleDateString('pt-BR'),
    };

    if (editingProcess) {
      setProcesses(processes.map(p => p.id === editingProcess.id ? processData : p));
      showSuccess("Processo atualizado com sucesso!");
    } else {
      setProcesses([processData, ...processes]);
      showSuccess("Novo processo criado com sucesso!");
    }
    setIsModalOpen(false);
  };
  
  const handleDeleteProcess = (id: string) => {
    setProcesses(processes.filter(p => p.id !== id));
    showSuccess("Processo excluído com sucesso!");
  };

  return (
    <Layout>
      <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8">
        <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white font-serif">Casos & Processos</h1>
            <p className="text-gray-400 max-w-3xl">
              Gestão completa de processos judiciais e consultivos — controle, automação e análise preditiva jurídica.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => handleOpenModal()}><PlusCircle className="h-4 w-4 mr-2" /> Novo Processo</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => showSuccess("Iniciando importação de andamentos...")}><Download className="h-4 w-4 mr-2" /> Importar Andamentos</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => showSuccess("Relatório de IA gerado com sucesso!")}><Brain className="h-4 w-4 mr-2" /> Gerar Relatório IA</Button>
            <Button variant="secondary" onClick={() => showSuccess("Abrindo calendário de prazos...")}><Calendar className="h-4 w-4 mr-2" /> Visualizar Calendário</Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <ProcessKPIs />
            <ProcessList processes={processes} onEdit={handleOpenModal} onDelete={handleDeleteProcess} />
            <DeadlinesPanel />
          </div>
          <div className="lg:col-span-1">
            <LegalAIInsights />
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>{editingProcess ? 'Editar' : 'Novo'} Processo</DialogTitle></DialogHeader>
          <form onSubmit={handleSaveProcess}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2"><Label htmlFor="id">Nº Processo</Label><Input id="id" name="id" defaultValue={editingProcess?.id} className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="type">Tipo</Label><Input id="type" name="type" defaultValue={editingProcess?.type} className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="client">Cliente</Label><Input id="client" name="client" defaultValue={editingProcess?.client} className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="lawyer">Advogado</Label><Input id="lawyer" name="lawyer" defaultValue={editingProcess?.lawyer} className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="status">Status</Label><Input id="status" name="status" defaultValue={editingProcess?.status} className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="risk">Risco</Label>
                <Select name="risk" defaultValue={editingProcess?.risk || 'Baixo'}>
                  <SelectTrigger className="bg-gray-800 border-gray-600"><SelectValue /></SelectTrigger>
                  <SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="Baixo">Baixo</SelectItem><SelectItem value="Médio">Médio</SelectItem><SelectItem value="Alto">Alto</SelectItem></SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter><Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button><Button type="submit">Salvar</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default CasosProcessos;