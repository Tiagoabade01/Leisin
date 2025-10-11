import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { PlusCircle, Clock, BarChart2, Brain } from "lucide-react";
import ProductivityDashboard from "@/components/tasks/ProductivityDashboard";
import TaskList from "@/components/tasks/TaskList";
import Timesheet from "@/components/tasks/Timesheet";
import TaskAIHelper from "@/components/tasks/TaskAIHelper";

const TarefasTimesheets = () => {
  return (
    <Layout>
      <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8">
        <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white font-serif">Tarefas & Timesheets</h1>
            <p className="text-gray-400 max-w-3xl">
              Controle total de produtividade e execução jurídica — tarefas inteligentes, automações e timesheets com IA.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button><PlusCircle className="h-4 w-4 mr-2" /> Nova Tarefa</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Clock className="h-4 w-4 mr-2" /> Registrar Hora</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Relatório de Produtividade</Button>
            <Button variant="secondary"><Brain className="h-4 w-4 mr-2" /> IA Assistente</Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <ProductivityDashboard />
            <TaskList />
            <Timesheet />
          </div>
          <div className="lg:col-span-1">
            <TaskAIHelper />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TarefasTimesheets;