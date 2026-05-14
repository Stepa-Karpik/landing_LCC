import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useSiteContent } from "../../context/LanguageContext";

export function AboutCompanySection() {
  const copy = useSiteContent();
  const [active, setActive] = useState(0);
  const activeEvent = copy.aboutCompany.timeline[active];
  const progressHeight = `${(active / Math.max(1, copy.aboutCompany.timeline.length - 1)) * 100}%`;

  return (
    <section className="min-h-[calc(100svh-3.5rem)] border-t border-black/10 bg-white py-9 md:py-16">
      <div className="page-shell">
        <div>
          <h1 className="text-[clamp(2.9rem,15vw,9rem)] font-black leading-[0.9] tracking-normal md:text-[clamp(3.4rem,7.2vw,9rem)]">
            {copy.aboutCompany.title}
          </h1>
        </div>

        <div className="mt-10 grid gap-8 md:mt-14 xl:grid-cols-[minmax(270px,320px)_minmax(0,1fr)]">
          <div className="relative min-w-0 overflow-hidden md:overflow-visible xl:min-h-[640px]">
            <div className="absolute bottom-0 left-[7px] top-0 hidden w-px bg-black/10 md:block">
              <motion.div
                className="w-px bg-[#1c1b1b]"
                animate={{ height: progressHeight }}
                transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <div className="flex w-full min-w-0 gap-4 overflow-x-auto pb-3 md:grid md:gap-12 md:overflow-visible md:pb-0 md:pl-8 xl:gap-14">
              {copy.aboutCompany.timeline.map((event, index) => {
                const isActive = active === index;
                return (
                  <button
                    key={event.year}
                    type="button"
                    onClick={() => setActive(index)}
                    className="group relative min-w-[9.5rem] shrink-0 text-left md:min-w-0"
                  >
                    <span className={`block text-[clamp(2.8rem,13vw,6.4rem)] font-black leading-none transition duration-500 md:text-[clamp(3.4rem,5.6vw,6.4rem)] ${isActive ? "text-[#1c1b1b]" : "text-neutral-300"}`}>
                      {event.year}
                    </span>
                    <span className={`mt-3 block text-base font-black leading-tight transition md:mt-4 md:text-lg ${isActive ? "text-[#1c1b1b]" : "text-neutral-400"}`}>
                      {event.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="xl:sticky xl:top-24 xl:self-start">
            <motion.aside className="grid min-h-[unset] overflow-hidden rounded-[24px] bg-white lg:min-h-[620px] lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)] xl:min-h-[640px] xl:rounded-[28px]">
              <div className="relative h-[280px] overflow-hidden sm:h-[340px] lg:h-full lg:min-h-[620px]">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={activeEvent.image}
                    src={activeEvent.image}
                    alt={activeEvent.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ opacity: 0, scale: 1.035, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  />
                </AnimatePresence>
              </div>
              <div className="relative min-h-[330px] overflow-hidden lg:min-h-[620px] lg:border-l lg:border-black/10">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={activeEvent.year}
                    className="absolute inset-0 grid content-between p-5 sm:p-7 md:p-9"
                    initial={{ opacity: 0, y: 14, filter: "blur(5px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div>
                      <p className="text-[clamp(2.9rem,14vw,8rem)] font-black leading-none md:text-[clamp(3.5rem,8vw,8rem)]">{activeEvent.metric}</p>
                      <h2 className="mt-6 border-t border-black/14 pt-6 text-[clamp(1.9rem,8vw,4rem)] font-black leading-none md:mt-7 md:pt-7 md:text-[clamp(2rem,3vw,4rem)]">{activeEvent.title}</h2>
                    </div>
                    <p className="mt-8 border-t border-black/14 pt-6 text-base font-bold leading-snug text-neutral-700 md:mt-10 md:pt-7 md:text-lg">
                      {activeEvent.longText}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </section>
  );
}
