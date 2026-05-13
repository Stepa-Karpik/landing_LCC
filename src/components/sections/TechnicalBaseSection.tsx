import { technicalBase } from "../../data/site-data";
import { ImageGallery } from "../ui/ImageGallery";
import { SectionIntro } from "../ui/SectionIntro";

const capabilities = [
  "Промышленная зона, КПП и контроль доступа",
  "Видеонаблюдение по периметру",
  "Развитые подъездные пути",
  "Склад запчастей и комплектующих",
  "Прямые поставки от производителей КНР",
  "Ремонт контейнеров любой сложности",
];

export function TechnicalBaseSection() {
  return (
    <section id="technical-base" className="section-pad">
      <div className="page-shell">
        <div className="surface p-5 md:p-8">
          <SectionIntro
            eyebrow="Техническая база"
            title="Территория, цех, техника"
            lead="Комплекс собран вокруг практической производительности: площадка, ремонтный цех, техника, контроль доступа и запас комплектующих."
          />

          <ImageGallery items={technicalBase} />

          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item} className="rounded-[22px] border border-black/10 bg-white p-5 text-xl font-black leading-tight md:p-6 md:text-2xl">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
