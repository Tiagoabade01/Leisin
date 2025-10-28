import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { showSuccess, showError } from "@/utils/toast";
import { openAIClient } from "@/integrations/apis/openai";

type APIConfig = {
  id?: string;
  provider: string;
  api_key: string;
  model?: string;
  is_active: boolean;
};

const APIConfigurationPanel = () => {
  const [configs, setConfigs] = useState<APIConfig[]>([]);
  const [newConfig, setNewConfig] = useState<Omit<APIConfig, 'id'>>({ 
    provider: 'openai', 
    api_key: '', 
    model: 'gpt-4o-mini', 
    is_active: true 
  });

  const fetchConfigs = async () => {
    const { data, error } = await supabase
      .from('api_configurations')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      showError("Erro ao carregar configurações");
      return;
    }
    setConfigs(data || []);
  };

  const saveConfig = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return showError("Usuário não autenticado");

    const { error } = await supabase
      .from('api_configurations')
      .upsert({
        ...newConfig,
        user_id: user.id,
      }, { onConflict: 'provider,user_id' });

    if (error) return showError(`Erro ao salvar: ${error.message}`);
    showSuccess("Configuração salva com sucesso!");
    fetchConfigs();
  };

  const toggleActive = async (id: string, current: boolean) => {
    const { error } = await supabase
      .from('api_configurations')
      .update({ is_active: !current })
      .eq('id', id);
    
    if (error) return showError(`Erro ao atualizar: ${error.message}`);
    showSuccess("Status atualizado!");
    fetchConfigs();
  };

  const testConnection = async () => {
    try {
      // Força recarga da configuração
      await (openAIClient as any).initialize();
      const result = await openAIClient.perguntarJuridica("Teste de conexão: responda apenas 'Conectado'");
      if (result.choices?.[0]?.message?.content) {
        showSuccess("Conexão com OpenAI estabelecida!");
      } else {
        throw new Error("Resposta inválida");
      }
    } catch (err) {
      console.error("Erro no teste de conexão:", err);
      showError(`Falha na conexão: ${(err as Error).message}`);
    }
  };

  useEffect(() => {
    fetchConfigs();
  }, []);

  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Gerenciar APIs Externas</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="md:col-span-2 space-y-2">
            <Label>Provedor</Label>
            <Select value={newConfig.provider} onValueChange={(v) => setNewConfig({...newConfig, provider: v})}>
              <SelectTrigger className="bg-gray-800 border-gray-700"><SelectValue /></SelectTrigger>
              <SelectContent className="bg-gray-800 text-white border-gray-700">
                <SelectItem value="openai">OpenAI</SelectItem>
                <SelectItem value="jusbrasil">Jusbrasil</SelectItem>
                <SelectItem value="stripe">Stripe</SelectItem>
                <SelectItem value="whatsapp">WhatsApp Business</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Chave da API</Label>
            <Input 
              value={newConfig.api_key} 
              onChange={(e) => setNewConfig({...newConfig, api_key: e.target.value})} 
              placeholder="sk-..." 
              className="bg-gray-800 border-gray-700" 
            />
          </div>
          <div className="space-y-2">
            <Label>Modelo (OpenAI)</Label>
            <Input 
              value={newConfig.model || ''} 
              onChange={(e) => setNewConfig({...newConfig, model: e.target.value})} 
              placeholder="gpt-4o-mini" 
              className="bg-gray-800 border-gray-700" 
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Button onClick={saveConfig} variant="secondary">Salvar Configuração</Button>
          <Button onClick={testConnection} variant="outline" className="ml-2">Testar Conexão</Button>
        </div>

        <div className="border-t border-gray-700 pt-4">
          <h3 className="font-semibold mb-2">Configurações Atuais</h3>
          <div className="space-y-2">
            {configs.map(c => (
              <div key={c.id} className="flex justify-between items-center p-2 bg-gray-800/50 rounded">
                <span>{c.provider} {c.model && `(${c.model})`}</span>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant={c.is_active ? "outline" : "secondary"}
                    onClick={() => c.id && toggleActive(c.id, c.is_active)}
                  >
                    {c.is_active ? "Desativar" : "Ativar"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default APIConfigurationPanel;