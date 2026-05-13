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
    <section id="contacts" className="section-pad bg-neutral-950 text-white">
      <div className="page-shell">
        <SectionIntro
          eyebrow="Контакты"
          title="Работаем круглосуточно"
          lead="Терминал находится в промышленной зоне Новороссийска. Прием, возврат и обработка контейнеров доступны 24/7."
          inverted
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="border border-white/20">
            <div className="grid gap-0 divide-y divide-white/15">
              <ContactLine icon={<Building2 size={22} />} label={company.name} value={`ИНН ${company.inn}`} />
              <ContactLine icon={<MapPin size={22} />} label="Адрес" value={company.address} />
              <ContactLine icon={<Clock size={22} />} label="Режим" value={company.schedule} />
              <ContactLine icon={<Phone size={22} />} label="Телефон" value={company.phone} />
              <ContactLine icon={<Mail size={22} />} label="E-mail" value={company.email} />
            </div>

            <form onSubmit={submitRequest} className="border-t border-white/20 p-5 md:p-7">
              <div className="grid gap-3">
                <label>
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-neutral-400">Ваше имя</span>
                  <input name="name" required className="field" autoComplete="name" />
                </label>
                <label>
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-neutral-400">Телефон</span>
                  <input name="phone" required className="field" autoComplete="tel" />
                </label>
                <label>
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-neutral-400">E-mail</span>
                  <input name="email" type="email" className="field" autoComplete="email" />
                </label>
                <label>
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-neutral-400">Задача</span>
                  <textarea name="message" rows={5} className="field resize-none" />
                </label>
              </div>
              <button type="submit" className="button-light mt-5 w-full">
                Отправить запрос
              </button>
            </form>
          </div>

          <YandexMap coordinates={company.coordinates} title={company.shortName} address={company.address} />
        </div>
      </div>
    </section>
  );
}

function ContactLine({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="grid grid-cols-[44px_1fr] gap-4 p-5 md:p-7">
      <div className="grid h-11 w-11 place-items-center border border-white/20 text-white">{icon}</div>
      <div>
        <p className="text-xs font-black uppercase tracking-[0.16em] text-neutral-500">{label}</p>
        <p className="mt-2 text-xl font-semibold leading-snug">{value}</p>
      </div>
    </div>
  );
}
