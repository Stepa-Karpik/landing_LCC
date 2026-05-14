import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import { useRef, useState } from "react";

type RepairCompareCardProps = {
  before: string;
  after: string;
  title: string;
  caption: string;
  index: number;
};

export function RepairCompareCard({ before, after, title, caption, index }: RepairCompareCardProps) {
  const [position, setPosition] = useState(52);
  const frame = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = (clientX: number) => {
    const bounds = frame.current?.getBoundingClientRect();
    if (!bounds) return;

    const next = ((clientX - bounds.left) / bounds.width) * 100;
    setPosition(Math.min(82, Math.max(18, next)));
  };

  return (
    <motion.article
      data-repair-card
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.62, delay: index * 0.045, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="group min-w-0"
    >
      <div
        ref={frame}
        onPointerDown={(event) => {
          dragging.current = true;
          event.currentTarget.setPointerCapture(event.pointerId);
          updatePosition(event.clientX);
        }}
        onPointerMove={(event) => {
          if (dragging.current) updatePosition(event.clientX);
        }}
        onPointerUp={(event) => {
          dragging.current = false;
          event.currentTarget.releasePointerCapture(event.pointerId);
        }}
        onPointerCancel={() => {
          dragging.current = false;
        }}
        className="relative aspect-[4/3] cursor-ew-resize touch-none overflow-hidden rounded-[20px] bg-neutral-900"
      >
        <img
          src={after}
          alt={`${title}: восстановленное состояние`}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          draggable={false}
        />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <img
            src={before}
            alt={`${title}: исходное состояние`}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            draggable={false}
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/62 to-transparent" />
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.5)]"
          style={{ left: `${position}%` }}
        >
          <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white bg-black text-white transition group-hover:scale-110">
            <MoveHorizontal size={17} aria-hidden="true" />
          </span>
        </div>
      </div>

      <div className="pt-5">
        <h3 className="text-[1.35rem] font-black leading-tight">{title}</h3>
        <p className="mt-3 text-sm font-semibold leading-relaxed text-neutral-700">{caption}</p>
      </div>
    </motion.article>
  );
}
