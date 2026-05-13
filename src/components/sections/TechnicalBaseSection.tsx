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
    <section id="technical-base" className="section-pad border-b border-neutral-950 bg-stone-100">
      <div className="page-shell">
        <SectionIntro
          eyebrow="Техническая база"
          title="Территория, цех, техника"
          lead="Комплекс собран вокруг практической производительности: площадка, ремонтный цех, техника, контроль доступа и запас комплектующих."
        />

        <ImageGallery items={technicalBase} />

        <div className="mt-10 grid border-l border-t border-neutral-950 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item) => (
            <div key={item} className="border-b border-r border-neutral-950 p-5 text-xl font-black uppercase leading-tight md:p-7 md:text-2xl">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
