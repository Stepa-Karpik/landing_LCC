import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useSiteContent } from "../../context/LanguageContext";

export function GallerySection() {
  const copy = useSiteContent();
  const [active, setActive] = useState(0);

  return (
    <section className="min-h-[calc(100svh-3.5rem)] border-t border-black/10 bg-white py-8 md:py-10">
      <div className="page-shell">
        <div className="mb-8 flex items-end justify-between gap-6">
          <h1 className="text-[clamp(3.3rem,7vw,8rem)] font-black leading-[0.9] tracking-normal">
            {copy.gallery.title}
          </h1>
          <p className="hidden max-w-sm pb-4 text-right text-sm font-bold leading-snug text-neutral-500 md:block">
            {copy.company.shortName}: терминал, техника, ремонт и контейнерная инфраструктура.
          </p>
        </div>

        <motion.div
          layout
          className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:auto-rows-[210px]"
        >
          {copy.gallery.images.map((image, index) => {
            const isActive = active === index;

            return (
              <motion.button
                layout
                type="button"
                key={`${image.title}-${index}`}
                onClick={() => setActive(index)}
                transition={{ layout: { duration: 0.58, ease: [0.16, 1, 0.3, 1] } }}
                className={`group relative overflow-hidden rounded-[22px] bg-neutral-950 text-left text-white ${
                  isActive ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/12 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <h2 className={`${isActive ? "text-[clamp(2rem,4vw,4.8rem)]" : "text-2xl"} font-black leading-none`}>
                        {image.title}
                      </h2>
                      <AnimatePresence initial={false}>
                        {isActive ? (
                          <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-4 max-w-2xl text-base font-semibold leading-snug text-white/82"
                          >
                            {image.caption}
                          </motion.p>
                        ) : null}
                      </AnimatePresence>
                    </div>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[#1c1b1b] transition group-hover:rotate-45">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
