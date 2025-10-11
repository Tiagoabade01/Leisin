import React, { useState, useEffect } from 'react';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { PrazoProcessual, Subtarefa } from '@/pages/tarefas/PrazosProcessuais';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';

interface PrazoDetalheDrawerProps {
  prazo: PrazoProcessual;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onUpdate: (updatedPrazo: PrazoProcessual) => void;
}

const PrazoDetalheDrawer = ({ prazo, isOpen, onOpenChange, onUpdate }: PrazoDetalheDrawerProps) => {
  const [tarefas, setTarefas] = useState<Subtarefa[]>(prazo.tarefas);

  useEffect(() => {
    setTarefas(prazo.tarefas);
  }, [prazo]);

  const handleCheckChange = (tarefaId: string) => {
    const newTarefas = tarefas.map(t => t.id === tarefaId ? { ...t, concluida: !t.concluida } : t);
    setTarefas(newTarefas);
    onUpdate({ ...prazo, tarefas: newTarefas });
  };

  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent className="bg-gray-900 text-white border-gray-700 h-[80vh]">
        <div className="p-6 h-full overflow-y-auto">
          <DrawerHeader className="p-0 mb-4">
            <DrawerTitle className="text-2xl font-bold">{prazo.descricao}</DrawerTitle>
            <DrawerDescription className="text-gray-400">Processo: {prazo.processo} | Cliente: {prazo.cliente}</DrawerDescription>
            <div className="flex items-center gap-4 text-sm text-gray-400 mt-2">
              <span>Prazo: {prazo.data}</span>
              <span>Status: <Badge variant="secondary">{prazo.status}</Badge></span>
            </div>
          </DrawerHeader>
          
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Checklist de Tarefas</h4>
            <div className="space-y-3 p-4 bg-gray-800/50 rounded-lg">
              {tarefas.map(tarefa => (
                <div key={tarefa.id} className="flex items-center gap-3">
                  <Checkbox id={tarefa.id} checked={tarefa.concluida} onCheckedChange={() => handleCheckChange(tarefa.id)} />
                  <Label htmlFor={tarefa.id} className={cn("text-base", tarefa.concluida && "line-through text-gray-500")}>
                    {tarefa.texto}
                  </Label>
                </div>
              ))}
              {tarefas.length === 0 && <p className="text-sm text-gray-500">Nenhuma subtarefa definida.</p>}
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold mb-2">Comentários</h4>
            <Textarea placeholder="Adicionar um comentário..." className="bg-gray-800 border-gray-600" />
            <Button className="mt-2">Enviar</Button>
          </div>
        </div>
        <DrawerFooter className="border-t border-gray-700">
          <Button onClick={() => onOpenChange(false)}>Fechar</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default PrazoDetalheDrawer;