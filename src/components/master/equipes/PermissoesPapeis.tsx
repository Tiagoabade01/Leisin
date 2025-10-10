import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { BrainCircuit } from "lucide-react";

const PermissoesPapeis = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Matriz de Permissões (RBAC)</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow className="border-gray-700"><TableHead>Módulo</TableHead><TableHead>Master Admin</TableHead><TableHead>Gestor</TableHead><TableHead>Analista</TableHead><TableHead>Visualizador</TableHead></TableRow></TableHeader>
            <TableBody>
              {["Financeiro", "Jurídico", "CRM", "IA"].map(mod => (
                <TableRow key={mod} className="border-gray-700">
                  <TableCell>{mod}</TableCell>
                  <TableCell><Checkbox checked /></TableCell>
                  <TableCell><Checkbox checked={mod !== 'Financeiro'} /></TableCell>
                  <TableCell><Checkbox checked={mod === 'Jurídico' || mod === 'CRM'} /></TableCell>
                  <TableCell><Checkbox /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-blue-400" /><CardTitle className="text-white">Sugestões da IA</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300">"Usuário João atua apenas no módulo Financeiro — sugerir papel 'Analista Financeiro'."</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PermissoesPapeis;