import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useSiteContent } from "../../context/LanguageContext";

const inactiveSlots = [
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-3 lg:row-start-2",
  "lg:col-start-1 lg:row-start-3",
  "lg:col-start-2 lg:row-start-3",
  "lg:col-start-3 lg:row-start-3",
];

const cornerLength = 25;
const cornerThickness = 1;
const cornerRadius = 22;

export function ServicesSection() {
  const copy = useSiteContent();
  const [active, setActive] = useState(0);
  const inactiveIndexes = copy.services.cards.map((_, index) => index).filter((index) => index !== active);

  return (
    <section className="min-h-[calc(100svh-3.5rem)] border-t border-black/10 bg-white py-5 md:py-8">
      <div className="page-shell">
        <motion.div
          layout
          className="grid auto-rows-[220px] gap-3 sm:gap-4 md:auto-rows-[230px] lg:h-[calc(100svh-7.5rem)] lg:min-h-[700px] lg:grid-cols-3 lg:grid-rows-3 xl:min-h-[760px]"
        >
          {copy.services.cards.map((card, index) => {
            const isActive = active === index;
            const inactiveSlot = inactiveSlots[inactiveIndexes.indexOf(index)] || "";
            return (
              <motion.article
                layout
                key={card.title}
                onClick={() => setActive(index)}
                className={`group relative min-w-0 cursor-pointer overflow-hidden rounded-[20px] bg-neutral-950 text-white md:rounded-[22px] ${
                  isActive ? "lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-1" : inactiveSlot
                } ${isActive ? "min-h-[440px] lg:min-h-0" : ""
                }`}
                transition={{ layout: { duration: 0.58, ease: [0.16, 1, 0.3, 1] } }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-82 transition duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 ${isActive ? "bg-gradient-to-t from-black/60 via-black/10 to-transparent" : "bg-gradient-to-t from-black/78 via-black/20 to-transparent"}`} />
                <div className={`absolute inset-x-0 p-5 md:p-8 ${isActive ? "bottom-[214px] sm:bottom-[198px] md:bottom-[156px]" : "bottom-0"}`}>
                  <div className="flex min-w-0 items-end justify-between gap-3 md:gap-5">
                    <h2 className={`min-w-0 max-w-xl font-black leading-none ${isActive ? "text-[clamp(2rem,10vw,5.2rem)] md:text-[clamp(2.25rem,4.2vw,5.2rem)]" : "text-[clamp(1.35rem,7vw,2.4rem)] md:text-[clamp(1.45rem,2vw,2.4rem)]"}`}>
                      {card.title}
                    </h2>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[#1c1b1b] transition group-hover:rotate-45 md:h-12 md:w-12">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isActive ? (
                    <>
                      <ServiceCorners />
                      <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 24 }}
                        transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-x-0 bottom-0 min-h-[214px] bg-white px-5 py-5 text-[#1c1b1b] sm:min-h-[198px] md:min-h-[156px] md:px-8"
                      >
                        <ul className="grid gap-x-8 gap-y-2 md:grid-cols-2">
                          {card.details.map((detail) => (
                            <li key={detail} className="text-[0.95rem] font-black leading-tight md:text-base">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCorners() {
  const long = `${cornerLength}px`;
  const radius = `${cornerRadius}px`;

  return (
    <>
      <span
        className="pointer-events-none absolute bottom-0 left-0 z-20 border-b border-l border-black"
        style={{
          width: long,
          height: long,
          borderBottomLeftRadius: radius,
          borderBottomWidth: cornerThickness,
          borderLeftWidth: cornerThickness,
        }}
      />
      <span
        className="pointer-events-none absolute bottom-0 right-0 z-20 border-b border-r border-black"
        style={{
          width: long,
          height: long,
          borderBottomRightRadius: radius,
          borderBottomWidth: cornerThickness,
          borderRightWidth: cornerThickness,
        }}
      />
    </>
  );
}
