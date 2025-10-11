import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const templates = ["Advogado", "Financeiro", "Gestor", "Paralegal", "Estagiário"];

const CadastroPerfis = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Cadastro e Perfis</CardTitle></CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2 text-white">Campos Principais</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Nome completo</li>
            <li>E-mail corporativo</li>
            <li>CPF / CNPJ (para PJ)</li>
            <li>Cargo / Função</li>
            <li>Filial</li>
            <li>Módulos atribuídos</li>
            <li>Data de admissão / contrato</li>
          </ul>
        </div>
        <div className="p-4 bg-gray-800/50 rounded-lg">
          <h3 className="font-semibold mb-2 text-white">Criar Perfil com Base em Modelo</h3>
          <div className="flex flex-wrap gap-2">
            {templates.map(template => (
              <Button key={template} variant="secondary" size="sm">{template}</Button>
            ))}
          </div>
          <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “O novo colaborador pertence à área contábil. Deseja aplicar automaticamente o perfil Contábil Regional com permissões padrão?”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CadastroPerfis;