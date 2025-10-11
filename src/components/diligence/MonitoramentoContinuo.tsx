import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Clock, Inbox } from "lucide-react";

const MonitoramentoContinuo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><Bell className="h-5 w-5 text-tech-green" /><CardTitle className="text-white text-base">Alertas Automáticos</CardTitle></CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Novos processos judiciais</li>
            <li>Alterações societárias</li>
            <li>Notícias negativas / sancionamentos</li>
            <li>Perda de CND ou mudança cadastral</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><Clock className="h-5 w-5 text-tech-green" /><CardTitle className="text-white text-base">Frequência</CardTitle></CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Diária (casos críticos)</li>
            <li>Semanal (padrão)</li>
            <li>Mensal (baixo risco)</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><Inbox className="h-5 w-5 text-tech-green" /><CardTitle className="text-white text-base">Notificações</CardTitle></CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Painel interno</li>
            <li>E-mail corporativo</li>
            <li>Canal do módulo Contratos</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default MonitoramentoContinuo;