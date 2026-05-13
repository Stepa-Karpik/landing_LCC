import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import type { ImageItem } from "../../data/site-data";

type ImageGalleryProps = {
  items: ImageItem[];
};

export function ImageGallery({ items }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + items.length) % items.length);
  };

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div className="relative min-h-[360px] overflow-hidden rounded-[24px] bg-neutral-900 md:min-h-[620px]">
        <img src={active.src} alt={active.title} className="h-full min-h-[360px] w-full object-cover md:min-h-[620px]" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/65 to-transparent p-5 text-white md:p-8">
          <p className="eyebrow text-neutral-300">{active.title}</p>
          <p className="mt-3 max-w-2xl text-xl font-semibold leading-snug md:text-3xl">{active.caption}</p>
        </div>
        <div className="absolute right-4 top-4 flex gap-2">
          <button
            type="button"
            aria-label="Предыдущее фото"
            onClick={() => move(-1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white bg-black/70 text-white transition hover:bg-white hover:text-black"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Следующее фото"
            onClick={() => move(1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white bg-black/70 text-white transition hover:bg-white hover:text-black"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
        {items.slice(0, 6).map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`group grid grid-cols-[84px_1fr] items-center gap-3 rounded-[18px] border p-2 text-left transition ${
              activeIndex === index
                ? "border-neutral-950 bg-neutral-950 text-white"
                : "border-black/10 bg-white text-neutral-950 hover:border-neutral-950"
            }`}
          >
            <img src={item.src} alt="" className="h-16 w-20 rounded-[12px] object-cover" />
            <span className="min-w-0 break-words text-xs font-black uppercase leading-tight tracking-[0.12em]">{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
