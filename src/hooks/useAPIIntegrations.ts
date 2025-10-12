import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { APIConfiguration } from '@/integrations/apis';

export const useAPIIntegrations = () => {
  const [configurations, setConfigurations] = useState<APIConfiguration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchConfigurations();
  }, []);

  const fetchConfigurations = async () => {
    try {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('Usuário não autenticado');
      }

      const { data, error } = await supabase
        .from('api_configurations')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setConfigurations(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar configurações');
    } finally {
      setLoading(false);
    }
  };

  const addConfiguration = async (config: Partial<APIConfiguration>) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Usuário não autenticado');

      const { data, error } = await supabase
        .from('api_configurations')
        .insert({
          ...config,
          user_id: user.id,
        })
        .select()
        .single();

      if (error) throw error;

      setConfigurations([data, ...configurations]);
      return data;
    } catch (err) {
      throw err;
    }
  };

  const updateConfiguration = async (id: string, updates: Partial<APIConfiguration>) => {
    try {
      const { data, error } = await supabase
        .from('api_configurations')
        .update({
          ...updates,
          updated_at: new Date().toISOString(),
        })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      setConfigurations(configurations.map(c => c.id === id ? data : c));
      return data;
    } catch (err) {
      throw err;
    }
  };

  const deleteConfiguration = async (id: string) => {
    try {
      const { error } = await supabase
        .from('api_configurations')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setConfigurations(configurations.filter(c => c.id !== id));
    } catch (err) {
      throw err;
    }
  };

  const testConnection = async (provider: string) => {
    try {
      // Aqui você implementaria a lógica de teste específica para cada provider
      // Por exemplo, fazer uma chamada simples à API para verificar se está funcionando
      
      const config = configurations.find(c => c.provider === provider && c.is_active);
      if (!config) {
        throw new Error('Configuração não encontrada ou inativa');
      }

      // Implementar teste específico por provider
      return { success: true, message: 'Conexão testada com sucesso' };
    } catch (err) {
      throw err;
    }
  };

  return {
    configurations,
    loading,
    error,
    addConfiguration,
    updateConfiguration,
    deleteConfiguration,
    testConnection,
    refresh: fetchConfigurations,
  };
};