import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { BrainCircuit } from "lucide-react";

const IaLinguagem = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>IA e Linguagem de Comunicação</CardTitle></CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Tom de Comunicação</Label>
            <Select defaultValue="tecnico">
              <SelectTrigger className="bg-gray-800 border-gray-700"><SelectValue /></SelectTrigger>
              <SelectContent className="bg-gray-800 text-white border-gray-700">
                <SelectItem value="formal">Formal</SelectItem>
                <SelectItem value="tecnico">Técnico</SelectItem>
                <SelectItem value="consultivo">Consultivo</SelectItem>
                <SelectItem value="amigavel">Amigável</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Persona IA</Label>
            <Select defaultValue="advogado">
              <SelectTrigger className="bg-gray-800 border-gray-700"><SelectValue /></SelectTrigger>
              <SelectContent className="bg-gray-800 text-white border-gray-700">
                <SelectItem value="advogado">Advogado Digital</SelectItem>
                <SelectItem value="consultor">Consultor</SelectItem>
                <SelectItem value="gestor">Gestor de Projetos</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="p-4 bg-gray-800/50 rounded-lg flex items-start gap-2">
          <BrainCircuit className="h-5 w-5 text-tech-green flex-shrink-0 mt-1" />
          <p className="text-sm text-risk-gold">“A linguagem atual está configurada como Técnica. 72% dos usuários preferem respostas Consultivas no CRM Jurídico. Deseja alterar?”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default IaLinguagem;