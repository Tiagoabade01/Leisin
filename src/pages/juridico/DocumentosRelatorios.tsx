import React, { useState, FormEvent } from 'react';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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

  return (
    <Layout>
      <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8">
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
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>Novo Documento</DialogTitle></DialogHeader>
          <form onSubmit={handleSaveDocument}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2"><Label htmlFor="name">Nome do Documento</Label><Input id="name" name="name" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="type">Tipo</Label><Input id="type" name="type" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="module">Módulo</Label><Input id="module" name="module" className="bg-gray-800 border-gray-600" required /></div>
            </div>
            <DialogFooter><Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button><Button type="submit">Salvar</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default DocumentosRelatorios;