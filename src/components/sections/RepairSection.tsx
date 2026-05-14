import { useSiteContent } from "../../context/LanguageContext";
import { RepairCompareCard } from "../ui/RepairCompareCard";

export function RepairSection() {
  const copy = useSiteContent();

  return (
    <section className="border-t border-black/10 bg-white py-7 md:py-10">
      <div className="page-shell">
        <div>
          <div>
            <h2 className="mt-4 max-w-5xl text-[clamp(2.35rem,12vw,4.7rem)] font-black leading-none md:text-[clamp(2.75rem,4.2vw,4.7rem)]">
              {copy.repair.title}
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-x-5 gap-y-8 md:grid-cols-2 md:gap-x-6 xl:grid-cols-4">
          {copy.repair.cases.map((item, index) => (
            <RepairCompareCard
              key={`${item.title}-${item.after}`}
              before={item.before}
              after={item.after}
              title={item.title}
              caption={item.caption}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
