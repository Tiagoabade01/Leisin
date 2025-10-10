import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BrainCircuit } from "lucide-react";

const integrationsData = {
  Financeiro: [{ name: 'NFe.io', status: true }, { name: 'Stripe', status: true }],
  'IA e Automação': [{ name: 'OpenAI', status: true }, { name: 'Gemini', status: false }],
  Comunicação: [{ name: 'WhatsApp Business API', status: true }, { name: 'Twilio', status: false }],
};

const IntegracoesApis = () => {
  return (
    <div className="space-y-6">
      {Object.entries(integrationsData).map(([category, apis]) => (
        <Card key={category} className="bg-gray-800 border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white">{category}</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {apis.map(api => (
              <div key={api.name} className="p-4 bg-gray-700/50 rounded-lg flex items-center justify-between">
                <div className="flex-1">
                  <Label htmlFor={`switch-${api.name}`} className="font-medium">{api.name}</Label>
                  <div className="flex items-center gap-2 mt-2">
                    <Input placeholder="Chave de API" className="bg-gray-700 border-gray-600 max-w-sm" type="password" />
                    <Button variant="outline" size="sm" className="bg-gray-700 border-gray-600">Testar</Button>
                  </div>
                </div>
                <Switch id={`switch-${api.name}`} defaultChecked={api.status} />
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-blue-400" /><CardTitle className="text-white">Diagnóstico da IA</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-yellow-400">"A API do NFe.io teve 2 falhas nos últimos 7 dias — sugerir reconexão."</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default IntegracoesApis;