import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useSiteContent } from "../../context/LanguageContext";

export function AboutCompanySection() {
  const copy = useSiteContent();
  const [active, setActive] = useState(0);
  const activeEvent = copy.aboutCompany.timeline[active];
  const progressHeight = `${(active / Math.max(1, copy.aboutCompany.timeline.length - 1)) * 100}%`;

  return (
    <section className="min-h-[calc(100svh-3.5rem)] border-t border-black/10 bg-white py-12 md:py-16">
      <div className="page-shell">
        <div>
          <h1 className="text-[clamp(3.4rem,7.2vw,9rem)] font-black leading-[0.9] tracking-normal">
            {copy.aboutCompany.title}
          </h1>
        </div>

        <div className="mt-14 grid gap-10 xl:grid-cols-[340px_minmax(0,1fr)]">
          <div className="relative xl:min-h-[640px]">
            <div className="absolute bottom-0 left-[7px] top-0 hidden w-px bg-black/10 md:block">
              <motion.div
                className="w-px bg-[#1c1b1b]"
                animate={{ height: progressHeight }}
                transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <div className="grid gap-8 md:gap-14 md:pl-8">
              {copy.aboutCompany.timeline.map((event, index) => {
                const isActive = active === index;
                return (
                  <button
                    key={event.year}
                    type="button"
                    onClick={() => setActive(index)}
                    className="group relative text-left"
                  >
                    <span className={`block text-[clamp(3.4rem,5.6vw,6.4rem)] font-black leading-none transition duration-500 ${isActive ? "text-[#1c1b1b]" : "text-neutral-300"}`}>
                      {event.year}
                    </span>
                    <span className={`mt-4 block text-lg font-black leading-tight transition ${isActive ? "text-[#1c1b1b]" : "text-neutral-400"}`}>
                      {event.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="xl:sticky xl:top-24 xl:self-start">
            <motion.aside className="grid min-h-[640px] overflow-hidden rounded-[28px] bg-white lg:grid-cols-[620px_minmax(360px,1fr)]">
              <div className="relative h-[380px] overflow-hidden lg:h-[620px] lg:w-[620px]">
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
              <div className="relative min-h-[390px] overflow-hidden lg:min-h-[620px] lg:border-l lg:border-black/10">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={activeEvent.year}
                    className="absolute inset-0 grid content-between p-7 md:p-9"
                    initial={{ opacity: 0, y: 14, filter: "blur(5px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div>
                      <p className="text-[clamp(3.5rem,8vw,8rem)] font-black leading-none">{activeEvent.metric}</p>
                      <h2 className="mt-7 border-t border-black/14 pt-7 text-[clamp(2rem,3vw,4rem)] font-black leading-none">{activeEvent.title}</h2>
                    </div>
                    <p className="mt-10 border-t border-black/14 pt-7 text-lg font-bold leading-snug text-neutral-700">
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
