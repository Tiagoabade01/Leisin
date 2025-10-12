import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  PlusCircle, BrainCircuit, FileText, Upload, Download, Map, Clock,
  AlertTriangle, Signature, Banknote, Building, Home
} from "lucide-react";

// --- MOCK DATA ---
const extractedData = [
    { field: "Matrícula", value: "35.774" },
    { field: "Cartório", value: "2º RI de São Paulo" },
    { field: "Proprietário Atual", value: "Construtora Vale Verde Ltda" },
    { field: "Tipo de Imóvel", value: "Lote Urbano" },
    { field: "Área Total", value: "1.245,80 m²" },
    { field: "Endereço", value: "Rua das Américas, nº 220 – Brooklin/SP" },
    { field: "Data de Registro", value: "15/07/2001" },
    { field: "Última Averbação", value: "Habite-se – 12/09/2023" },
];

const riskData = [
    { type: "Penhora Judicial", level: "Alto", detail: "Averbação nº 14 – Proc. 1023498-22.2022.8.26.0100" },
    { type: "Hipoteca", level: "Médio", detail: "Banco Bradesco S/A – 2007" },
    { type: "Falta de Atualização", level: "Baixo", detail: "Última certidão expedida há 14 meses" },
    { type: "Divergência de Área", level: "Médio", detail: "Área descrita 1.245,80 m² – Cadastral 1.230,12 m²" },
];

const timelineData = [
    { date: "12/09/2023", event: "Averbação de Habite-se", icon: Building, color: "green" },
    { date: "15/03/2022", event: "Registro de Penhora Judicial", icon: AlertTriangle, color: "red" },
    { date: "20/05/2018", event: "Registro de Incorporação", icon: Home, color: "blue" },
    { date: "10/11/2007", event: "Registro de Hipoteca", icon: Banknote, color: "yellow" },
    { date: "15/07/2001", event: "Registro de Compra e Venda", icon: Signature, color: "green" },
];

const getRiskBadge = (level: string) => {
    if (level === "Alto") return <Badge variant="destructive">🔴 Alto</Badge>;
    if (level === "Médio") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟠 Médio</Badge>;
    return <Badge variant="secondary">🟡 Baixo</Badge>;
};

const MatriculaLens = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">MatrículaLens</h1>
          <p className="text-gray-400 max-w-3xl">
            Extraia, entenda e analise automaticamente qualquer matrícula imobiliária — a IA do Leisin transforma texto jurídico em informação inteligente.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary"><PlusCircle className="h-4 w-4 mr-2" /> Enviar Matrícula</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><FileText className="h-4 w-4 mr-2" /> Gerar Relatório</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar Dados</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Clock className="h-4 w-4 mr-2" /> Abrir Linha do Tempo</Button>
        </div>
      </header>

      <Tabs defaultValue="leitura" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-800">
          <TabsTrigger value="leitura">Leitura e Interpretação</TabsTrigger>
          <TabsTrigger value="analise">Análise Jurídica e de Ônus</TabsTrigger>
          <TabsTrigger value="relatorio">Relatório Estruturado</TabsTrigger>
          <TabsTrigger value="visualizacao">Visualização Gráfica</TabsTrigger>
          <TabsTrigger value="integracao">Integração</TabsTrigger>
        </TabsList>

        <TabsContent value="leitura" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-petroleum-blue border-gray-700 text-white">
              <CardHeader><CardTitle>Leitura e Interpretação de Matrículas</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="h-40 flex flex-col items-center justify-center bg-gray-800/50 rounded-lg border-2 border-dashed border-gray-700">
                  <Upload className="h-10 w-10 text-gray-500 mb-2" />
                  <p className="text-sm text-gray-400">Arraste e solte arquivos (PDF, Imagem, XML) ou clique para enviar.</p>
                </div>
                <Button className="w-full"><BrainCircuit className="h-4 w-4 mr-2" /> Interpretar com IA</Button>
                <p className="text-sm text-risk-gold">💡 “Matrícula nº 35.774 do 2º Cartório de Registro de Imóveis de São Paulo detectada. Titular: Construtora Vale Verde Ltda. Última averbação: 12/09/2023 (Habite-se).”</p>
              </CardContent>
            </Card>
            <Card className="bg-petroleum-blue border-gray-700 text-white">
              <CardHeader><CardTitle>Dados Extraídos Automaticamente</CardTitle></CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {extractedData.map(item => (
                      <TableRow key={item.field} className="border-gray-700"><TableCell className="font-medium text-gray-400">{item.field}</TableCell><TableCell>{item.value}</TableCell></TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analise" className="mt-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle>Análise Jurídica e de Ônus</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700"><TableHead>Tipo de Risco</TableHead><TableHead>Nível</TableHead><TableHead>Detalhe</TableHead></TableRow></TableHeader>
                <TableBody>
                  {riskData.map(item => (
                    <TableRow key={item.type} className="border-gray-700">
                      <TableCell>{item.type}</TableCell>
                      <TableCell>{getRiskBadge(item.level)}</TableCell>
                      <TableCell>{item.detail}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="text-sm text-risk-gold mt-4">💡 “Detectada penhora judicial de 2022 ainda ativa. Recomenda-se atualização de certidão e consulta ao distribuidor cível.”</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="relatorio" className="mt-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle>Ficha Técnica do Imóvel</CardTitle></CardHeader>
            <CardContent>
              <p className="text-gray-400">Em construção...</p>
              <p className="text-sm text-risk-gold mt-4">💡 “Averbação nº 12 – incorporação registrada em 2018. Relacionar com contrato social nº 38.553/18 para análise societária vinculada.”</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visualizacao" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-petroleum-blue border-gray-700 text-white">
              <CardHeader><CardTitle>Linha do Tempo Registral</CardTitle></CardHeader>
              <CardContent>
                <div className="relative pl-4">
                  <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-700"></div>
                  {timelineData.map((item, index) => (
                    <div key={index} className="relative mb-6 flex items-center gap-4">
                      <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 h-6 w-6 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700">
                        <item.icon className={`h-4 w-4 text-${item.color}-400`} />
                      </div>
                      <div className="pl-8">
                        <p className="font-semibold text-white">{item.event}</p>
                        <p className="text-xs text-gray-400">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-petroleum-blue border-gray-700 text-white">
              <CardHeader><CardTitle>Mapa Georreferenciado</CardTitle></CardHeader>
              <CardContent className="h-full flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Map className="mx-auto h-16 w-16 mb-2" />
                  <p>Visualização do mapa</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-sm text-risk-gold mt-4 text-center">💡 “A matrícula passou por 5 transmissões nos últimos 12 anos — padrão de rotatividade elevado. Avaliar possível risco de especulação jurídica.”</p>
        </TabsContent>

        <TabsContent value="integracao" className="mt-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle>Integração com Outros Módulos</CardTitle></CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">O MatrículaLens conversa nativamente com:</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Imobiliário Integrado:</strong> preenche automaticamente dados cadastrais e vincula à propriedade.</li>
                <li><strong>Jurídico Operacional:</strong> cria dossiês e tarefas de regularização.</li>
                <li><strong>Compliance / Risco:</strong> atualiza o status de certidões e riscos.</li>
                <li><strong>Financeiro:</strong> insere ônus que impactam em garantias ou ativos.</li>
              </ul>
              <p className="text-sm text-risk-gold mt-4">💡 “O imóvel analisado está associado ao CNPJ da Construtora Vale Verde, que possui 3 processos cíveis ativos. Integrar análise no módulo Compliance.”</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MatriculaLens;