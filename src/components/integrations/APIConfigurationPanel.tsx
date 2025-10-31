import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { showSuccess, showError } from "@/utils/toast";
import { testApiConnection } from "@/integrations/api-tester";

type ProviderKey =
  | "openai"
  | "bigdatacorp"
  | "infosimples"
  | "jusbrasil"
  | "stripe"
  | "whatsapp"
  | "arisp"
  | "receita_federal";

type ProviderConfig = {
  id?: string;
  provider: ProviderKey;
  api_key?: string;
  api_secret?: string;
  model?: string;
  publishable_key?: string;
  business_account_id?: string;
  phone_number_id?: string;
  is_active?: boolean;
};

const PROVIDERS: {
  key: ProviderKey;
  name: string;
  fields: { name: keyof ProviderConfig; label: string; placeholder?: string }[];
  description?: string;
}[] = [
  {
    key: "openai",
    name: "OpenAI",
    fields: [
      { name: "api_key", label: "Chave da API", placeholder: "sk-..." },
      { name: "model", label: "Modelo", placeholder: "gpt-4o-mini" },
    ],
    description: "IA jurídica e análises avançadas.",
  },
  {
    key: "bigdatacorp",
    name: "BigDataCorp",
    fields: [
      { name: "api_key", label: "Chave da API" },
      { name: "api_secret", label: "Segredo da API" },
    ],
    description: "Dados corporativos, pessoas e validações.",
  },
  {
    key: "infosimples",
    name: "Infosimples",
    fields: [
      { name: "api_key", label: "Chave da API" },
      { name: "api_secret", label: "Segredo da API" },
    ],
    description: "Consultas de CPF/CNPJ e documentos públicos.",
  },
  {
    key: "jusbrasil",
    name: "Jusbrasil",
    fields: [{ name: "api_key", label: "Chave da API" }],
    description: "Pesquisa de jurisprudência e decisões.",
  },
  {
    key: "stripe",
    name: "Stripe",
    fields: [
      { name: "api_key", label: "Secret Key", placeholder: "sk_live_..." },
      { name: "publishable_key", label: "Publishable Key", placeholder: "pk_live_..." },
    ],
    description: "Cobranças e faturamento.",
  },
  {
    key: "whatsapp",
    name: "WhatsApp Business",
    fields: [
      { name: "api_key", label: "Token de Acesso" },
      { name: "business_account_id", label: "Business Account ID" },
      { name: "phone_number_id", label: "Phone Number ID" },
    ],
    description: "Envio de mensagens oficiais e integrações comerciais.",
  },
  {
    key: "arisp",
    name: "ARISP",
    fields: [{ name: "api_key", label: "Chave da API" }],
    description: "Integrações cartoriais e status.",
  },
  {
    key: "receita_federal",
    name: "Receita Federal",
    fields: [{ name: "api_key", label: "Chave da API (opcional)" }],
    description: "Consultas públicas de CNPJ.",
  },
];

const APIConfigurationPanel: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [configs, setConfigs] = useState<Record<ProviderKey, ProviderConfig>>({
    openai: { provider: "openai", is_active: false },
    bigdatacorp: { provider: "bigdatacorp", is_active: false },
    infosimples: { provider: "infosimples", is_active: false },
    jusbrasil: { provider: "jusbrasil", is_active: false },
    stripe: { provider: "stripe", is_active: false },
    whatsapp: { provider: "whatsapp", is_active: false },
    arisp: { provider: "arisp", is_active: false },
    receita_federal: { provider: "receita_federal", is_active: false },
  });

  const loadConfigs = async () => {
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setLoading(false);
      showError("Usuário não autenticado");
      return;
    }

    const { data, error } = await supabase
      .from("api_configurations")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      setLoading(false);
      showError("Erro ao carregar configurações");
      return;
    }

    const next = { ...configs };
    (data || []).forEach((row: any) => {
      const key = row.provider as ProviderKey;
      if (key in next) {
        next[key] = {
          id: row.id,
          provider: key,
          api_key: row.api_key ?? "",
          api_secret: row.api_secret ?? "",
          model: row.model ?? "",
          publishable_key: row.publishable_key ?? "",
          business_account_id: row.business_account_id ?? "",
          phone_number_id: row.phone_number_id ?? "",
          is_active: !!row.is_active,
        };
      }
    });
    setConfigs(next);
    setLoading(false);
  };

  const setField = (key: ProviderKey, field: keyof ProviderConfig, value: string | boolean) => {
    setConfigs((prev) => ({
      ...prev,
      [key]: { ...prev[key], [field]: value },
    }));
  };

  const saveProvider = async (key: ProviderKey) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return showError("Usuário não autenticado");

    const cfg = configs[key];
    const payload: any = {
      provider: cfg.provider,
      api_key: cfg.api_key || null,
      api_secret: cfg.api_secret || null,
      model: cfg.model || null,
      publishable_key: cfg.publishable_key || null,
      business_account_id: cfg.business_account_id || null,
      phone_number_id: cfg.phone_number_id || null,
      is_active: cfg.is_active ?? false,
      user_id: user.id,
      updated_at: new Date().toISOString(),
    };

    let err = null;
    if (cfg.id) {
      const { error } = await supabase.from("api_configurations").update(payload).eq("id", cfg.id);
      err = error;
    } else {
      const { data, error } = await supabase
        .from("api_configurations")
        .insert(payload)
        .select()
        .single();
      err = error;
      if (!error && data) {
        setConfigs((prev) => ({ ...prev, [key]: { ...prev[key], id: data.id } }));
      }
    }

    if (err) return showError(`Erro ao salvar: ${err.message}`);
    showSuccess(`${PROVIDERS.find((p) => p.key === key)?.name} salvo com sucesso!`);
    await loadConfigs();
  };

  const toggleActive = async (key: ProviderKey) => {
    const cfg = configs[key];
    if (!cfg.id) return showError("Salve a configuração antes de ativar/desativar.");

    const { error } = await supabase
      .from("api_configurations")
      .update({ is_active: !cfg.is_active, updated_at: new Date().toISOString() })
      .eq("id", cfg.id);

    if (error) return showError(`Erro ao atualizar status: ${error.message}`);
    showSuccess("Status atualizado!");
    setConfigs((prev) => ({ ...prev, [key]: { ...prev[key], is_active: !cfg.is_active } }));
  };

  const testProvider = async (key: ProviderKey) => {
    try {
      const cfg = configs[key];
      const testObj: any = {
        id: cfg.id ?? "temp",
        user_id: "current",
        provider: key,
        api_key: cfg.api_key ?? "",
        api_secret: cfg.api_secret ?? "",
        certificate: null,
        phone_number_id: cfg.phone_number_id ?? "",
        business_account_id: cfg.business_account_id ?? "",
        publishable_key: cfg.publishable_key ?? "",
        model: cfg.model ?? "",
        is_active: true,
        created_at: "",
        updated_at: "",
      };

      const res = await testApiConnection(testObj);
      if (res?.success) showSuccess(`${PROVIDERS.find((p) => p.key === key)?.name} conectado com sucesso!`);
      else showError("Teste retornou sem sucesso.");
    } catch (e: any) {
      showError(`Falha na conexão: ${e?.message ?? "Erro desconhecido"}`);
    }
  };

  useEffect(() => {
    loadConfigs();
  }, []);

  return (
    <div className="space-y-4">
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader>
          <CardTitle>Gerenciar APIs Externas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-gray-300">
            Configure abaixo cada provedor. Os campos iniciam vazios; preencha suas chaves e clique em Salvar, depois em Testar Conexão.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {PROVIDERS.map((prov) => {
          const cfg = configs[prov.key];
          return (
            <Card key={prov.key} className="bg-petroleum-blue border-gray-700 text-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{prov.name}</CardTitle>
                  <Button
                    size="sm"
                    variant={cfg?.is_active ? "outline" : "secondary"}
                    onClick={() => toggleActive(prov.key)}
                    disabled={loading}
                  >
                    {cfg?.is_active ? "Desativar" : "Ativar"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {prov.description && <p className="text-xs text-gray-300">{prov.description}</p>}
                <div className="space-y-3">
                  {prov.fields.map((f) => (
                    <div key={`${prov.key}-${String(f.name)}`} className="space-y-2">
                      <Label>{f.label}</Label>
                      <Input
                        value={(cfg?.[f.name] as string) ?? ""}
                        onChange={(e) => setField(prov.key, f.name, e.target.value)}
                        placeholder={f.placeholder ?? ""}
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button onClick={() => saveProvider(prov.key)} variant="secondary" disabled={loading}>
                    Salvar
                  </Button>
                  <Button onClick={() => testProvider(prov.key)} variant="outline" disabled={loading}>
                    Testar Conexão
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default APIConfigurationPanel;