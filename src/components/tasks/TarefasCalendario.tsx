import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const TarefasCalendario = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white h-full">
      <CardHeader>
        <CardTitle className="text-white">Visualização em Calendário</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center h-96">
        <div className="text-center text-gray-500">
          <Calendar className="mx-auto h-12 w-12 mb-2" />
          <p>A visualização em calendário está em construção.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TarefasCalendario;