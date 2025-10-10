import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, Minus } from "lucide-react";
import { Plan } from '@/pages/master/PlanosPrecificacao';

interface ComparadorProps {
  plans: Plan[];
}

const features = [
  { name: 'Usuários Incluídos', key: 'users' },
  { name: 'Módulos Disponíveis', key: 'modules' },
  { name: 'Nível de IA', key: 'iaLevel' },
  { name: 'Suporte e SLA', key: 'support' },
];

const ComparadorDePlanos = ({ plans }: ComparadorProps) => {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Matriz Comparativa de Planos</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800"><TableHead>Funcionalidade</TableHead>{plans.map(p => <TableHead key={p.id}>{p.name}</TableHead>)}</TableRow></TableHeader>
          <TableBody>
            {features.map(feat => (
              <TableRow key={feat.key} className="border-gray-700">
                <TableCell className="font-medium">{feat.name}</TableCell>
                {plans.map(plan => (
                  <TableCell key={plan.id}>
                    {Array.isArray(plan[feat.key]) ? plan[feat.key].join(', ') : plan[feat.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ComparadorDePlanos;