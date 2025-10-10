import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Info, ShieldAlert } from "lucide-react";

export const SystemAlerts = () => (
  <Card className="bg-gray-800 border-gray-700 text-white">
    <CardHeader>
      <CardTitle>Alertas e Notificações</CardTitle>
    </CardHeader>
    <CardContent className="space-y-3">
      <div className="flex items-start"><ShieldAlert className="w-5 h-5 mr-3 text-red-500 mt-1 flex-shrink-0" /><span>[Crítico] Tentativa de acesso não autorizado bloqueada.</span></div>
      <div className="flex items-start"><AlertTriangle className="w-5 h-5 mr-3 text-yellow-500 mt-1 flex-shrink-0" /><span>[Aviso] Latência da API ARISP acima de 500ms.</span></div>
      <div className="flex items-start"><Info className="w-5 h-5 mr-3 text-blue-500 mt-1 flex-shrink-0" /><span>[Info] Atualização v2.5.1 agendada para 02/08.</span></div>
    </CardContent>
  </Card>
);