import React, { FormEvent, useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type EnhancedDocumentModalProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onSave: (data: any) => void;
};

const EnhancedDocumentModal: React.FC<EnhancedDocumentModalProps> = ({ open, onOpenChange, onSave }) => {
  const [files, setFiles] = useState<File[]>([]);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    onSave({
      name: fd.get("name"),
      type: fd.get("type"),
      module: fd.get("module"),
      link: fd.get("link"),
      tags: fd.get("tags"),
      attachmentsCount: files.length,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 text-white border-gray-700">
        <DialogHeader><DialogTitle>Novo Documento</DialogTitle></DialogHeader>
        <form onSubmit={submit} className="grid gap-3">
          <div className="space-y-2"><Label>Arquivo(s)</Label><Input type="file" multiple onChange={(e) => setFiles(Array.from(e.target.files || []))} className="bg-gray-800 border-gray-600" /></div>
          <div className="space-y-2"><Label>Nome</Label><Input name="name" className="bg-gray-800 border-gray-600" required /></div>
          <div className="space-y-2"><Label>Tipo</Label><Input name="type" className="bg-gray-800 border-gray-600" required /></div>
          <div className="space-y-2"><Label>Módulo</Label><Input name="module" className="bg-gray-800 border-gray-600" required /></div>
          <div className="space-y-2"><Label>Vincular a</Label><Input name="link" className="bg-gray-800 border-gray-600" /></div>
          <div className="space-y-2"><Label>Tags</Label><Input name="tags" placeholder="confidencial, minuta, fiscal" className="bg-gray-800 border-gray-600" /></div>
          <DialogFooter><Button variant="ghost" onClick={() => onOpenChange(false)}>Cancelar</Button><Button type="submit">Salvar Documento</Button></DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnhancedDocumentModal;