import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from "recharts";

type ClientReportModalProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  clientName?: string;
};

const COLORS = ["#6A5ACD", "#2EF3C1", "#FFBB28", "#FF8042"];

const ClientReportModal: React.FC<ClientReportModalProps> = ({ open, onOpenChange, clientName }) => {
  const activityData = [
    { name: "Jan", horas: 12 }, { name: "Fev", horas: 18 }, { name: "Mar", horas: 22 }, { name: "Abr", horas: 16 },
  ];
  const distData = [ { name: "Contratos", value: 6 }, { name: "Processos", value: 3 }, { name: "Consultivo", value: 5 } ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 text-white border-gray-700 max-w-3xl">
        <DialogHeader><DialogTitle>Relatório do Cliente {clientName ? `— ${clientName}` : ""}</DialogTitle></DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800/50 rounded-md p-3">
            <h4 className="text-sm mb-2">Horas por mês</h4>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={activityData}><XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} /><YAxis stroke="#a1a1aa" fontSize={12} /><Tooltip /><Legend /><Line type="monotone" dataKey="horas" stroke="#6A5ACD" /></LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-gray-800/50 rounded-md p-3">
            <h4 className="text-sm mb-2">Distribuição de trabalhos</h4>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart><Pie data={distData} dataKey="value" nameKey="name" outerRadius={70} label>
                {distData.map((entry, i) => (<Cell key={i} fill={COLORS[i % COLORS.length]} />))}
              </Pie><Tooltip /></PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <p className="text-sm text-risk-gold mt-2">💡 “Cliente com maior consumo de horas em março; recomenda-se revisão de escopo.”</p>
        <DialogFooter><Button variant="ghost" onClick={() => onOpenChange(false)}>Fechar</Button></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ClientReportModal;