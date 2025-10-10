import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const TasksSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tarefas e Prazos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Checkbox id="task1" defaultChecked />
            <label htmlFor="task1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Coletar documentos dos vendedores
            </label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="task2" />
            <label htmlFor="task2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Elaborar minuta do contrato de permuta
            </label>
            <span className="text-xs text-red-500">(Vence em 2 dias)</span>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="task3" />
            <label htmlFor="task3" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Agendar reunião de alinhamento
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TasksSection;