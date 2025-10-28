import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlusCircle, Download, Brain, Calendar } from "lucide-react";
import ProcessKPIs from "@/components/casos/ProcessKPIs";
import ProcessList from "@/components/casos/ProcessList";
import DeadlinesPanel from "@/components/casos/DeadlinesPanel";
import LegalAIInsights from "@/components/casos/LegalAIInsights";
import { showSuccess } from '@/utils/toast';
import ProcessModal from '@/components/juridico/ProcessModal';
import AndamentosImportModal from '@/components/juridico/AndamentosImportModal';
import AIReportModal from '@/components/common/AIReportModal';
import TarefasCalendario from '@/components/tasks/TarefasCalendario';

export interface Process {
  id: string;
  type: string;
  client: string;
  lawyer: string;
  status: string;
  risk: 'Baixo' | 'Médio' | 'Alto';
  lastUpdate: string;
  value: number;
  description: string;
}

const initialProcesses: Process[] = [
  { id: "1012456-33.2025.8.26.0100", type: "Cível", client: "Mettri Arquitetura", lawyer: "Ana Faria", status: "Em andamento", risk: "Médio", lastUpdate: "09/10/25", value: 50000, description: "Ação de indenização por danos materiais." },
  { id: "402312-92.2024.8.26.0450", type: "Trabalhista", client: "Nivem Construtora", lawyer: "João Lima", status: "Em recurso", risk: "Alto", lastUpdate: "07/10/25", value: 120000, description: "Reclamação trabalhista referente a horas extras." },
  { id: "225481-88.2025.8.26.0001", type: "Imobiliário", client: "Terlla", lawyer: "Maria Souza", status: "Encerrado", risk: "Baixo", lastUpdate: "02/10/25", value: 800000, description: "Ação de usucapião de terreno." },
];

const CasosProcessos = () => {
  const [processes, setProcesses] = useState<Process[]>(initialProcesses);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProcess, setEditingProcess] = useState<Partial<Process> | null>(null);
  const [processToDelete, setProcessToDelete] = useState<string | null>(null);
  const [importModal, setImportModal] = useState(false);
  const [aiReportModal, setAiReportModal] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = (process?: Process) => {
    setEditingProcess(process || {});
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
      value: parseFloat(formData.get('value') as string),
      description: formData.get('description') as string,
      lastUpdate: new Date().toLocaleDateString('pt-BR'),
    };

    if (editingProcess?.id && processes.some(p => p.id === editingProcess.id)) {
      setProcesses(processes.map(p => p.id === editingProcess.id ? { ...p, ...processData } : p));
      showSuccess("Processo atualizado com sucesso!");
    } else {
      setProcesses([processData, ...processes]);
      showSuccess("Novo processo criado com sucesso!");
    }
    setIsModalOpen(false);
  };
  
  const handleDeleteProcess = (id: string) => {
    setProcessToDelete(id);
  };

  const confirmDelete = () => {
    if (processToDelete) {
      setProcesses(processes.filter(p => p.id !== processToDelete));
      showSuccess("Processo excluído com sucesso!");
      setProcessToDelete(null);
    }
  };

  const handleImportUpdates = () => {
    setImportModal(true);
  };

  const handleGenerateAIReport = () => {
    setAiReportModal(true);
  };

  return (
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
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={handleImportUpdates}><Download className="h-4 w-4 mr-2" /> Importar Andamentos</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={handleGenerateAIReport}><Brain className="h-4 w-4 mr-2" /> Gerar Relatório IA</Button>
          <Button variant="secondary" onClick={() => setShowCalendar((v) => !v)}><Calendar className="h-4 w-4 mr-2" /> {showCalendar ? "Fechar Calendário" : "Visualizar Calendário"}</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <ProcessKPIs />
          <ProcessList processes={processes} onEdit={handleOpenModal} onDelete={handleDeleteProcess} />
          <DeadlinesPanel />
          {showCalendar && (
            <div className="mt-6">
              <TarefasCalendario />
            </div>
          )}
        </div>
        <div className="lg:col-span-1">
          <LegalAIInsights />
        </div>
      </div>

      {/* Modal Criar/Editar Processo */}
      <ProcessModal open={isModalOpen} onOpenChange={setIsModalOpen} initial={editingProcess || {}} onSave={handleSaveProcess} />

      {/* Modal Importar Andamentos */}
      <AndamentosImportModal open={importModal} onOpenChange={setImportModal} onImported={() => showSuccess("Andamentos importados com sucesso!")} />

      {/* Modal Relatório IA */}
      <AIReportModal open={aiReportModal} onOpenChange={setAiReportModal} title="Relatório IA — Casos & Processos" />

      {/* Modal Confirmar Exclusão */}
      <AlertDialog open={!!processToDelete} onOpenChange={() => setProcessToDelete(null)}>
        <AlertDialogContent className="bg-gray-900 text-white border-gray-700">
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-300">
              Tem certeza que deseja excluir este processo? Esta ação não pode ser desfeita.
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

export default CasosProcessos;