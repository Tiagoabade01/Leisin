import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { openAIClient } from "@/integrations/apis/openai";
import { showSuccess } from "@/utils/toast";

type ContractWizardModalProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  initial?: Partial<{ id: string; type: string; client: string; lawyer: string; status: string; value: number; expiry: string; object: string }>;
  onSave: (data: any) => void;
};

const ContractWizardModal: React.FC<ContractWizardModalProps> = ({ open, onOpenChange, initial, onSave }) => {
  const [type, setType] = useState(initial?.type || "Prestação de serviços");
  const [client, setClient] = useState(initial?.client || "");
  const [lawyer, setLawyer] = useState(initial?.lawyer || "");
  const [status, setStatus] = useState(initial?.status || "Rascunho");
  const [value, setValue] = useState(String(initial?.value || ""));
  const [expiry, setExpiry] = useState(initial?.expiry ? new Date(initial.expiry.split('/').reverse().join('-')).toISOString().split('T')[0] : "");
  const [content, setContent] = useState<string>(initial?.object || "");
  const [agentInstruction, setAgentInstruction] = useState("");

  const generateWithAI = async () => {
    const prompt = `Gerar contrato completo do tipo: ${type}. Cliente: ${client}. Regras: linguagem clara, cláusulas numeradas, foro, rescisão, confidencialidade e LGPD.`;
    const result = await openAIClient.perguntarJuridica(prompt);
    const text = result.choices?.[0]?.message?.content ?? "";
    setContent(text);
    showSuccess("Minuta gerada pela IA!");
  };

  const reviseWithAgent = async () => {
    const prompt = `Revise o contrato abaixo conforme instruções: ${agentInstruction}\n\nContrato:\n${content}`;
    const result = await openAIClient.perguntarJuridica(prompt);
    const text = result.choices?.[0]?.message?.content ?? "";
    setContent(text);
    showSuccess("Contrato ajustado pela IA!");
  };

  const save = () => {
    onSave({
      id: initial?.id || `CT-${Math.floor(Math.random() * 1000)}`,
      type, client, lawyer, status,
      value: parseFloat(value || "0"),
      expiry: new Date(expiry).toLocaleDateString("pt-BR"),
      object: content,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 text-white border-gray-700 max-w-3xl">
        <DialogHeader><DialogTitle>Novo Contrato / Minuta IA</DialogTitle></DialogHeader>
        <Tabs defaultValue="dados">
          <TabsList className="grid grid-cols-3 bg-gray-800">
            <TabsTrigger value="dados">Dados</TabsTrigger>
            <TabsTrigger value="minuta">Minuta</TabsTrigger>
            <TabsTrigger value="agent">Agente IA</TabsTrigger>
          </TabsList>
          <TabsContent value="dados" className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-2"><Label>Tipo</Label><Input value={type} onChange={(e) => setType(e.target.value)} className="bg-gray-800 border-gray-700" /></div>
            <div className="space-y-2"><Label>Cliente</Label><Input value={client} onChange={(e) => setClient(e.target.value)} className="bg-gray-800 border-gray-700" /></div>
            <div className="space-y-2"><Label>Responsável</Label><Input value={lawyer} onChange={(e) => setLawyer(e.target.value)} className="bg-gray-800 border-gray-700" /></div>
            <div className="space-y-2"><Label>Status</Label><Input value={status} onChange={(e) => setStatus(e.target.value)} className="bg-gray-800 border-gray-700" /></div>
            <div className="space-y-2"><Label>Valor (R$)</Label><Input value={value} onChange={(e) => setValue(e.target.value)} type="number" step="0.01" className="bg-gray-800 border-gray-700" /></div>
            <div className="space-y-2"><Label>Vencimento</Label><Input value={expiry} onChange={(e) => setExpiry(e.target.value)} type="date" className="bg-gray-800 border-gray-700" /></div>
          </TabsContent>
          <TabsContent value="minuta" className="mt-4 space-y-2">
            <div className="flex gap-2"><Button onClick={generateWithAI}>Gerar Minuta IA</Button><Button variant="outline" className="bg-gray-800 border-gray-700" onClick={() => setContent("")}>Limpar</Button></div>
            <Textarea value={content} onChange={(e) => setContent(e.target.value)} rows={14} className="bg-gray-800 border-gray-700" placeholder="Minuta do contrato (editável)" />
          </TabsContent>
          <TabsContent value="agent" className="mt-4 space-y-2">
            <Label>Instruções para o Agente</Label>
            <Textarea value={agentInstruction} onChange={(e) => setAgentInstruction(e.target.value)} rows={4} className="bg-gray-800 border-gray-700" placeholder="Ex: aumente multa rescisória para 20% e inclua cláusula de não concorrência." />
            <Button variant="secondary" onClick={reviseWithAgent}>Aplicar Revisão IA</Button>
          </TabsContent>
        </Tabs>
        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>Cancelar</Button>
          <Button onClick={save}>Salvar Contrato</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ContractWizardModal;