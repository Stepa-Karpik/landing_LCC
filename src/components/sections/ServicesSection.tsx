import { ArrowUpRight } from "lucide-react";
import { showcaseServices } from "../../data/site-data";
import { SectionIntro } from "../ui/SectionIntro";

export function ServicesSection() {
  return (
    <section id="services" className="section-pad">
      <div className="page-shell">
        <div className="surface p-5 md:p-8">
          <div className="mb-5 grid overflow-hidden rounded-[16px] bg-neutral-950 text-white md:grid-cols-[1fr_360px]">
            <div className="p-6 md:p-8">
              <p className="eyebrow text-neutral-400">/Экспертиза ЛКК</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-black leading-none md:text-6xl">
                Логистика контейнеров без разрывов в процессе
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-300">
                От ворот депо до ремонта, склада, перетарки и передачи данных оператору.
              </p>
            </div>
            <div className="relative min-h-[220px] md:min-h-full">
              <img
                src={showcaseServices[0].image}
                alt="Контейнеры ЛКК"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <SectionIntro
            eyebrow="Услуги"
            title="Решения для контейнерного бизнеса"
            lead="Один комплекс закрывает депо, ремонт, складскую обработку, перетарку, транспорт и обмен данными с операторами."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {showcaseServices.map((service, index) => (
              <article
                key={service.title}
                className={`group relative min-h-[260px] overflow-hidden rounded-[16px] bg-neutral-900 text-white ${
                  index < 2 ? "lg:col-span-3" : "lg:col-span-2"
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-neutral-950">
                  <ArrowUpRight size={18} strokeWidth={2.4} />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <h3 className="max-w-sm text-3xl font-black leading-none md:text-4xl">{service.title}</h3>
                  <p className="mt-3 max-w-lg text-sm font-semibold leading-relaxed text-neutral-200">
                    {service.text}
                </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
