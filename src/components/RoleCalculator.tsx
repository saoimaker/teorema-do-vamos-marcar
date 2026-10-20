import { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";
import Section from "./Section";
import { posterior, veredito } from "../lib/bayes";

const canais = [["dm", "DM pessoal"], ["grupo", "Grupo +5 pessoas"], ["story", "Resposta a story"]];
const padroes = [["data", "data específica"], ["logo", "“logo logo”"], ["rs", "“rs”"], ["avegente", "“aí a gente vê”"], ["disponibilidade", "perguntou disponibilidade"], ["detalhe", "lembrou de detalhe antigo"], ["emoji", "emoji 🍻"]];
const frag: Record<string, string> = { data: "quinta, 20h?", logo: "logo logo", rs: "rs", avegente: "aí a gente vê", disponibilidade: "aí tu pode?", detalhe: "naquele bar que vc falou", emoji: "🍻" };
const etapas = ["consultando base de 214 amostras...", "normalizando padrões linguísticos...", "calculando posterior..."];

export default function RoleCalculator() {
  const [canal, setCanal] = useState<string>("dm");
  const [sel, setSel] = useState<string[]>([]);
  const [fase, setFase] = useState(-1);
  const [score, setScore] = useState<number | null>(null);
  const [shown, setShown] = useState(0);
  const timers = useRef<number[]>([]);
  const toggle = (k: string) => { setSel(s => s.includes(k) ? s.filter(x => x !== k) : [...s, k]); setScore(null); };
  const sinais = [canal, ...sel];
  const msg = "vamos marcar aquele rolê " + sel.map(k => frag[k]).filter(Boolean).join(", ");

  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const rodar = () => {
    setScore(null); setFase(0);
    etapas.forEach((_, i) => timers.current.push(window.setTimeout(() => setFase(i), i * 900)));
    timers.current.push(window.setTimeout(() => {
      const p = posterior(sinais) * 100;
      setFase(-1); setScore(p);
      animate(0, p, { duration: 1.2, onUpdate: v => setShown(v) });
    }, etapas.length * 900));
  };
  const v = score !== null ? veredito(score / 100) : null;
  const chip = (on: boolean) => `px-3 py-1.5 rounded border text-sm ${on ? "border-cyan bg-cyan/15 text-cyan" : "border-[#2a3650] text-slate-300 hover:border-slate-500"}`;

  return (
    <Section id="calculadora" title="Calculadora do Rolê" sub="Informe os sinais da mensagem recebida. O modelo devolve a probabilidade posterior de conversão.">
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="panel"><div className="panel-h">Mensagem analisada</div>
          <div className="p-5 bg-[#0b141a] min-h-[160px] flex flex-col justify-center">
            <div className="self-start max-w-[85%] bg-[#202c33] rounded-lg rounded-tl-none px-3 py-2 font-mono text-sm">{msg}
              <div className="text-[10px] text-slate-500 text-right mt-1">14:02</div></div>
            <div className="self-start mt-3 text-xs font-mono px-2 py-1 border border-amber text-amber rounded">
              SINAL: {score === null ? "EM ANÁLISE" : score > 40 ? "FORTE" : "FRACO"} ▾</div>
          </div></div>
        <div className="panel"><div className="panel-h">Parâmetros</div>
          <div className="p-5 space-y-4">
            <div><p className="text-xs text-slate-500 mb-2">Canal</p><div className="flex flex-wrap gap-2">
              {canais.map(([k, l]) => <button key={k} onClick={() => { setCanal(k); setScore(null); }} className={chip(canal === k)}>{l}</button>)}</div></div>
            <div><p className="text-xs text-slate-500 mb-2">Padrões linguísticos</p><div className="flex flex-wrap gap-2">
              {padroes.map(([k, l]) => <button key={k} onClick={() => toggle(k)} aria-pressed={sel.includes(k)} className={chip(sel.includes(k))}>{l}</button>)}</div></div>
            <button onClick={rodar} disabled={fase >= 0} className="w-full py-3 rounded bg-cyan text-bg font-semibold disabled:opacity-60">RODAR O MODELO</button>
          </div></div>
      </div>
      <div className="panel mt-4 p-6 text-center min-h-[200px] flex flex-col items-center justify-center" aria-live="polite">
        {fase >= 0 && <p className="font-mono text-cyan text-sm">{etapas[fase]}</p>}
        {fase < 0 && v && score !== null && (<>
          <div className="font-mono text-7xl font-semibold" style={{ color: v.cor }}>{shown.toFixed(1).replace(".", ",")}%</div>
          <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", bounce: 0.5, delay: 1.2 }}
            className="mt-4 border-2 rounded px-5 py-3 max-w-md" style={{ borderColor: v.cor }}>
            <div className="font-bold" style={{ color: v.cor }}>{v.emoji} {v.titulo}</div><p className="text-sm text-slate-300 mt-1">{v.texto}</p>
          </motion.div></>)}
        {fase < 0 && score === null && <p className="text-slate-500 text-sm">Selecione os sinais e rode o modelo.</p>}
      </div>
    </Section>
  );
}
