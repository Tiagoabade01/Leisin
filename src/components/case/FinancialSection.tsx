import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

const FinancialSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Financeiro e Custos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <DollarSign className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-medium">Custos de Cartório</p>
                <p className="text-sm text-gray-500">Emissão de certidões</p>
              </div>
            </div>
            <p className="font-medium">R$ 450,00</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <DollarSign className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-medium">Honorários de Sucesso (Estimado)</p>
                <p className="text-sm text-gray-500">2% sobre VGV</p>
              </div>
            </div>
            <p className="font-medium">R$ 120.000,00</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialSection;