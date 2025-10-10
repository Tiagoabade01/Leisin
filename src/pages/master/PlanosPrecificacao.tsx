import React, { useState, FormEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Minus, MoreHorizontal, PlusCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

// --- Tipos de Dados ---
type PlanStatus = 'published' | 'draft' | 'archived';
interface Price { period: 'monthly' | 'yearly'; currency: 'BRL'; amount: number; }
interface Plan {
  id: string;
  name: string;
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
}

// --- Dados Iniciais ---
const initialPlans: Plan[] = [
  { id: 'starter', name: 'Starter', status: 'published', description: 'Para profissionais solo e escritórios pequenos.', users: 1, modules: ['Jurídico Oper.', 'Documentos'], iaLevel: 'Básica', support: 'Help Center', sla: '–', prices: [{ period: 'monthly', currency: 'BRL', amount: 149 }, { period: 'yearly', currency: 'BRL', amount: 1490 }], version: 1, storageGb: 10 },
  { id: 'pro', name: 'Pro', status: 'published', description: 'Para times pequenos que precisam de mais colaboração.', users: 5, modules: ['Jurídico', 'Contratos', 'Documentos', 'Due Diligence'], iaLevel: 'Padrão', support: 'E-mail', sla: '99,5%', prices: [{ period: 'monthly', currency: 'BRL', amount: 690 }, { period: 'yearly', currency: 'BRL', amount: 6900 }], version: 1, storageGb: 50 },
  { id: 'business', name: 'Business', status: 'published', description: 'Para escritórios médios com automações e risco avançado.', users: 20, modules: ['+ Certidões', 'Risk Mapper', 'CRM', 'Terrenos/Dossiês'], iaLevel: 'Avançada', support: 'E-mail+Chat', sla: '99,9%', prices: [{ period: 'monthly', currency: 'BRL', amount: 2490 }, { period: 'yearly', currency: 'BRL', amount: 24900 }], version: 3, storageGb: 200 },
  { id: 'enterprise', name: 'Enterprise', status: 'published', description: 'Para grandes grupos com necessidades complexas.', users: 'Ilimitado*', modules: ['Todos', 'Integrações'], iaLevel: 'Avançada+Custom', support: 'Gerente dedicado', sla: '99,95%', prices: [], version: 2, storageGb: 1000 },
  { id: 'whitelabel', name: 'White Label', status: 'draft', description: 'Para parceiros que desejam usar sua própria marca.', users: 'Ilimitado*', modules: ['Enterprise', 'Marca própria', 'SSO'], iaLevel: 'Avançada+Private', support: 'SLA custom', sla: '99,95%', prices: [], version: 1, storageGb: 2000 },
];

const addons = [
  { name: 'IA Plus', description: 'CláusulaCopilot Pro, MatrículaLens Pro, 50k req/mês.' },
  { name: 'Cartórios+', description: 'Pacotes de certidões/matrículas (repasse + margem).' },
  { name: 'WhatsApp Business', description: 'Inbox multiatendente, templates, automações.' },
  { name: 'BI Jurídico', description: 'Dashboards avançados, exportações em lote.' },
];

const bundles = [
  { name: 'Bundle Contratos', description: 'ContractOps + Assinatura digital + CláusulaCopilot.' },
  { name: 'Bundle Due Diligence', description: 'Due Diligence + Certidões + Risk Mapper.' },
  { name: 'Bundle Imobiliário', description: 'Terrenos + Dossiês + Integração Vyner.' },
];

const features = [
  { name: 'Jurídico Operacional', plans: ['starter', 'pro', 'business', 'enterprise', 'whitelabel'] },
  { name: 'Contratos & Assinaturas', plans: ['pro', 'business', 'enterprise', 'whitelabel'] },
  { name: 'Due Diligence / Certidões', plans: ['pro', 'business', 'enterprise', 'whitelabel'] },
  { name: 'Risk Mapper', plans: ['business', 'enterprise', 'whitelabel'] },
  { name: 'Terrenos / Dossiês / MatrículaLens', plans: ['pro', 'business', 'enterprise', 'whitelabel'] },
  { name: 'CRM Jurídico', plans: ['pro', 'business', 'enterprise', 'whitelabel'] },
  { name: 'Comunicação (Inbox/WA)', plans: ['pro', 'business', 'enterprise', 'whitelabel'] },
  { name: 'Financeiro/Contábil interno', plans: ['business', 'enterprise', 'whitelabel'] },
  { name: 'Filiais / RBAC avançado / SSO', plans: ['enterprise', 'whitelabel'] },
  { name: 'Nível de IA', plans: ['starter', 'pro', 'business', 'enterprise', 'whitelabel'], text: { starter: 'Básica', pro: 'Padrão', business: 'Avançada' } },
];

const PlanosPrecificacao = () => {
  const [plans, setPlans] = useState<Plan[]>(initialPlans);
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
      status: formData.get('status') as PlanStatus,
      users: formData.get('users') as string === 'Ilimitado*' ? 'Ilimitado*' : parseInt(formData.get('users') as string),
      storageGb: parseInt(formData.get('storageGb') as string),
      prices: [
        { period: 'monthly', currency: 'BRL', amount: parseFloat(formData.get('price_monthly') as string) },
        { period: 'yearly', currency: 'BRL', amount: parseFloat(formData.get('price_yearly') as string) },
      ]
    };

    if (editingPlan?.id) {
      setPlans(plans.map(p => p.id === editingPlan.id ? { ...p, ...planData } : p));
    } else {
      const newPlan: Plan = {
        id: `plan_${Date.now()}`,
        version: 1,
        modules: [],
        iaLevel: 'Básica',
        support: 'Help Center',
        sla: '-',
        ...editingPlan,
        ...planData,
      };
      setPlans([...plans, newPlan]);
    }
    setIsModalOpen(false);
  };

  const formatCurrency = (amount?: number) => amount ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount) : 'Sob consulta';

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Planos & Precificação</h1>
      <p className="text-gray-400 mb-8">Controle estratégico de produtos e modelos comerciais.</p>

      <div className="flex items-center gap-2 mb-6">
        <Button onClick={() => handleOpenModal()}><PlusCircle className="h-4 w-4 mr-2" /> Criar Plano</Button>
        <Button variant="outline" className="bg-gray-800 border-gray-700">Criar Bundle</Button>
        <Button variant="outline" className="bg-gray-800 border-gray-700">Criar Add-on</Button>
      </div>

      <Tabs defaultValue="plans">
        <TabsList className="grid w-full grid-cols-3 bg-gray-800">
          <TabsTrigger value="plans">Planos</TabsTrigger>
          <TabsTrigger value="addons">Add-ons & Bundles</TabsTrigger>
          <TabsTrigger value="matrix">Matriz de Funcionalidades</TabsTrigger>
        </TabsList>

        <TabsContent value="plans" className="mt-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader><CardTitle>Catálogo de Planos</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800"><TableHead>Nome do Plano</TableHead><TableHead>Status</TableHead><TableHead>Usuários</TableHead><TableHead>Preço Mensal</TableHead><TableHead>Versão</TableHead><TableHead className="text-right">Ações</TableHead></TableRow></TableHeader>
                <TableBody>
                  {plans.map(plan => (
                    <TableRow key={plan.id} className="border-gray-700">
                      <TableCell className="font-medium">{plan.name}</TableCell>
                      <TableCell><Badge variant={plan.status === 'published' ? 'default' : 'secondary'}>{plan.status}</Badge></TableCell>
                      <TableCell>{plan.users}</TableCell>
                      <TableCell>{formatCurrency(plan.prices.find(p => p.period === 'monthly')?.amount)}</TableCell>
                      <TableCell>v{plan.version}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
                            <DropdownMenuItem onClick={() => handleOpenModal(plan)}>Editar</DropdownMenuItem>
                            <DropdownMenuItem>Publicar</DropdownMenuItem>
                            <DropdownMenuItem>Duplicar</DropdownMenuItem>
                            <DropdownMenuItem className="text-yellow-400">Arquivar</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="addons" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader><CardTitle>Add-ons Contratáveis</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-3">{addons.map(a => <li key={a.name}><strong>{a.name}:</strong> <span className="text-gray-400">{a.description}</span></li>)}</ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader><CardTitle>Bundles Prontos</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-3">{bundles.map(b => <li key={b.name}><strong>{b.name}:</strong> <span className="text-gray-400">{b.description}</span></li>)}</ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="matrix" className="mt-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader><CardTitle>Matriz de Funcionalidades por Plano</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800"><TableHead>Funcionalidade</TableHead>{plans.map(p => <TableHead key={p.id}>{p.name}</TableHead>)}</TableRow></TableHeader>
                <TableBody>
                  {features.map(feat => (
                    <TableRow key={feat.name} className="border-gray-700">
                      <TableCell className="font-medium">{feat.name}</TableCell>
                      {plans.map(plan => (
                        <TableCell key={plan.id}>
                          {feat.plans.includes(plan.id) ? (feat.text?.[plan.id] || <Check className="text-green-500" />) : <Minus className="text-gray-600" />}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700 max-w-2xl">
          <DialogHeader><DialogTitle>{editingPlan?.id ? 'Editar' : 'Criar'} Plano</DialogTitle></DialogHeader>
          <form onSubmit={handleSavePlan}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              <div className="space-y-2 md:col-span-2"><Label htmlFor="name">Nome do Plano</Label><Input id="name" name="name" defaultValue={editingPlan?.name} className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2 md:col-span-2"><Label htmlFor="description">Descrição</Label><Textarea id="description" name="description" defaultValue={editingPlan?.description} className="bg-gray-800 border-gray-600" /></div>
              <div className="space-y-2"><Label htmlFor="status">Status</Label>
                <Select name="status" defaultValue={editingPlan?.status || 'draft'}>
                  <SelectTrigger className="bg-gray-800 border-gray-600"><SelectValue /></SelectTrigger>
                  <SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="draft">Rascunho</SelectItem><SelectItem value="published">Publicado</SelectItem><SelectItem value="archived">Arquivado</SelectItem></SelectContent>
                </Select>
              </div>
              <div className="space-y-2"><Label htmlFor="users">Usuários</Label><Input id="users" name="users" defaultValue={editingPlan?.users} className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="storageGb">Armazenamento (GB)</Label><Input id="storageGb" name="storageGb" type="number" defaultValue={editingPlan?.storageGb} className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="price_monthly">Preço Mensal (BRL)</Label><Input id="price_monthly" name="price_monthly" type="number" defaultValue={editingPlan?.prices?.find(p=>p.period==='monthly')?.amount} className="bg-gray-800 border-gray-600" /></div>
              <div className="space-y-2 md:col-span-2"><Label htmlFor="price_yearly">Preço Anual (BRL)</Label><Input id="price_yearly" name="price_yearly" type="number" defaultValue={editingPlan?.prices?.find(p=>p.period==='yearly')?.amount} className="bg-gray-800 border-gray-600" /></div>
            </div>
            <DialogFooter><Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button><Button type="submit">Salvar</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PlanosPrecificacao;