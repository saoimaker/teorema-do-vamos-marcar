import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, LabelList, ReferenceDot, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Section from "./Section";
import { canal, dias, funil, heat, heatNotas, horas, motivos, retencao } from "../data/results";

const P = ({ t, children, cls = "" }: { t: string; children: React.ReactNode; cls?: string }) =>
  <div className={`panel ${cls}`}><div className="panel-h">{t}</div><div className="p-4">{children}</div></div>;
const ax = { stroke: "#64748b", fontSize: 11 };
const tip = { contentStyle: { background: "#0b1220", border: "1px solid #1f2a40" } };

export default function ResultsDashboard() {
  return (
    <Section id="resultados" title="Resultados">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {[["4,2%", "conversão geral"], ["2,7", "reaquecimentos por lead perdido"], ["11 dias", "ciclo de vida médio"], ["0", "conversões sem data marcada"]].map(([k, l]) => (
          <div key={l} className="panel p-4"><div className="font-mono text-3xl text-cyan">{k}</div><div className="text-xs text-slate-400 mt-1">{l}</div></div>))}
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <P t="Funil de conversão do “vamos marcar”">
          <div style={{ height: 240 }}><ResponsiveContainer><BarChart data={funil} layout="vertical" margin={{ right: 30 }}>
            <XAxis type="number" hide /><YAxis type="category" dataKey="etapa" width={120} {...ax} /><Tooltip {...tip} />
            <Bar dataKey="n" radius={3}>{funil.map((f, i) => <Cell key={i} fill={i === 4 ? "#22c55e" : "#22d3ee"} />)}<LabelList dataKey="n" position="right" fill="#e2e8f0" fontSize={11} /></Bar>
          </BarChart></ResponsiveContainer></div>
          <p className="text-xs text-win mt-2">FATO RELEVANTE: 100% das conversões tinham data marcada. Recomendação: sempre perguntar a data. — OS 4,2% LENDÁRIOS</p>
        </P>
        <P t="Sincericidade por canal (%)">
          <div style={{ height: 240 }}><ResponsiveContainer><BarChart data={canal} layout="vertical" margin={{ right: 30 }}>
            <XAxis type="number" hide /><YAxis type="category" dataKey="canal" width={110} {...ax} /><Tooltip {...tip} />
            <Bar dataKey="v" fill="#22d3ee" radius={3}><LabelList dataKey="v" position="right" fill="#e2e8f0" fontSize={11} /></Bar>
          </BarChart></ResponsiveContainer></div>
        </P>
        <P t="Retenção do plano por coorte (%)">
          <div style={{ height: 240 }}><ResponsiveContainer><AreaChart data={retencao}>
            <CartesianGrid stroke="#1f2a40" /><XAxis dataKey="dia" {...ax} /><YAxis {...ax} /><Tooltip {...tip} />
            <Area dataKey="v" stroke="#ef4444" fill="#ef4444" fillOpacity={0.25} />
            <ReferenceDot x={3} y={49} r={5} fill="#f59e0b" stroke="none" />
          </AreaChart></ResponsiveContainer></div>
          <p className="text-xs text-amber mt-2">Dia 3: aqui geralmente chega o “aí, desmarcou?” — o lead foi consultado uma última vez.</p>
        </P>
        <P t="Motivo alegado da não-conversão (%)">
          <div style={{ height: 240 }}><ResponsiveContainer><BarChart data={motivos}>
            <XAxis dataKey="m" {...ax} /><YAxis {...ax} /><Tooltip {...tip} />
            <Bar dataKey="v" fill="#ef4444" radius={3}><LabelList dataKey="v" position="top" fill="#e2e8f0" fontSize={11} /></Bar>
          </BarChart></ResponsiveContainer></div>
        </P>
      </div>
      <P t="Heatmap: dia × horário vs. probabilidade de intenção real (%)" cls="mt-4">
        <div className="overflow-x-auto"><div className="grid gap-1 min-w-[420px]" style={{ gridTemplateColumns: "40px repeat(5,1fr)" }}>
          <div />{horas.map(h => <div key={h} className="text-xs text-slate-500 text-center">{h}</div>)}
          {heat.map((row, r) => [<div key={"l" + r} className="text-xs text-slate-500 self-center">{dias[r]}</div>,
            ...row.map((v, c) => <div key={r + "-" + c} className="h-9 rounded text-[11px] font-mono flex items-center justify-center text-white"
              style={{ background: `rgba(34,211,238,${0.08 + v / 100 * 0.8})`, color: v > 50 ? "#0b1220" : "#cbd5e1" }}>{v}</div>)])}
        </div></div>
        <ul className="text-xs text-slate-400 mt-3 space-y-1">{heatNotas.map(n => <li key={n}>{n}</li>)}</ul>
      </P>
    </Section>
  );
}
