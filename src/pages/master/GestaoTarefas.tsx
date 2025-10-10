import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircle, Zap, BarChart2, Settings } from "lucide-react";
import VisaoGeralTarefas from "@/components/master/tarefas/VisaoGeralTarefas";
import TarefasAtivas from "@/components/master/tarefas/TarefasAtivas";
import TarefasAutomaticas from "@/components/master/tarefas/TarefasAutomaticas";
import CalendarioCronogramas from "@/components/master/tarefas/CalendarioCronogramas";
import RelatoriosIndicadores from "@/components/master/tarefas/RelatoriosIndicadores";
import AutomacaoPlaybooks from "@/components/master/tarefas/AutomacaoPlaybooks";

const GestaoTarefas = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Gestão de Tarefas</h1>
          <p className="text-gray-300 max-w-3xl">O centro operacional do ecossistema — onde tudo o que acontece dentro da T3 é rastreável, priorizado e automatizado.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button><PlusCircle className="h-4 w-4 mr-2" /> Nova Tarefa</Button>
          <Button variant="outline" className="bg-gray-800 border-gray-700"><Zap className="h-4 w-4 mr-2" /> Criar Playbook</Button>
          <Button variant="outline" className="bg-gray-800 border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Relatórios</Button>
          <Button variant="ghost" size="icon"><Settings className="h-4 w-4" /></Button>
        </div>
      </div>
      
      <Tabs defaultValue="visao_geral" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-gray-800">
          <TabsTrigger value="visao_geral">Visão Geral</TabsTrigger>
          <TabsTrigger value="ativas">Tarefas Ativas</TabsTrigger>
          <TabsTrigger value="automaticas">Tarefas Automáticas</TabsTrigger>
          <TabsTrigger value="calendario">Calendário</TabsTrigger>
          <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
          <TabsTrigger value="automacao">Automação</TabsTrigger>
        </TabsList>

        <TabsContent value="visao_geral" className="mt-6">
          <VisaoGeralTarefas />
        </TabsContent>
        <TabsContent value="ativas" className="mt-6">
          <TarefasAtivas />
        </TabsContent>
        <TabsContent value="automaticas" className="mt-6">
          <TarefasAutomaticas />
        </TabsContent>
        <TabsContent value="calendario" className="mt-6">
          <CalendarioCronogramas />
        </TabsContent>
        <TabsContent value="relatorios" className="mt-6">
          <RelatoriosIndicadores />
        </TabsContent>
        <TabsContent value="automacao" className="mt-6">
          <AutomacaoPlaybooks />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GestaoTarefas;