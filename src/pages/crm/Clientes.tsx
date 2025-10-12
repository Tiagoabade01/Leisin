import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle, BarChart2, Brain, Upload } from "lucide-react";
import ClientDashboard from "@/components/clientes/ClientDashboard";
import ClientList from "@/components/clientes/ClientList";
import ClientAIInsights from "@/components/clientes/ClientAIInsights";
import { showSuccess } from '@/utils/toast';

export interface Client {
  id: string;
  name: string;
  type: 'PJ' | 'PF';
  responsible: string;
  contracts: number;
  processes: number;
  status: string;
  lastInteraction: string;
  document: string;
  email: string;
}

const initialClients: Client[] = [
  { id: "1", name: "Construtora Atlas", type: "PJ", responsible: "Dr. Ricardo", contracts: 5, processes: 3, status: "Ativo", lastInteraction: "11/10/25", document: "11.222.333/0001-44", email: "contato@atlas.com" },
  { id: "2", name: "Banco Futura", type: "PJ", responsible: "Dra. Larissa", contracts: 2, processes: 1, status: "Em risco", lastInteraction: "10/10/25", document: "22.333.444/0001-55", email: "juridico@futura.com" },
  { id: "3", name: "José Abade", type: "PF", responsible: "Dr. João", contracts: 1, processes: 1, status: "Ativo", lastInteraction: "09/10/25", document: "123.456.789-00", email: "jose.abade@email.com" },
  { id: "4", name: "Grupo Hera", type: "PJ", responsible: "Dr. Felipe", contracts: 0, processes: 0, status: "Potencial", lastInteraction: "08/10/25", document: "33.444.555/0001-66", email: "contato@hera.com" },
];

const Clientes = () => {
  const [clients, setClients] = useState<Client[]>(initialClients);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<Partial<Client> | null>(null);
  const navigate = useNavigate();

  const handleOpenModal = (client?: Client) => {
    setEditingClient(client || {});
    setIsModalOpen(true);
  };

  const handleSaveClient = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const clientData = {
      name: formData.get('name') as string,
      type: formData.get('type') as 'PJ' | 'PF',
      responsible: formData.get('responsible') as string,
      document: formData.get('document') as string,
      email: formData.get('email') as string,
      lastInteraction: new Date().toLocaleDateString('pt-BR'),
    };

    if (editingClient?.id) {
      setClients(clients.map(c => c.id === editingClient.id ? { ...c, ...clientData } : c));
      showSuccess("Cliente atualizado com sucesso!");
    } else {
      const newClient: Client = {
        id: `${clients.length + 1}`,
        contracts: 0,
        processes: 0,
        status: 'Ativo',
        ...clientData,
      };
      setClients([newClient, ...clients]);
      showSuccess("Novo cliente criado com sucesso!");
    }
    setIsModalOpen(false);
  };

  const handleDeleteClient = (id: string) => {
    setClients(clients.filter(c => c.id !== id));
    showSuccess("Cliente excluído com sucesso!");
  };

  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Clientes</h1>
          <p className="text-gray-400 max-w-3xl">
            Gestão completa de clientes jurídicos, com histórico, contratos, comunicações, dados financeiros e análise inteligente de relacionamento.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={() => handleOpenModal()}><PlusCircle className="h-4 w-4 mr-2" /> Novo Cliente</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Upload className="h-4 w-4 mr-2" /> Importar Base</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Exportar</Button>
          <Button variant="secondary"><Brain className="h-4 w-4 mr-2" /> Analisar IA</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <ClientDashboard />
          <ClientList clients={clients} onEdit={handleOpenModal} onDelete={handleDeleteClient} />
        </div>
        <div className="lg:col-span-1">
          <ClientAIInsights />
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>{editingClient?.id ? 'Editar' : 'Novo'} Cliente</DialogTitle></DialogHeader>
          <form onSubmit={handleSaveClient}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              <div className="space-y-2 md:col-span-2"><Label htmlFor="name">Nome / Razão Social</Label><Input id="name" name="name" defaultValue={editingClient?.name} className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="type">Tipo</Label><Input id="type" name="type" defaultValue={editingClient?.type} className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="document">CPF / CNPJ</Label><Input id="document" name="document" defaultValue={editingClient?.document} className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="email">E-mail de Contato</Label><Input id="email" name="email" type="email" defaultValue={editingClient?.email} className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="responsible">Responsável Interno</Label><Input id="responsible" name="responsible" defaultValue={editingClient?.responsible} className="bg-gray-800 border-gray-600" required /></div>
            </div>
            <DialogFooter><Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button><Button type="submit">Salvar</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Clientes;