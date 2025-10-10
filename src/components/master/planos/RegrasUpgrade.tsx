import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const RegrasUpgrade = () => {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Regras de Upgrade & Downgrade</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-md">
          <Label htmlFor="upgrade-rule">Sugerir upgrade automático quando o cliente atingir 90% do limite de uso.</Label>
          <Switch id="upgrade-rule" defaultChecked />
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-md">
          <Label htmlFor="downgrade-rule">Oferecer downgrade se o uso for baixo por 3 meses consecutivos.</Label>
          <Switch id="downgrade-rule" />
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-md">
          <Label htmlFor="prorata-rule">Habilitar reembolso proporcional (pró-rata) em mudanças de plano.</Label>
          <Switch id="prorata-rule" defaultChecked />
        </div>
      </CardContent>
    </Card>
  );
};

export default RegrasUpgrade;