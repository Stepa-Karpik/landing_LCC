import { ArrowRight } from "lucide-react";
import { company, hero, technicalFacts } from "../../data/site-data";

export function HeroSection() {
  return (
    <section id="top" className="border-b border-neutral-950">
      <div className="page-shell grid min-h-[calc(100svh-5rem)] gap-10 py-10 lg:grid-cols-[minmax(0,0.98fr)_minmax(360px,0.72fr)] lg:items-stretch">
        <div className="flex min-w-0 flex-col justify-between gap-16">
          <div className="pt-8 md:pt-16">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 className="display-title mt-5 max-w-5xl" aria-label={hero.title}>
              {hero.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </div>

          <div className="grid gap-8 md:grid-cols-[minmax(0,0.75fr)_auto] md:items-end">
            <p className="max-w-2xl text-xl font-semibold leading-snug text-neutral-800 md:text-2xl">
              {hero.lead}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contacts" className="button-dark">
                Связаться <ArrowRight size={16} />
              </a>
              <a href="#technical-base" className="button-ghost">
                Техбаза
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-w-0 overflow-hidden bg-neutral-950 max-sm:min-h-[360px] lg:min-h-full">
          <img src={hero.image} alt="Контейнерное депо ЛКК в Новороссийске" className="h-full w-full object-cover grayscale" />
          <div className="absolute inset-x-0 bottom-0 border-t border-white/30 bg-black/82 p-5 text-white md:p-7">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-neutral-300">{company.shortName}</p>
            <p className="mt-2 text-2xl font-black uppercase leading-none md:text-4xl">24/7 Новороссийск</p>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-950 bg-neutral-950 text-white">
        <div className="page-shell grid divide-y divide-white/15 md:grid-cols-3 md:divide-x md:divide-y-0 xl:grid-cols-6">
          {technicalFacts.map((fact) => (
            <div key={fact.label} className="py-6 md:px-5">
              <p className="text-3xl font-black uppercase leading-none md:text-4xl">{fact.value}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-neutral-400">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
