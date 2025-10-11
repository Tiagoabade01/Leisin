import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideProps } from "lucide-react";

interface ReportCardProps {
  title: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  data: {
    kpis: { metric: string; value: string; change: string }[];
    reports: string[];
  };
}

const ReportCategoryCard = ({ title, icon: Icon, data }: ReportCardProps) => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-gray-300" />
          <CardTitle className="text-white text-base">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div className="space-y-2 text-xs mb-4">
          {data.kpis.map(kpi => (
            <div key={kpi.metric} className="flex justify-between">
              <span className="text-gray-400">{kpi.metric}</span>
              <span className="font-bold">{kpi.value} <span className={kpi.change.startsWith('-') ? 'text-red-400' : 'text-tech-green'}>{kpi.change}</span></span>
            </div>
          ))}
        </div>
        <div className="mt-auto space-y-2">
          {data.reports.map(report => (
            <div key={report} className="flex justify-between items-center p-2 bg-gray-800/50 rounded-md">
              <span className="text-sm">{report}</span>
              <Button size="sm" variant="ghost" className="text-xs h-6">Ver</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportCategoryCard;