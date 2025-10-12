import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Download, Users, Zap, Map, BrainCircuit } from "lucide-react";

const identificacaoData = [
    { field: "Nome da Filial", value: "Leisin SP - Sede Paulista" },
    { field: "Tipo de Unidade", value: "Escritório Jurídico Regional" },
    { field: "Código / ID", value: "F-SP-001" },
    { field: "Status", value: "🟢 Ativa" },
    { field: "Data de Criação", value: "01/05/2022" },
    { field: "Endereço", value: "Av. Paulista, 1324 – Bela Vista – São Paulo/SP" },
];

const responsaveisData = [
    { cargo: "Diretor Regional", responsavel: "Dra. Larissa Campos", permissao: "Master Filial" },
    { cargo: "Coordenador Jurídico", responsavel: "Dr. Felipe Ramos", permissao: "Gestão Jurídica" },
    { cargo: "Controller Financeiro", responsavel: "Ana Souza", permissao: "Financeiro" },
    { cargo: "Assistente Administrativo", responsavel: "Pedro Lima", permissao: "Operacional" },
];

const fiscaisData = [
    { field: "CNPJ", value: "45.882.365/0003-12" },
    { field: "Inscrição Estadual", value: "ISENTO" },
    { field: "Alvará / Licença", value: "2023-PA-01123" },
    { field: "Regime Tributário", value: "Lucro Presumido" },
];

const contatosData = [
    { tipo: "Telefone principal", valor: "(11) 3020-1420" },
    { tipo: "WhatsApp", valor: "(11) 99101-8823" },
    { tipo: "E-mail geral", valor: "atendimento.sp@leisin.com" },
];

const statusData = [
    { indicador: "Processos ativos", valor: "123", status: "🟢 Normal" },
    { indicador: "Contratos em execução", valor: "68", status: "🟢 Estável" },
    { indicador: "Pendências financeiras", valor: "7", status: "🟡 Moderado" },
    { indicador: "Tarefas em atraso", valor: "3", status: "🟢 Controlado" },
];

const CadastroDadosGerais = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Cadastro e Dados Gerais</h1>
          <p className="text-gray-400 max-w-3xl">
            Controle total das unidades do seu escritório: dados cadastrais, estrutura, contatos, responsáveis e integrações — tudo centralizado.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary"><PlusCircle className="h-4 w-4 mr-2" /> Nova Filial</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar Dados</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Users className="h-4 w-4 mr-2" /> Editar Responsáveis</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Zap className="h-4 w-4 mr-2" /> Ativar Integrações</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle>Identificação e Localização</CardTitle></CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Table>
                  <TableBody>
                    {identificacaoData.map(item => (
                      <TableRow key={item.field} className="border-gray-700"><TableCell className="font-medium text-gray-400">{item.field}</TableCell><TableCell>{item.value}</TableCell></TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="h-64 flex items-center justify-center bg-gray-900/50 rounded-lg border border-dashed border-gray-700">
                <div className="text-center text-gray-500"><Map className="mx-auto h-12 w-12 mb-2" /><p>Mapa interativo</p></div>
              </div>
              <p className="text-sm text-risk-gold md:col-span-2">💡 IA Insight: “A filial de Campinas está a 102 km da sede e cobre 6 comarcas adjacentes. Deseja criar um fluxo de repasse automático de processos entre elas?”</p>
            </CardContent>
          </Card>

          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle>Dados Fiscais e Registros Oficiais</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  {fiscaisData.map(item => (
                    <TableRow key={item.field} className="border-gray-700"><TableCell className="font-medium text-gray-400">{item.field}</TableCell><TableCell>{item.value}</TableCell></TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “A licença de funcionamento da filial Brasília expira em 25 dias. Deseja gerar uma tarefa de renovação automática?”</p>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle>Estrutura e Responsáveis</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Cargo</TableHead><TableHead>Responsável</TableHead></TableRow></TableHeader>
                <TableBody>
                  {responsaveisData.map(item => (
                    <TableRow key={item.cargo} className="border-gray-700"><TableCell>{item.cargo}</TableCell><TableCell>{item.responsavel}</TableCell></TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Essa filial possui estrutura enxuta com 3 setores ativos. Sugiro replicar a configuração de acesso da unidade Porto Alegre.”</p>
            </CardContent>
          </Card>

          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle>Contatos e Horários</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  {contatosData.map(item => (
                    <TableRow key={item.tipo} className="border-gray-700"><TableCell className="font-medium text-gray-400">{item.tipo}</TableCell><TableCell>{item.valor}</TableCell></TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “A filial Belo Horizonte não possui horário de suporte cadastrado. Deseja aplicar o mesmo padrão da matriz?”</p>
            </CardContent>
          </Card>

          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle>Status Operacional</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  {statusData.map(item => (
                    <TableRow key={item.indicador} className="border-gray-700"><TableCell className="font-medium text-gray-400">{item.indicador}</TableCell><TableCell>{item.status} {item.valor}</TableCell></TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Filial Curitiba apresenta menor índice de tarefas concluídas (78%). Sugere-se revisão de processos automáticos do Playbook Financeiro.”</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CadastroDadosGerais;