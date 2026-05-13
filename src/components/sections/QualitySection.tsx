import { industryCards, milestones, qualityPoints } from "../../data/site-data";
import { SectionIntro } from "../ui/SectionIntro";

export function QualitySection() {
  return (
    <section id="quality" className="section-pad">
      <div className="page-shell">
        <div className="surface p-5 md:p-8">
          <SectionIntro
            eyebrow="Для кого"
            title="Логистика для любого контейнерного бизнеса"
            lead="ЛКК закрывает практические задачи судоходных линий, экспедиторов и грузовладельцев."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {industryCards.map((card, index) => (
              <article
                key={card.title}
                className={`min-h-[300px] rounded-[16px] p-5 ${
                  index === 0 ? "bg-neutral-950 text-white" : "border border-black/10 bg-white text-neutral-950"
                }`}
              >
                <div className={index === 0 ? "grid h-11 w-11 place-items-center rounded-full bg-white text-neutral-950" : "grid h-11 w-11 place-items-center rounded-full bg-neutral-950 text-white"}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-24 text-3xl font-black leading-none">{card.title}</h3>
                <p className={index === 0 ? "mt-4 text-sm leading-relaxed text-neutral-300" : "mt-4 text-sm leading-relaxed text-neutral-600"}>
                  {card.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[16px] border border-black/10 bg-white p-6 md:p-8">
              <p className="eyebrow">Качество</p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {qualityPoints.map((point) => (
                  <p key={point} className="border-t border-black/10 pt-4 text-base font-semibold leading-snug text-neutral-700">
                    {point}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {milestones.map((milestone) => (
                <article key={milestone.year} className="grid rounded-[22px] border border-black/10 bg-white p-5 md:grid-cols-[160px_1fr] md:p-0">
                  <div className="md:border-r md:border-black/10 md:p-6">
                    <p className="text-5xl font-black leading-none md:text-6xl">{milestone.year}</p>
                  </div>
                  <div className="pt-4 md:p-6 md:pt-6">
                    <p className="text-xl font-semibold leading-snug md:text-2xl">{milestone.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
