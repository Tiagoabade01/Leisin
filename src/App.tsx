import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import ProtectedRoute from "./components/ProtectedRoute";

// Lazy load all page components
const NotFound = React.lazy(() => import("./pages/NotFound"));
const LandingPage = React.lazy(() => import("./pages/LandingPage"));
const Login = React.lazy(() => import("./pages/Login"));
const UpdatePassword = React.lazy(() => import("./pages/UpdatePassword"));
const AppHome = React.lazy(() => import("./pages/AppHome"));

// Layouts
const MasterLayout = React.lazy(() => import("./components/master/MasterLayout"));
const Layout = React.lazy(() => import("./components/Layout"));

// Dashboard
const VisaoExecutiva = React.lazy(() => import("./pages/dashboard/VisaoExecutiva"));
const PerformanceJuridica = React.lazy(() => import("./pages/dashboard/PerformanceJuridica"));
const RiscosCompliance = React.lazy(() => import("./pages/dashboard/RiscosCompliance"));
const AtividadesRecentes = React.lazy(() => import("./pages/dashboard/AtividadesRecentes"));
const RelatoriosExportacoes = React.lazy(() => import("./pages/dashboard/RelatoriosExportacoes"));

// Jurídico Operacional
const CasosProcessos = React.lazy(() => import("./pages/juridico/CasosProcessos"));
const ContratosObrigacoes = React.lazy(() => import("./pages/juridico/ContratosObrigacoes"));
const TarefasTimesheets = React.lazy(() => import("./pages/juridico/TarefasTimesheets"));
const DocumentosRelatorios = React.lazy(() => import("./pages/juridico/DocumentosRelatorios"));
const ClientesJuridicos = React.lazy(() => import("./pages/juridico/ClientesJuridicos"));

// Tarefas
const MinhaCaixa = React.lazy(() => import("./pages/tarefas/MinhaCaixa"));
const FluxoDeTarefas = React.lazy(() => import("./pages/tarefas/FluxoDeTarefas"));
const PrazosProcessuais = React.lazy(() => import("./pages/tarefas/PrazosProcessuais"));
const AgendaCalendario = React.lazy(() => import("./pages/tarefas/AgendaCalendario"));
const SLAsAutomacao = React.lazy(() => import("./pages/tarefas/SLAsAutomacao"));

// Compliance
const DueDiligenceCorporativa = React.lazy(() => import("./pages/compliance/DueDiligenceCorporativa"));
const AnalisesRisco = React.lazy(() => import("./pages/compliance/AnalisesRisco"));
const CertidoesDocumentosOficiais = React.lazy(() => import("./pages/compliance/CertidoesDocumentosOficiais"));
const RiskMapper = React.lazy(() => import("./pages/compliance/RiskMapper"));
const ConformidadeAuditoria = React.lazy(() => import("./pages/compliance/ConformidadeAuditoria"));

// Imobiliário
const CadastroImoveis = React.lazy(() => import("./pages/imobiliario/CadastroImoveis"));
const AnaliseJuridicoUrbanistica = React.lazy(() => import("./pages/imobiliario/AnaliseJuridicoUrbanistica"));
const DossiesPropriedade = React.lazy(() => import("./pages/imobiliario/DossiesPropriedade"));
const IntegracoesCartoriais = React.lazy(() => import("./pages/imobiliario/IntegracoesCartoriais"));
const RelatoriosImovel = React.lazy(() => import("./pages/imobiliario/RelatoriosImovel"));

// Financeiro
const ContasPagar = React.lazy(() => import("./pages/financeiro/ContasPagar"));
const ContasReceber = React.lazy(() => import("./pages/financeiro/ContasReceber"));
const FluxoCaixa = React.lazy(() => import("./pages/financeiro/FluxoCaixa"));
const GestaoOrcamento = React.lazy(() => import("./pages/financeiro/GestaoOrcamento"));
const RelatoriosFinanceiros = React.lazy(() => import("./pages/financeiro/RelatoriosFinanceiros"));

// Contábil
const CentroCustos = React.lazy(() => import("./pages/contabil/CentroCustos"));
const LancamentosContabeis = React.lazy(() => import("./pages/contabil/LancamentosContabeis"));
const DREBalancetes = React.lazy(() => import("./pages/contabil/DREBalancetes"));
const RelatoriosFiscais = React.lazy(() => import("./pages/contabil/RelatoriosFiscais"));
const IntegracoesContabeis = React.lazy(() => import("./pages/contabil/IntegracoesContabeis"));

// Comunicação
const InboxUnificada = React.lazy(() => import("./pages/comunicacao/InboxUnificada"));
const ConversasHistoricos = React.lazy(() => import("./pages/comunicacao/ConversasHistoricos"));
const NotificacoesAgendamentos = React.lazy(() => import("./pages/comunicacao/NotificacoesAgendamentos"));
const MensagensOficiais = React.lazy(() => import("./pages/comunicacao/MensagensOficiais"));
const ChatCopilot = React.lazy(() => import("./pages/comunicacao/ChatCopilot"));

// CRM
const PipelineOportunidades = React.lazy(() => import("./pages/crm/PipelineOportunidades"));
const Clientes = React.lazy(() => import("./pages/crm/Clientes"));
const ClienteDetalheApp = React.lazy(() => import("./pages/clientes/ClienteDetalhe"));
const ParceirosComerciais = React.lazy(() => import("./pages/crm/ParceirosComerciais"));
const TarefasFollowups = React.lazy(() => import("./pages/crm/TarefasFollowups"));
const PropostasNegociacoes = React.lazy(() => import("./pages/crm/PropostasNegociacoes"));

// IA
const IACentral = React.lazy(() => import("./pages/ia/IACentral"));
const ClausulaCopilot = React.lazy(() => import("./pages/ia/ClausulaCopilot"));
const MatriculaLens = React.lazy(() => import("./pages/ia/MatriculaLens"));
const PlaybooksOperacoes = React.lazy(() => import("./pages/ia/PlaybooksOperacoes"));
const DossiesAutomaticos = React.lazy(() => import("./pages/ia/DossiesAutomaticos"));

// Filiais
const CadastroDadosGerais = React.lazy(() => import("./pages/filiais/CadastroDadosGerais"));
const EquipesResponsaveis = React.lazy(() => import("./pages/filiais/EquipesResponsaveis"));
const FaturamentoCustos = React.lazy(() => import("./pages/filiais/FaturamentoCustos"));
const IndicadoresPerformance = React.lazy(() => import("./pages/filiais/IndicadoresPerformance"));
const RelatoriosConsolidados = React.lazy(() => import("./pages/filiais/RelatoriosConsolidados"));

// Gestão
const UsuariosPermissoes = React.lazy(() => import("./pages/gestao/UsuariosPermissoes"));
const PersonalizacaoPlataforma = React.lazy(() => import("./pages/gestao/PersonalizacaoPlataforma"));
const ConfiguracoesGerais = React.lazy(() => import("./pages/gestao/ConfiguracoesGerais"));
const AuditoriaSeguranca = React.lazy(() => import("./pages/gestao/AuditoriaSeguranca"));
const LicencasBilling = React.lazy(() => import("./pages/gestao/LicencasBilling"));

// Biblioteca
const LeisDecretos = React.lazy(() => import("./pages/biblioteca/LeisDecretos"));
const JurisprudenciaPareceres = React.lazy(() => import("./pages/biblioteca/JurisprudenciaPareceres"));
const ModelosInternos = React.lazy(() => import("./pages/biblioteca/ModelosInternos"));
const PesquisaIA = React.lazy(() => import("./pages/biblioteca/PesquisaIA"));
const HistoricoRevisoes = React.lazy(() => import("./pages/biblioteca/HistoricoRevisoes"));

// Governança
const PoliticasTermos = React.lazy(() => import("./pages/governanca/PoliticasTermos"));
const ControleDadosSensiveis = React.lazy(() => import("./pages/governanca/ControleDadosSensiveis"));
const AuditoriaAcessos = React.lazy(() => import("./pages/governanca/AuditoriaAcessos"));
const RelatoriosConformidade = React.lazy(() => import("./pages/governanca/RelatoriosConformidade"));
const IncidentResponse = React.lazy(() => import("./pages/governanca/IncidentResponse"));

// Insights
const MarketplaceExtensoes = React.lazy(() => import("./pages/master/MarketplaceExtensoes"));
const PortaisExternos = React.lazy(() => import("./pages/master/PortaisExternos"));

// Área Master (Páginas)
const VisaoGeral = React.lazy(() => import("./pages/master/VisaoGeral"));
const VendasAssinaturas = React.lazy(() => import("./pages/master/VendasAssinaturas"));
const GestaoClientes = React.lazy(() => import("./pages/master/GestaoClientes"));
const ClienteDetalhe = React.lazy(() => import("./pages/master/ClienteDetalhe"));
const GestaoModulos = React.lazy(() => import("./pages/master/GestaoModulos"));
const GestaoTarefas = React.lazy(() => import("./pages/master/GestaoTarefas"));
const FinanceiroCobrancas = React.lazy(() => import("./pages/master/FinanceiroCobrancas"));
const PlanosPrecificacao = React.lazy(() => import("./pages/master/PlanosPrecificacao"));
const RelatoriosMetricas = React.lazy(() => import("./pages/master/RelatoriosMetricas"));
const EquipesUsuarios = React.lazy(() => import("./pages/master/EquipesUsuarios"));
const IntegracoesApi = React.lazy(() => import("./pages/master/IntegracoesApi"));
const GestaoSite = React.lazy(() => import("./pages/master/GestaoSite"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/update-password" element={<UpdatePassword />} />

            {/* Protected App Routes */}
            <Route element={<ProtectedRoute allowedRoles={['master', 'admin']} />}>
              <Route path="/app" element={<Navigate to="/app/inicio" />} />
              <Route path="/app/inicio" element={<AppHome />} />
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
              <Route path="/imobiliario/cadastro-imoveis" element={<CadastroImoveis />} />
              <Route path="/imobiliario/analise-juridico-urbanistica" element={<AnaliseJuridicoUrbanistica />} />
              <Route path="/imobiliario/dossies-propriedade" element={<DossiesPropriedade />} />
              <Route path="/imobiliario/integracoes-cartoriais" element={<IntegracoesCartoriais />} />
              <Route path="/imobiliario/relatorios-imovel" element={<RelatoriosImovel />} />
              <Route path="/financeiro/contas-pagar" element={<ContasPagar />} />
              <Route path="/financeiro/contas-receber" element={<ContasReceber />} />
              <Route path="/financeiro/fluxo-caixa" element={<FluxoCaixa />} />
              <Route path="/financeiro/gestao-orcamento" element={<GestaoOrcamento />} />
              <Route path="/financeiro/relatorios-financeiros" element={<RelatoriosFinanceiros />} />
              <Route path="/contabil/centro-custos" element={<CentroCustos />} />
              <Route path="/contabil/lancamentos-contabeis" element={<LancamentosContabeis />} />
              <Route path="/contabil/dre-balancetes" element={<DREBalancetes />} />
              <Route path="/contabil/relatorios-fiscais" element={<RelatoriosFiscais />} />
              <Route path="/contabil/integracoes-contabeis" element={<IntegracoesContabeis />} />
              <Route path="/comunicacao/inbox-unificada" element={<InboxUnificada />} />
              <Route path="/comunicacao/conversas-historicos" element={<ConversasHistoricos />} />
              <Route path="/comunicacao/notificacoes-agendamentos" element={<NotificacoesAgendamentos />} />
              <Route path="/comunicacao/mensagens-oficiais" element={<MensagensOficiais />} />
              <Route path="/comunicacao/chat-copilot" element={<ChatCopilot />} />
              <Route path="/crm/pipeline-oportunidades" element={<PipelineOportunidades />} />
              <Route path="/crm/clientes" element={<Clientes />} />
              <Route path="/app/clientes/:clienteId" element={<ClienteDetalheApp />} />
              <Route path="/crm/parceiros-comerciais" element={<ParceirosComerciais />} />
              <Route path="/crm/tarefas-followups" element={<TarefasFollowups />} />
              <Route path="/crm/propostas-negociacoes" element={<PropostasNegociacoes />} />
              <Route path="/ia/central" element={<IACentral />} />
              <Route path="/ia/clausula-copilot" element={<ClausulaCopilot />} />
              <Route path="/ia/matricula-lens" element={<MatriculaLens />} />
              <Route path="/ia/playbooks-operacoes" element={<PlaybooksOperacoes />} />
              <Route path="/ia/dossies-automaticos" element={<DossiesAutomaticos />} />
              <Route path="/filiais/cadastro-dados-gerais" element={<CadastroDadosGerais />} />
              <Route path="/filiais/equipes-responsaveis" element={<EquipesResponsaveis />} />
              <Route path="/filiais/faturamento-custos" element={<FaturamentoCustos />} />
              <Route path="/filiais/indicadores-performance" element={<IndicadoresPerformance />} />
              <Route path="/filiais/relatorios-consolidados" element={<RelatoriosConsolidados />} />
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
              <Route path="/insights/marketplace" element={<MarketplaceExtensoes />} />
              <Route path="/insights/portais-externos" element={<PortaisExternos />} />
            </Route>

            {/* Protected Master Routes */}
            <Route element={<ProtectedRoute allowedRoles={['master']} />}>
              <Route path="/painel-master" element={<MasterLayout />}>
                <Route index element={<VisaoGeral />} />
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
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;