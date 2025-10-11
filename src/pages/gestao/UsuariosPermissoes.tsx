import React, { useState, FormEvent } from 'react';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, BarChart2, Download, ShieldCheck } from "lucide-react";
import { showSuccess } from '@/utils/toast';

import PainelUsuarios from '@/components/gestao/usuarios/PainelUsuarios';
import CadastroPerfis from '@/components/gestao/usuarios/CadastroPerfis';
import ControlePermissoes from '@/components/gestao/usuarios/ControlePermissoes';
import LogsAuditoria from '@/components/gestao/usuarios/LogsAuditoria';
import AutomacaoAcessos from '@/components/gestao/usuarios/AutomacaoAcessos';

const UsuariosPermissoesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(false);
    showSuccess("Usuário convidado com sucesso!");
  };

  return (
    <div className="bg-[#0B0F16] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Usuários e Permissões</h1>
          <p className="text-gray-400 max-w-3xl">
            Controle total sobre quem faz o quê: gerencie equipes, papéis, permissões e acessos com segurança jurídica e automação inteligente.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => setIsModalOpen(true)}><PlusCircle className="h-4 w-4 mr-2" /> Novo Usuário</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Gerar Relatório</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar Permissões</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><ShieldCheck className="h-4 w-4 mr-2" /> Ver Logs</Button>
        </div>
      </header>

      <Tabs defaultValue="painel" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-800">
          <TabsTrigger value="painel">Painel de Usuários</TabsTrigger>
          <TabsTrigger value="perfis">Cadastro e Perfis</TabsTrigger>
          <TabsTrigger value="permissoes">Controle de Permissões</TabsTrigger>
          <TabsTrigger value="auditoria">Logs e Auditoria</TabsTrigger>
          <TabsTrigger value="ia">Automação (IA)</TabsTrigger>
        </TabsList>

        <TabsContent value="painel" className="mt-6">
          <PainelUsuarios />
        </TabsContent>
        <TabsContent value="perfis" className="mt-6">
          <CadastroPerfis />
        </TabsContent>
        <TabsContent value="permissoes" className="mt-6">
          <ControlePermissoes />
        </TabsContent>
        <TabsContent value="auditoria" className="mt-6">
          <LogsAuditoria />
        </TabsContent>
        <TabsContent value="ia" className="mt-6">
          <AutomacaoAcessos />
        </TabsContent>
      </Tabs>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>Adicionar Novo Usuário</DialogTitle></DialogHeader>
          <form onSubmit={handleSaveUser}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2"><Label htmlFor="name">Nome Completo</Label><Input id="name" name="name" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="email">E-mail Corporativo</Label><Input id="email" name="email" type="email" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="role">Cargo / Função</Label><Input id="role" name="role" className="bg-gray-800 border-gray-600" /></div>
              <div className="space-y-2"><Label htmlFor="branch">Filial</Label><Input id="branch" name="branch" className="bg-gray-800 border-gray-600" /></div>
            </div>
            <DialogFooter>
              <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button>
              <Button type="submit">Enviar Convite</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const UsuariosPermissoes = () => (
  <Layout>
    <UsuariosPermissoesPage />
  </Layout>
);

export default UsuariosPermissoes;