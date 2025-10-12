import React, { useState, FormEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { PlusCircle, TestTube2, Trash2, Edit } from "lucide-react";
import { useAPIIntegrations } from '@/hooks/useAPIIntegrations';
import { showSuccess, showError } from '@/utils/toast';

const providers = [
  { id: 'bigdatacorp', name: 'BigDataCorp', fields: ['api_key', 'api_secret'] },
  { id: 'arisp', name: 'ARISP', fields: ['api_key', 'certificate'] },
  { id: 'openai', name: 'OpenAI', fields: ['api_key', 'model'] },
  { id: 'receita_federal', name: 'Receita Federal', fields: [] },
  { id: 'jusbrasil', name: 'JusBrasil', fields: ['api_key'] },
  { id: 'stripe', name: 'Stripe', fields: ['api_key', 'publishable_key'] },
  { id: 'whatsapp', name: 'WhatsApp Business', fields: ['api_key', 'phone_number_id', 'business_account_id'] },
];

const APIConfigurationPanel = () => {
  const { configurations, loading, addConfiguration, updateConfiguration, deleteConfiguration, testConnection } = useAPIIntegrations();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<string>('');

  const handleSaveConfig = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      await addConfiguration({
        provider: formData.get('provider') as string,
        api_key: formData.get('api_key') as string,
        api_secret: formData.get('api_secret') as string || undefined,
        certificate: formData.get('certificate') as string || undefined,
        phone_number_id: formData.get('phone_number_id') as string || undefined,
        business_account_id: formData.get('business_account_id') as string || undefined,
        publishable_key: formData.get('publishable_key') as string || undefined,
        model: formData.get('model') as string || undefined,
        is_active: true,
      });
      
      setIsModalOpen(false);
      showSuccess('Configuração salva com sucesso!');
    } catch (err) {
      showError('Erro ao salvar configuração');
    }
  };

  const handleTest = async (provider: string) => {
    try {
      await testConnection(provider);
      showSuccess(`Conexão com ${provider} testada com sucesso!`);
    } catch (err) {
      showError(`Erro ao testar conexão com ${provider}`);
    }
  };

  const handleToggle = async (id: string, isActive: boolean) => {
    try {
      await updateConfiguration(id, { is_active: isActive });
      showSuccess(isActive ? 'API ativada' : 'API desativada');
    } catch (err) {
      showError('Erro ao atualizar status');
    }
  };

  const getStatusBadge = (isActive: boolean) => {
    return isActive 
      ? <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Ativa</Badge>
      : <Badge className="bg-gray-500/20 text-gray-400 border-gray-500/30">⚫ Inativa</Badge>;
  };

  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-white">Configurações de APIs</CardTitle>
          <Button onClick={() => setIsModalOpen(true)}>
            <PlusCircle className="h-4 w-4 mr-2" /> Nova Integração
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow className="border-gray-700 hover:bg-transparent">
                <TableHead>Provedor</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Última Atualização</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {configurations.map(config => (
                <TableRow key={config.id} className="border-gray-700">
                  <TableCell className="font-medium">{config.provider}</TableCell>
                  <TableCell>{getStatusBadge(config.is_active)}</TableCell>
                  <TableCell>{new Date(config.updated_at).toLocaleDateString('pt-BR')}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Switch 
                        checked={config.is_active} 
                        onCheckedChange={(checked) => handleToggle(config.id, checked)}
                      />
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleTest(config.provider)}
                      >
                        <TestTube2 className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => deleteConfiguration(config.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader>
            <DialogTitle>Nova Integração de API</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSaveConfig}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="provider">Provedor</Label>
                <select 
                  id="provider" 
                  name="provider" 
                  className="flex h-10 w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-sm"
                  onChange={(e) => setSelectedProvider(e.target.value)}
                  required
                >
                  <option value="">Selecione um provedor</option>
                  {providers.map(p => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>

              {selectedProvider && (
                <>
                  {providers.find(p => p.id === selectedProvider)?.fields.includes('api_key') && (
                    <div className="space-y-2">
                      <Label htmlFor="api_key">API Key</Label>
                      <Input id="api_key" name="api_key" type="password" className="bg-gray-800 border-gray-600" required />
                    </div>
                  )}
                  
                  {providers.find(p => p.id === selectedProvider)?.fields.includes('api_secret') && (
                    <div className="space-y-2">
                      <Label htmlFor="api_secret">API Secret</Label>
                      <Input id="api_secret" name="api_secret" type="password" className="bg-gray-800 border-gray-600" />
                    </div>
                  )}

                  {providers.find(p => p.id === selectedProvider)?.fields.includes('certificate') && (
                    <div className="space-y-2">
                      <Label htmlFor="certificate">Certificado Digital</Label>
                      <Input id="certificate" name="certificate" type="file" className="bg-gray-800 border-gray-600" />
                    </div>
                  )}

                  {providers.find(p => p.id === selectedProvider)?.fields.includes('phone_number_id') && (
                    <div className="space-y-2">
                      <Label htmlFor="phone_number_id">Phone Number ID</Label>
                      <Input id="phone_number_id" name="phone_number_id" className="bg-gray-800 border-gray-600" />
                    </div>
                  )}

                  {providers.find(p => p.id === selectedProvider)?.fields.includes('business_account_id') && (
                    <div className="space-y-2">
                      <Label htmlFor="business_account_id">Business Account ID</Label>
                      <Input id="business_account_id" name="business_account_id" className="bg-gray-800 border-gray-600" />
                    </div>
                  )}

                  {providers.find(p => p.id === selectedProvider)?.fields.includes('publishable_key') && (
                    <div className="space-y-2">
                      <Label htmlFor="publishable_key">Publishable Key</Label>
                      <Input id="publishable_key" name="publishable_key" className="bg-gray-800 border-gray-600" />
                    </div>
                  )}

                  {providers.find(p => p.id === selectedProvider)?.fields.includes('model') && (
                    <div className="space-y-2">
                      <Label htmlFor="model">Modelo (ex: gpt-4-turbo-preview)</Label>
                      <Input id="model" name="model" className="bg-gray-800 border-gray-600" placeholder="gpt-4-turbo-preview" />
                    </div>
                  )}
                </>
              )}
            </div>
            <DialogFooter>
              <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit">Salvar Configuração</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default APIConfigurationPanel;