import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const JuridicoContratos = () => {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Relatórios Jurídicos e de Contratos</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        {["Relatório de Contratos por Tipo e Status", "Contratos Próximos do Vencimento", "Prazos Críticos (com Alertas)", "Análise de Cláusulas e Riscos Jurídicos"].map(report => (
          <div key={report} className="p-4 bg-gray-700/50 rounded-lg flex justify-between items-center">
            <span>{report}</span>
            <Button size="sm" variant="secondary">Ver Relatório</Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default JuridicoContratos;