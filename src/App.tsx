import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Diligence from "./pages/Diligence";
import Contracts from "./pages/Contracts";
import Properties from "./pages/Properties";
import CRM from "./pages/CRM";
import Financial from "./pages/Financial";
import LawOps from "./pages/LawOps";
import Administration from "./pages/Administration";
import Communication from "./pages/Communication";
import AI from "./pages/AI";
import SaaSAdmin from "./pages/SaaSAdmin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/diligence" element={<Diligence />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/law-ops" element={<LawOps />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/saas-admin" element={<SaaSAdmin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;