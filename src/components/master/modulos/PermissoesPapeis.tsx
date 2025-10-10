import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { BrainCircuit, PlusCircle } from "lucide-react";

const rolesData = [
  { name: 'Gestor Jurídico', description: 'Controle jurídico e compliance', modules: 'Jurídico, CRM', accessLevel: 'Edição completa', users: 12 },
  { name: 'Analista Financeiro', description: 'DRE, faturamento, relatórios', modules: 'Financeiro', accessLevel: 'Leitura / Exportação', users: 8 },
  { name: 'Master Admin', description: 'Acesso total ao sistema', modules: 'Todos', accessLevel: 'Total', users: 5 },
];

const PermissoesPapeis = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Papéis de Acesso (RBAC)</CardTitle>
            <Button><PlusCircle className="h-4 w-4 mr-2" /> Criar Novo Papel</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800/50"><TableHead>Papel</TableHead><TableHead>Módulos Permitidos</TableHead><TableHead>Nível de Acesso</TableHead><TableHead>Usuários Atribuídos</TableHead></TableRow></TableHeader>
            <TableBody>
              {rolesData.map(role => (
                <TableRow key={role.name} className="border-gray-700">
                  <TableCell><p className="font-medium">{role.name}</p><p className="text-xs text-gray-400">{role.description}</p></TableCell>
                  <TableCell>{role.modules}</TableCell>
                  <TableCell>{role.accessLevel}</TableCell>
                  <TableCell>{role.users}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5" /><CardTitle>Sugestões da IA</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm">"Usuário <strong>João</strong> atua apenas em faturamento. Sugerir papel: <strong>Analista Financeiro</strong>."</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PermissoesPapeis;