import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const certificates = [
  { name: "Certidão Negativa de Débitos", client: "Nivem Construtora", expires: "05 dias", status: "Vencendo" },
  { name: "Certidão de Regularidade do FGTS", client: "Construtora Sol", expires: "28 dias", status: "OK" },
  { name: "Certidão Negativa de Protesto", client: "Empreendimentos T3", expires: "Vencida", status: "Vencida" },
];

const CertificatesMonitor = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Certidões e Documentos</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Documento</TableHead><TableHead>Cliente</TableHead><TableHead>Validade</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {certificates.map(cert => (
              <TableRow key={cert.name} className="border-gray-700">
                <TableCell className="font-medium">{cert.name}</TableCell>
                <TableCell>{cert.client}</TableCell>
                <TableCell>{cert.expires}</TableCell>
                <TableCell>
                  <Badge variant={cert.status === "Vencendo" ? "default" : cert.status === "Vencida" ? "destructive" : "secondary"}>
                    {cert.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 “Certidão negativa da empresa Nivem vence em 5 dias — renovação automática sugerida.”</p>
      </CardContent>
    </Card>
  );
};

export default CertificatesMonitor;