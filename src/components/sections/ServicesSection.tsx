import { content } from "../../content/content";

export function ServicesSection() {
  const [first, second, ...rest] = content.services.cards;

  return (
    <section id="services" className="border-t border-black/10 bg-white py-16 md:py-20">
      <div className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
          <div>
            <p className="eyebrow">{content.services.kicker}</p>
            <h2 className="mt-4 text-[clamp(3rem,5vw,5.5rem)] font-black leading-none">{content.services.title}</h2>
          </div>
          <div>
            <p className="text-lg font-semibold leading-snug">{content.services.text}</p>
            <a href="#contacts" className="mt-7 inline-flex rounded-full bg-[#1c1b1b] px-9 py-4 text-sm font-black text-white">
              {content.services.button}
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <ServiceCard card={first} size="large" />
          <ServiceCard card={second} size="large" />
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {rest.map((card) => (
            <ServiceCard key={card.title} card={card} size="small" />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  card,
  size,
}: {
  card: (typeof content.services.cards)[number];
  size: "large" | "small";
}) {
  return (
    <article className={`relative overflow-hidden rounded-[20px] bg-neutral-900 ${size === "large" ? "min-h-[355px]" : "min-h-[300px]"}`}>
      <img src={card.image} alt={card.title} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/78 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
        <h3 className="text-2xl font-black leading-tight md:text-3xl">{card.title}</h3>
        <p className="mt-3 line-clamp-2 max-w-xl text-sm font-semibold leading-relaxed text-white/85">{card.text}</p>
      </div>
    </article>
  );
}
