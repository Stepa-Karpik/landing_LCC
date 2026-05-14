import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useSiteContent } from "../../context/LanguageContext";

export function AboutCompanySection() {
  const copy = useSiteContent();
  const [active, setActive] = useState(0);
  const activeEvent = copy.aboutCompany.timeline[active];
  const progressWidth = `${(active / Math.max(1, copy.aboutCompany.timeline.length - 1)) * 100}%`;

  return (
    <section className="min-h-[calc(100svh-3.5rem)] border-t border-black/10 bg-white py-12 md:py-16">
      <div className="page-shell">
        <div>
          <h1 className="text-[clamp(3.4rem,7.2vw,9rem)] font-black leading-[0.9] tracking-normal">
            {copy.aboutCompany.title}
          </h1>
        </div>

        <div className="mt-16 grid gap-10 xl:grid-cols-[1fr_520px]">
          <div className="relative">
            <div className="grid gap-8 md:grid-cols-5">
              {copy.aboutCompany.timeline.map((event, index) => {
                const isActive = active === index;
                return (
                  <button
                    key={event.year}
                    type="button"
                    onClick={() => setActive(index)}
                    className="group relative text-left"
                  >
                    <span className={`block text-[clamp(2.9rem,4.8vw,5.4rem)] font-black leading-none transition duration-500 ${isActive ? "text-[#1c1b1b]" : "text-neutral-300"}`}>
                      {event.year}
                    </span>
                    <span className={`mt-8 block text-lg font-black leading-tight transition ${isActive ? "text-[#1c1b1b]" : "text-neutral-400"}`}>
                      {event.title}
                    </span>
                    <span className="mt-3 block text-sm font-semibold leading-relaxed text-neutral-500">
                      {event.shortText}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="mt-10 h-px w-full bg-black/10">
              <motion.div
                className="h-px bg-[#1c1b1b]"
                animate={{ width: progressWidth }}
                transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>

          <div className="xl:sticky xl:top-24 xl:self-start">
            <AnimatePresence mode="wait">
              <motion.aside
                key={activeEvent.year}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
                transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-[24px] border border-black/10 bg-[#f4f4f4]"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <motion.img
                    src={activeEvent.image}
                    alt={activeEvent.title}
                    className="h-full w-full object-cover"
                    initial={{ scale: 1.06, y: 16 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <div className="p-7">
                  <p className="text-[clamp(3rem,6vw,5rem)] font-black leading-none">{activeEvent.metric}</p>
                  <h2 className="mt-6 text-3xl font-black leading-tight">{activeEvent.title}</h2>
                  <p className="mt-4 text-base font-semibold leading-relaxed text-neutral-700">{activeEvent.longText}</p>
                </div>
              </motion.aside>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
