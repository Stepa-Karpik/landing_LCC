import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { useSiteContent } from "../../context/LanguageContext";

export function GallerySection() {
  const copy = useSiteContent();
  const [active, setActive] = useState(0);
  const [viewer, setViewer] = useState<number | null>(null);

  const moveViewer = (direction: -1 | 1) => {
    setViewer((current) => {
      const index = current ?? active;
      return (index + direction + copy.gallery.images.length) % copy.gallery.images.length;
    });
  };

  return (
    <>
      <section className="min-h-[calc(100svh-3.5rem)] border-t border-black/10 bg-white py-7 md:py-10">
        <div className="page-shell">
          <div className="mb-8">
            <h1 className="text-[clamp(2.85rem,15vw,8rem)] font-black leading-[0.9] tracking-normal md:text-[clamp(3.3rem,7vw,8rem)]">
              {copy.gallery.title}
            </h1>
          </div>

          <motion.div
            layout
            className="grid auto-rows-[180px] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 xl:auto-rows-[210px]"
          >
            {copy.gallery.images.map((image, index) => {
              const isActive = active === index;

              return (
                <motion.button
                  layout
                  type="button"
                  key={`${image.title}-${index}`}
                  onClick={() => {
                    if (isActive) {
                      setViewer(index);
                    } else {
                      setActive(index);
                    }
                  }}
                  transition={{ layout: { duration: 0.58, ease: [0.16, 1, 0.3, 1] } }}
                  className={`group relative overflow-hidden rounded-[20px] bg-neutral-950 text-left text-white md:rounded-[22px] ${
                    isActive ? "sm:col-span-2 sm:row-span-2" : ""
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    draggable={false}
                  />
                  {!isActive ? (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/16 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                        <h2 className="max-w-[15rem] text-[clamp(1.35rem,7vw,1.5rem)] font-black leading-none md:text-2xl">{image.title}</h2>
                      </div>
                    </>
                  ) : null}
                  <span className="absolute bottom-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-white text-[#1c1b1b] transition duration-300 group-hover:rotate-45 group-hover:scale-105 md:h-11 md:w-11">
                    <ArrowUpRight size={20} />
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {viewer !== null ? (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-white/34 p-3 backdrop-blur-[26px] md:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setViewer(null)}
          >
            <motion.div
              className="relative grid h-[min(84svh,860px)] w-[min(94vw,1280px)] place-items-center overflow-visible"
              initial={{ opacity: 0, scale: 0.975, y: 22 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.985, y: 18 }}
              transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <img
                src={copy.gallery.images[viewer].src}
                alt={copy.gallery.images[viewer].title}
                className="max-h-full max-w-full rounded-[18px] object-contain shadow-[0_40px_140px_rgba(28,27,27,0.28)] md:rounded-[22px]"
              />
              <button
                type="button"
                onClick={() => setViewer(null)}
                className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full bg-white text-[#1c1b1b] transition hover:bg-neutral-200 md:right-5 md:top-5 md:h-12 md:w-12"
                aria-label="Закрыть"
              >
                <X size={21} />
              </button>
              <button
                type="button"
                onClick={() => moveViewer(-1)}
                className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/92 text-[#1c1b1b] shadow-[0_12px_40px_rgba(0,0,0,0.14)] transition hover:bg-neutral-200 md:left-5 md:h-14 md:w-14"
                aria-label="Предыдущее фото"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={() => moveViewer(1)}
                className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/92 text-[#1c1b1b] shadow-[0_12px_40px_rgba(0,0,0,0.14)] transition hover:bg-neutral-200 md:right-5 md:h-14 md:w-14"
                aria-label="Следующее фото"
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
