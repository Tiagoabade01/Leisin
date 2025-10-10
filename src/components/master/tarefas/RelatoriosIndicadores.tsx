import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2 } from "lucide-react";

const RelatoriosIndicadores = () => {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader>
        <CardTitle className="text-white">Relatórios & Indicadores</CardTitle>
      </CardHeader>
      <CardContent className="text-center py-16 text-gray-400">
        <BarChart2 className="h-12 w-12 mx-auto mb-4" />
        <p>Esta seção está em construção.</p>
        <p className="text-sm">Em breve, relatórios detalhados sobre produtividade e SLAs.</p>
      </CardContent>
    </Card>
  );
};

export default RelatoriosIndicadores;