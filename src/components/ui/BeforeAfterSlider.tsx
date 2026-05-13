import { useState } from "react";
import { MoveHorizontal } from "lucide-react";

type BeforeAfterSliderProps = {
  before: string;
  after: string;
  title: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export function BeforeAfterSlider({
  before,
  after,
  title,
  beforeLabel = "До",
  afterLabel = "После",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(52);

  return (
    <div className="group relative aspect-[16/10] w-full min-w-0 overflow-hidden rounded-[24px] bg-neutral-950 text-white">
      <img
        src={after}
        alt={`${title} после ремонта`}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <img
          src={before}
          alt={`${title} до ремонта`}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      </div>

      <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
        {beforeLabel}
      </div>
      <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-black">
        {afterLabel}
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.35)]"
        style={{ left: `${position}%` }}
      >
        <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white bg-black">
          <MoveHorizontal size={18} aria-hidden="true" />
        </span>
      </div>

      <input
        aria-label="Положение сравнения"
        type="range"
        min="8"
        max="92"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
