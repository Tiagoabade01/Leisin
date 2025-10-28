import React from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { appActions } from "@/utils/actions";

type ExportDataModalProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  title?: string;
  datasetName?: string;
};

const ExportDataModal: React.FC<ExportDataModalProps> = ({ open, onOpenChange, title = "Exportar Dados", datasetName = "dados" }) => {
  const [format, setFormat] = React.useState("csv");

  const onExport = () => {
    const sample = [{ titulo: "Exemplo", status: "ok", criado_em: new Date().toISOString() }];
    if (format === "csv") appActions.generateReport(`${datasetName}`, sample as any);
    else appActions.exportLog(`${datasetName}`, sample as any);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 text-white border-gray-700 max-w-md">
        <DialogHeader><DialogTitle>{title}</DialogTitle></DialogHeader>
        <div className="space-y-3">
          <div className="space-y-2">
            <Label>Formato</Label>
            <Select defaultValue={format} onValueChange={setFormat}>
              <SelectTrigger className="bg-gray-800 border-gray-700"><SelectValue /></SelectTrigger>
              <SelectContent className="bg-gray-800 text-white border-gray-700">
                <SelectItem value="csv">CSV</SelectItem>
                <SelectItem value="json">JSON</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <p className="text-sm text-gray-400">O arquivo será gerado com um modelo limpo e campos editáveis para ajustes.</p>
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>Cancelar</Button>
          <Button onClick={onExport}>Exportar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExportDataModal;