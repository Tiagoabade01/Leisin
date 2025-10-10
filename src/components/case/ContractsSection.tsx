import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ContractsSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contratos e Documentos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-medium">Minuta de Contrato de Permuta v3</p>
                <p className="text-sm text-gray-500">Última atualização: 2 dias atrás</p>
              </div>
            </div>
            <Badge variant="secondary">Em Revisão</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-medium">Carta de Intenção (LOI)</p>
                <p className="text-sm text-gray-500">Assinada em: 15/09/2025</p>
              </div>
            </div>
            <Badge>Assinado</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContractsSection;