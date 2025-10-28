import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { runDiligenceAnalysis, AnalysisType } from "@/integrations/analysis/runner";
import { showError, showSuccess } from "@/utils/toast";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  context?: string; // ex: "Due Diligence", "Análises de Risco"
  defaultType?: AnalysisType;
}

const NewAnalysisModal: React.FC<Props> = ({ open, onOpenChange, context = "Análise", defaultType = 'pj' }) => {
  const [type, setType] = useState<AnalysisType>(defaultType);
  const [identifier, setIdentifier] = useState("");
  const [depth, setDepth] = useState<"rapida" | "detalhada" | "investigativa">("detalhada");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const startAnalysis = async () => {
    if (!identifier.trim()) {
      showError("Informe um identificador (CPF/CNPJ/Matrícula/Nome).");
      return;
    }
    setLoading(true);
    setResult(null);
    try {
      const data = await runDiligenceAnalysis(type, identifier.trim());
      setResult(data);
      showSuccess("Análise concluída com sucesso.");
    } catch (err: any) {
      showError(err?.message ?? "Erro ao executar análise");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-petroleum-blue border-gray-700 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-white">{context} • Nova Análise</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <Label>Tipo</Label>
              <Select value={type} onValueChange={(v: AnalysisType) => setType(v)}>
                <SelectTrigger className="w-full bg-gray-800 border-gray-700 mt-1">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pf">Pessoa Física</SelectItem>
                  <SelectItem value="pj">Pessoa Jurídica</SelectItem>
                  <SelectItem value="imovel">Imóvel</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Identificador</Label>
              <Input
                placeholder="CPF, CNPJ, matrícula, nome..."
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="bg-gray-800 border-gray-700 mt-1"
              />
            </div>
            <div>
              <Label>Profundidade</Label>
              <Select value={depth} onValueChange={(v: any) => setDepth(v)}>
                <SelectTrigger className="w-full bg-gray-800 border-gray-700 mt-1">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rapida">Rápida</SelectItem>
                  <SelectItem value="detalhada">Detalhada</SelectItem>
                  <SelectItem value="investigativa">Investigativa</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={startAnalysis} disabled={loading} className="w-full">
              {loading ? "Gerando..." : "Gerar Análise"}
            </Button>
          </div>

          <div>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-3 space-y-2 text-sm">
                {!result && <p className="text-gray-400">Os resultados aparecem aqui após a execução.</p>}
                {result && (
                  <>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Dados</Badge>
                      <span className="text-xs text-gray-400">Prévia</span>
                    </div>
                    <pre className="text-xs whitespace-pre-wrap break-words">{JSON.stringify(result.rawData, null, 2)}</pre>
                    {result.aiInsights && (
                      <>
                        <div className="flex items-center gap-2 pt-2 border-t border-gray-700">
                          <Badge className="bg-tech-green/20 text-tech-green border-tech-green/30">IA</Badge>
                          <span className="text-xs text-gray-400">Insights</span>
                        </div>
                        <pre className="text-xs whitespace-pre-wrap break-words">{JSON.stringify(result.aiInsights, null, 2)}</pre>
                      </>
                    )}
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

export default NewAnalysisModal;