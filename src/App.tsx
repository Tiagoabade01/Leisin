import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseDetail from "./pages/CaseDetail";
import LandingPage from "./pages/LandingPage"; // Importando a nova página

// Layouts
import MasterLayout from "./components/master/MasterLayout";

// Dashboard
import VisaoExecutiva from "./pages/dashboard/VisaoExecutiva";
import PerformanceJuridica from "./pages/dashboard/PerformanceJuridica";
import RiscosCompliance from "./pages/dashboard/RiscosCompliance";
import AtividadesRecentes from "./pages/dashboard/AtividadesRecentes";
import RelatoriosExportacoes from "./pages/dashboard/RelatoriosExportacoes";

// Jurídico Operacional
import CasosProcessos from "./pages/juridico/CasosProcessos";
import ContratosObrigacoes from "./pages/juridico/ContratosObrigacoes";
import TarefasTimesheets from "./pages/juridico/TarefasTimesheets";
import DocumentosRelatorios from "./pages/juridico/DocumentosRelatorios";
import ClientesJuridicos from "./pages/juridico/ClientesJuridicos";

// Tarefas
import MinhaCaixa from "./pages/tarefas/MinhaCaixa";
import FluxoDeTarefas from "./pages/tarefas/FluxoDeTarefas";
import PrazosProcessuais from "./pages/tarefas/PrazosProcessuais";
import AgendaCalendario from "./pages/tarefas/AgendaCalendario";
import SLAsAutomacao from "./pages/tarefas/SLAsAutomacao";

// ... (outros imports) ...
import DueDiligenceCorporativa from "./pages/compliance/DueDiligenceCorporativa";
import AnalisesRisco from "./pages/compliance/AnalisesRisco";
import CertidoesDocumentosOficiais from "./pages/compliance/CertidoesDocumentosOficiais";
import RiskMapper from "./pages/compliance/RiskMapper";
import ConformidadeAuditoria from "./pages/compliance/ConformidadeAuditoria";
import CadastroImoveis from "./pages/imobiliario/CadastroImoveis";
import AnaliseJuridicoUrbanistica from "./pages/imobiliario/AnaliseJuridicoUrbanistica";
import DossiesPropriedade from "./pages/imobiliario/DossiesPropriedade";
import IntegracoesCartoriais from "./pages/imobiliario/IntegracoesCartoriais";
import RelatoriosImovel from "./pages/imobiliario/RelatoriosImovel";
import ContasPagar from "./pages/financeiro/ContasPagar";
import ContasReceber from "./pages/financeiro/ContasReceber";
import FluxoCaixa from "./pages/financeiro/FluxoCaixa";
import GestaoOrcamento from "./pages/financeiro/GestaoOrcamento";
import RelatoriosFinanceiros from "./pages/financeiro/RelatoriosFinanceiros";
import CentroCustos from "./pages/contabil/CentroCustos";
import LancamentosContabeis from "./pages/contabil/LancamentosContabeis";
import DREBalancetes from "./pages/contabil/DREBalancetes";
import RelatoriosFiscais from "./pages/contabil/RelatoriosFiscais";
import IntegracoesContabeis from "./pages/contabil/IntegracoesContabeis";
import InboxUnificada from "./pages/comunicacao/InboxUnificada";
import ConversasHistoricos from "./pages/comunicacao/ConversasHistoricos";
import NotificacoesAgendamentos from "./pages/comunicacao/NotificacoesAgendamentos";
import MensagensOficiais from "./pages/comunicacao/MensagensOficiais";
import ChatCopilot from "./pages/comunicacao/ChatCopilot";
import PipelineOportunidades from "./pages/crm/PipelineOportunidades";
import Clientes from "./pages/crm/Clientes";
import ClienteDetalheApp from "./pages/clientes/ClienteDetalhe"; // Novo import
import ParceirosComerciais from "./pages/crm/ParceirosComerciais";
import TarefasFollowups from "./pages/crm/TarefasFollowups";
import PropostasNegociacoes from "./pages/crm/PropostasNegociacoes";
import IACentral from "./pages/ia/IACentral";
import ClausulaCopilot from "./pages/ia/ClausulaCopilot";
import MatriculaLens from "./pages/ia/MatriculaLens";
import PlaybooksOperacoes from "./pages/ia/PlaybooksOperacoes";
import DossiesAutomaticos from "./pages/ia/DossiesAutomaticos";
import CadastroDadosGerais from "./pages/filiais/CadastroDadosGerais";
import EquipesResponsaveis from "./pages/filiais/EquipesResponsaveis";
import FaturamentoCustos from "./pages/filiais/FaturamentoCustos";
import IndicadoresPerformance from "./pages/filiais/IndicadoresPerformance";
import RelatoriosConsolidados from "./pages/filiais/RelatoriosConsolidados";
import MarketplaceExtensoes from "./pages/master/MarketplaceExtensoes";
import PortaisExternos from "./pages/master/PortaisExternos";
import PlanosLicencas from "./pages/master/PlanosLicencas";
import ConfiguracoesAvancadas from "./pages/master/ConfiguracoesAvancadas";
import UsuariosPermissoes from "./pages/gestao/UsuariosPermissoes";
import PersonalizacaoPlataforma from "./pages/gestao/PersonalizacaoPlataforma";
import ConfiguracoesGerais from "./pages/gestao/ConfiguracoesGerais";
import AuditoriaSeguranca from "./pages/gestao/AuditoriaSeguranca";
import LicencasBilling from "./pages/gestao/LicencasBilling";
import LeisDecretos from "./pages/biblioteca/LeisDecretos";
import JurisprudenciaPareceres from "./pages/biblioteca/JurisprudenciaPareceres";
import ModelosInternos from "./pages/biblioteca/ModelosInternos";
import PesquisaIA from "./pages/biblioteca/PesquisaIA";
import HistoricoRevisoes from "./pages/biblioteca/HistoricoRevisoes";
import PoliticasTermos from "./pages/governanca/PoliticasTermos";
import ControleDadosSensiveis from "./pages/governanca/ControleDadosSensiveis";
import AuditoriaAcessos from "./pages/governanca/AuditoriaAcessos";
import RelatoriosConformidade from "./pages/governanca/RelatoriosConformidade";
import IncidentResponse from "./pages/governanca/IncidentResponse";

// Área Master (Páginas)
import VisaoGeral from "./pages/master/VisaoGeral";
import VendasAssinaturas from "./pages/master/VendasAssinaturas";
import GestaoClientes from "./pages/master/GestaoClientes";
import ClienteDetalhe from "./pages/master/ClienteDetalhe";
import GestaoModulos from "./pages/master/GestaoModulos";
import GestaoTarefas from "./pages/master/GestaoTarefas";
import FinanceiroCobrancas from "./pages/master/FinanceiroCobrancas";
import PlanosPrecificacao from "./pages/master/PlanosPrecificacao";
import RelatoriosMetricas from "./pages/master/RelatoriosMetricas";
import EquipesUsuarios from "./pages/master/EquipesUsuarios";
import IntegracoesApi from "./pages/master/IntegracoesApi";
import GestaoSite from "./pages/master/GestaoSite";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Rota do Site Público */}
          <Route path="/" element={<LandingPage />} />

          {/* Rotas da Aplicação Principal (agora em /app) */}
          <Route path="/app" element={<Index />} />
          <Route path="/case/:caseId" element={<CaseDetail />} />
          
          {/* ... (outras rotas principais) ... */}
          <Route path="/dashboard/visao-executiva" element={<VisaoExecutiva />} />
          <Route path="/dashboard/performance-juridica" element={<PerformanceJuridica />} />
          <Route path="/dashboard/riscos-compliance" element={<RiscosCompliance />} />
          <Route path="/dashboard/atividades-recentes" element={<AtividadesRecentes />} />
          <Route path="/dashboard/relatorios-exportacoes" element={<RelatoriosExportacoes />} />
          <Route path="/juridico/casos-processos" element={<CasosProcessos />} />
          <Route path="/juridico/contratos-obrigacoes" element={<ContratosObrigacoes />} />
          <Route path="/juridico/tarefas-timesheets" element={<TarefasTimesheets />} />
          <Route path="/juridico/documentos-relatorios" element={<DocumentosRelatorios />} />
          <Route path="/juridico/clientes-juridicos" element={<ClientesJuridicos />} />
          <Route path="/tarefas/minha-caixa" element={<MinhaCaixa />} />
          <Route path="/tarefas/fluxo-de-tarefas" element={<FluxoDeTarefas />} />
          <Route path="/tarefas/prazos-processuais" element={<PrazosProcessuais />} />
          <Route path="/tarefas/agenda-calendario" element={<AgendaCalendario />} />
          <Route path="/tarefas/slas-automacao" element={<SLAsAutomacao />} />

          <Route path="/compliance/due-diligence-corporativa" element={<DueDiligenceCorporativa />} />
          <Route path="/compliance/analises-risco" element={<AnalisesRisco />} />
          <Route path="/compliance/certidoes-documentos-oficiais" element={<CertidoesDocumentosOficiais />} />
          <Route path="/compliance/risk-mapper" element={<RiskMapper />} />
          <Route path="/compliance/conformidade-auditoria" element={<ConformidadeAuditoria />} />

          {/* Imobiliário Integrado */}
          <Route path="/imobiliario/cadastro-imoveis" element={<CadastroImoveis />} />
          <Route path="/imobiliario/analise-juridico-urbanistica" element={<AnaliseJuridicoUrbanistica />} />
          <Route path="/imobiliario/dossies-propriedade" element={<DossiesPropriedade />} />
          <Route path="/imobiliario/integracoes-cartoriais" element={<IntegracoesCartoriais />} />
          <Route path="/imobiliario/relatorios-imovel" element={<RelatoriosImovel />} />

          {/* Financeiro */}
          <Route path="/financeiro/contas-pagar" element={<ContasPagar />} />
          <Route path="/financeiro/contas-receber" element={<ContasReceber />} />
          <Route path="/financeiro/fluxo-caixa" element={<FluxoCaixa />} />
          <Route path="/financeiro/gestao-orcamento" element={<GestaoOrcamento />} />
          <Route path="/financeiro/relatorios-financeiros" element={<RelatoriosFinanceiros />} />

          {/* Contábil */}
          <Route path="/contabil/centro-custos" element={<CentroCustos />} />
          <Route path="/contabil/lancamentos-contabeis" element={<LancamentosContabeis />} />
          <Route path="/contabil/dre-balancetes" element={<DREBalancetes />} />
          <Route path="/contabil/relatorios-fiscais" element={<RelatoriosFiscais />} />
          <Route path="/contabil/integracoes-contabeis" element={<IntegracoesContabeis />} />

          {/* Comunicação */}
          <Route path="/comunicacao/inbox-unificada" element={<InboxUnificada />} />
          <Route path="/comunicacao/conversas-historicos" element={<ConversasHistoricos />} />
          <Route path="/comunicacao/notificacoes-agendamentos" element={<NotificacoesAgendamentos />} />
          <Route path="/comunicacao/mensagens-oficiais" element={<MensagensOficiais />} />
          <Route path="/comunicacao/chat-copilot" element={<ChatCopilot />} />

          {/* CRM Jurídico */}
          <Route path="/crm/pipeline-oportunidades" element={<PipelineOportunidades />} />
          <Route path="/crm/clientes" element={<Clientes />} />
          <Route path="/app/clientes/:clienteId" element={<ClienteDetalheApp />} />
          <Route path="/crm/parceiros-comerciais" element={<ParceirosComerciais />} />
          <Route path="/crm/tarefas-followups" element={<TarefasFollowups />} />
          <Route path="/crm/propostas-negociacoes" element={<PropostasNegociacoes />} />

          {/* IA e Automação */}
          <Route path="/ia/central" element={<IACentral />} />
          <Route path="/ia/clausula-copilot" element={<ClausulaCopilot />} />
          <Route path="/ia/matricula-lens" element={<MatriculaLens />} />
          <Route path="/ia/playbooks-operacoes" element={<PlaybooksOperacoes />} />
          <Route path="/ia/dossies-automaticos" element={<DossiesAutomaticos />} />

          {/* Filiais */}
          <Route path="/filiais/cadastro-dados-gerais" element={<CadastroDadosGerais />} />
          <Route path="/filiais/equipes-responsaveis" element={<EquipesResponsaveis />} />
          <Route path="/filiais/faturamento-custos" element={<FaturamentoCustos />} />
          <Route path="/filiais/indicadores-performance" element={<IndicadoresPerformance />} />
          <Route path="/filiais/relatorios-consolidados" element={<RelatoriosConsolidados />} />

          {/* Rotas da Área Master (com layout próprio) */}
          <Route path="/master" element={<MasterLayout />}>
            <Route path="visao-geral" element={<VisaoGeral />} />
            <Route path="vendas-assinaturas" element={<VendasAssinaturas />} />
            <Route path="gestao-clientes" element={<GestaoClientes />} />
            <Route path="clientes/:clienteId" element={<ClienteDetalhe />} />
            <Route path="gestao-modulos" element={<GestaoModulos />} />
            <Route path="gestao-tarefas" element={<GestaoTarefas />} />
            <Route path="financeiro-cobrancas" element={<FinanceiroCobrancas />} />
            <Route path="planos-precificacao" element={<PlanosPrecificacao />} />
            <Route path="relatorios-metricas" element={<RelatoriosMetricas />} />
            <Route path="gestao-site" element={<GestaoSite />} />
            <Route path="equipes-usuarios" element={<EquipesUsuarios />} />
            <Route path="integracoes-api" element={<IntegracoesApi />} />
          </Route>

          {/* ... (resto das rotas) ... */}
          <Route path="/master/marketplace" element={<MarketplaceExtensoes />} />
          <Route path="/master/portais-externos" element={<PortaisExternos />} />
          <Route path="/master/planos-licencas" element={<PlanosLicencas />} />
          <Route path="/master/configuracoes-avancadas" element={<ConfiguracoesAvancadas />} />
          <Route path="/gestao/usuarios-permissoes" element={<UsuariosPermissoes />} />
          <Route path="/gestao/personalizacao-plataforma" element={<PersonalizacaoPlataforma />} />
          <Route path="/gestao/configuracoes-gerais" element={<ConfiguracoesGerais />} />
          <Route path="/gestao/auditoria-seguranca" element={<AuditoriaSeguranca />} />
          <Route path="/gestao/licencas-billing" element={<LicencasBilling />} />
          <Route path="/biblioteca/leis-decretos" element={<LeisDecretos />} />
          <Route path="/biblioteca/jurisprudencia-pareceres" element={<JurisprudenciaPareceres />} />
          <Route path="/biblioteca/modelos-internos" element={<ModelosInternos />} />
          <Route path="/biblioteca/pesquisa-ia" element={<PesquisaIA />} />
          <Route path="/biblioteca/historico-revisoes" element={<HistoricoRevisoes />} />
          <Route path="/governanca/politicas-termos" element={<PoliticasTermos />} />
          <Route path="/governanca/controle-dados-sensiveis" element={<ControleDadosSensiveis />} />
          <Route path="/governanca/auditoria-acessos" element={<AuditoriaAcessos />} />
          <Route path="/governanca/relatorios-conformidade" element={<RelatoriosConformidade />} />
          <Route path="/governanca/incident-response" element={<IncidentResponse />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;