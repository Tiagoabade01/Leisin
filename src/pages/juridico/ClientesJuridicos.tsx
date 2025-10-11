import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { PlusCircle, BarChart2, Brain, Users } from "lucide-react";
import ClientDashboard from "@/components/clientes/ClientDashboard";
import ClientList from "@/components/clientes/ClientList";
import ClientAIInsights from "@/components/clientes/ClientAIInsights";

const ClientesJuridicos = () => {
  return (
    <Layout>
      <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8">
        <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white font-serif">Clientes Jurídicos</h1>
            <p className="text-gray-400 max-w-3xl">
              Gestão completa de clientes, relacionamentos e histórico jurídico — CRM inteligente para o setor jurídico e imobiliário.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button><PlusCircle className="h-4 w-4 mr-2" /> Novo Cliente</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Relatório de Clientes</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Brain className="h-4 w-4 mr-2" /> IA Insights</Button>
            <Button variant="secondary"><Users className="h-4 w-4 mr-2" /> Ver CRM</Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <ClientDashboard />
            <ClientList />
          </div>
          <div className="lg:col-span-1">
            <ClientAIInsights />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ClientesJuridicos;