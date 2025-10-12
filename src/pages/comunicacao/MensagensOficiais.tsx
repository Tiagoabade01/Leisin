import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  PlusCircle, Download, BrainCircuit, FileText, Check, ShieldCheck, Clock, Search,
  Send, Save, Edit, Paperclip, Sparkles
} from "lucide-react";
import { showSuccess } from '@/utils/toast';

// --- MOCK DATA ---
const messages = [
  { id: 1, tipo: "Ofício", destino: "CAU-SP", data: "11/10/25", status: "Entregue", assinatura: "ICP-Brasil" },
  { id: 2, tipo: "Comunicado Interno", destino: "Diretoria Jurídica", data: "11/10/25", status: "Em revisão", assinatura: "Pendente" },
  { id: 3, tipo: "Notificação", destino: "Banco Futura → Escritório", data: "10/10/25", status: "Recebido", assinatura: "Verificada" },
  { id: 4, tipo: "Parecer Jurídico", destino: "Cliente Atlas", data: "09/10/25", status: "Enviado", assinatura: "Assinado" },
];

const deliveryLog = [
  { data: "11/10/25 15:22", acao: "Envio", usuario: "Dr. Henrique", canal: "E-mail", resultado: "Entregue" },
  { data: "11/10/25 15:25", acao: "Leitura", usuario: "Cliente Atlas", canal: "Painel Leisin", resultado: "Confirmada" },
  { data: "11/10/25 16:00", acao: "Assinatura", usuario: "Dra. Larissa", canal: "Interna", resultado: "Validada" },
  { data: "11/10/25 16:02", acao: "Protocolo", usuario: "Sistema", canal: "Automático", resultado: "Hash Gerado" },
];

// --- SUBCOMPONENTS ---

const getStatusBadge = (status: string) => {
  if (status === "Entregue" || status === "Recebido") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 {status}</Badge>;
  if (status === "Em revisão") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟠 {status}</Badge>;
  if (status === "Enviado") return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">🔵 {status}</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const getSignatureBadge = (signature: string) => {
  if (signature === "ICP-Brasil" || signature === "Assinado" || signature === "Verificada") return <Badge className="bg-tech-green/10 text-tech-green border-tech-green/20">✅ {signature}</Badge>;
  if (signature === "Pendente") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">⚙️ {signature}</Badge>;
  return <Badge variant="secondary">{signature}</Badge>;
};

const MensagensOficiais = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Mensagens Oficiais</h1>
          <p className="text-gray-400 max-w-3xl">
            Central de comunicações formais com validade jurídica — assinadas digitalmente, rastreadas e automatizadas com inteligência e segurança.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => setIsModalOpen(true)}><PlusCircle className="h-4 w-4 mr-2" /> Nova Mensagem</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => showSuccess("Gerando com IA...")}><BrainCircuit className="h-4 w-4 mr-2" /> Gerar com IA</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => showSuccess("Assinando documentos...")}><Check className="h-4 w-4 mr-2" /> Assinar e Enviar</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => showSuccess("Visualizando protocolos...")}><ShieldCheck className="h-4 w-4 mr-2" /> Ver Protocolos</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Caixa de Mensagens Oficiais</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Tipo</TableHead><TableHead>Origem / Destino</TableHead><TableHead>Data</TableHead><TableHead>Status</TableHead><TableHead>Assinatura</TableHead></TableRow></TableHeader>
                <TableBody>
                  {messages.map(item => (
                    <TableRow key={item.id} className="border-gray-700">
                      <TableCell>{item.tipo}</TableCell>
                      <TableCell>{item.destino}</TableCell>
                      <TableCell>{item.data}</TableCell>
                      <TableCell>{getStatusBadge(item.status)}</TableCell>
                      <TableCell>{getSignatureBadge(item.assinatura)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Histórico e Logs de Entrega (Ofício CAU-SP)</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Data</TableHead><TableHead>Ação</TableHead><TableHead>Usuário</TableHead><TableHead>Canal</TableHead><TableHead>Resultado</TableHead></TableRow></TableHeader>
                <TableBody>
                  {deliveryLog.map(item => (
                    <TableRow key={item.data} className="border-gray-700">
                      <TableCell>{item.data}</TableCell>
                      <TableCell>{item.acao}</TableCell>
                      <TableCell>{item.usuario}</TableCell>
                      <TableCell>{item.canal}</TableCell>
                      <TableCell>{item.resultado}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* AI Sidebar */}
        <div className="lg:col-span-1">
          <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
            <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-tech-green" /><CardTitle className="text-white">IA Jurídica & Análise</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Duas mensagens ainda não possuem confirmação de leitura. Deseja reencaminhar com lembrete automático e registro adicional de entrega?”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“O comunicado nº 11/2025 cita cláusula contratual incorreta. Sugestão: revisar referência antes de assinatura.”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Assinatura de João Mendes foi feita com certificado expirado — sistema recomenda nova autenticação antes de envio oficial.”</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700 max-w-2xl">
          <DialogHeader><DialogTitle>Nova Mensagem Oficial</DialogTitle></DialogHeader>
          <div className="py-4 space-y-4">
            <div className="p-3 bg-gray-800/50 rounded-lg">
              <Label className="flex items-center gap-2 mb-2"><BrainCircuit className="h-4 w-4 text-tech-green" /> Assistente IA Jurídica</Label>
              <div className="flex gap-2">
                <Input placeholder="Ex: Gerar notificação de descumprimento contratual..." className="bg-gray-800 border-gray-700" />
                <Button variant="secondary" size="sm"><Sparkles className="h-4 w-4 mr-2" /> Gerar</Button>
              </div>
            </div>
            <div className="space-y-2"><Label htmlFor="destinatario">Destinatário</Label><Input id="destinatario" name="destinatario" className="bg-gray-800 border-gray-700" /></div>
            <div className="space-y-2"><Label htmlFor="assunto">Assunto</Label><Input id="assunto" name="assunto" className="bg-gray-800 border-gray-700" /></div>
            <div className="space-y-2"><Label htmlFor="conteudo">Conteúdo</Label><Textarea id="conteudo" name="conteudo" rows={8} className="bg-gray-800 border-gray-700" /></div>
            <div className="flex items-center gap-2"><Paperclip className="h-4 w-4" /><Button variant="link" className="p-0 h-auto text-gray-300">Anexar Documento</Button></div>
          </div>
          <DialogFooter>
            <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button>
            <Button type="button" variant="outline" className="bg-gray-800 border-gray-700"><Save className="h-4 w-4 mr-2" /> Salvar Rascunho</Button>
            <Button type="submit" className="bg-azul-formal hover:bg-azul-formal/90"><Send className="h-4 w-4 mr-2" /> Assinar e Enviar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MensagensOficiais;