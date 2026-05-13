import { useSiteContent } from "../../context/LanguageContext";
import { RepairCompareCard } from "../ui/RepairCompareCard";

export function RepairSection() {
  const copy = useSiteContent();

  return (
    <section className="border-t border-black/10 bg-white py-12 md:py-14">
      <div className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
          <div>
            <h2 className="mt-4 max-w-5xl text-[clamp(2.75rem,4.2vw,4.7rem)] font-black leading-none">
              {copy.repair.title}
            </h2>
          </div>
          <p className="text-lg font-semibold leading-snug lg:pt-10">{copy.repair.text}</p>
        </div>

        <div className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-4">
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
