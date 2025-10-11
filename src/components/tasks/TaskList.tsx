import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, LayoutGrid, List } from "lucide-react";

const tasks = [
  { id: 1, title: "Revisar cláusulas do CT-219", responsible: "Ana Faria", type: "Contrato", deadline: "12/10/25", status: "Em andamento", estimatedTime: "2h" },
  { id: 2, title: "Petição inicial – proc. 1012456", responsible: "João Lima", type: "Processo", deadline: "13/10/25", status: "Concluída", estimatedTime: "3h" },
  { id: 3, title: "Relatório mensal jurídico", responsible: "Maria Souza", type: "Interno", deadline: "15/10/25", status: "Em revisão", estimatedTime: "4h" },
  { id: 4, title: "Coletar documentos cliente X", responsible: "Ana Faria", type: "Diligência", deadline: "11/10/25", status: "A Fazer", estimatedTime: "1h" },
];

const columns = ["A Fazer", "Em andamento", "Em revisão", "Concluída"];

const TaskCard = ({ task }) => (
  <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700 mb-3">
    <p className="font-semibold text-sm">{task.title}</p>
    <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
      <span>{task.type}</span>
      <span className="font-mono">{task.deadline}</span>
    </div>
    <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-700">
      <span className="text-xs">{task.responsible}</span>
      <span className="text-xs font-mono">{task.estimatedTime}</span>
    </div>
  </div>
);

const TaskList = () => {
  const [view, setView] = useState('kanban');

  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-white">Lista de Tarefas</CardTitle>
          <div className="flex items-center gap-1 p-1 bg-gray-900/50 rounded-lg">
            <Button variant={view === 'kanban' ? 'secondary' : 'ghost'} size="sm" onClick={() => setView('kanban')}><LayoutGrid className="h-4 w-4 mr-2" /> Kanban</Button>
            <Button variant={view === 'list' ? 'secondary' : 'ghost'} size="sm" onClick={() => setView('list')}><List className="h-4 w-4 mr-2" /> Lista</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {view === 'kanban' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {columns.map(col => (
              <div key={col} className="p-3 bg-gray-900/50 rounded-lg">
                <h3 className="font-semibold mb-3 text-yellow-400">{col}</h3>
                <div>
                  {tasks.filter(t => t.status === col).map(task => <TaskCard key={task.id} task={task} />)}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Table>
            <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Título</TableHead><TableHead>Responsável</TableHead><TableHead>Tipo</TableHead><TableHead>Prazo</TableHead><TableHead>Status</TableHead><TableHead>Tempo Estimado</TableHead><TableHead className="text-right">Ações</TableHead></TableRow></TableHeader>
            <TableBody>
              {tasks.map(task => (
                <TableRow key={task.id} className="border-gray-700">
                  <TableCell>{task.title}</TableCell>
                  <TableCell>{task.responsible}</TableCell>
                  <TableCell>{task.type}</TableCell>
                  <TableCell>{task.deadline}</TableCell>
                  <TableCell>{task.status}</TableCell>
                  <TableCell>{task.estimatedTime}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
                        <DropdownMenuItem>Ver Detalhes</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
};

export default TaskList;