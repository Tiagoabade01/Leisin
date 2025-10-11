import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users } from "lucide-react";
import { cn } from "@/lib/utils";

const teamWorkload = [
  { name: "Ana Faria", workload: 90 },
  { name: "João Lima", workload: 65 },
  { name: "Maria Souza", workload: 40 },
  { name: "Sistema", workload: 15 },
];

const getInitials = (name: string = '') => name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();

const getProgressColor = (workload: number) => {
  if (workload > 80) return "[&>*]:bg-red-500";
  if (workload > 60) return "[&>*]:bg-yellow-500";
  return "[&>*]:bg-tech-green";
};

const PrazosQuadroServicos = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-gray-300" />
          <CardTitle className="text-white text-base">Quadro de Serviços</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {teamWorkload.map(member => (
          <div key={member.name}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="text-xs bg-gray-600 text-gray-300">{getInitials(member.name)}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{member.name}</span>
              </div>
              <span className="text-xs font-mono">{member.workload}%</span>
            </div>
            <Progress value={member.workload} className={cn("h-2", getProgressColor(member.workload))} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PrazosQuadroServicos;