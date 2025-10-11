import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Signature, Briefcase, FileBadge, Calendar } from "lucide-react";

const PortalCliente = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle>Portal do Cliente</CardTitle></CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Visualizar contratos, prazos e tarefas jurídicas.</li>
            <li>Acessar documentos, certidões e pareceres.</li>
            <li>Comunicar-se com o escritório (chat, WhatsApp, e-mail).</li>
            <li>Assinar contratos eletronicamente.</li>
            <li>Dashboard com status dos casos e indicadores.</li>
          </ul>
        </CardContent>
      </Card>
      <div className="space-y-6">
        <Card className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader><CardTitle className="text-base">Exemplo de Interface</CardTitle></CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-gray-800/50 rounded-lg"><Signature className="h-5 w-5 mb-2 text-blue-400" /><p className="font-bold text-xl">14</p><p className="text-xs text-gray-400">Contratos Ativos</p></div>
            <div className="p-3 bg-gray-800/50 rounded-lg"><Briefcase className="h-5 w-5 mb-2 text-blue-400" /><p className="font-bold text-xl">5</p><p className="text-xs text-gray-400">Processos em Andamento</p></div>
            <div className="p-3 bg-gray-800/50 rounded-lg"><FileBadge className="h-5 w-5 mb-2 text-blue-400" /><p className="font-bold text-xl">8</p><p className="text-xs text-gray-400">Certidões Disponíveis</p></div>
            <div className="p-3 bg-gray-800/50 rounded-lg"><Calendar className="h-5 w-5 mb-2 text-blue-400" /><p className="font-bold text-xl">15/10</p><p className="text-xs text-gray-400">Próxima Reunião</p></div>
          </CardContent>
        </Card>
        <p className="text-sm text-risk-gold">💡 IA Insight: “O cliente ‘IncorpTech S.A.’ ainda não visualizou o contrato atualizado. Notificação de leitura foi reenviada automaticamente.”</p>
      </div>
    </div>
  );
};

export default PortalCliente;