import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/site-data";
import { SectionIntro } from "../ui/SectionIntro";

export function ServicesSection() {
  return (
    <section id="services" className="section-pad border-b border-neutral-950 bg-stone-100">
      <div className="page-shell">
        <SectionIntro
          eyebrow="Операционный контур"
          title="Услуги без слабых звеньев"
          lead="Один комплекс закрывает депо, ремонт, складскую обработку, перетарку, транспорт и обмен данными с операторами."
        />

        <div className="grid border-l border-t border-neutral-950 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="min-h-[360px] border-b border-r border-neutral-950 bg-stone-100 p-5 transition hover:bg-white md:p-7">
              <div className="flex items-start justify-between gap-5">
                <span className="text-sm font-black uppercase tracking-[0.16em] text-neutral-500">{service.kicker}</span>
                <ArrowUpRight size={22} strokeWidth={2.4} />
              </div>
              <h3 className="mt-12 text-4xl font-black uppercase leading-[0.92] md:text-5xl">{service.title}</h3>
              <p className="mt-6 text-base leading-relaxed text-neutral-700">{service.description}</p>
              <ul className="mt-8 space-y-3">
                {service.points.map((point) => (
                  <li key={point} className="border-t border-neutral-300 pt-3 text-sm font-bold uppercase tracking-[0.08em]">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
