import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const ClientesCrm = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Relatórios de Clientes e CRM</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {["Relatório de Ciclo de Vida do Cliente (LTV)", "Origem dos Clientes (Site, Parceiro, CRM)", "Pipeline Comercial (Funil de Conversão)", "Clientes com Risco de Churn (IA)"].map(report => (
            <div key={report} className="p-4 bg-gray-700/50 rounded-lg flex justify-between items-center">
              <span>{report}</span>
              <Button size="sm" variant="secondary">Ver Relatório</Button>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-blue-400" /><CardTitle className="text-white">Insight da IA</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300">"A IA detectou 12 clientes com risco alto de cancelamento — 80% deles no plano Starter."</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientesCrm;