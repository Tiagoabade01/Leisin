import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { openAIClient } from "@/integrations/apis/openai";
import { showSuccess } from "@/utils/toast";

type AIReportModalProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  title?: string;
};

const AIReportModal: React.FC<AIReportModalProps> = ({ open, onOpenChange, title = "Relatório IA" }) => {
  const [template, setTemplate] = useState("executivo");
  const [context, setContext] = useState("");
  const [output, setOutput] = useState("");

  const generateReport = async () => {
    const prompt = `Gerar relatório ${template} com tom profissional, seções e sumário. Contexto:\n${context}`;
    const result = await openAIClient.perguntarJuridica(prompt);
    const content = result.choices?.[0]?.message?.content ?? "";
    setOutput(content);
    showSuccess("Relatório IA gerado!");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 text-white border-gray-700 max-w-3xl">
        <DialogHeader><DialogTitle>{title}</DialogTitle></DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Modelo de Relatório</Label>
            <Select defaultValue={template} onValueChange={setTemplate}>
              <SelectTrigger className="bg-gray-800 border-gray-700"><SelectValue placeholder="Selecione um modelo" /></SelectTrigger>
              <SelectContent className="bg-gray-800 text-white border-gray-700">
                <SelectItem value="executivo">Executivo (sumário e KPIs)</SelectItem>
                <SelectItem value="juridico">Juridico (andamentos e risco)</SelectItem>
                <SelectItem value="contratual">Contratual (cláusulas e conformidade)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Contexto</Label>
            <Textarea value={context} onChange={(e) => setContext(e.target.value)} rows={6} className="bg-gray-800 border-gray-700" placeholder="Descreva dados, casos, contratos ou objetivos." />
          </div>
          <div className="space-y-2">
            <Label>Pré-visualização</Label>
            <Textarea value={output} onChange={(e) => setOutput(e.target.value)} rows={10} className="bg-gray-800 border-gray-700 font-mono" placeholder="O relatório gerado pela IA aparecerá aqui." />
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>Fechar</Button>
          <Button onClick={generateReport}>Gerar com IA</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AIReportModal;