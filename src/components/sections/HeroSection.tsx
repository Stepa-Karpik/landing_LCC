import { DatabaseZap, MapPin, Phone, ShieldCheck } from "lucide-react";
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
        <div className="h-[min(76svh,720px)]">
          <YandexMap
            coordinates={copy.company.coordinates}
            title={copy.company.shortName}
            address={copy.company.address}
            className="h-full min-h-full rounded-[28px] border-0"
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
          <ContactRequestForm compact />
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
    <div className="grid gap-8 p-6 md:grid-cols-[0.86fr_1.14fr] md:p-10">
      <div className="flex min-h-[360px] flex-col justify-between">
        <div>
          <div className="grid h-14 w-14 place-items-center rounded-full bg-[#1c1b1b] text-white">{icon}</div>
          <h2 className="mt-9 text-[clamp(2.4rem,4vw,5rem)] font-black leading-none">{title}</h2>
        </div>
        <p className="mt-8 text-lg font-semibold leading-snug text-neutral-700">{lead}</p>
      </div>
      <div className="grid content-between gap-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact} className="border-t border-black/18 pt-4">
              <p className="text-[clamp(1.8rem,3vw,3.4rem)] font-black leading-none">{fact}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-0">
          {rows.map((row) => (
            <div key={row} className="border-t border-black/10 py-5 text-lg font-bold leading-snug text-neutral-700 last:border-b">
              {row}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
