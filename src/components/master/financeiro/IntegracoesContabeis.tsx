import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const erps = ["Omie", "Conta Azul", "Tiny ERP", "QuickBooks", "Nibo", "Alterdata"];

const IntegracoesContabeis = () => {
  const [connected, setConnected] = useState<string[]>(['Omie']);

  const handleConnect = (erpName: string) => {
    setConnected(prev => [...prev, erpName]);
    showSuccess(`${erpName} conectado com sucesso!`);
  };

  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Integrações Contábeis e ERPs</CardTitle></CardHeader>
      <CardContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {erps.map(erp => (
          <div key={erp} className="p-4 bg-gray-700/50 rounded-lg text-center space-y-3">
            <p className="font-semibold">{erp}</p>
            {connected.includes(erp) ? (
              <Button variant="secondary" disabled className="w-full bg-green-500/20 text-green-400 border-green-500/30">
                <CheckCircle2 className="h-4 w-4 mr-2" /> Conectado
              </Button>
            ) : (
              <Button onClick={() => handleConnect(erp)} variant="secondary" className="w-full">Conectar</Button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default IntegracoesContabeis;