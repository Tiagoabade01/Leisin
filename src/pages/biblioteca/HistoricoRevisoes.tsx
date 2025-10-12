import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Download, GitCompare, BrainCircuit } from "lucide-react";

import LinhaDoTempoJuridica from "@/components/biblioteca/historico/LinhaDoTempoJuridica";
import ControleDeVersoes from "@/components/biblioteca/historico/ControleDeVersoes";
import ComparadorDeDocumentos from "@/components/biblioteca/historico/ComparadorDeDocumentos";
import RelatoriosAtualizacao from "@/components/biblioteca/historico/RelatoriosAtualizacao";
import AuditoriaLogsIA from "@/components/biblioteca/historico/AuditoriaLogsIA";

const HistoricoRevisoes = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Histórico e Revisões</h1>
          <p className="text-gray-400 max-w-3xl">
            Controle total da evolução jurídica — acompanhe versões, revisões, e impactos normativos em tempo real.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary"><PlusCircle className="h-4 w-4 mr-2" /> Nova Revisão</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><GitCompare className="h-4 w-4 mr-2" /> Comparar</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar Log</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BrainCircuit className="h-4 w-4 mr-2" /> Gerar Relatório</Button>
        </div>
      </header>

      <Tabs defaultValue="timeline" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-800">
          <TabsTrigger value="timeline">Linha do Tempo</TabsTrigger>
          <TabsTrigger value="versoes">Controle de Versões</TabsTrigger>
          <TabsTrigger value="comparador">Comparador</TabsTrigger>
          <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
          <TabsTrigger value="auditoria">Auditoria e Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="timeline" className="mt-6">
          <LinhaDoTempoJuridica />
        </TabsContent>
        <TabsContent value="versoes" className="mt-6">
          <ControleDeVersoes />
        </TabsContent>
        <TabsContent value="comparador" className="mt-6">
          <ComparadorDeDocumentos />
        </TabsContent>
        <TabsContent value="relatorios" className="mt-6">
          <RelatoriosAtualizacao />
        </TabsContent>
        <TabsContent value="auditoria" className="mt-6">
          <AuditoriaLogsIA />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HistoricoRevisoes;