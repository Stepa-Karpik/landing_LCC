import { ArrowLeft, ArrowRight, Cpu, Factory, PackageCheck, ShipWheel } from "lucide-react";
import { content } from "../../content/content";

const icons = [ShipWheel, Factory, PackageCheck, Cpu];

export function IndustriesSection() {
  return (
    <section id="industries" className="border-t border-black/10 bg-white py-20 md:py-24">
      <div className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <div>
            <p className="eyebrow">{content.industries.kicker}</p>
            <h2 className="mt-8 max-w-3xl text-[clamp(3rem,5vw,5.5rem)] font-black leading-[1.06]">
              {content.industries.title}
            </h2>
          </div>
          <div className="lg:pt-20">
            <p className="text-lg font-semibold leading-snug">{content.industries.text}</p>
            <div className="mt-10 flex items-center gap-5">
              <button className="grid h-12 w-12 place-items-center rounded-full border border-black/10 text-neutral-400" type="button">
                <ArrowLeft size={20} />
              </button>
              <div className="h-[2px] flex-1 bg-black">
                <div className="h-full w-1/2 bg-black" />
              </div>
              <button className="grid h-12 w-12 place-items-center rounded-full border border-black text-black" type="button">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.industries.cards.map((card, index) => {
            const Icon = icons[index];
            const active = index === 1;
            return (
              <article
                key={card.title}
                className={`min-h-[350px] rounded-[20px] p-7 ${active ? "bg-[#474545] text-white" : "bg-[#f4f4f4] text-[#1c1b1b]"}`}
              >
                <div className={`grid h-16 w-16 place-items-center rounded-full ${active ? "bg-white text-[#1c1b1b]" : "bg-[#1c1b1b] text-white"}`}>
                  <Icon size={24} />
                </div>
                <div className="mt-36">
                  <h3 className="text-2xl font-black">{card.title}</h3>
                  <p className={`mt-4 text-sm font-semibold leading-relaxed ${active ? "text-white/80" : "text-neutral-700"}`}>
                    {card.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
