import React, { useState, FormEvent } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlusCircle, Users, Shield, BarChart2 } from "lucide-react";

import VisaoGeralOrganizacional from '@/components/master/equipes/VisaoGeralOrganizacional';
import UsuariosCadastrados from '@/components/master/equipes/UsuariosCadastrados';
import EquipesHierarquias from '@/components/master/equipes/EquipesHierarquias';
import PermissoesPapeis from '@/components/master/equipes/PermissoesPapeis';
import ProdutividadeDesempenho from '@/components/master/equipes/ProdutividadeDesempenho';
import AuditoriaLogs from '@/components/master/equipes/AuditoriaLogs';
import IaRhInsights from '@/components/master/equipes/IaRhInsights';

const EquipesUsuarios = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para salvar o usuário aqui
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 md:p-8">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Equipes & Usuários Internos</h1>
          <p className="text-gray-300">A central de gestão de pessoas, acessos e performance da plataforma.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={() => setIsModalOpen(true)}><PlusCircle className="h-4 w-4 mr-2" /> Novo Usuário</Button>
          <Button variant="outline" className="bg-gray-800 border-gray-700"><Users className="h-4 w-4 mr-2" /> Nova Equipe</Button>
          <Button variant="outline" className="bg-gray-800 border-gray-700"><Shield className="h-4 w-4 mr-2" /> Gerenciar Papéis</Button>
          <Button variant="outline" className="bg-gray-800 border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Relatórios</Button>
        </div>
      </header>

      <Tabs defaultValue="visao_geral" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-4 lg:grid-cols-7 bg-gray-800">
          <TabsTrigger value="visao_geral">Visão Geral</TabsTrigger>
          <TabsTrigger value="usuarios">Usuários</TabsTrigger>
          <TabsTrigger value="equipes">Equipes</TabsTrigger>
          <TabsTrigger value="permissoes">Permissões</TabsTrigger>
          <TabsTrigger value="produtividade">Produtividade</TabsTrigger>
          <TabsTrigger value="auditoria">Auditoria</TabsTrigger>
          <TabsTrigger value="ia_rh">IA de RH</TabsTrigger>
        </TabsList>

        <TabsContent value="visao_geral" className="mt-6"><VisaoGeralOrganizacional /></TabsContent>
        <TabsContent value="usuarios" className="mt-6"><UsuariosCadastrados /></TabsContent>
        <TabsContent value="equipes" className="mt-6"><EquipesHierarquias /></TabsContent>
        <TabsContent value="permissoes" className="mt-6"><PermissoesPapeis /></TabsContent>
        <TabsContent value="produtividade" className="mt-6"><ProdutividadeDesempenho /></TabsContent>
        <TabsContent value="auditoria" className="mt-6"><AuditoriaLogs /></TabsContent>
        <TabsContent value="ia_rh" className="mt-6"><IaRhInsights /></TabsContent>
      </Tabs>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>Adicionar Novo Usuário</DialogTitle></DialogHeader>
          <form onSubmit={handleSaveUser}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2"><Label htmlFor="name">Nome Completo</Label><Input id="name" name="name" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="email">E-mail</Label><Input id="email" name="email" type="email" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="role">Cargo / Função</Label><Input id="role" name="role" className="bg-gray-800 border-gray-600" /></div>
              <div className="space-y-2"><Label htmlFor="team">Equipe</Label>
                <Select name="team"><SelectTrigger className="bg-gray-800 border-gray-600"><SelectValue placeholder="Selecione a equipe" /></SelectTrigger><SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="juridico">Jurídico</SelectItem><SelectItem value="financeiro">Financeiro</SelectItem><SelectItem value="comercial">Comercial</SelectItem></SelectContent></Select>
              </div>
              <div className="space-y-2"><Label htmlFor="permission">Papel (Nível de Acesso)</Label>
                <Select name="permission"><SelectTrigger className="bg-gray-800 border-gray-600"><SelectValue placeholder="Selecione o papel" /></SelectTrigger><SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="admin">Master Admin</SelectItem><SelectItem value="gestor">Gestor</SelectItem><SelectItem value="analista">Analista</SelectItem><SelectItem value="viewer">Visualizador</SelectItem></SelectContent></Select>
              </div>
            </div>
            <DialogFooter><Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button><Button type="submit">Salvar Usuário</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EquipesUsuarios;