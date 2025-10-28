import { showSuccess, showError } from "@/utils/toast";
import { exportCSV, exportJSON, Row } from "./file";
import { openFilePicker } from "./uploader";

function slugify(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
}

export const appActions = {
  newAnalysis(context?: string) {
    showSuccess(`Nova análise ${context ? `(${context}) ` : ""}criada com sucesso!`);
  },
  async uploadFiles(accept?: string) {
    const files = await openFilePicker({ accept, multiple: true });
    if (files.length === 0) {
      showError("Nenhum arquivo selecionado.");
      return [];
    }
    showSuccess(`${files.length} arquivo(s) enviado(s) com sucesso.`);
    return files;
  },
  generateReport(title: string, rows: Row[] = []) {
    const name = `${slugify(title)}-relatorio.csv`;
    exportCSV(rows.length ? rows : [{ mensagem: "Relatório gerado" }], name);
    showSuccess(`Relatório "${title}" gerado e baixado.`);
  },
  exportLog(title = "logs", rows: Row[] = []) {
    const name = `${slugify(title)}.json`;
    exportJSON(rows.length ? rows : [{ status: "ok", mensagem: "Exportação de logs" }], name);
    showSuccess("Logs exportados com sucesso.");
  },
  refreshAll() {
    showSuccess("Atualização de todas as integrações iniciada.");
  },
  openMap() {
    showSuccess("Mapa aberto (visualização ativada).");
  },
  runTest() {
    showSuccess("Teste de execução iniciado.");
  },
};