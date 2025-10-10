import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2 } from "lucide-react";

export const HealthMap = () => (
  <Card className="bg-gray-800 border-gray-700 text-white">
    <CardHeader>
      <CardTitle>Mapa de Saúde do Sistema</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-40 flex items-center justify-center bg-gray-900/50 rounded-lg">
        <div className="text-center text-gray-400">
          <Share2 className="mx-auto h-8 w-8 mb-2" />
          <p>Visualização do mapa de saúde em tempo real.</p>
        </div>
      </div>
    </CardContent>
  </Card>
);