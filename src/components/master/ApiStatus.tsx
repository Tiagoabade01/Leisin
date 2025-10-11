import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Power } from "lucide-react";

const apis = [
  { name: "BigDataCorp", status: "online" },
  { name: "ARISP / ONR", status: "online" },
  { name: "DocuSign", status: "offline" },
  { name: "Gmail API", status: "online" },
];

export const ApiStatus = () => (
  <Card className="bg-gray-800 border-gray-700 text-white">
    <CardHeader>
      <CardTitle className="text-white">Status das APIs e Integrações</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3">
        {apis.map(api => (
          <li key={api.name} className="flex items-center justify-between">
            <div className="flex items-center">
              {api.status === 'online' ? <CheckCircle className="w-5 h-5 mr-3 text-green-500" /> : <XCircle className="w-5 h-5 mr-3 text-red-500" />}
              <span>{api.name}</span>
            </div>
            <Button variant="outline" size="sm" className="text-xs h-7 bg-gray-700 border-gray-600 hover:bg-gray-600">
              <Power className="h-3 w-3 mr-1" /> Testar
            </Button>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);