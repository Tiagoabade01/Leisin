import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, BookOpen, BarChart2, Brain } from "lucide-react";

import SlaPanel from "@/components/slas/SlaPanel";
import AutomationRules from "@/components/slas/AutomationRules";
import ExecutionsLogs from "@/components/slas/ExecutionsLogs";
import IntelligentPlaybooks from "@/components/slas/IntelligentPlaybooks";
import PredictiveAI from "@/components/slas/PredictiveAI";

const SLAsAutomacao = () => {
  return (
    <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">SLAs & Automação</h1>
          <p className="text-gray-400 max-w-3xl">
            Controle total de prazos, alertas e automações inteligentes — o coração da produtividade jurídica.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary"><PlusCircle className="h-4 w-4 mr-2" /> Nova Regra</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BookOpen className="h-4 w-4 mr-2" /> Criar Playbook</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Relatório de Execuções</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Brain className="h-4 w-4 mr-2" /> IA Ajustar SLAs</Button>
        </div>
      </header>

      <Tabs defaultValue="slas" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-800">
          <TabsTrigger value="slas">Painel de SLAs</TabsTrigger>
          <TabsTrigger value="regras">Regras de Automação</TabsTrigger>
          <TabsTrigger value="logs">Execuções & Logs</TabsTrigger>
          <TabsTrigger value="playbooks">Playbooks Inteligentes</TabsTrigger>
          <TabsTrigger value="ia">IA Preditiva</TabsTrigger>
        </TabsList>

        <TabsContent value="slas" className="mt-6">
          <SlaPanel />
        </TabsContent>
        <TabsContent value="regras" className="mt-6">
          <AutomationRules />
        </TabsContent>
        <TabsContent value="logs" className="mt-6">
          <ExecutionsLogs />
        </TabsContent>
        <TabsContent value="playbooks" className="mt-6">
          <IntelligentPlaybooks />
        </TabsContent>
        <TabsContent value="ia" className="mt-6">
          <PredictiveAI />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SLAsAutomacao;