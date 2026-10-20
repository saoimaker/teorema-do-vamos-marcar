import Section from "./Section";
const cards = [
  ["Amostra", "214", "mensagens de “vamos marcar” coletadas com consentimento do grupo"],
  ["Coleta", "Manual", "print + transcrição + scraping manual"],
  ["Modelo", "P = 0,17", "inferência bayesiana com prior P(intenção real) = 0,17"],
  ["Desfecho primário", "≤ 14 dias", "rolê executado em até 14 dias"],
];
export default function Methodology() {
  return (
    <Section id="metodologia" title="Metodologia">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map(([h, big, t]) => (
          <div key={h} className="panel"><div className="panel-h">{h}</div>
            <div className="p-4"><div className="font-mono text-2xl text-cyan">{big}</div><p className="text-sm text-slate-400 mt-2">{t}</p></div></div>
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-4">O comitê de ética liberou desde que a gente parasse de marcar rolês com eles.</p>
    </Section>
  );
}
