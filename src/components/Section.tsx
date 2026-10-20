import { ReactNode } from "react";
export default function Section({ id, title, sub, children }: { id: string; title: string; sub?: string; children: ReactNode }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-5 py-14 border-t border-[#1f2a40]">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {sub && <p className="text-slate-400 mt-1 mb-6 max-w-2xl">{sub}</p>}
      {!sub && <div className="mb-6" />}
      {children}
    </section>
  );
}
