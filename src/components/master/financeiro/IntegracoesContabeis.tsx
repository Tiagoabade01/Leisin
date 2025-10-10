import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const erps = ["Omie", "Conta Azul", "Tiny ERP", "QuickBooks", "Nibo", "Alterdata"];

const IntegracoesContabeis = () => {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Integrações Contábeis e ERPs</CardTitle></CardHeader>
      <CardContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {erps.map(erp => (
          <div key={erp} className="p-4 bg-gray-700/50 rounded-lg text-center space-y-3">
            <p className="font-semibold">{erp}</p>
            <Button variant="secondary" className="w-full">Conectar</Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default IntegracoesContabeis;