import React, { useState, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Download, Brain, FileText } from "lucide-react";
import DocumentCenter from "@/components/docs/DocumentCenter";
import TemplateLibrary from "@/components/docs/TemplateLibrary";
import ReportGenerator from "@/components/docs/ReportGenerator";
import DocumentAI from "@/components/docs/DocumentAI";
import { showSuccess } from '@/utils/toast';

export interface Document {
  id: string;
  name: string;
  type: string;
  module: string;
  responsible: string;
  date: string;
  status: string;
}

const initialDocuments: Document[] = [
  { id: "1", name: "Contrato CT-212.pdf", type: "Contrato", module: "Contratos", responsible: "João Lima", date: "08/10/25", status: "Vigente" },
  { id: "2", name: "Proc_1012456_decisão.pdf", type: "Decisão", module: "Processos", responsible: "Ana Faria", date: "07/10/25", status: "Concluído" },
  { id: "3", name: "Certidão_Terlla.pdf", type: "Certidão", module: "Due Diligence", responsible: "Maria Souza", date: "03/10/25", status: "Válida" },
];

const DocumentosRelatorios = () => {
  const [documents, setDocuments] = useState<Document[]>(initialDocuments);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [documentToDelete, setDocumentToDelete] = useState<string | null>(null);

  const handleSaveDocument = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newDocument: Document = {
      id: `${documents.length + 1}`,
      name: formData.get('name') as string,
      type: formData.get('type') as string,
      module: formData.get('module') as string,
      responsible: "Usuário Atual",
      date: new Date().toLocaleDateString('pt-BR'),
      status: "Novo",
    };
    setDocuments([newDocument, ...documents]);
    setIsModalOpen(false);
    showSuccess("Documento adicionado com sucesso!");
  };

  const handleDeleteDocument = (id: string) => {
    setDocumentToDelete(id);
  };

  const confirmDelete = () => {
    if (documentToDelete) {
      setDocuments(documents.filter(d => d.id !== documentToDelete));
      showSuccess("Documento excluído com sucesso!");
      setDocumentToDelete(null);
    }
  };

  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Documentos & Relatórios</h1>
          <p className="text-gray-400 max-w-3xl">
            Central de automação e controle documental jurídico — inteligência, auditoria e relatórios integrados.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={() => setIsModalOpen(true)}><PlusCircle className="h-4 w-4 mr-2" /> Novo Documento</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => showSuccess("Gerando relatório com IA...")}><Brain className="h-4 w-4 mr-2" /> Gerar Relatório IA</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => showSuccess("Certidão importada.")}><FileText className="h-4 w-4 mr-2" /> Importar Certidão</Button>
          <Button variant="secondary" onClick={() => showSuccess("Exportação de dados iniciada.")}><Download className="h-4 w-4 mr-2" /> Exportar Dados</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <DocumentCenter documents={documents} />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <TemplateLibrary />
            <ReportGenerator />
          </div>
        </div>
        <div className="lg:col-span-1">
          <DocumentAI />
        </div>
      </div>

      {/* Modal Novo Documento */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>Adicionar Novo Documento</DialogTitle></DialogHeader>
          <form onSubmit={handleSaveDocument}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2"><Label htmlFor="doc-file">Arquivo</Label><Input id="doc-file" name="file" type="file" className="bg-gray-800 border-gray-600" /></div>
              <div className="space-y-2"><Label htmlFor="doc-name">Nome do Documento</Label><Input id="doc-name" name="name" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="doc-type">Tipo</Label><Input id="doc-type" name="type" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="doc-module">Módulo</Label><Input id="doc-module" name="module" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="doc-link">Vincular a (Cliente/Caso)</Label><Input id="doc-link" name="link" className="bg-gray-800 border-gray-600" /></div>
              <div className="space-y-2"><Label htmlFor="doc-tags">Tags</Label><Input id="doc-tags" name="tags" placeholder="Ex: confidencial, minuta, fiscal" className="bg-gray-800 border-gray-600" /></div>
            </div>
            <DialogFooter><Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button><Button type="submit">Salvar Documento</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Modal Confirmar Exclusão */}
      <AlertDialog open={!!documentToDelete} onOpenChange={() => setDocumentToDelete(null)}>
        <AlertDialogContent className="bg-gray-900 text-white border-gray-700">
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-300">
              Tem certeza que deseja excluir este documento? Esta ação não pode ser desfeita.
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

export default DocumentosRelatorios;