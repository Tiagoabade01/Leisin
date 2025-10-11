import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const PrazosNotasEquipe = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <CardTitle className="text-white text-base">Notas da Equipe</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea 
          placeholder="Adicione uma nota sobre os prazos para toda a equipe visualizar..."
          className="bg-gray-800 border-gray-600"
        />
        <Button size="sm" className="mt-2">Salvar Nota</Button>
      </CardContent>
    </Card>
  );
};

export default PrazosNotasEquipe;