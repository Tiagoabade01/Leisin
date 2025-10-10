import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const PropertiesSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Imóveis Vinculados</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-start">
          <MapPin className="w-5 h-5 mr-3 mt-1 text-gray-400" />
          <div>
            <p className="font-medium">Terreno Urbano - Matrícula 12.345</p>
            <p className="text-sm text-gray-500">Rua das Flores, 123, Centro, São Paulo - SP</p>
            <p className="text-sm text-gray-500">Área: 1.200 m²</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertiesSection;