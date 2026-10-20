import Section from "./Section";
import { lrTabela } from "../data/results";
export default function BayesModel() {
  return (
    <Section id="modelo" title="O modelo" sub="Bayes de verdade. Os inputs são absurdos; a matemática, não.">
      <div className="panel p-6 font-mono text-center text-lg sm:text-xl text-cyan overflow-x-auto">
        P(rolê | “vamos marcar”) = P(“vamos marcar” | rolê) × P(rolê) / P(“vamos marcar”)
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {[["Prior", "Base rate: só 17% das mensagens têm intenção real."], ["Sinais", "Likelihood ratios de cada padrão linguístico."], ["Posterior", "O score de conversão."]].map(([h, t]) => (
          <div key={h} className="panel"><div className="panel-h">{h}</div><p className="p-4 text-sm text-slate-300">{t}</p></div>
        ))}
      </div>
      <div className="panel mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="text-left text-slate-500 text-xs"><th className="p-3">Sinal na mensagem</th><th>LR</th><th>Leitura do analista</th></tr></thead>
          <tbody>{lrTabela.map(([s, lr, l, hl]) => (
            <tr key={s} className="border-t border-[#1f2a40]" style={hl ? { background: "rgba(250,204,21,.12)" } : undefined}>
              <td className="p-3">{s}</td><td className="font-mono text-cyan">{lr}</td><td className="text-slate-400">{l}</td></tr>
          ))}</tbody>
        </table>
      </div>
    </Section>
  );
}
