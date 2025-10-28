import React, { FormEvent } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type EnhancedTimeModalProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onSave: (data: any) => void;
};

const EnhancedTimeModal: React.FC<EnhancedTimeModalProps> = ({ open, onOpenChange, onSave }) => {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    onSave({
      activity: fd.get("activity"),
      link: fd.get("link"),
      hours: fd.get("hours"),
      date: fd.get("date"),
      notes: fd.get("notes"),
      team: fd.get("team"),
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 text-white border-gray-700">
        <DialogHeader><DialogTitle>Registrar Horas</DialogTitle></DialogHeader>
        <form onSubmit={submit} className="grid gap-3">
          <div className="space-y-2"><Label>Atividade</Label><Input name="activity" className="bg-gray-800 border-gray-600" required /></div>
          <div className="space-y-2"><Label>Caso/Contrato</Label><Input name="link" className="bg-gray-800 border-gray-600" required /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-2"><Label>Horas</Label><Input name="hours" type="number" step="0.1" className="bg-gray-800 border-gray-600" required /></div>
            <div className="space-y-2"><Label>Data</Label><Input name="date" type="date" className="bg-gray-800 border-gray-600" required /></div>
          </div>
          <div className="space-y-2"><Label>Time/Participantes</Label><Input name="team" placeholder="Ex: Ana, João" className="bg-gray-800 border-gray-600" /></div>
          <div className="space-y-2"><Label>Observações</Label><Textarea name="notes" rows={3} className="bg-gray-800 border-gray-600" /></div>
          <DialogFooter><Button variant="ghost" onClick={() => onOpenChange(false)}>Cancelar</Button><Button type="submit">Registrar</Button></DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnhancedTimeModal;