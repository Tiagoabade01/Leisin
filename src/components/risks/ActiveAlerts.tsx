import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const alerts = [
  { type: "Fiscal", entity: "Nivem Construtora", desc: "Débito novo na Receita Federal", action: "Solicitar CND", status: "🟠 Pendente" },
  { type: "Jurídico", entity: "AMV Negócios", desc: "Ação cível movida por ex-parceiro", action: "Notificar jurídico", status: "🔴 Crítico" },
  { type: "ESG", entity: "Terlla Incorporadora", desc: "Multa ambiental leve", action: "Atualizar licenças", status: "🟡 Em progresso" },
];

const ActiveAlerts = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Alertas e Riscos Ativos</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Tipo</TableHead><TableHead>Entidade</TableHead><TableHead>Descrição</TableHead><TableHead>Ação Recomendada</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {alerts.map(item => (
              <TableRow key={item.entity} className="border-gray-700">
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.entity}</TableCell>
                <TableCell>{item.desc}</TableCell>
                <TableCell>{item.action}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 p-3 bg-gray-800/50 rounded-lg">
          <h4 className="font-semibold text-sm text-white">Automação Ativa</h4>
          <p className="text-xs text-gray-400">Tarefas de mitigação são geradas automaticamente no módulo Tarefas & SLAs.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActiveAlerts;