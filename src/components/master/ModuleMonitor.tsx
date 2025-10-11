import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, RefreshCw, FileText } from "lucide-react";

const modules = [
  { name: "Jurídico Operacional", status: "ok" },
  { name: "Compliance / Risco", status: "ok" },
  { name: "Financeiro / Contábil", status: "alerta" },
  { name: "IA e Automação", status: "ok" },
];

export const ModuleMonitor = () => (
  <Card className="bg-gray-800 border-gray-700 text-white">
    <CardHeader>
      <CardTitle className="text-white">Monitoramento de Módulos</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3">
        {modules.map(mod => (
          <li key={mod.name} className="flex items-center justify-between">
            <div className="flex items-center">
              {mod.status === 'ok' ? <CheckCircle className="w-5 h-5 mr-3 text-green-500" /> : <AlertTriangle className="w-5 h-5 mr-3 text-yellow-500" />}
              <span>{mod.name}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Button variant="ghost" size="icon" className="h-7 w-7"><RefreshCw className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon" className="h-7 w-7"><FileText className="h-4 w-4" /></Button>
            </div>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);