import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

const modules = [
  { name: "Jurídico Operacional", permissions: [true, true, false, false, false] },
  { name: "Financeiro", permissions: [true, true, true, true, true] },
  { name: "Contábil", permissions: [true, true, true, false, false] },
  { name: "CRM Jurídico", permissions: [true, true, false, true, false] },
  { name: "IA e Automação", permissions: [true, true, true, true, true] },
  { name: "Painel Master", permissions: [true, false, false, false, false] },
];

const roles = ["Leitura", "Edição", "Exclusão", "Automação", "Acesso Total"];

const ControlePermissoes = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Controle de Permissões (Matriz RBAC)</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Módulo</TableHead>{roles.map(role => <TableHead key={role}>{role}</TableHead>)}</TableRow></TableHeader>
          <TableBody>
            {modules.map(mod => (
              <TableRow key={mod.name} className="border-gray-700">
                <TableCell>{mod.name}</TableCell>
                {mod.permissions.map((perm, index) => (
                  <TableCell key={index}><Checkbox checked={perm} /></TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Três usuários possuem acesso total ao módulo Financeiro sem serem gestores. Deseja revisar as permissões automaticamente?”</p>
      </CardContent>
    </Card>
  );
};

export default ControlePermissoes;