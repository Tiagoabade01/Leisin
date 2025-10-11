import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { DownloadCloud } from "lucide-react";

const formats = ["PDF", "XLSX", "CSV", "DOCX", "PPTX"];

const DataExport = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <DownloadCloud className="h-5 w-5 text-gray-300" />
          <CardTitle className="text-white">Exportação de Dados</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Formatos Disponíveis</h4>
          <div className="grid grid-cols-3 gap-2">
            {formats.map(format => (
              <Button key={format} variant="outline" className="bg-gray-800 border-gray-700">{format}</Button>
            ))}
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <h4 className="font-semibold text-sm">Opções Avançadas</h4>
          <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-md">
            <Label htmlFor="schedule-export" className="text-sm">Agendar exportações</Label>
            <Switch id="schedule-export" />
          </div>
          <Button variant="secondary" className="w-full">Exportar em Lote</Button>
        </div>
        <p className="text-sm text-risk-gold mt-4">💡 “Exportação automática configurada para o cliente Thor Industrial toda segunda-feira às 9h.”</p>
      </CardContent>
    </Card>
  );
};

export default DataExport;