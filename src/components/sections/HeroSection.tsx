import { ArrowRight } from "lucide-react";
import { content } from "../../content/content";

export function HeroSection() {
  return (
    <section id="top" className="overflow-hidden bg-white">
      <div className="page-shell">
        <div className="grid gap-8 pb-2 pt-16 lg:grid-cols-[1fr_360px] lg:items-start lg:pt-20">
          <h1
            className="max-w-5xl text-[clamp(2.8rem,5.65vw,6.25rem)] font-black leading-[1.02] tracking-normal"
            aria-label={content.hero.title}
          >
            <span className="hidden md:block">
              {content.hero.linesDesktop.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </span>
            <span className="block md:hidden">
              {content.hero.linesMobile.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </span>
          </h1>
          <div className="max-w-sm lg:pt-7">
            <p className="text-lg font-semibold leading-snug">{content.hero.text}</p>
            <a href="#services" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#1c1b1b] px-7 py-4 text-sm font-black text-white">
              {content.hero.button}
              <ArrowRight size={17} />
            </a>
          </div>
        </div>

        <div className="relative -mt-2 min-h-[430px] overflow-hidden md:min-h-[590px] lg:min-h-[620px]">
          <ContainerIllustration />
        </div>
      </div>
    </section>
  );
}

function ContainerIllustration() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[94%] w-full max-w-none md:inset-x-1/2 md:w-[1600px] md:-translate-x-1/2">
      <div className="absolute bottom-[9%] left-[4%] h-[40%] w-[38%] bg-[#75836b] shadow-[inset_0_0_0_2px_rgba(0,0,0,0.18)]">
        <ContainerRibs count={16} />
      </div>
      <div className="absolute bottom-[42%] left-[16%] h-[42%] w-[62%] bg-[#7f9275] shadow-[inset_0_0_0_2px_rgba(0,0,0,0.22)]">
        <ContainerRibs count={26} />
        <div className="absolute left-[5%] top-0 h-full w-[17%] bg-[#506746] shadow-[inset_0_0_0_2px_rgba(0,0,0,0.2)]">
          <ContainerRibs count={5} dark />
          <div className="absolute inset-y-5 left-1/2 w-[2px] -translate-x-1/2 bg-white/70" />
          <div className="absolute inset-x-4 top-1/2 h-[2px] bg-white/70" />
        </div>
        <div className="absolute right-[10%] top-[42%] text-[92px] font-light tracking-[-0.05em] text-white/85">/ЛКК</div>
        <div className="absolute left-[34%] top-[32%] text-sm font-semibold leading-tight text-white/80">
          Cargo container
          <br />
          no. 02398716253
        </div>
      </div>
      <div className="absolute bottom-0 left-[16%] h-[22%] w-[62%] bg-[#ececea] shadow-[inset_0_0_0_2px_rgba(0,0,0,0.12)]">
        <ContainerRibs count={26} light />
      </div>
      <div className="absolute bottom-[5%] right-[1%] h-[36%] w-[29%] bg-[#e6e7e4] shadow-[inset_0_0_0_2px_rgba(0,0,0,0.1)]">
        <ContainerRibs count={12} light />
      </div>
    </div>
  );
}

function ContainerRibs({ count, dark = false, light = false }: { count: number; dark?: boolean; light?: boolean }) {
  return (
    <div className="absolute inset-0 flex">
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className={`h-full flex-1 border-r ${dark ? "border-black/22" : light ? "border-black/10" : "border-black/16"}`}
        />
      ))}
    </div>
  );
}
