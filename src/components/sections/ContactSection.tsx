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

        <div className="mt-20 grid w-full border-t border-black/10">
          <ContactCard value={company.name} />
          <ContactCard value={company.schedule} />
          <ContactCard value={company.address} />
          <ContactCard value={company.phone} />
          <ContactCard value={company.email} />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ value }: { value: string }) {
  return (
    <article className="w-full border-b border-black/10 py-9 md:py-11">
      <p className="w-full text-left text-[clamp(2.25rem,5.15vw,6.35rem)] font-black leading-[0.94] tracking-normal [overflow-wrap:anywhere]">
        {value}
      </p>
    </article>
  );
}
