import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ThreeContainerModel } from "./ThreeContainerModel";
import { ThreeTechnologyModel } from "./ThreeTechnologyModel";

export type ScrollModelItem = {
  title: string;
  text: string;
};

type ScrollModelSectionProps = {
  title: string;
  lines?: string[];
  mobileLines?: string[];
  modelLabel: string;
  items: ScrollModelItem[];
  onItemClick?: (index: number) => void;
  titleAs?: "h1" | "h2";
  modelType?: "container" | "technology";
};

export function ScrollModelSection({
  title,
  lines,
  mobileLines,
  modelLabel,
  items,
  onItemClick,
  titleAs = "h2",
  modelType = "container",
}: ScrollModelSectionProps) {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLDivElement | null>>([]);
  const Heading = titleAs;
  const Model = modelType === "technology" ? ThreeTechnologyModel : ThreeContainerModel;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;

        const next = Number((visible.target as HTMLElement).dataset.modelIndex || 0);
        setActive(next);
      },
      { rootMargin: "-30% 0px -35% 0px", threshold: [0.2, 0.45, 0.7] }
    );

    refs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [items.length]);

  return (
    <section className="relative bg-white">
      <div className="sticky top-14 z-0 h-[calc(100svh-3.5rem)] overflow-hidden border-b border-black/10 relative">
        <Model
          activeIndex={active}
          total={items.length}
          className="absolute inset-0 h-full w-full"
        />
        <div className="pointer-events-none absolute inset-x-0 top-7 z-10 px-4 sm:px-5 md:top-10 md:px-6 lg:px-8">
          <Heading
            className="max-w-[78rem] text-[clamp(2.35rem,11vw,4rem)] font-black leading-[0.96] tracking-normal text-[#1c1b1b] md:text-[clamp(3.05rem,7vw,8rem)]"
            aria-label={title}
          >
            <span className="hidden md:block">
              {(lines || [title]).map((line) => (
                <AnimatedLine key={line}>{line}</AnimatedLine>
              ))}
            </span>
            <span className="block md:hidden">
              {(mobileLines || lines || [title]).map((line) => (
                <AnimatedLine key={line}>{line}</AnimatedLine>
              ))}
            </span>
          </Heading>
        </div>
        <div className="pointer-events-none absolute bottom-5 right-4 z-10 max-w-[calc(100vw-2rem)] text-right text-[0.62rem] font-black uppercase tracking-[0.16em] text-neutral-500 md:bottom-7 md:right-8 md:text-xs">
          {modelLabel}
        </div>
      </div>

      <div className="relative z-10 overflow-hidden">
        {items.map((item, index) => {
          const isActive = active === index;
          const alignRight = index % 2 === 0;
          const content = (
            <motion.div
              whileHover={{ scale: 1.012 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className={`relative w-full max-w-[36rem] rounded-[24px] border border-white/0 bg-white/[0.01] px-5 py-6 backdrop-blur-[14px] backdrop-saturate-150 transition duration-300 hover:text-[#111] hover:[text-shadow:0_0_24px_rgba(28,27,27,0.16)] md:rounded-[30px] md:p-9 ${
                isActive ? "text-[#1c1b1b]" : "text-neutral-300"
              }`}
            >
              <h3 className="text-[clamp(1.75rem,8vw,4rem)] font-black leading-none md:text-[clamp(2rem,3vw,4rem)]">{item.title}</h3>
              <p className={`mt-4 text-base font-semibold leading-snug transition md:mt-5 md:text-lg ${isActive ? "text-neutral-700" : "text-neutral-300"}`}>
                {item.text}
              </p>
            </motion.div>
          );

          return (
            <div
              key={item.title}
              ref={(node) => {
                refs.current[index] = node;
              }}
              data-model-index={index}
              className={`flex min-h-[82svh] items-center px-4 py-20 sm:px-5 md:min-h-[86svh] md:px-6 md:py-24 lg:px-8 ${alignRight ? "justify-end" : "justify-start"}`}
            >
              {onItemClick ? (
                <button type="button" onClick={() => onItemClick(index)} className="w-full max-w-[36rem] cursor-pointer text-left">
                  {content}
                </button>
              ) : (
                content
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function AnimatedLine({ children }: { children: string }) {
  return (
    <span className="block overflow-hidden pb-2 [overflow-wrap:break-word]">
      <motion.span
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.82, ease: [0.16, 1, 0.3, 1] }}
        className="inline-block max-w-full"
      >
        {children}
      </motion.span>
    </span>
  );
}
