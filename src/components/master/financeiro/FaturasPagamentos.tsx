import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { MoreHorizontal, BrainCircuit, Search, AlertTriangle, CheckCircle2, Clock } from "lucide-react";
import { showSuccess } from '@/utils/toast';

const getStatusIcon = (status: string) => {
  if (status === 'Pago') return <CheckCircle2 className="h-5 w-5 text-green-400" />;
  if (status === 'Atrasada') return <AlertTriangle className="h-5 w-5 text-red-400" />;
  if (status === 'Cancelada') return <AlertTriangle className="h-5 w-5 text-gray-500" />;
  return <Clock className="h-5 w-5 text-yellow-400" />;
};

const FaturasPagamentos = ({ invoices, setInvoices }) => {
  const [isCancelAlertOpen, setIsCancelAlertOpen] = useState(false);
  const [invoiceToCancel, setInvoiceToCancel] = useState<string | null>(null);

  const handleResend = (id: string) => {
    showSuccess(`E-mail de cobrança da fatura ${id} reenviado.`);
  };

  const handleCancelClick = (id: string) => {
    setInvoiceToCancel(id);
    setIsCancelAlertOpen(true);
  };

  const handleCancelConfirm = () => {
    if (invoiceToCancel) {
      setInvoices(prev => prev.map(inv => inv.id === invoiceToCancel ? { ...inv, status: 'Cancelada' } : inv));
      showSuccess(`Fatura ${invoiceToCancel} cancelada.`);
      setIsCancelAlertOpen(false);
      setInvoiceToCancel(null);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Controle de Faturas</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800"><TableHead>Fatura</TableHead><TableHead>Cliente</TableHead><TableHead>Valor</TableHead><TableHead>Método</TableHead><TableHead>Vencimento</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Ações</TableHead></TableRow></TableHeader>
                <TableBody>
                  {invoices.map(inv => (
                    <TableRow key={inv.id} className="border-gray-700">
                      <TableCell>{inv.id}</TableCell>
                      <TableCell>{inv.client}</TableCell>
                      <TableCell>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inv.value)}</TableCell>
                      <TableCell>{inv.method}</TableCell>
                      <TableCell>{inv.dueDate}</TableCell>
                      <TableCell><div className="flex items-center gap-2">{getStatusIcon(inv.status)} {inv.status}</div></TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild><Button variant="ghost" size="icon" disabled={inv.status === 'Cancelada'}><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
                            <DropdownMenuItem><Search className="h-4 w-4 mr-2" />Ver Detalhes</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleResend(inv.id)}>Reenviar Cobrança</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleCancelClick(inv.id)} className="text-red-400 hover:!text-red-300">Cancelar</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-blue-400" /><CardTitle className="text-white">IA Auxiliar</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p>"<strong>5 faturas</strong> estão prestes a vencer nas próximas 48h — sugerir envio de lembrete automático."</p>
            <p>"Cliente <strong>Terlla Incorporadora</strong> tem 3 faturas consecutivas atrasadas — risco de churn alto."</p>
          </CardContent>
        </Card>
      </div>

      <AlertDialog open={isCancelAlertOpen} onOpenChange={setIsCancelAlertOpen}>
        <AlertDialogContent className="bg-gray-900 text-white border-gray-700">
          <AlertDialogHeader><AlertDialogTitle>Confirmar Cancelamento</AlertDialogTitle><AlertDialogDescription className="text-gray-300">Tem certeza que deseja cancelar a fatura {invoiceToCancel}? Esta ação não pode ser desfeita.</AlertDialogDescription></AlertDialogHeader>
          <AlertDialogFooter><AlertDialogCancel asChild><Button variant="ghost">Voltar</Button></AlertDialogCancel><AlertDialogAction onClick={handleCancelConfirm} asChild><Button variant="destructive">Confirmar Cancelamento</Button></AlertDialogAction></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default FaturasPagamentos;