import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RelatoriosLogs = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Relatórios e Logs</CardTitle></CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-2 text-white">Relatórios Automáticos</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Relatório de sincronização cartorial</li>
            <li>Relatório de pendências de atualização</li>
            <li>Relatório de certidões e vencimentos</li>
            <li>Log completo de consultas e autenticações</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-white">Exportações</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>CSV / PDF / JSON para relatórios corporativos</li>
            <li>Integração via API → Jurídico, Dossiês e Compliance</li>
            <li>Dashboard gerencial com estatísticas</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatoriosLogs;