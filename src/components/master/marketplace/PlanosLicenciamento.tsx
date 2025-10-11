import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PlanosLicenciamento = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Planos e Pacotes de Extensões</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 bg-gray-800/50 rounded-lg">
          <h3 className="font-semibold text-lg text-white">Pacote Jurídico Premium</h3>
          <p className="text-sm text-gray-400">Inclui: IA Lex + Cartório Integrado PRO + Dossiê Inteligente.</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-bold text-dourado-tributario">R$ 199/mês <span className="text-sm font-normal text-gray-400">(ou R$ 1.890/ano)</span></p>
            <div className="flex gap-2">
              <Button variant="outline" className="bg-gray-800 border-gray-700">Comparar</Button>
              <Button>Assinar</Button>
            </div>
          </div>
        </div>
        <p className="text-sm text-risk-gold text-center">💡 Você economizaria 28% ao migrar para o Pacote Jurídico Premium. Deseja fazer upgrade agora?</p>
      </CardContent>
    </Card>
  );
};

export default PlanosLicenciamento;