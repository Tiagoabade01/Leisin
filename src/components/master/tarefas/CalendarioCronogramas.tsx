import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const CalendarioCronogramas = () => {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader>
        <CardTitle className="text-white">Calendário & Cronogramas</CardTitle>
      </CardHeader>
      <CardContent className="text-center py-16 text-gray-400">
        <Calendar className="h-12 w-12 mx-auto mb-4" />
        <p>Esta seção está em construção.</p>
        <p className="text-sm">Aqui você poderá visualizar tarefas em formato de calendário e timeline.</p>
      </CardContent>
    </Card>
  );
};

export default CalendarioCronogramas;