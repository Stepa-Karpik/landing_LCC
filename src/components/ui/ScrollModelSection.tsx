import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ThreeContainerModel } from "./ThreeContainerModel";

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
};

export function ScrollModelSection({
  title,
  lines,
  mobileLines,
  modelLabel,
  items,
  onItemClick,
  titleAs = "h2",
}: ScrollModelSectionProps) {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLDivElement | null>>([]);
  const Heading = titleAs;

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
      <div className="sticky top-14 z-0 h-[calc(100svh-3.5rem)] overflow-visible border-b border-black/10 relative">
        <ThreeContainerModel
          activeIndex={active}
          total={items.length}
          className="absolute inset-0 h-full w-full"
        />
        <div className="pointer-events-none absolute inset-x-0 top-10 z-10 px-4 md:px-6 lg:px-8">
          <Heading className="max-w-[78rem] text-[clamp(3.05rem,7vw,8rem)] font-black leading-[0.96] tracking-normal text-[#1c1b1b]" aria-label={title}>
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
        <div className="pointer-events-none absolute bottom-7 right-4 z-10 text-xs font-black uppercase tracking-[0.18em] text-neutral-500 md:right-8">
          {modelLabel}
        </div>
      </div>

      <div className="relative z-10 overflow-hidden">
        {items.map((item, index) => {
          const isActive = active === index;
          const alignRight = index % 2 === 0;
          const content = (
            <motion.div
              initial={{ opacity: 0.28, y: 18, scale: 0.985, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ amount: 0.45 }}
              transition={{ duration: 0.66, ease: [0.16, 1, 0.3, 1] }}
              className={`relative max-w-[36rem] rounded-[28px] px-0 py-7 transition duration-500 before:pointer-events-none before:absolute before:inset-[-1.25rem] before:-z-10 before:rounded-[32px] before:bg-white/0 before:backdrop-blur-0 before:transition before:duration-500 hover:before:bg-white/14 hover:before:backdrop-blur-[14px] md:py-9 ${
                isActive ? "text-[#1c1b1b]" : "text-neutral-300"
              }`}
            >
              <h3 className="text-[clamp(2rem,3vw,4rem)] font-black leading-none">{item.title}</h3>
              <p className={`mt-5 text-lg font-semibold leading-snug transition ${isActive ? "text-neutral-700" : "text-neutral-300"}`}>
                {item.text}
              </p>
              {isActive ? (
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-white mix-blend-difference">
                  <h3 className="text-[clamp(2rem,3vw,4rem)] font-black leading-none">{item.title}</h3>
                  <p className="mt-5 text-lg font-semibold leading-snug text-white/72">{item.text}</p>
                </div>
              ) : null}
            </motion.div>
          );

          return (
            <div
              key={item.title}
              ref={(node) => {
                refs.current[index] = node;
              }}
              data-model-index={index}
              className={`flex min-h-[86svh] items-center px-4 py-24 md:px-6 lg:px-8 ${alignRight ? "justify-end" : "justify-start"}`}
            >
              {onItemClick ? (
                <button type="button" onClick={() => onItemClick(index)} className="text-left">
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
    <span className="block overflow-hidden pb-2">
      <motion.span
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.82, ease: [0.16, 1, 0.3, 1] }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}
