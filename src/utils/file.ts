export type Row = Record<string, any>;

function toCSV(rows: Row[]): string {
  if (!rows || rows.length === 0) return "dados,";
  const headers = Array.from(
    rows.reduce((set, row) => {
      Object.keys(row).forEach((k) => set.add(k));
      return set;
    }, new Set<string>())
  );
  const escape = (val: any) => {
    const s = val === undefined || val === null ? "" : String(val);
    if (s.includes(",") || s.includes("\n") || s.includes('"')) {
      return `"${s.replace(/"/g, '""')}"`;
    }
    return s;
  };
  const headerLine = headers.join(",");
  const lines = rows.map((row) => headers.map((h) => escape(row[h])).join(","));
  return [headerLine, ...lines].join("\n");
}

function downloadBlob(content: string | Blob, filename: string, type: string) {
  const blob = content instanceof Blob ? content : new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function exportCSV(rows: Row[], filename = "relatorio.csv") {
  const csv = toCSV(rows);
  downloadBlob(csv, filename, "text/csv;charset=utf-8");
}

export function exportJSON(data: any, filename = "dados.json") {
  const json = JSON.stringify(data, null, 2);
  downloadBlob(json, filename, "application/json");
}