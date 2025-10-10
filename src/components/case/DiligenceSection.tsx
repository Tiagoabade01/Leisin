import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock } from "lucide-react";

const DiligenceSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Checklist de Due Diligence</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          <li className="flex items-center">
            <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
            <span>Verificação de sócios e administradores (KYC/KYB)</span>
          </li>
          <li className="flex items-center">
            <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
            <span>Análise de certidões negativas</span>
          </li>
          <li className="flex items-center">
            <Clock className="w-5 h-5 mr-3 text-yellow-500" />
            <span>Consulta de protestos e ações judiciais</span>
          </li>
          <li className="flex items-center">
            <Clock className="w-5 h-5 mr-3 text-yellow-500" />
            <span>Análise da matrícula do imóvel</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default DiligenceSection;