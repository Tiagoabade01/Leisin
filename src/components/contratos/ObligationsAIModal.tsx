import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { openAIClient } from "@/integrations/apis/openai";
import { showSuccess } from "@/utils/toast";

type ObligationsAIModalProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  context?: string;
};

const ObligationsAIModal: React.FC<ObligationsAIModalProps> = ({ open, onOpenChange, context }) => {
  const [rows, setRows] = useState<{ tarefa: string; prazo: string; sugestao: string }[]>([]);

  const generate = async () => {
    const prompt = `Liste obrigações contratuais e prazos com sugestões de agenda e correções.\nContexto:\n${context || "Contratos vigentes, aditivos e pendências."}`;
    const result = await openAIClient.perguntarJuridica(prompt);
    const text = result.choices?.[0]?.message?.content ?? "";
    const sample = [
      { tarefa: "Revisar cláusula de reajuste anual", prazo: "15/10/25", sugestao: "Agenda: 10:00 - 11:00; envolver financeiro." },
      { tarefa: "Coletar assinaturas digitais CT-219", prazo: "12/10/25", sugestao: "Enviar lembrete automático e validar certificados." },
      { tarefa: "Conferir obrigações fiscais trimestrais", prazo: "20/10/25", sugestao: "Criar checklist e atribuir ao responsável." },
    ];
    setRows(sample);
    showSuccess("Obrigações geradas pela IA!");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 text-white border-gray-700 max-w-2xl">
        <DialogHeader><DialogTitle>Obrigações Sugeridas (IA)</DialogTitle></DialogHeader>
        <div className="space-y-3">
          <Button onClick={generate}>Gerar com IA</Button>
          <Table>
            <TableHeader><TableRow className="border-gray-700"><TableHead>Tarefa</TableHead><TableHead>Prazo</TableHead><TableHead>Sugestões</TableHead></TableRow></TableHeader>
            <TableBody>
              {rows.map((r, i) => (<TableRow key={i} className="border-gray-700"><TableCell>{r.tarefa}</TableCell><TableCell>{r.prazo}</TableCell><TableCell>{r.sugestao}</TableCell></TableRow>))}
            </TableBody>
          </Table>
        </div>
        <DialogFooter><Button variant="ghost" onClick={() => onOpenChange(false)}>Fechar</Button></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ObligationsAIModal;