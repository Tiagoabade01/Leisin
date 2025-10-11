import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const params = [
  { param: "Zona", value: "ZEU", source: "GeoSP" },
  { param: "Coeficiente de Aproveitamento (CA)", value: "4.0", source: "PDE SP" },
  { param: "Taxa de Ocupação (TO)", value: "0.7", source: "PDE SP" },
  { param: "Gabarito", value: "48m", source: "LPUOS" },
  { param: "IPTU Anual", value: "R$ 23.700,00", source: "Prefeitura SP" },
  { param: "Valor venal", value: "R$ 1.950.000", source: "GeoSampa" },
];

const chartData = [
  { name: 'Potencial', area: 4000 },
  { name: 'Construída', area: 1200 },
];

const RelatoriosUrbanisticosFiscais = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Relatórios Urbanísticos e Fiscais</CardTitle></CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Table>
            <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Parâmetro</TableHead><TableHead>Valor</TableHead></TableRow></TableHeader>
            <TableBody>
              {params.map(p => (
                <TableRow key={p.param} className="border-gray-700"><TableCell>{p.param}</TableCell><TableCell>{p.value}</TableCell></TableRow>
              ))}
            </TableBody>
          </Table>
          <p className="text-sm text-risk-gold mt-4">💡 “Imóvel com potencial de ampliação de 25% via outorga onerosa; classificação: Alto potencial construtivo.”</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-white">Potencial vs. Área Construída (m²)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" stroke="#a1a1aa" />
              <YAxis stroke="#a1a1aa" />
              <Tooltip contentStyle={{ backgroundColor: '#1C2A3A' }} />
              <Bar dataKey="area" fill="#00B8D9" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatoriosUrbanisticosFiscais;