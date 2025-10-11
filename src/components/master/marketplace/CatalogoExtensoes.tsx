import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Star } from "lucide-react";

const extensions = [
  { name: "BigDataCorp Connector", desc: "Integração automática com dados empresariais, cadastrais e patrimoniais.", price: "R$ 49,90 / mês", rating: 4.9, reviews: 1120 },
  { name: "Cartório Integrado PRO", desc: "Emissão automática de certidões e matrículas.", price: "R$ 79,90 / mês", rating: 4.8, reviews: 980 },
  { name: "IA Lex Drafting", desc: "Geração de cláusulas e minutas com IA avançada.", price: "R$ 39,90 / mês", rating: 4.9, reviews: 1500 },
];

const CatalogoExtensoes = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardContent className="p-4 flex flex-wrap items-center gap-2">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Buscar extensões..." className="bg-gray-800 border-gray-700 pl-9" />
          </div>
          <Button variant="secondary">Filtrar</Button>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {extensions.map(ext => (
          <Card key={ext.name} className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle>{ext.name}</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400 mb-4">{ext.desc}</p>
              <p className="font-bold text-lg text-dourado-tributario">{ext.price}</p>
              <div className="flex items-center gap-1 text-sm text-yellow-400 mt-2">
                <Star className="h-4 w-4 fill-current" /> {ext.rating} <span className="text-gray-500">({ext.reviews} avaliações)</span>
              </div>
              <div className="flex gap-2 mt-4">
                <Button className="flex-1">Instalar</Button>
                <Button variant="outline" className="flex-1 bg-gray-800 border-gray-700">Ver Detalhes</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-sm text-risk-gold text-center">💡 Com base no seu uso de Due Diligence, a IA recomenda instalar ‘Cartório Integrado PRO’ para emissão automática de certidões.</p>
    </div>
  );
};

export default CatalogoExtensoes;