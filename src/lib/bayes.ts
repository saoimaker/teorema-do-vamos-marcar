// Matemática REAL: odds = prior/(1-prior); odds *= LR de cada sinal; posterior = odds/(1+odds)
export const PRIOR = 0.17;
export const LR: Record<string, number> = {
  data: 4.2, dm: 2.8, detalhe: 3.5, disponibilidade: 2.0, logo: 0.45, rs: 0.4,
  story: 0.15, grupo: 0.25, avegente: 0.3, emoji: 1.0,
};
export function posterior(sinais: string[], prior = PRIOR): number {
  let odds = prior / (1 - prior);
  for (const s of sinais) odds *= LR[s] ?? 1;
  return odds / (1 + odds);
}
export type Faixa = { cor: string; emoji: string; titulo: string; texto: string };
export function veredito(p: number): Faixa {
  if (p > 0.75) return { cor: "#22c55e", emoji: "🟢", titulo: "CONVERSÃO ESPERADA", texto: "Este lead é real. Prioridade máxima: fechar com data." };
  if (p >= 0.4) return { cor: "#facc15", emoji: "🟡", titulo: "SINAL MISTO", texto: "Requer qualificação: perguntar dia, horário e local antes que esfrie." };
  if (p >= 0.15) return { cor: "#f97316", emoji: "🟠", titulo: "EM OBSERVAÇÃO", texto: "Lead morno. Recomenda-se não investir recursos emocionais ainda." };
  return { cor: "#ef4444", emoji: "🔴", titulo: "NÃO-CONVERSÃO ESPERADA", texto: "Classificar como lead frio e realocar esforço social para outros canais." };
}
