import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Diligence from "./pages/Diligence";
import Contracts from "./pages/Contracts";
import Terrenos from "./pages/Terrenos";
import CRM from "./pages/CRM";
import LawOps from "./pages/LawOps";
import Configuracoes from "./pages/Configuracoes";
import CaseDetail from "./pages/CaseDetail";
import Documents from "./pages/Documents";
import Certidoes from "./pages/Certidoes";
import RiskMapper from "./pages/RiskMapper";
import Dossies from "./pages/Dossies";
import Integrations from "./pages/Integrations";
import Honorarios from "./pages/Honorarios";
import Faturamento from "./pages/Faturamento";
import DRE from "./pages/DRE";
import Inbox from "./pages/Inbox";
import ChatCopilot from "./pages/ChatCopilot";
import IACentral from "./pages/IACentral";
import Playbooks from "./pages/Playbooks";
import DossiesAutomaticos from "./pages/DossiesAutomaticos";
import PainelMaster from "./pages/PainelMaster";
import Marketplace from "./pages/Marketplace";
import PortaisExternos from "./pages/PortaisExternos";
import Licenses from "./pages/Licenses";
import Users from "./pages/Users";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case/:caseId" element={<CaseDetail />} />
          <Route path="/diligence" element={<Diligence />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/terrenos" element={<Terrenos />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/law-ops" element={<LawOps />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/certidoes" element={<Certidoes />} />
          <Route path="/risk-mapper" element={<RiskMapper />} />
          <Route path="/dossies" element={<Dossies />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/honorarios" element={<Honorarios />} />
          <Route path="/faturamento" element={<Faturamento />} />
          <Route path="/dre" element={<DRE />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/chat-copilot" element={<ChatCopilot />} />
          <Route path="/ia-central" element={<IACentral />} />
          <Route path="/playbooks" element={<Playbooks />} />
          <Route path="/dossies-automaticos" element={<DossiesAutomaticos />} />
          <Route path="/painel-master" element={<PainelMaster />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/portais-externos" element={<PortaisExternos />} />
          <Route path="/licenses" element={<Licenses />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;