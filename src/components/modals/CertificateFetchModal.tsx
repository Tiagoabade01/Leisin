import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fetchCertificatesAuto } from "@/integrations/analysis/runner";
import { showError, showSuccess } from "@/utils/toast";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CertificateFetchModal: React.FC<Props> = ({ open, onOpenChange }) => {
  const [tipo, setTipo] = useState<'CND Federal' | 'CND Estadual' | 'FGTS' | 'Protesto'>('CND Federal');
  const [documento, setDocumento] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const startFetch = async () => {
    if (!documento.trim()) {
      showError("Informe um documento (CPF/CNPJ).");
      return;
    }
    setLoading(true);
    setResult(null);
    try {
      const data = await fetchCertificatesAuto(tipo, documento.trim());
      setResult(data);
      showSuccess("Certidões analisadas com sucesso.");
    } catch (err: any) {
      showError(err?.message ?? "Erro ao buscar certidões");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-petroleum-blue border-gray-700 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-white">Certidões Automáticas</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <Label>Tipo de Certidão</Label>
              <Select value={tipo} onValueChange={(v: any) => setTipo(v)}>
                <SelectTrigger className="w-full bg-gray-800 border-gray-700 mt-1">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CND Federal">CND Federal</SelectItem>
                  <SelectItem value="CND Estadual">CND Estadual</SelectItem>
                  <SelectItem value="FGTS">FGTS</SelectItem>
                  <SelectItem value="Protesto">Protesto</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Documento</Label>
              <Input
                placeholder="CPF ou CNPJ..."
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
                className="bg-gray-800 border-gray-700 mt-1"
              />
            </div>
            <Button onClick={startFetch} disabled={loading} className="w-full">
              {loading ? "Processando..." : "Buscar Certidões"}
            </Button>
          </div>

          <div>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-3 space-y-2 text-sm">
                {!result && <p className="text-gray-400">O status das certidões aparecerá aqui.</p>}
                {result && (
                  <>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Base</Badge>
                      <span className="text-xs text-gray-400">Dados</span>
                    </div>
                    <pre className="text-xs whitespace-pre-wrap break-words">{JSON.stringify(result.baseData, null, 2)}</pre>
                    {result.aiInsights && (
                      <>
                        <div className="flex items-center gap-2 pt-2 border-t border-gray-700">
                          <Badge className="bg-tech-green/20 text-tech-green border-tech-green/30">IA</Badge>
                          <span className="text-xs text-gray-400">Status/Insights</span>
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

export default CertificateFetchModal;