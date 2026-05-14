import { useSiteContent } from "../../context/LanguageContext";
import { ContactRequestForm } from "../ui/ContactRequestForm";
import { YandexMap } from "../ui/YandexMap";

export function ContactSection() {
  const copy = useSiteContent();
  const { company } = copy;

  return (
    <section className="border-t border-black/10 bg-white py-10 md:py-12">
      <div className="page-shell">
        <div className="grid min-h-[calc(100svh-8rem)] gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <YandexMap
            coordinates={company.coordinates}
            title={company.shortName}
            address={company.address}
            className="h-[52svh] min-h-[360px] rounded-[22px] border-0 lg:h-full"
          />
          <div className="grid content-between">
            <div>
              <h1 className="text-[clamp(3.2rem,6vw,7rem)] font-black leading-[0.94]">{copy.contact.title}</h1>
              <p className="mt-5 max-w-xl text-lg font-bold leading-snug text-neutral-700">{copy.contact.text}</p>
            </div>
            <div className="mt-8">
              <ContactRequestForm compact submitAlign="right" />
            </div>
          </div>
        </div>

        <div className="mt-20 grid max-w-5xl gap-10 border-t border-black/10 pt-10 lg:ml-auto">
          <ContactCard label="" value={company.name} />
          <ContactCard label="" value={company.schedule} />
          <ContactCard label="" value={company.address} />
          <ContactCard label="" value={company.phone} />
          <ContactCard label="" value={company.email} />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="grid gap-5 border-b border-black/10 pb-8 md:grid-cols-[180px_minmax(0,1fr)] md:items-start">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-neutral-500">{label}</p>
      <p className="text-[clamp(2rem,4vw,4.8rem)] font-black leading-none tracking-normal">{value}</p>
    </article>
  );
}
