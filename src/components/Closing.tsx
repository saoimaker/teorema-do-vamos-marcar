import { useState } from "react";
import Section from "./Section";
import { casos, glossario } from "../data/results";

export function CaseStudies() {
  return (
    <Section id="casos" title="Relatórios individuais" sub="Casos de estudo selecionados da amostra.">
      <div className="grid md:grid-cols-2 gap-4">
        {casos.map(c => {
          const ok = c.dias < 5;
          return (
            <div key={c.n} className="panel"><div className="panel-h flex justify-between"><span>CASO {c.n}</span>
              <span className={ok ? "text-win" : "text-churn"}>{ok ? "CONVERTIDO" : "ENCERRADO SEM CONVERSÃO"}</span></div>
              <div className="p-4 text-sm space-y-2">
                <div className="bg-[#202c33] rounded-lg rounded-tl-none px-3 py-2 font-mono inline-block">{c.msg}</div>
                <p className="text-slate-400">Motivo alegado: <span className="text-slate-200">{c.motivo}</span> · Ciclo de vida: {c.dias} dias · Reaquecimentos: {c.reaq}</p>
                <p className="text-slate-500">Observação do analista: {c.obs}</p>
              </div></div>);
        })}
      </div>
    </Section>
  );
}
export function Glossary() {
  return (
    <Section id="glossario" title="Glossário executivo">
      <dl className="panel divide-y divide-[#1f2a40]">{glossario.map(([k, v]) => (
        <div key={k} className="p-4 flex flex-col sm:flex-row gap-1 sm:gap-6"><dt className="font-mono text-cyan sm:w-60 shrink-0">“{k}”</dt><dd className="text-slate-300">{v}</dd></div>))}</dl>
    </Section>
  );
}
const ABNT = "TEOREMA DO VAMOS MARCAR. Estudo bayesiano sobre a não-conversão de planos sociais no Brasil contemporâneo (n = 214). Journal of Applied Bad Deciences, n. 2, 2026. Dados fictícios.";
export function Conclusion() {
  const [ok, setOk] = useState(false);
  const copy = async () => { try { await navigator.clipboard.writeText(ABNT); setOk(true); setTimeout(() => setOk(false), 1800); } catch {} };
  return (
    <Section id="conclusao" title="Conclusão e recomendações estratégicas">
      <div className="panel p-5">
        <ol className="list-decimal pl-5 space-y-2 text-slate-200">
          <li>Ao detectar “vamos marcar”, responder imediatamente com data específica (“quinta, 20h?”). O dado mostra: 100% das conversões tinham data marcada.</li>
          <li>“logo logo” e “aí a gente vê” indicam lead esfriando: mover para o fim do pipeline ou descartar sem drama.</li>
          <li>Não investir recursos emocionais em leads que não responderam disponibilidade. ROI negativo documentado.</li>
        </ol>
        <p className="mt-5 text-slate-400">O “vamos marcar” é, clinicamente… estatisticamente indistinguível de uma despedida cordial. A diferença entre os 4,2% e os 96% chama-se data específica.</p>
      </div>
      <div className="panel mt-4"><div className="panel-h flex justify-between items-center"><span>Como citar</span>
        <button onClick={copy} className="text-cyan hover:underline">{ok ? "Copiado" : "Copiar citação"}</button></div>
        <p className="p-4 font-mono text-xs text-slate-300">{ABNT}</p></div>
    </Section>
  );
}
export function Footer() {
  return (
    <footer className="border-t border-[#1f2a40] py-10 px-5 text-center text-sm text-slate-500 max-w-3xl mx-auto">
      Estudo independente. Dados 100% fictícios. A única coisa real aqui é o Bayes — e o seu último “vamos marcar” não respondido. Este relatório não foi revisado por ninguém, como todo bom estudo sobre rolês.
    </footer>
  );
}
