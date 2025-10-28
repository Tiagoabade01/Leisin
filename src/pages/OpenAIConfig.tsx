import React from "react";
import APIConfigurationPanel from "@/components/integrations/APIConfigurationPanel";
import UserSessionDebug from "@/components/debug/UserSessionDebug";

const OpenAIConfig = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white font-serif">Configurar OpenAI</h1>
        <p className="text-gray-400">Insira sua chave da API da OpenAI para ativar os recursos de IA no sistema.</p>
      </header>
      <div className="mb-8">
        <UserSessionDebug />
      </div>
      <APIConfigurationPanel />
    </div>
  );
};

export default OpenAIConfig;