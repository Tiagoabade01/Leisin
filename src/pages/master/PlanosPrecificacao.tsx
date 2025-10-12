import React, { useState, FormEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Tag, BarChart3, BrainCircuit } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import VisaoGeralComercial from '@/components/master/planos/VisaoGeralComercial';
import ListaPlanos from '@/components/master/planos/ListaPlanos';
import PrecificacaoAvançada from '@/components/master/planos/PrecificacaoAvançada';
import PromocoesCupons from '@/components/master/planos/PromocoesCupons';
import RegrasUpgrade from '@/components/master/planos/RegrasUpgrade';
import ComparadorDePlanos from '@/components/master/planos/ComparadorDePlanos';
import SimuladorReceita from '@/components/master/planos/SimuladorReceita';

// --- Tipos de Dados ---
export type PlanStatus = 'published' | 'draft' | 'archived' | 'negotiation';
export interface Price { period: 'monthly' | 'yearly'; currency: 'BRL'; amount: number; }
export interface Plan {
  id: string;
  name: string;
  type: string;
  status: PlanStatus;
  description: string;
  users: number | 'Ilimitado*';
  modules: string[];
  iaLevel: 'Básica' | 'Padrão' | 'Avançada' | 'Avançada+Custom' | 'Avançada+Private';
  support: 'Help Center' | 'E-mail' | 'E-mail+Chat' | 'Gerente dedicado' | 'SLA custom';
  sla: string;
  prices: Price[];
  version: number;
  storageGb: number;
  clients: number;
}

// --- Dados Iniciais ---
const initialPlansData: Plan[] = [
  { id: 'starter', name: 'Starter', type: 'Básico', status: 'published', description: 'Para profissionais solo e escritórios pequenos.', users: 1, modules: ['CRM', 'Jurídico'], iaLevel: 'Básica', support: 'Help Center', sla: '–', prices: [{ period: 'monthly', currency: 'BRL', amount: 290 }, { period: 'yearly', currency: 'BRL', amount: 2900 }], version: 1, storageGb: 10, clients: 53 },
  { id: 'business', name: 'Business', type: 'Profissional', status: 'published', description: 'Para escritórios médios com automações e risco avançado.', users: 20, modules: ['Todos', 'IA'], iaLevel: 'Avançada', support: 'E-mail+Chat', sla: '99,9%', prices: [{ period: 'monthly', currency: 'BRL', amount: 890 }, { period: 'yearly', currency: 'BRL', amount: 8900 }], version: 3, storageGb: 200, clients: 32 },
  { id: 'whitelabel', name: 'White Label', type: 'Personalizado', status: 'negotiation', description: 'Para parceiros que desejam usar sua própria marca.', users: 'Ilimitado*', modules: ['Todos', 'Marca própria', 'SSO'], iaLevel: 'Avançada+Private', support: 'SLA custom', sla: '99,95%', prices: [], version: 1, storageGb: 2000, clients: 4 },
];

const PlanosPrecificacao = () => {
  const [plans, setPlans] = useState<Plan[]>(initialPlansData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<Partial<Plan> | null>(null);

  const handleOpenModal = (plan?: Plan) => {
    setEditingPlan(plan || {});
    setIsModalOpen(true);
  };

  const handleSavePlan = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const planData = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      type: formData.get('type') as string,
      status: formData.get('status') as PlanStatus,
      users: formData.get('users') as string === 'Ilimitado*' ? 'Ilimitado*' : parseInt(formData.get('users') as string),
      storageGb: parseInt(formData.get('storageGb') as string),
      prices: [
        { period: 'monthly', currency: 'BRL', amount: parseFloat(formData.get('price_monthly') as string) || 0 },
        { period: 'yearly', currency: 'BRL', amount: parseFloat(formData.get('price_yearly') as string) || 0 },
      ]
    };

    if (editingPlan?.id) {
      setPlans(plans.map(p => p.id === editingPlan.id ? { ...p, ...planData, version: p.version + 1 } : p));
    } else {
      const newPlan: Plan = {
        id: `plan_${Date.now()}`,
        version: 1,
        modules: [],
        iaLevel: 'Básica',
        support: 'Help Center',
        sla: '-',
        clients: 0,
        ...editingPlan,
        ...planData,
      };
      setPlans([...plans, newPlan]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 md:p-8">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Planos & Precificação</h1>
          <p className="text-gray-300">A central de monetização do T3 Diligence — crie, gerencie e escale modelos de assinatura.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={() => handleOpenModal()}><PlusCircle className="h-4 w-4 mr-2" /> Novo Plano</Button>
          <Button variant="outline" className="bg-gray-800 border-gray-700"><Tag className="h-4 w-4 mr-2" /> Gerar Cupom</Button>
          <Button variant="outline" className="bg-gray-800 border-gray-700"><BarChart3 className="h-4 w-4 mr-2" /> Comparar Planos</Button>
          <Button variant="outline" className="bg-gray-800 border-gray-700"><BrainCircuit className="h-4 w-4 mr-2" /> Simulador IA</Button>
        </div>
      </header>

      <Tabs defaultValue="visao_geral" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-4 lg:grid-cols-7 bg-gray-800">
          <TabsTrigger value="visao_geral">Visão Geral</TabsTrigger>
          <TabsTrigger value="planos">Planos</TabsTrigger>
          <TabsTrigger value="precificacao">Precificação</TabsTrigger>
          <TabsTrigger value="promocoes">Promoções</TabsTrigger>
          <TabsTrigger value="regras">Regras</TabsTrigger>
          <TabsTrigger value="comparador">Comparador</TabsTrigger>
          <TabsTrigger value="simulador">Simulador (IA)</TabsTrigger>
        </TabsList>

        <TabsContent value="visao_geral" className="mt-6"><VisaoGeralComercial /></TabsContent>
        <TabsContent value="planos" className="mt-6"><ListaPlanos plans={plans} onEdit={handleOpenModal} /></TabsContent>
        <TabsContent value="precificacao" className="mt-6"><PrecificacaoAvançada /></TabsContent>
        <TabsContent value="promocoes" className="mt-6"><PromocoesCupons /></TabsContent>
        <TabsContent value="regras" className="mt-6"><RegrasUpgrade /></TabsContent>
        <TabsContent value="comparador" className="mt-6"><ComparadorDePlanos plans={plans} /></TabsContent>
        <TabsContent value="simulador" className="mt-6"><SimuladorReceita /></TabsContent>
      </Tabs>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700 max-w-2xl">
          <DialogHeader><DialogTitle>{editingPlan?.id ? 'Editar' : 'Criar'} Plano</DialogTitle></DialogHeader>
          <form onSubmit={handleSavePlan}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 max-h-[70vh] overflow-y-auto pr-4">
              <div className="space-y-2 md:col-span-2"><Label htmlFor="name">Nome do Plano</Label><Input id="name" name="name" defaultValue={editingPlan?.name} className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2 md:col-span-2"><Label htmlFor="description">Descrição Comercial</Label><Textarea id="description" name="description" defaultValue={editingPlan?.description} className="bg-gray-800 border-gray-600" /></div>
              <div className="space-y-2"><Label htmlFor="type">Tipo</Label><Input id="type" name="type" defaultValue={editingPlan?.type} className="bg-gray-800 border-gray-600" /></div>
              <div className="space-y-2"><Label htmlFor="status">Status</Label>
                <Select name="status" defaultValue={editingPlan?.status || 'draft'}>
                  <SelectTrigger className="bg-gray-800 border-gray-600"><SelectValue /></SelectTrigger>
                  <SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="draft">Rascunho</SelectItem><SelectItem value="published">Ativo</SelectItem><SelectItem value="negotiation">Em Negociação</SelectItem><SelectItem value="archived">Arquivado</SelectItem></SelectContent>
                </Select>
              </div>
              <div className="space-y-2"><Label htmlFor="price_monthly">Valor Mensal (BRL)</Label><Input id="price_monthly" name="price_monthly" type="number" step="0.01" defaultValue={editingPlan?.prices?.find(p=>p.period==='monthly')?.amount} className="bg-gray-800 border-gray-600" /></div>
              <div className="space-y-2"><Label htmlFor="price_yearly">Valor Anual (BRL)</Label><Input id="price_yearly" name="price_yearly" type="number" step="0.01" defaultValue={editingPlan?.prices?.find(p=>p.period==='yearly')?.amount} className="bg-gray-800 border-gray-600" /></div>
              <div className="space-y-2"><Label htmlFor="users">Limite de Usuários</Label><Input id="users" name="users" defaultValue={editingPlan?.users} className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="storageGb">Armazenamento (GB)</Label><Input id="storageGb" name="storageGb" type="number" defaultValue={editingPlan?.storageGb} className="bg-gray-800 border-gray-600" required /></div>
              <div className="md:col-span-2">
                <Label>Módulos Incluídos</Label>
                <div className="grid grid-cols-2 gap-2 p-3 mt-2 bg-gray-800/50 rounded-md text-sm">
                  {['CRM', 'Jurídico', 'Financeiro', 'IA', 'Compliance', 'Imobiliário'].map(mod => <div key={mod} className="flex items-center gap-2"><input type="checkbox" id={`mod_${mod}`} defaultChecked={editingPlan?.modules?.includes(mod)} /> <label htmlFor={`mod_${mod}`}>{mod}</label></div>)}
                </div>
              </div>
            </div>
            <DialogFooter><Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button><Button type="submit">Salvar Plano</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PlanosPrecificacao;