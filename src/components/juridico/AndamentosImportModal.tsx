import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

type AndamentosImportModalProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onImported?: () => void;
};

const AndamentosImportModal: React.FC<AndamentosImportModalProps> = ({ open, onOpenChange, onImported }) => {
  const [rows, setRows] = useState<{ data: string; tipo: string; descricao: string }[]>([]);
  const parseFile = async (file?: File) => {
    if (!file) return;
    // Simples preview: gera linhas mock com base no nome do arquivo
    const mock = [
      { data: "10/10/25", tipo: "Despacho", descricao: `Arquivo ${file.name} processado: despacho publicado.` },
      { data: "11/10/25", tipo: "Audiência", descricao: "Audiência de instrução agendada." },
      { data: "12/10/25", tipo: "Julgamento", descricao: "Julgamento marcado para 20/10/25." },
    ];
    setRows(mock);
  };

  const confirmImport = () => {
    onImported?.();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 text-white border-gray-700 max-w-2xl">
        <DialogHeader><DialogTitle>Importar Andamentos</DialogTitle></DialogHeader>
        <div className="space-y-3">
          <Input type="file" accept=".csv,.xlsx,.pdf" onChange={(e) => parseFile(e.target.files?.[0])} className="bg-gray-800 border-gray-700" />
          <Table>
            <TableHeader><TableRow className="border-gray-700"><TableHead>Data</TableHead><TableHead>Tipo</TableHead><TableHead>Descrição</TableHead></TableRow></TableHeader>
            <TableBody>
              {rows.map((r, i) => (<TableRow key={i} className="border-gray-700"><TableCell>{r.data}</TableCell><TableCell>{r.tipo}</TableCell><TableCell>{r.descricao}</TableCell></TableRow>))}
            </TableBody>
          </Table>
          {rows.length > 0 && <p className="text-sm text-risk-gold">💡 Importação pronta para aplicar aos processos selecionados.</p>}
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>Cancelar</Button>
          <Button onClick={confirmImport} disabled={rows.length === 0}>Confirmar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AndamentosImportModal;