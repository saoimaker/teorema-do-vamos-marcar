import { Line, LineChart, ResponsiveContainer } from "recharts";
import { ticker } from "../data/results";
const spark = [18, 15, 11, 9, 7, 6, 5, 4.6, 4.2].map((v, i) => ({ i, v }));
export default function Hero() {
  const t = [...ticker, ...ticker];
  return (
    <header className="relative overflow-hidden">
      <div className="bg-[#0f1829] border-b border-[#1f2a40] overflow-hidden whitespace-nowrap py-2 font-mono text-xs text-cyan">
        <div className="inline-block" style={{ animation: "tick 40s linear infinite", width: "max-content" }}>
          {t.map((x, i) => <span key={i} className="mx-8">{x}</span>)}
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-5 pt-16 pb-20 relative">
        <div aria-hidden className="absolute right-0 top-10 bg-[#1f2c33] text-slate-300 rounded-2xl px-8 py-5 font-mono text-2xl opacity-20 blur-sm select-none">vamos marcar aquele rolê 🍻</div>
        <p className="text-xs text-slate-500 mb-3">Relatórios › Planos sociais › Visão geral · Atualizado há 2 min · Amostra: 214</p>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">Teorema do Vamos Marcar</h1>
        <p className="mt-4 max-w-2xl text-slate-300 text-lg">Um estudo bayesiano sobre a não-conversão de planos sociais no Brasil contemporâneo. n = 214. Conversão: 4,2%. Achado relevante para o board.</p>
        <div className="mt-10 panel max-w-md">
          <div className="panel-h">Taxa de conversão geral</div>
          <div className="p-5 flex items-end gap-6">
            <div className="font-mono text-7xl font-semibold text-churn">4,2%</div>
            <div className="w-32 h-16"><ResponsiveContainer><LineChart data={spark}><Line dataKey="v" stroke="#ef4444" dot={false} strokeWidth={2} isAnimationActive /></LineChart></ResponsiveContainer></div>
          </div>
          <p className="px-5 pb-5 text-sm text-slate-400">De cada 100 “vamos marcar”, 4 viram rolê. Os outros 96 viraram lead frio.</p>
        </div>
        <nav className="mt-8 flex gap-5 text-sm text-slate-400">
          {[["metodologia","Metodologia"],["modelo","Modelo"],["calculadora","Calculadora"],["resultados","Resultados"],["casos","Casos"],["conclusao","Conclusão"]].map(([id, l]) => <a key={id} href={`#${id}`} className="hover:text-cyan">{l}</a>)}
        </nav>
      </div>
    </header>
  );
}
