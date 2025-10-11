import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const reports = [
  "Relatório de auditoria LGPD",
  "Histórico de acessos e logs por período",
  "Backup automático criptografado (AWS / Azure / GCP)",
  "Relatórios de integridade e redundância",
  "Certificados de conformidade (ISO, SOC)",
];

const RelatoriosConformidade = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Relatórios de Conformidade e Backup</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        {reports.map(report => (
          <div key={report} className="p-3 bg-gray-800/50 rounded-lg flex justify-between items-center">
            <span className="text-sm">{report}</span>
            <Button size="sm" variant="secondary">Gerar</Button>
          </div>
        ))}
        <p className="text-sm text-risk-gold pt-4 border-t border-gray-700">💡 IA Insight: “Relatório LGPD atualizado e enviado ao painel corporativo. Nenhum incidente de vazamento foi detectado no período.”</p>
      </CardContent>
    </Card>
  );
};

export default RelatoriosConformidade;