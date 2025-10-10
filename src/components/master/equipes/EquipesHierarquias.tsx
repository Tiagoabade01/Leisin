import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

const EquipesHierarquias = () => {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Estrutura Organizacional</CardTitle></CardHeader>
      <CardContent className="font-mono text-sm space-y-2">
        <div className="flex items-center gap-2"><Users className="h-4 w-4" /> T3 NEXO ADMIN</div>
        <div className="pl-6 border-l border-gray-600 ml-2 space-y-2">
          <div>
            <p>├─ Jurídico & Compliance (Ana Paula)</p>
            <p className="pl-6">│  └─ 4 Analistas</p>
          </div>
          <div>
            <p>├─ Financeiro & Cobranças (Maria Lima)</p>
            <p className="pl-6">│  └─ 3 Assistentes</p>
          </div>
          <div>
            <p>└─ Comercial & CRM (João Vitor)</p>
            <p className="pl-6">   └─ 5 Executivos</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EquipesHierarquias;