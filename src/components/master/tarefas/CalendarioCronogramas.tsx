import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import React from "react";

const tasks = [
  { date: new Date(2025, 9, 11), title: 'Emitir NFe do cliente X', area: 'Financeiro' },
  { date: new Date(2025, 9, 15), title: 'Revalidar contrato da Terlla', area: 'Jurídico' },
  { date: new Date(2025, 9, 20), title: 'Renovar licença do módulo IA', area: 'Master' },
  { date: new Date(2025, 9, 12), title: 'Follow-up com Advocacia Pontes', area: 'Comercial' },
];

const CalendarioCronogramas = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 9, 15));

  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader>
        <CardTitle className="text-white">Calendário & Cronogramas</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border border-gray-700 bg-gray-900/50"
            defaultMonth={new Date(2025, 9)}
            components={{
              DayContent: ({ date }) => {
                const dayTasks = tasks.filter(t => t.date.toDateString() === date.toDateString());
                return (
                  <div className="relative h-full w-full">
                    {date.getDate()}
                    {dayTasks.length > 0 && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-0.5">
                        {dayTasks.slice(0, 3).map((t, i) => (
                          <div key={i} className="h-1 w-1 rounded-full bg-primary"></div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              },
            }}
          />
        </div>
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-white">
            Tarefas para {date ? date.toLocaleDateString('pt-BR') : 'data selecionada'}
          </h3>
          <div className="space-y-3">
            {tasks.filter(t => t.date.toDateString() === date?.toDateString()).length > 0 ? (
              tasks.filter(t => t.date.toDateString() === date?.toDateString()).map((task, index) => (
                <div key={index} className="p-3 bg-gray-700/50 rounded-md flex justify-between items-center">
                  <p>{task.title}</p>
                  <Badge variant="secondary">{task.area}</Badge>
                </div>
              ))
            ) : (
              <p className="text-gray-400">Nenhuma tarefa para esta data.</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalendarioCronogramas;