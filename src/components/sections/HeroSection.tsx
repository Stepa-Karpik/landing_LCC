import { ArrowRight, Box, Globe2, Settings2, ShieldCheck } from "lucide-react";
import { company, hero, technicalFacts, whyChoose } from "../../data/site-data";

const icons = [Globe2, Settings2, Box, ShieldCheck];

export function HeroSection() {
  return (
    <section id="top" className="pt-6 md:pt-8">
      <div className="page-shell">
        <div className="surface">
          <div className="grid gap-8 px-5 pb-0 pt-12 md:px-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:pt-16">
            <div className="min-w-0">
              <div>
                <p className="eyebrow">/{hero.eyebrow}</p>
                <h1 className="display-title mt-5 max-w-5xl" aria-label={hero.title}>
                  {hero.titleLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
              </div>
            </div>

            <aside className="flex flex-col items-start justify-start gap-6 lg:pt-20">
              <p className="max-w-sm text-base font-semibold leading-snug text-neutral-800">{hero.lead}</p>
              <a href="#services" className="button-dark">
                Узнать больше <ArrowRight size={16} />
              </a>
            </aside>
          </div>

          <div className="relative mt-7 min-h-[330px] overflow-hidden bg-neutral-200 md:min-h-[500px]">
            <img
              src={hero.image}
              alt="Контейнерное депо ЛКК в Новороссийске"
              className="h-full min-h-[330px] w-full object-cover object-[center_56%] md:min-h-[500px]"
            />
            <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-xs font-black text-neutral-900">
              {company.shortName}
            </div>
            <div className="absolute bottom-6 left-6 max-w-xs rounded-[16px] bg-white/90 p-4 text-neutral-950 backdrop-blur">
              <p className="text-sm font-black">Новороссийск</p>
              <p className="mt-2 text-sm font-semibold leading-snug">г. Новороссийск, ул. 5-я Промышленная, 9</p>
            </div>
          </div>

          <div className="grid border-t border-black/10 md:grid-cols-3 xl:grid-cols-6">
            {technicalFacts.map((fact) => (
              <div key={fact.label} className="border-b border-black/10 p-5 md:border-r xl:border-b-0">
                <p className="text-3xl font-black leading-none text-neutral-950 md:text-4xl">{fact.value}</p>
                <p className="mt-2 text-sm font-semibold leading-tight text-neutral-600">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="surface mt-5 p-5 md:p-8">
          <div className="grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(280px,0.45fr)]">
            <div>
              <p className="eyebrow">/Почему выбирают нас</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Надежные и эффективные решения для контейнерного оборота
              </h2>
            </div>
            <p className="text-base font-semibold leading-relaxed text-neutral-700">
              ЛКК помогает операторам и грузовладельцам держать скорость, контроль и качество на каждом этапе обработки.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, index) => {
              const Icon = icons[index];
              return (
                <article key={item.title}>
                  <Icon size={20} strokeWidth={2.2} />
                  <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
