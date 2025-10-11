import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, FileText, BarChart2, RefreshCw } from "lucide-react";

import PainelLicencas from "@/components/gestao/billing/PainelLicencas";
import PlanosModulos from "@/components/gestao/billing/PlanosModulos";
import PagamentosHistorico from "@/components/gestao/billing/PagamentosHistorico";
import LimitesUso from "@/components/gestao/billing/LimitesUso";
import RelatoriosCobranca from "@/components/gestao/billing/RelatoriosCobranca";

const LicencasBilling = () => {
  return (
    <Layout>
      <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
        <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white font-serif">Licenças e Billing</h1>
            <p className="text-gray-400 max-w-3xl">
              Controle total sobre licenças, assinaturas e faturamento da sua operação — transparente, automatizado e integrado.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary"><PlusCircle className="h-4 w-4 mr-2" /> Nova Licença</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><FileText className="h-4 w-4 mr-2" /> Gerar Fatura</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Exportar Relatórios</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><RefreshCw className="h-4 w-4 mr-2" /> Sincronizar Gateways</Button>
          </div>
        </header>

        <Tabs defaultValue="licencas" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-800">
            <TabsTrigger value="licencas">Licenças</TabsTrigger>
            <TabsTrigger value="planos">Planos</TabsTrigger>
            <TabsTrigger value="pagamentos">Pagamentos</TabsTrigger>
            <TabsTrigger value="limites">Limites</TabsTrigger>
            <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
          </TabsList>

          <TabsContent value="licencas" className="mt-6">
            <PainelLicencas />
          </TabsContent>
          <TabsContent value="planos" className="mt-6">
            <PlanosModulos />
          </TabsContent>
          <TabsContent value="pagamentos" className="mt-6">
            <PagamentosHistorico />
          </TabsContent>
          <TabsContent value="limites" className="mt-6">
            <LimitesUso />
          </TabsContent>
          <TabsContent value="relatorios" className="mt-6">
            <RelatoriosCobranca />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default LicencasBilling;