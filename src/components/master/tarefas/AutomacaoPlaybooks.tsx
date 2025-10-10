import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap } from "lucide-react";

const AutomacaoPlaybooks = () => {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader>
        <CardTitle className="text-white">Automação & Playbooks</CardTitle>
      </CardHeader>
      <CardContent className="text-center py-16 text-gray-400">
        <Zap className="h-12 w-12 mx-auto mb-4" />
        <p>Esta seção está em construção.</p>
        <p className="text-sm">Aqui você poderá criar rotinas automáticas de tarefas com base em gatilhos.</p>
      </CardContent>
    </Card>
  );
};

export default AutomacaoPlaybooks;