import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { generateAuditPlan } from "@/integrations/analysis/runner";
import { showError, showSuccess } from "@/utils/toast";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewAuditModal: React.FC<Props> = ({ open, onOpenChange }) => {
  const [entidade, setEntidade] = useState("");
  const [scope, setScope] = useState("Auditoria geral de conformidade (LGPD, trabalhista, fiscal)");
  const [periodo, setPeriodo] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const startAudit = async () => {
    if (!entidade.trim()) {
      showError("Informe entidade/empresa/área a auditar.");
      return;
    }
    setLoading(true);
    setResult(null);
    try {
      const data = await generateAuditPlan(scope.trim(), entidade.trim(), periodo.trim() || undefined);
      setResult(data);
      showSuccess("Plano de auditoria gerado com sucesso.");
    } catch (err: any) {
      showError(err?.message ?? "Erro ao gerar plano de auditoria");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-petroleum-blue border-gray-700 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-white">Nova Auditoria</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <Label>Entidade/Empresa</Label>
              <Input
                placeholder="Ex.: Nivem Construtora"
                value={entidade}
                onChange={(e) => setEntidade(e.target.value)}
                className="bg-gray-800 border-gray-700 mt-1"
              />
            </div>
            <div>
              <Label>Escopo</Label>
              <Textarea
                placeholder="Descreva o escopo principal..."
                value={scope}
                onChange={(e) => setScope(e.target.value)}
                className="bg-gray-800 border-gray-700 mt-1 min-h-[100px]"
              />
            </div>
            <div>
              <Label>Período (opcional)</Label>
              <Input
                placeholder="Ex.: 01/2024–10/2025"
                value={periodo}
                onChange={(e) => setPeriodo(e.target.value)}
                className="bg-gray-800 border-gray-700 mt-1"
              />
            </div>
            <Button onClick={startAudit} disabled={loading} className="w-full">
              {loading ? "Gerando..." : "Gerar Plano"}
            </Button>
          </div>

          <div>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-3 space-y-2 text-sm">
                {!result && <p className="text-gray-400">O plano/insights aparecerão aqui.</p>}
                {result && (
                  <>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-tech-green/20 text-tech-green border-tech-green/30">IA</Badge>
                      <span className="text-xs text-gray-400">Plano / Checklist</span>
                    </div>
                    <pre className="text-xs whitespace-pre-wrap break-words">{JSON.stringify(result, null, 2)}</pre>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewAuditModal;