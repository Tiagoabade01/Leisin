import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart2, Download, ShieldCheck } from "lucide-react";

import PainelSeguranca from "@/components/gestao/auditoria/PainelSeguranca";
import LogsRegistros from "@/components/gestao/auditoria/LogsRegistros";
import MonitoramentoAcessos from "@/components/gestao/auditoria/MonitoramentoAcessos";
import IaSegurancaAlertas from "@/components/gestao/auditoria/IaSegurancaAlertas";
import RelatoriosConformidade from "@/components/gestao/auditoria/RelatoriosConformidade";

const AuditoriaSeguranca = () => {
  return (
    <Layout>
      <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
        <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white font-serif">Auditoria e Segurança</h1>
            <p className="text-gray-400 max-w-3xl">
              Segurança, rastreabilidade e conformidade — cada ação monitorada, cada acesso controlado, cada dado protegido.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary"><BarChart2 className="h-4 w-4 mr-2" /> Gerar Relatório</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><ShieldCheck className="h-4 w-4 mr-2" /> Ver Logs</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700">Encerrar Sessões</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar Backup</Button>
          </div>
        </header>

        <Tabs defaultValue="painel" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-800">
            <TabsTrigger value="painel">Painel em Tempo Real</TabsTrigger>
            <TabsTrigger value="logs">Logs e Registros</TabsTrigger>
            <TabsTrigger value="acessos">Monitoramento de Acessos</TabsTrigger>
            <TabsTrigger value="ia">IA de Segurança</TabsTrigger>
            <TabsTrigger value="relatorios">Relatórios e Conformidade</TabsTrigger>
          </TabsList>

          <TabsContent value="painel" className="mt-6">
            <PainelSeguranca />
          </TabsContent>
          <TabsContent value="logs" className="mt-6">
            <LogsRegistros />
          </TabsContent>
          <TabsContent value="acessos" className="mt-6">
            <MonitoramentoAcessos />
          </TabsContent>
          <TabsContent value="ia" className="mt-6">
            <IaSegurancaAlertas />
          </TabsContent>
          <TabsContent value="relatorios" className="mt-6">
            <RelatoriosConformidade />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AuditoriaSeguranca;