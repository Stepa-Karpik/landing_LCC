import { Building2, Clock, Mail, MapPin, Phone } from "lucide-react";
import type { FormEvent, ReactNode } from "react";
import { company } from "../../data/site-data";
import { SectionIntro } from "../ui/SectionIntro";
import { YandexMap } from "../ui/YandexMap";

export function ContactSection() {
  const submitRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const body = [
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      `E-mail: ${email}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("Запрос с сайта ЛКК")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contacts" className="section-pad pb-8">
      <div className="page-shell">
        <div className="surface p-5 md:p-8">
          <SectionIntro
            eyebrow="Контакты"
            title="Работаем круглосуточно"
            lead="Терминал находится в промышленной зоне Новороссийска. Прием, возврат и обработка контейнеров доступны 24/7."
          />

          <div className="grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="overflow-hidden rounded-[16px] border border-black/10 bg-white">
              <div className="grid gap-0 divide-y divide-black/10">
                <ContactLine icon={<Building2 size={22} />} label={company.name} value={`ИНН ${company.inn}`} />
                <ContactLine icon={<MapPin size={22} />} label="Адрес" value={company.address} />
                <ContactLine icon={<Clock size={22} />} label="Режим" value={company.schedule} />
                <ContactLine icon={<Phone size={22} />} label="Телефон" value={company.phone} />
                <ContactLine icon={<Mail size={22} />} label="E-mail" value={company.email} />
              </div>

              <form onSubmit={submitRequest} className="border-t border-black/10 p-5 md:p-6">
                <div className="grid gap-3">
                  <label>
                    <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-neutral-500">Ваше имя</span>
                    <input name="name" required className="w-full rounded-full border border-black/10 bg-[#f3f3f3] px-4 py-4 text-base outline-none transition focus:border-neutral-950" autoComplete="name" />
                  </label>
                  <label>
                    <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-neutral-500">Телефон</span>
                    <input name="phone" required className="w-full rounded-full border border-black/10 bg-[#f3f3f3] px-4 py-4 text-base outline-none transition focus:border-neutral-950" autoComplete="tel" />
                  </label>
                  <label>
                    <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-neutral-500">E-mail</span>
                    <input name="email" type="email" className="w-full rounded-full border border-black/10 bg-[#f3f3f3] px-4 py-4 text-base outline-none transition focus:border-neutral-950" autoComplete="email" />
                  </label>
                  <label>
                    <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-neutral-500">Задача</span>
                    <textarea name="message" rows={5} className="w-full resize-none rounded-[24px] border border-black/10 bg-[#f3f3f3] px-4 py-4 text-base outline-none transition focus:border-neutral-950" />
                  </label>
                </div>
                <button type="submit" className="button-dark mt-5 w-full">
                  Отправить запрос
                </button>
              </form>
            </div>

            <YandexMap coordinates={company.coordinates} title={company.shortName} address={company.address} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLine({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="grid grid-cols-[44px_1fr] gap-4 p-5 md:p-7">
      <div className="grid h-11 w-11 place-items-center rounded-full border border-black/10 text-neutral-950">{icon}</div>
      <div>
        <p className="text-xs font-black uppercase tracking-[0.12em] text-neutral-500">{label}</p>
        <p className="mt-2 text-xl font-semibold leading-snug text-neutral-950">{value}</p>
      </div>
    </div>
  );
}
