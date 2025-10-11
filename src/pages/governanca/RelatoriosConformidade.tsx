import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BrainCircuit } from "lucide-react";

const metrics = [
  { metric: "Taxa de conformidade LGPD", value: "97.2%", meta: "≥95%", status: "🟢" },
  { metric: "Políticas atualizadas", value: "14/14", meta: "100%", status: "🟢" },
  { metric: "Incidentes tratados em <72h", value: "100%", meta: "95%", status: "🟢" },
  { metric: "Requisições de titulares atendidas", value: "89", meta: "—", status: "🟡" },
];

const RelatoriosConformidade = () => {
  return (
    <Layout>
      <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white font-serif">Relatórios de Conformidade</h1>
          <p className="text-gray-400 max-w-3xl">
            Área de monitoramento e visualização da aderência do escritório à LGPD, com relatórios automáticos e auditorias IA.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle>Indicadores Chave de Conformidade</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Métrica</TableHead><TableHead>Valor Atual</TableHead><TableHead>Meta</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                <TableBody>
                  {metrics.map(item => (
                    <TableRow key={item.metric} className="border-gray-700">
                      <TableCell>{item.metric}</TableCell>
                      <TableCell>{item.value}</TableCell>
                      <TableCell>{item.meta}</TableCell>
                      <TableCell>{item.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader className="flex flex-row items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-tech-green" />
              <CardTitle>IA Insight</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-risk-gold">“O módulo de CRM Jurídico atingiu conformidade total. O setor Imobiliário Integrado tem 3 pendências de revisão de consentimento.”</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default RelatoriosConformidade;