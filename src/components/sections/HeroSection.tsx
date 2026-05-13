import { Activity, BadgeCheck, DatabaseZap, MapPin, Phone, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { useSiteContent } from "../../context/LanguageContext";
import { ContactRequestForm } from "../ui/ContactRequestForm";
import { LiquidModal } from "../ui/LiquidModal";
import { ScrollModelSection } from "../ui/ScrollModelSection";
import { YandexMap } from "../ui/YandexMap";

type ModalType = "map" | "contact" | "tech" | "expertise" | null;

export function HeroSection() {
  const copy = useSiteContent();
  const [modal, setModal] = useState<ModalType>(null);

  return (
    <>
      <ScrollModelSection
        title={copy.hero.title}
        lines={copy.hero.linesDesktop}
        mobileLines={copy.hero.linesMobile}
        modelLabel={copy.hero.modelLabel}
        items={copy.about.items}
        titleAs="h1"
        onItemClick={(index) => setModal(copy.about.items[index].action as ModalType)}
      />

      <LiquidModal open={modal === "map"} onClose={() => setModal(null)} wide title={copy.about.items[0].title}>
        <div className="h-[min(76svh,720px)] p-3">
          <YandexMap
            coordinates={copy.company.coordinates}
            title={copy.company.shortName}
            address={copy.company.address}
            className="h-full min-h-full rounded-[22px]"
          />
        </div>
      </LiquidModal>

      <LiquidModal open={modal === "contact"} onClose={() => setModal(null)} wide title={copy.about.items[1].title}>
        <div className="grid gap-8 p-5 md:grid-cols-[0.85fr_1.15fr] md:p-8">
          <div className="flex flex-col justify-between rounded-[24px] bg-white/76 p-7">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-neutral-500">{copy.company.logoText}</p>
              <h2 className="mt-6 text-[clamp(2.2rem,4vw,4.8rem)] font-black leading-none">
                {copy.about.items[1].title}
              </h2>
              <p className="mt-5 text-lg font-semibold leading-snug text-neutral-700">{copy.about.items[1].text}</p>
            </div>
            <div className="mt-10 grid gap-4 text-base font-bold">
              <p className="flex gap-3">
                <MapPin className="mt-1 shrink-0" size={18} />
                {copy.company.address}
              </p>
              <p className="flex gap-3">
                <Phone className="mt-1 shrink-0" size={18} />
                {copy.company.phone}
              </p>
              <p>{copy.company.email}</p>
            </div>
          </div>
          <ContactRequestForm dark />
        </div>
      </LiquidModal>

      <LiquidModal open={modal === "tech"} onClose={() => setModal(null)} wide title={copy.about.items[2].title}>
        <ModalKnowledge
          title={copy.about.items[2].title}
          lead={copy.about.items[2].text}
          icon={<DatabaseZap size={30} />}
          facts={["EIR", "EDIFACT", "CODECO", "CEDEX"]}
          rows={[
            "События gate-in и gate-out фиксируются как управляемые статусы.",
            "Обмен данными строится вокруг операторских форматов, а не ручных таблиц.",
            "История оборудования остается пригодной для контроля ремонта и приемки.",
          ]}
        />
      </LiquidModal>

      <LiquidModal open={modal === "expertise"} onClose={() => setModal(null)} wide title={copy.about.items[3].title}>
        <ModalKnowledge
          title={copy.about.items[3].title}
          lead={copy.about.items[3].text}
          icon={<ShieldCheck size={30} />}
          facts={["IICL", "РМРС", "ACEP", "CSC"]}
          rows={[
            "Процедуры ремонта привязаны к требованиям владельцев оборудования.",
            "Контроль качества проходит после восстановления, а не только на входе.",
            "Команда работает с контейнерами как с техническим активом, а не как со складской тарой.",
          ]}
        />
      </LiquidModal>
    </>
  );
}

function ModalKnowledge({
  title,
  lead,
  icon,
  facts,
  rows,
}: {
  title: string;
  lead: string;
  icon: ReactNode;
  facts: string[];
  rows: string[];
}) {
  return (
    <div className="grid gap-8 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-10">
      <div className="rounded-[24px] bg-[#1c1b1b] p-8 text-white">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-white text-[#1c1b1b]">{icon}</div>
        <h2 className="mt-10 text-[clamp(2.4rem,4vw,5rem)] font-black leading-none">{title}</h2>
        <p className="mt-6 text-lg font-semibold leading-snug text-white/74">{lead}</p>
      </div>
      <div className="grid gap-5">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact} className="rounded-[20px] border border-black/10 bg-white/74 p-5">
              <Activity size={20} />
              <p className="mt-8 text-2xl font-black">{fact}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-3">
          {rows.map((row) => (
            <div key={row} className="flex gap-4 rounded-[18px] border border-black/10 bg-white/74 p-5 text-base font-bold leading-snug text-neutral-700">
              <BadgeCheck className="mt-0.5 shrink-0 text-[#1c1b1b]" size={20} />
              {row}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
