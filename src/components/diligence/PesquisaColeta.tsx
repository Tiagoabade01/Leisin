import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Folder, GitBranch, Bot, FilePlus, FileText } from "lucide-react";

const PesquisaColeta = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Fontes Integradas</CardTitle></CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Receita Federal, Sintegra, Simples Nacional, CNDs</li>
            <li>TRT, TJSP, STJ, TST, TCU, CVM, BACEN, COAF</li>
            <li>Portais ESG, Rais, CAGED, Transparência Brasil</li>
            <li>Diários Oficiais, ARISP</li>
            <li>Mídia e web crawl (reputação, notícias, listas PEP e sanções)</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Etapas Automatizadas</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3"><Search className="h-5 w-5 text-tech-green" /><p>Identificação e validação de CNPJ/CPF.</p></div>
          <div className="flex items-center gap-3"><Folder className="h-5 w-5 text-tech-green" /><p>Coleta de dados fiscais, societários e judiciais.</p></div>
          <div className="flex items-center gap-3"><GitBranch className="h-5 w-5 text-tech-green" /><p>Cruzamento de bases (sócios ↔ processos).</p></div>
          <div className="flex items-center gap-3"><Bot className="h-5 w-5 text-tech-green" /><p>Classificação de risco preliminar (IA).</p></div>
          <div className="flex items-center gap-3"><FilePlus className="h-5 w-5 text-tech-green" /><p>Enriquecimento de dados (razão social, capital, etc.).</p></div>
          <div className="flex items-center gap-3"><FileText className="h-5 w-5 text-tech-green" /><p>Geração do dossiê automático.</p></div>
          <p className="text-xs text-gray-400 pt-4 border-t border-gray-700">Todos os passos são logados para rastreabilidade e auditoria.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PesquisaColeta;