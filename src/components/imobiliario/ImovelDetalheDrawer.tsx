import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Map } from "lucide-react";
import { Imovel } from "@/pages/imobiliario/CadastroImoveis";

interface ImovelDetalheDrawerProps {
  imovel: Imovel;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const ImovelDetalheDrawer = ({ imovel, isOpen, onOpenChange }: ImovelDetalheDrawerProps) => {
  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent className="bg-gray-900 text-white border-gray-700 h-[80vh]">
        <div className="p-6 h-full overflow-y-auto">
          <DrawerHeader className="p-0 mb-4">
            <DrawerTitle className="text-2xl font-bold">{imovel.nome}</DrawerTitle>
            <DrawerDescription className="text-gray-400">{imovel.localizacao} • Matrícula: {imovel.matricula}</DrawerDescription>
          </DrawerHeader>
          
          <Tabs defaultValue="dados" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-800">
              <TabsTrigger value="dados">Dados Gerais</TabsTrigger>
              <TabsTrigger value="documentos">Documentos</TabsTrigger>
              <TabsTrigger value="zoneamento">Zoneamento</TabsTrigger>
              <TabsTrigger value="titularidade">Titularidade</TabsTrigger>
            </TabsList>
            <TabsContent value="dados" className="mt-4"><p>Detalhes gerais do imóvel...</p></TabsContent>
            <TabsContent value="documentos" className="mt-4"><p>Lista de documentos, matrículas, certidões...</p></TabsContent>
            <TabsContent value="zoneamento" className="mt-4">
              <div className="h-64 flex items-center justify-center bg-gray-800/50 rounded-lg border border-dashed border-gray-700">
                <div className="text-center text-gray-500"><Map className="mx-auto h-12 w-12 mb-2" /><p>Mapa de Zoneamento</p></div>
              </div>
              <p className="text-sm text-tech-green mt-4">💡 “O terreno está na ZEU – coeficiente de aproveitamento 4, gabarito 48m, TO 0,7, uso permitido: residencial multifamiliar.”</p>
            </TabsContent>
            <TabsContent value="titularidade" className="mt-4">
              <Table>
                <TableHeader><TableRow><TableHead>Nome</TableHead><TableHead>Tipo</TableHead><TableHead>Participação</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                <TableBody>
                  <TableRow><TableCell>João Andrade</TableCell><TableCell>Pessoa Física</TableCell><TableCell>50%</TableCell><TableCell>Regular</TableCell></TableRow>
                  <TableRow><TableCell>Terlla Incorporadora</TableCell><TableCell>Jurídica</TableCell><TableCell>50%</TableCell><TableCell>Regular</TableCell></TableRow>
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ImovelDetalheDrawer;