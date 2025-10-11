import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const reports = [
  "Mapa analítico (PDF)",
  "Heat Report",
  "Rede de Risco (Graph Report)",
  "Comparativo Temporal",
];

const GeoReports = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Relatórios Geográficos e Exportações</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        {reports.map(report => (
          <div key={report} className="p-3 bg-gray-800/50 rounded-lg flex justify-between items-center">
            <span className="text-sm">{report}</span>
            <Button size="sm" variant="secondary">Gerar</Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default GeoReports;