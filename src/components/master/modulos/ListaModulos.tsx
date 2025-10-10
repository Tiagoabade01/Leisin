import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Settings } from "lucide-react";

const modulesData = [
  { id: 1, name: 'Jurídico Operacional', description: 'Gestão de processos, contratos e documentos', status: true, plans: ['Business', 'Enterprise'], lastUpdate: '09/10/2025' },
  { id: 2, name: 'IA & Automação', description: 'Playbooks, copilots, análises automáticas', status: false, plans: ['Enterprise'], lastUpdate: '05/09/2025' },
  { id: 3, name: 'Financeiro', description: 'Contas a pagar, receber e fluxo de caixa', status: true, plans: ['Business', 'Enterprise'], lastUpdate: '01/10/2025' },
  { id: 4, name: 'CRM Jurídico', description: 'Pipeline de oportunidades e gestão de clientes', status: true, plans: ['Pro', 'Business', 'Enterprise'], lastUpdate: '25/09/2025' },
];

const ListaModulos = () => {
  const [modules, setModules] = useState(modulesData);

  const toggleStatus = (id: number) => {
    setModules(modules.map(m => m.id === id ? { ...m, status: !m.status } : m));
  };

  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Módulos do Sistema</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800/50"><TableHead className="text-gray-200">Módulo</TableHead><TableHead className="text-gray-200">Status</TableHead><TableHead className="text-gray-200">Planos Disponíveis</TableHead><TableHead className="text-gray-200">Última Atualização</TableHead><TableHead className="text-right text-gray-200">Ações</TableHead></TableRow></TableHeader>
          <TableBody>
            {modules.map(mod => (
              <TableRow key={mod.id} className="border-gray-700">
                <TableCell>
                  <p className="font-medium">{mod.name}</p>
                  <p className="text-xs text-gray-400">{mod.description}</p>
                </TableCell>
                <TableCell><Switch checked={mod.status} onCheckedChange={() => toggleStatus(mod.id)} /></TableCell>
                <TableCell><div className="flex gap-1">{mod.plans.map(p => <Badge key={p} variant="secondary">{p}</Badge>)}</div></TableCell>
                <TableCell>{mod.lastUpdate}</TableCell>
                <TableCell className="text-right"><Button variant="ghost" size="icon"><Settings className="h-4 w-4" /></Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ListaModulos;