import React, { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const UserSessionDebug = () => {
  const [user, setUser] = useState<any>(null);
  const [session, setSession] = useState<any>(null);
  const [apiConfigs, setApiConfigs] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchUserAndSession = async () => {
    try {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (userError) throw userError;
      if (sessionError) throw sessionError;
      
      setUser(user);
      setSession(session);
      setError(null);
    } catch (err) {
      setError(`Erro ao buscar usuário/sessão: ${(err as Error).message}`);
      console.error(err);
    }
  };

  const fetchApiConfigs = async () => {
    try {
      if (!user) {
        setError("Usuário não autenticado");
        return;
      }
      
      const { data, error } = await supabase
        .from('api_configurations')
        .select('*');
      
      if (error) throw error;
      
      setApiConfigs(data || []);
      setError(null);
    } catch (err) {
      setError(`Erro ao buscar configurações: ${(err as Error).message}`);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUserAndSession();
  }, []);

  useEffect(() => {
    if (user) {
      fetchApiConfigs();
    }
  }, [user]);

  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <CardTitle>Debug de Sessão e API</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold">Usuário</h3>
          <pre className="bg-gray-800 p-2 rounded text-xs overflow-x-auto">
            {user ? JSON.stringify(user, null, 2) : "Nenhum usuário autenticado"}
          </pre>
        </div>
        
        <div>
          <h3 className="font-semibold">Sessão</h3>
          <pre className="bg-gray-800 p-2 rounded text-xs overflow-x-auto">
            {session ? JSON.stringify(session, null, 2) : "Nenhuma sessão ativa"}
          </pre>
        </div>
        
        <div>
          <h3 className="font-semibold">Configurações da API</h3>
          <pre className="bg-gray-800 p-2 rounded text-xs overflow-x-auto">
            {apiConfigs.length > 0 ? JSON.stringify(apiConfigs, null, 2) : "Nenhuma configuração encontrada"}
          </pre>
        </div>
        
        {error && (
          <div className="bg-red-900/50 p-2 rounded">
            <p className="text-red-300">Erro: {error}</p>
          </div>
        )}
        
        <Button onClick={fetchUserAndSession} variant="secondary">
          Recarregar Informações
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserSessionDebug;