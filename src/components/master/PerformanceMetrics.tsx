import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Server, FileDown, Brain } from "lucide-react";

export const PerformanceMetrics = () => (
  <Card className="bg-gray-800 border-gray-700 text-white">
    <CardHeader>
      <CardTitle>Métricas de Performance</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center"><Zap className="w-4 h-4 mr-2 text-yellow-400" /><span>Page Load</span></div>
        <span className="font-mono">350ms</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center"><Server className="w-4 h-4 mr-2 text-blue-400" /><span>Server Response</span></div>
        <span className="font-mono">85ms</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center"><FileDown className="w-4 h-4 mr-2 text-green-400" /><span>Doc Uploads/hr</span></div>
        <span className="font-mono">241</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center"><Brain className="w-4 h-4 mr-2 text-purple-400" /><span>IA Tokens/min</span></div>
        <span className="font-mono">1.2M</span>
      </div>
    </CardContent>
  </Card>
);