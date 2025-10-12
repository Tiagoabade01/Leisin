import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { PlusCircle, Upload, BarChart2, Map } from "lucide-react";
import ImoveisKPIs from "@/components/imobiliario/ImoveisKPIs";
import ImoveisTable from "@/components/imobiliario/ImoveisTable";
import ImoveisMap from "@/components/imobiliario/ImoveisMap";
import ImoveisAIInsights from "@/components/imobiliario/ImoveisAIInsights";
import ImovelDetalheDrawer from "@/components/imobiliario/ImovelDetalheDrawer";

export interface Imovel {
  id: string;
  nome: string;
  tipo: 'Urbano' | 'Rural' | 'Comercial';
  status: 'Regular' | 'Em análise' | 'Crítico';
  localizacao: string;
  matricula: string;
  area: string;
}

const initialImoveis: Imovel[] = [
  { id: '1', nome: "Terreno Guararema", tipo: 'Urbano', status: 'Regular', localizacao: "Guararema, SP", matricula: "12.345", area: "1.200 m²" },
  { id: '2', nome: "Edifício Comercial Paulista", tipo: 'Comercial', status: 'Em análise', localizacao: "São Paulo, SP", matricula: "67.890", area: "5.000 m²" },
  { id: '3', nome: "Fazenda Boa Esperança", tipo: 'Rural', status: 'Crítico', localizacao: "Mato Grosso, MT", matricula: "11.223", area: "1.500 ha" },
];

const CadastroImoveis = () => {
  const [imoveis, setImoveis] = useState<Imovel[]>(initialImoveis);
  const [selectedImovel, setSelectedImovel] = useState<Imovel | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSelectImovel = (imovel: Imovel) => {
    setSelectedImovel(imovel);
    setIsDrawerOpen(true);
  };

  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Cadastro de Imóveis</h1>
          <p className="text-gray-400 max-w-3xl">
            Gestão completa e inteligente do portfólio imobiliário — cadastro, análise jurídica, integração cartorial e georreferenciamento automatizado.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary"><PlusCircle className="h-4 w-4 mr-2" /> Novo Imóvel</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Upload className="h-4 w-4 mr-2" /> Importar Arquivo</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Gerar Relatório</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Map className="h-4 w-4 mr-2" /> Ver no Mapa</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ImoveisKPIs />
          <ImoveisTable imoveis={imoveis} onSelectImovel={handleSelectImovel} />
        </div>
        <div className="lg:col-span-1 space-y-6">
          <ImoveisMap />
          <ImoveisAIInsights />
        </div>
      </div>

      {selectedImovel && (
        <ImovelDetalheDrawer
          imovel={selectedImovel}
          isOpen={isDrawerOpen}
          onOpenChange={setIsDrawerOpen}
        />
      )}
    </div>
  );
};

export default CadastroImoveis;