import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";
import { useSiteContent } from "../../context/LanguageContext";

export function ServicesSection() {
  const copy = useSiteContent();
  const [active, setActive] = useState(0);

  return (
    <section className="min-h-[calc(100svh-3.5rem)] border-t border-black/10 bg-white py-10 md:py-12">
      <div className="page-shell">
        <h1 className="max-w-6xl text-[clamp(3.3rem,6vw,8rem)] font-black leading-[0.95] tracking-normal">
          {copy.services.title}
        </h1>

        <motion.div layout className="mt-10 grid auto-rows-[250px] gap-5 lg:grid-cols-3 xl:auto-rows-[285px]">
          {copy.services.cards.map((card, index) => {
            const isActive = active === index;
            return (
              <motion.article
                layout
                key={card.title}
                onClick={() => setActive(index)}
                className={`group relative cursor-pointer overflow-hidden rounded-[22px] bg-neutral-950 text-white ${
                  isActive ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
                transition={{ layout: { duration: 0.58, ease: [0.16, 1, 0.3, 1] } }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-82 transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="flex items-end justify-between gap-5">
                    <h2 className="max-w-xl text-[clamp(1.8rem,3vw,4rem)] font-black leading-none">{card.title}</h2>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-[#1c1b1b] transition group-hover:rotate-45">
                      <ArrowUpRight size={22} />
                    </span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive ? (
                      <motion.ul
                        initial={{ opacity: 0, y: 18, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: 18, height: 0 }}
                        transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-7 grid gap-3 overflow-hidden md:grid-cols-2"
                      >
                        {card.details.map((detail) => (
                          <li key={detail} className="flex gap-3 rounded-full bg-white/12 px-4 py-3 text-sm font-bold leading-snug text-white backdrop-blur">
                            <Check className="mt-0.5 shrink-0" size={16} />
                            {detail}
                          </li>
                        ))}
                      </motion.ul>
                    ) : null}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
