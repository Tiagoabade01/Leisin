import React, { FormEvent, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type EnhancedClientModalProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  initial?: any;
  onSave: (data: any) => void;
};

const EnhancedClientModal: React.FC<EnhancedClientModalProps> = ({ open, onOpenChange, initial, onSave }) => {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [docs, setDocs] = useState<File[]>([]);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    onSave({
      name: fd.get("name"),
      type: fd.get("type"),
      document: fd.get("document"),
      email: fd.get("email"),
      responsible: fd.get("responsible"),
      notes: fd.get("notes"),
      avatar: avatar?.name,
      docsCount: docs.length,
      lastInteraction: new Date().toLocaleDateString("pt-BR"),
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 text-white border-gray-700 max-w-2xl">
        <DialogHeader><DialogTitle>{initial?.id ? "Editar Cliente" : "Novo Cliente"}</DialogTitle></DialogHeader>
        <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="md:col-span-2 space-y-2"><Label>Nome / Razão Social</Label><Input name="name" defaultValue={initial?.name} className="bg-gray-800 border-gray-600" required /></div>
          <div className="space-y-2"><Label>Tipo</Label>
            <select name="type" defaultValue={initial?.type || "PJ"} className="flex h-10 w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-sm">
              <option value="PJ">Pessoa Jurídica</option>
              <option value="PF">Pessoa Física</option>
            </select>
          </div>
          <div className="space-y-2"><Label>CPF / CNPJ</Label><Input name="document" defaultValue={initial?.document} className="bg-gray-800 border-gray-600" required /></div>
          <div className="space-y-2"><Label>E-mail</Label><Input name="email" type="email" defaultValue={initial?.email} className="bg-gray-800 border-gray-600" required /></div>
          <div className="space-y-2"><Label>Responsável Interno</Label><Input name="responsible" defaultValue={initial?.responsible} className="bg-gray-800 border-gray-600" required /></div>
          <div className="md:col-span-2 space-y-2"><Label>Observações</Label><Textarea name="notes" defaultValue={initial?.notes} rows={4} className="bg-gray-800 border-gray-600" /></div>
          <div className="space-y-2"><Label>Imagem (Avatar)</Label><Input type="file" accept="image/*" onChange={(e) => setAvatar(e.target.files?.[0] || null)} className="bg-gray-800 border-gray-600" /></div>
          <div className="space-y-2"><Label>Documentos</Label><Input type="file" multiple onChange={(e) => setDocs(Array.from(e.target.files || []))} className="bg-gray-800 border-gray-600" /></div>
          <DialogFooter className="md:col-span-2"><Button variant="ghost" onClick={() => onOpenChange(false)}>Cancelar</Button><Button type="submit">Salvar</Button></DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnhancedClientModal;