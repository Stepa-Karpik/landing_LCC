import { milestones, qualityPoints } from "../../data/site-data";
import { SectionIntro } from "../ui/SectionIntro";

export function QualitySection() {
  return (
    <section id="quality" className="section-pad border-b border-neutral-950 bg-white">
      <div className="page-shell">
        <SectionIntro
          eyebrow="Качество и доверие"
          title="РМРС, IICL, ACEP"
          lead="ЛКК строит репутацию на формальных допусках, подготовленной команде и повторяемом производственном процессе."
        />

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="border border-neutral-950 bg-neutral-950 p-6 text-white md:p-8">
            <p className="eyebrow text-neutral-400">Команда</p>
            <div className="mt-8 space-y-6">
              {qualityPoints.map((point) => (
                <p key={point} className="border-t border-white/20 pt-5 text-xl font-semibold leading-snug md:text-2xl">
                  {point}
                </p>
              ))}
            </div>
          </div>

          <div className="border-l border-t border-neutral-950">
            {milestones.map((milestone) => (
              <article key={milestone.year} className="grid border-b border-r border-neutral-950 md:grid-cols-[180px_1fr]">
                <div className="border-b border-neutral-950 p-5 md:border-b-0 md:border-r md:p-7">
                  <p className="text-5xl font-black leading-none md:text-6xl">{milestone.year}</p>
                </div>
                <div className="p-5 md:p-7">
                  <p className="text-xl font-semibold leading-snug md:text-2xl">{milestone.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
