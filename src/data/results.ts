export const funil = [
  { etapa: "Mensagens enviadas", n: 214 }, { etapa: "Intenção real", n: 36 },
  { etapa: "Sobreviveu 7+ dias", n: 24 }, { etapa: "Data proposta", n: 9 }, { etapa: "Rolê aconteceu", n: 9 },
];
export const canal = [
  { canal: "DM com data", v: 61 }, { canal: "DM sem data", v: 23 }, { canal: "Grupo +5", v: 8 }, { canal: "Resposta a story", v: 4 },
];
export const retencao = [0, 1, 2, 3, 5, 7, 10, 14].map(d => ({ dia: d, v: Math.round(100 * Math.exp(-d / 4.2)) }));
export const motivos = [
  { m: "depois eu te chamo", v: 45 }, { m: "aí tá difícil", v: 31 }, { m: "a semana virou", v: 24 },
];
export const dias = ["seg", "ter", "qua", "qui", "sex", "sáb", "dom"];
export const horas = ["9h", "14h", "18h", "21h", "23h"];
export const heat = [
  [14, 22, 12, 9, 6], [30, 61, 28, 14, 9], [22, 34, 20, 12, 8],
  [25, 38, 33, 20, 18], [28, 40, 52, 66, 88], [10, 18, 30, 41, 47], [5, 8, 6, 3, 4],
];
export const heatNotas = ["ter 14h (61%): o horário mais sincero do Brasil", "sex 23h (88%): não é intenção, é urgência", "dom 21h (3%): semana que vem a gente se vê"];
export const ticker = [
  "“vamos marcar essa semana” detectado −3%", "“logo logo” em alta, 4ª semana consecutiva",
  "“vou ver se consigo” estável em 0,0% desde 2019", "pipeline do churrasco: 1 lead quente", "pico de sincericidade às 23h47",
];
export const lrTabela: [string, string, string, boolean][] = [
  ["Data específica (“quinta?”)", "×4,2", "sinal de compra — fechar logo", true],
  ["DM pessoal (não grupo)", "×2,8", "lead direto, sem intermediários", false],
  ["Lembrou de detalhe antigo", "×3,5", "intenção confirmada por dados históricos", true],
  ["Perguntou disponibilidade", "×2,0", "qualificação ativa do lead", false],
  ["Só “logo logo”", "×0,45", "sem data no roadmap", false],
  ["“rs” no final", "×0,40", "hedge do emissor", false],
  ["“aí a gente vê”", "×0,30", "backlog sem responsável", false],
  ["Marcado no grupo com +5 pessoas", "×0,25", "lead diluído entre stakeholders", false],
  ["Resposta a story", "×0,15", "interação passiva, não intenção", true],
];
export const casos = [
  { n: 187, msg: "vamos marcar um churrasco aí", motivo: "aí tá difícil", dias: 11, reaq: 2, obs: "nota-se padrão recorrente do emissor." },
  { n: 42, msg: "a gente precisa se ver logo logo rs", motivo: "a semana virou", dias: 14, reaq: 3, obs: "sem data no roadmap desde o kickoff." },
  { n: 103, msg: "vamos marcar aquele bar que vc falou, quinta 20h?", motivo: "—", dias: 2, reaq: 0, obs: "CONVERTIDO. Único tipo de caso com data e local." },
  { n: 156, msg: "depois eu te chamo", motivo: "depois eu te chamo", dias: 9, reaq: 4, obs: "o chamar nunca foi formalizado." },
];
export const glossario = [
  ["logo logo", "Sem data no roadmap desde 2019. Nenhuma sprint alocada."],
  ["aí a gente vê", "Backlog sem responsável."],
  ["vou te chamar", "O chamar nunca foi formalizado em contrato."],
  ["essa semana eu tô livre!", "Otimismo não suportado pelos dados."],
  ["depois eu te chamo", "Follow-up classificado como lead frio permanente."],
];
