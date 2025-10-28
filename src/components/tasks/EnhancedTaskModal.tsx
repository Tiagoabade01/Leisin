import React, { useState, FormEvent } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type EnhancedTaskModalProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onSave: (data: any) => void;
};

const EnhancedTaskModal: React.FC<EnhancedTaskModalProps> = ({ open, onOpenChange, onSave }) => {
  const [attachments, setAttachments] = useState<File[]>([]);
  const [comments, setComments] = useState<string>("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    onSave({
      title: fd.get("title"),
      description: fd.get("description"),
      responsible: fd.get("responsible"),
      deadline: fd.get("deadline"),
      hours: fd.get("hours"),
      mentions: fd.get("mentions"),
      attachmentsCount: attachments.length,
      teamComments: comments,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 text-white border-gray-700">
        <DialogHeader><DialogTitle>Nova Tarefa</DialogTitle></DialogHeader>
        <form onSubmit={submit} className="grid gap-3 max-h-[70vh] overflow-y-auto pr-2">
          <div className="space-y-2"><Label>Título</Label><Input name="title" className="bg-gray-800 border-gray-600" required /></div>
          <div className="space-y-2"><Label>Descrição</Label><Textarea name="description" className="bg-gray-800 border-gray-600" /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-2"><Label>Responsável</Label><Input name="responsible" className="bg-gray-800 border-gray-600" required /></div>
            <div className="space-y-2"><Label>Prazo</Label><Input name="deadline" type="date" className="bg-gray-800 border-gray-600" required /></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-2"><Label>Horas Estimadas</Label><Input name="hours" type="number" step="0.1" className="bg-gray-800 border-gray-600" /></div>
            <div className="space-y-2"><Label>Menções (@)</Label><Input name="mentions" placeholder="@ana, @joao" className="bg-gray-800 border-gray-600" /></div>
          </div>
          <div className="space-y-2"><Label>Anexos</Label><Input type="file" multiple onChange={(e) => setAttachments(Array.from(e.target.files || []))} className="bg-gray-800 border-gray-600" /></div>
          <div className="space-y-2"><Label>Comentários da Equipe</Label><Textarea value={comments} onChange={(e) => setComments(e.target.value)} rows={4} className="bg-gray-800 border-gray-600" /></div>
          <DialogFooter><Button variant="ghost" onClick={() => onOpenChange(false)}>Cancelar</Button><Button type="submit">Criar Tarefa</Button></DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnhancedTaskModal;