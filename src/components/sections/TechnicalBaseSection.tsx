import { ArrowRight } from "lucide-react";
import { content } from "../../content/content";

export function TechnicalBaseSection() {
  return (
    <section id="technology" className="border-t border-black/10 bg-white py-20 md:py-24">
      <div className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.15fr]">
          <div>
            <p className="eyebrow">{content.technology.kicker}</p>
            <h2 className="mt-8 max-w-2xl text-[clamp(3rem,5vw,5.5rem)] font-black leading-[1.08]">
              {content.technology.title}
            </h2>
            <img
              src={content.technology.image}
              alt={content.technology.title}
              className="mt-14 aspect-[0.88] w-full max-w-[480px] rounded-[20px] object-cover"
            />
          </div>

          <div>
            <p className="ml-auto max-w-sm text-lg font-semibold leading-snug">{content.technology.text}</p>
            <div className="mt-24 grid gap-x-8 gap-y-10 md:grid-cols-2">
              {content.technology.cards.map((card) => (
                <article key={card.title} className="border-t border-black/15 pt-8">
                  <h3 className="text-2xl font-black">{card.title}</h3>
                  <p className="mt-4 min-h-16 text-sm font-semibold leading-relaxed text-neutral-700">{card.text}</p>
                  <a href="#contacts" className="mt-8 inline-flex items-center gap-3 text-base font-black">
                    Подробнее
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-[#1c1b1b] text-white">
                      <ArrowRight size={17} />
                    </span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
