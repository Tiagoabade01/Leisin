import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Map } from "lucide-react";

const ImoveisMap = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white text-base">Mapa Geográfico</CardTitle></CardHeader>
      <CardContent>
        <div className="h-64 flex items-center justify-center bg-gray-900/50 rounded-lg border border-dashed border-gray-700">
          <div className="text-center text-gray-500">
            <Map className="mx-auto h-12 w-12 mb-2" />
            <p>Visualização do mapa</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImoveisMap;