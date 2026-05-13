import { useState } from "react";
import { content } from "../../content/content";
import { BeforeAfterSlider } from "../ui/BeforeAfterSlider";

export function RepairSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = content.repair.cases[activeIndex];

  return (
    <section id="repair" className="border-t border-black/10 bg-white py-20 md:py-24">
      <div className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
          <div>
            <p className="eyebrow">{content.repair.kicker}</p>
            <h2 className="mt-4 max-w-4xl text-[clamp(3rem,5vw,5.5rem)] font-black leading-none">
              {content.repair.title}
            </h2>
          </div>
          <p className="text-lg font-semibold leading-snug lg:pt-10">{content.repair.text}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <BeforeAfterSlider before={active.before} after={active.after} title={active.title} />
          <aside className="rounded-[20px] bg-[#f4f4f4] p-7">
            <p className="eyebrow">Кейс {String(activeIndex + 1).padStart(2, "0")}</p>
            <h3 className="mt-6 text-3xl font-black leading-tight">{active.title}</h3>
            <p className="mt-5 text-base font-semibold leading-relaxed text-neutral-700">{active.caption}</p>
            <div className="mt-10 grid gap-3">
              {content.repair.cases.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full border px-5 py-4 text-left text-sm font-black ${
                    activeIndex === index ? "border-[#1c1b1b] bg-[#1c1b1b] text-white" : "border-black/10 bg-white"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")} / {item.title}
                </button>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
