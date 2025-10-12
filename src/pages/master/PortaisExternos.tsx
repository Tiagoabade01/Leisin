import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Download, BarChart2, ShieldCheck } from "lucide-react";

import PainelAcessos from "@/components/master/portais/PainelAcessos";
import PortalCliente from "@/components/master/portais/PortalCliente";
import PortalParceiros from "@/components/master/portais/PortalParceiros";
import PortalInstitucional from "@/components/master/portais/PortalInstitucional";
import RelatoriosMetricasUso from "@/components/master/portais/RelatoriosMetricasUso";

const PortaisExternos = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Portais Externos</h1>
          <p className="text-gray-400 max-w-3xl">
            Crie, gerencie e monitore portais personalizados para clientes, parceiros e correspondentes jurídicos — com segurança, identidade e automação.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary"><PlusCircle className="h-4 w-4 mr-2" /> Novo Portal</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar Dados</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Gerar Relatório</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><ShieldCheck className="h-4 w-4 mr-2" /> Configurar Segurança</Button>
        </div>
      </header>

      <Tabs defaultValue="painel" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-800">
          <TabsTrigger value="painel">Painel de Acessos</TabsTrigger>
          <TabsTrigger value="clientes">Clientes</TabsTrigger>
          <TabsTrigger value="parceiros">Parceiros</TabsTrigger>
          <TabsTrigger value="publico">Público</TabsTrigger>
          <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
        </TabsList>

        <TabsContent value="painel" className="mt-6">
          <PainelAcessos />
        </TabsContent>
        <TabsContent value="clientes" className="mt-6">
          <PortalCliente />
        </TabsContent>
        <TabsContent value="parceiros" className="mt-6">
          <PortalParceiros />
        </TabsContent>
        <TabsContent value="publico" className="mt-6">
          <PortalInstitucional />
        </TabsContent>
        <TabsContent value="relatorios" className="mt-6">
          <RelatoriosMetricasUso />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PortaisExternos;