import React, { FormEvent, useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type ProcessModalProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  initial?: Partial<{
    id: string; type: string; client: string; lawyer: string; status: string; risk: 'Baixo'|'Médio'|'Alto'; value: number; description: string;
  }>;
  onSave: (data: any) => void;
};

const ProcessModal: React.FC<ProcessModalProps> = ({ open, onOpenChange, initial, onSave }) => {
  const [attachments, setAttachments] = useState<File[]>([]);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    onSave({
      id: fd.get("id") as string,
      type: fd.get("type") as string,
      client: fd.get("client") as string,
      lawyer: fd.get("lawyer") as string,
      status: fd.get("status") as string,
      risk: (fd.get("risk") as any) || "Baixo",
      value: parseFloat((fd.get("value") as string) || "0"),
      description: fd.get("description") as string,
      lastUpdate: new Date().toLocaleDateString("pt-BR"),
      attachmentsCount: attachments.length,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 text-white border-gray-700 max-w-2xl">
        <DialogHeader><DialogTitle>{initial?.id ? "Editar Processo" : "Novo Processo"}</DialogTitle></DialogHeader>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 max-h-[70vh] overflow-y-auto pr-2">
          <div className="md:col-span-2 space-y-2">
            <Label>Nº Processo</Label>
            <Input name="id" defaultValue={initial?.id} className="bg-gray-800 border-gray-600" required />
          </div>
          <div className="space-y-2">
            <Label>Tipo/Área</Label>
            <Input name="type" defaultValue={initial?.type} className="bg-gray-800 border-gray-600" required />
          </div>
          <div className="space-y-2">
            <Label>Cliente</Label>
            <Input name="client" defaultValue={initial?.client} className="bg-gray-800 border-gray-600" required />
          </div>
          <div className="space-y-2">
            <Label>Advogado</Label>
            <Input name="lawyer" defaultValue={initial?.lawyer} className="bg-gray-800 border-gray-600" required />
          </div>
          <div className="space-y-2">
            <Label>Status</Label>
            <Input name="status" defaultValue={initial?.status} className="bg-gray-800 border-gray-600" required />
          </div>
          <div className="space-y-2">
            <Label>Valor (R$)</Label>
            <Input name="value" type="number" step="0.01" defaultValue={initial?.value} className="bg-gray-800 border-gray-600" />
          </div>
          <div className="space-y-2">
            <Label>Risco</Label>
            <select name="risk" defaultValue={initial?.risk || "Baixo"} className="flex h-10 w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-sm">
              <option value="Baixo">Baixo</option>
              <option value="Médio">Médio</option>
              <option value="Alto">Alto</option>
            </select>
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label>Descrição/Objeto</Label>
            <Textarea name="description" defaultValue={initial?.description} className="bg-gray-800 border-gray-600" rows={4} />
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label>Anexos</Label>
            <Input type="file" multiple onChange={(e) => setAttachments(Array.from(e.target.files || []))} className="bg-gray-800 border-gray-600" />
            {attachments.length > 0 && <p className="text-xs text-gray-400">{attachments.length} arquivo(s) selecionado(s)</p>}
          </div>
          <DialogFooter className="md:col-span-2">
            <Button type="button" variant="ghost" onClick={() => onOpenChange(false)}>Cancelar</Button>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProcessModal;