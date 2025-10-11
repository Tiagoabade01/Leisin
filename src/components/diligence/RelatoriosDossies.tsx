import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const RelatoriosDossies = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Relatórios e Dossiês Corporativos</CardTitle></CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-2 text-white">Estrutura do Dossiê</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Resumo executivo (identificação, setor, tipo de análise)</li>
            <li>Visão jurídica: processos, passivos, recursos pendentes</li>
            <li>Situação fiscal: CNDs, dívidas ativas, pendências</li>
            <li>Estrutura societária e beneficiários finais</li>
            <li>Compliance e governança: políticas internas / auditorias</li>
            <li>ESG / Ambiental: licenças, multas, ações civis públicas</li>
            <li>Mídia e reputação online (IA)</li>
          </ul>
        </div>
        <div className="space-y-6">
          <div className="p-4 bg-gray-800/50 rounded-lg">
            <h3 className="font-semibold mb-2 text-white flex items-center gap-2"><BrainCircuit className="h-5 w-5 text-tech-green" /> Conclusão Automática da IA</h3>
            <p className="text-sm text-gray-300">“A empresa é considerada APROVADA com risco moderado (nota 78). Recomenda-se nova verificação em 90 dias.”</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-white">Exportações</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
              <li>PDF completo (com QR Code de autenticidade)</li>
              <li>Resumo executivo em Word/PDF</li>
              <li>Integração API → CRM / Contratos / Investimentos</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatoriosDossies;