import { useState } from "react";
import { repairPairs } from "../../data/site-data";
import { BeforeAfterSlider } from "../ui/BeforeAfterSlider";
import { SectionIntro } from "../ui/SectionIntro";

export function RepairSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = repairPairs[activeIndex];

  return (
    <section id="repair" className="section-pad">
      <div className="page-shell">
        <div className="surface p-5 md:p-8">
          <SectionIntro
            eyebrow="Ремонт контейнера"
            title="Результат виден до приемки"
            lead="Интерактивное сравнение показывает, что именно меняется после дефектовки, ремонта и контроля качества."
          />

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
            <BeforeAfterSlider before={active.before} after={active.after} title={active.title} />

            <aside className="flex min-w-0 flex-col justify-between rounded-[16px] border border-black/10 bg-white p-5 md:p-6">
              <div>
                <p className="eyebrow">Кейс {String(activeIndex + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-4xl font-black leading-none text-neutral-950">{active.title}</h3>
                <p className="mt-6 text-lg leading-relaxed text-neutral-700">{active.caption}</p>
              </div>

              <div className="mt-10 grid gap-2">
                {repairPairs.map((pair, index) => (
                  <button
                    key={pair.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`rounded-full border px-4 py-3 text-left text-sm font-black transition ${
                      activeIndex === index
                        ? "border-neutral-950 bg-neutral-950 text-white"
                        : "border-black/10 bg-[#f3f3f3] text-neutral-600 hover:border-neutral-950 hover:text-neutral-950"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")} / {pair.title}
                  </button>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
