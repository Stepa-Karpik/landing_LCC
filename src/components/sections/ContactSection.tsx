import { Building2, Clock, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { useSiteContent } from "../../context/LanguageContext";
import { ContactRequestForm } from "../ui/ContactRequestForm";
import { YandexMap } from "../ui/YandexMap";

export function ContactSection() {
  const copy = useSiteContent();
  const { company } = copy;

  return (
    <section className="border-t border-black/10 bg-white py-8 md:py-10">
      <div className="page-shell">
        <div className="grid min-h-[calc(100svh-7rem)] gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <YandexMap
            coordinates={company.coordinates}
            title={company.shortName}
            address={company.address}
            className="h-[52svh] min-h-[360px] rounded-[24px] lg:h-full"
          />
          <div className="grid content-between rounded-[24px] bg-[#f4f4f4] p-6 md:p-8">
            <div>
              <h1 className="text-[clamp(3.2rem,6vw,7rem)] font-black leading-[0.94]">{copy.contact.title}</h1>
              <p className="mt-5 max-w-xl text-lg font-bold leading-snug text-neutral-700">{copy.contact.text}</p>
            </div>
            <div className="mt-8">
              <ContactRequestForm />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <ContactCard icon={<Building2 size={24} />} label={company.name} value={company.schedule} />
          <ContactCard icon={<MapPin size={24} />} label={company.city} value={company.address} />
          <ContactCard icon={<Phone size={24} />} label="Телефон" value={company.phone} />
          <ContactCard icon={<Mail size={24} />} label="E-mail" value={company.email} />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <article className="group min-h-[220px] rounded-[24px] bg-[#f4f4f4] p-7 transition hover:bg-[#1c1b1b] hover:text-white">
      <div className="flex items-start justify-between gap-5">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-[#1c1b1b] text-white transition group-hover:bg-white group-hover:text-[#1c1b1b]">
          {icon}
        </div>
        <Clock className="opacity-0 transition group-hover:opacity-100" size={19} />
      </div>
      <p className="mt-14 text-xs font-black uppercase tracking-[0.16em] text-neutral-500 transition group-hover:text-white/55">
        {label}
      </p>
      <p className="mt-3 text-xl font-black leading-snug">{value}</p>
    </article>
  );
}
