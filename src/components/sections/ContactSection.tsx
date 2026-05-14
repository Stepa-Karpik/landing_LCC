import { useSiteContent } from "../../context/LanguageContext";
import { ContactRequestForm } from "../ui/ContactRequestForm";
import { YandexMap } from "../ui/YandexMap";

export function ContactSection() {
  const copy = useSiteContent();
  const { company } = copy;

  return (
    <section className="border-t border-black/10 bg-white py-8 md:py-12">
      <div className="page-shell">
        <div className="grid gap-8 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <YandexMap
            coordinates={company.coordinates}
            title={company.shortName}
            address={company.address}
            className="order-2 h-[48svh] min-h-[320px] rounded-[20px] border-0 sm:min-h-[360px] lg:order-none lg:h-full lg:rounded-[22px]"
          />
          <div className="order-1 grid content-between lg:order-none">
            <div>
              <h1 className="text-[clamp(2.85rem,14vw,7rem)] font-black leading-[0.94] md:text-[clamp(3.2rem,6vw,7rem)]">{copy.contact.title}</h1>
              <p className="mt-5 max-w-xl text-base font-bold leading-snug text-neutral-700 md:text-lg">{copy.contact.text}</p>
            </div>
            <div className="mt-8">
              <ContactRequestForm compact submitAlign="right" />
            </div>
          </div>
        </div>

        <div className="mt-14 grid w-full border-t border-black/10 md:mt-20">
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
    <article className="w-full border-b border-black/10 py-7 md:py-11">
      <p className="w-full text-left text-[clamp(2rem,11vw,6.35rem)] font-black leading-[0.94] tracking-normal [overflow-wrap:anywhere] md:text-[clamp(2.25rem,5.15vw,6.35rem)]">
        {value}
      </p>
    </article>
  );
}
