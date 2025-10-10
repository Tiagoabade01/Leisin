import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const UsuariosDesempenho = () => {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Relatórios de Usuários e Desempenho</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        {["Ranking de Produtividade", "Comparativo por Filial / Setor", "Taxa de Adoção de Funcionalidades", "Relatório de Acessos (Logs, IP, Sessões)"].map(report => (
          <div key={report} className="p-4 bg-gray-700/50 rounded-lg flex justify-between items-center">
            <span>{report}</span>
            <Button size="sm" variant="secondary">Ver Relatório</Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default UsuariosDesempenho;