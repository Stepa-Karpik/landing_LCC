import { useState } from "react";
import { repairPairs } from "../../data/site-data";
import { BeforeAfterSlider } from "../ui/BeforeAfterSlider";
import { SectionIntro } from "../ui/SectionIntro";

export function RepairSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = repairPairs[activeIndex];

  return (
    <section id="repair" className="section-pad border-b border-neutral-800 bg-neutral-950 text-white">
      <div className="page-shell">
        <SectionIntro
          eyebrow="Ремонт контейнера"
          title="Результат виден до приемки"
          lead="Блок до/после оставлен как ключевой коммерческий аргумент, но превращен в полноценное сравнение с точным управлением."
          inverted
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <BeforeAfterSlider before={active.before} after={active.after} title={active.title} />

          <aside className="flex min-w-0 flex-col justify-between border border-white/20 p-5 md:p-7">
            <div>
              <p className="eyebrow text-neutral-400">Кейс {String(activeIndex + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-4xl font-black uppercase leading-none">{active.title}</h3>
              <p className="mt-6 text-lg leading-relaxed text-neutral-300">{active.caption}</p>
            </div>

            <div className="mt-10 grid gap-2">
              {repairPairs.map((pair, index) => (
                <button
                  key={pair.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`border px-4 py-3 text-left text-sm font-black uppercase tracking-[0.1em] transition ${
                    activeIndex === index
                      ? "border-white bg-white text-neutral-950"
                      : "border-white/20 text-neutral-400 hover:border-white hover:text-white"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")} / {pair.title}
                </button>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
