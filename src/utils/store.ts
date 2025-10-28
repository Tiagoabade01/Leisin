export type Lead = {
  name: string;
  email: string;
  phone: string;
  createdAt?: string;
};

export function saveLead(lead: Lead) {
  const current = JSON.parse(localStorage.getItem("leisin_leads") || "[]");
  const toSave = { ...lead, createdAt: new Date().toISOString() };
  current.push(toSave);
  localStorage.setItem("leisin_leads", JSON.stringify(current));
  return toSave;
}