import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const LicenseManagement = () => (
  <Card className="bg-gray-800 border-gray-700 text-white">
    <CardHeader>
      <CardTitle className="text-white">Gestão de Planos e Licenças</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold">500</p>
          <p className="text-xs text-gray-400">Licenças Total</p>
        </div>
        <div>
          <p className="text-2xl font-bold">480</p>
          <p className="text-xs text-gray-400">Em Uso</p>
        </div>
        <div>
          <p className="text-2xl font-bold">20</p>
          <p className="text-xs text-gray-400">Disponíveis</p>
        </div>
      </div>
      <p className="text-center mt-4 text-sm text-green-400">Faturamento OK</p>
    </CardContent>
  </Card>
);