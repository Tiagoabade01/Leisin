import Layout from "@/components/Layout";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import PeopleSection from "@/components/case/PeopleSection";
import PropertiesSection from "@/components/case/PropertiesSection";
import ContractsSection from "@/components/case/ContractsSection";
import DiligenceSection from "@/components/case/DiligenceSection";
import FinancialSection from "@/components/case/FinancialSection";
import TasksSection from "@/components/case/TasksSection";

const caseData: { [key: string]: any } = {
  xpto: {
    name: "Aquisição Terreno XPTO",
    type: "Permuta",
    location: "São Paulo",
    status: "Em Análise",
  },
  flores: {
    name: "SPE Condomínio Flores",
    type: "Constituição",
    location: "Rio de Janeiro",
    status: "Aguardando Doc.",
  },
};

const CaseDetail = () => {
  const { caseId } = useParams<{ caseId: string }>();
  const currentCase = caseId ? caseData[caseId] : null;

  if (!currentCase) {
    return (
      <Layout>
        <div className="p-8 text-center">
          <h1 className="text-2xl font-bold">Caso não encontrado</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-8">
        <header className="mb-8">
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-bold">{currentCase.name}</h1>
            <Badge variant={currentCase.status === "Em Análise" ? "secondary" : "outline"}>
              {currentCase.status}
            </Badge>
          </div>
          <p className="text-gray-500">{currentCase.type} | {currentCase.location}</p>
        </header>

        <Tabs defaultValue="diligence" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="diligence">Due Diligence</TabsTrigger>
            <TabsTrigger value="people">Pessoas</TabsTrigger>
            <TabsTrigger value="properties">Imóveis</TabsTrigger>
            <TabsTrigger value="contracts">Contratos</TabsTrigger>
            <TabsTrigger value="tasks">Tarefas</TabsTrigger>
            <TabsTrigger value="financial">Financeiro</TabsTrigger>
          </TabsList>
          <TabsContent value="diligence" className="mt-4"><DiligenceSection /></TabsContent>
          <TabsContent value="people" className="mt-4"><PeopleSection /></TabsContent>
          <TabsContent value="properties" className="mt-4"><PropertiesSection /></TabsContent>
          <TabsContent value="contracts" className="mt-4"><ContractsSection /></TabsContent>
          <TabsContent value="tasks" className="mt-4"><TasksSection /></TabsContent>
          <TabsContent value="financial" className="mt-4"><FinancialSection /></TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default CaseDetail;