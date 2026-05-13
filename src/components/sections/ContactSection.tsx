import { Building2, Clock, Mail, MapPin, Phone } from "lucide-react";
import type { FormEvent, ReactNode } from "react";
import { content } from "../../content/content";
import { YandexMap } from "../ui/YandexMap";

export function ContactSection() {
  const { company } = content;

  const submitRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [
      `Имя: ${String(form.get("name") || "")}`,
      `Телефон: ${String(form.get("phone") || "")}`,
      `E-mail: ${String(form.get("email") || "")}`,
      "",
      String(form.get("message") || ""),
    ].join("\n");

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("Запрос с сайта ЛКК")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contacts" className="border-t border-black/10 bg-white py-20 md:py-24">
      <div className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <div>
            <p className="eyebrow">{content.contact.kicker}</p>
            <h2 className="mt-4 max-w-3xl text-[clamp(3rem,5vw,5.5rem)] font-black leading-none">{content.contact.title}</h2>
          </div>
          <p className="text-lg font-semibold leading-snug lg:pt-10">{content.contact.text}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="rounded-[20px] bg-[#f4f4f4]">
            <ContactLine icon={<Building2 size={22} />} label={company.name} value={`ИНН ${company.inn}`} />
            <ContactLine icon={<MapPin size={22} />} label="Адрес" value={company.address} />
            <ContactLine icon={<Clock size={22} />} label="Режим" value={company.schedule} />
            <ContactLine icon={<Phone size={22} />} label="Телефон" value={company.phone} />
            <ContactLine icon={<Mail size={22} />} label="E-mail" value={company.email} />

            <form onSubmit={submitRequest} className="border-t border-black/10 p-6">
              <div className="grid gap-4">
                <Field name="name" label="Ваше имя" required />
                <Field name="phone" label="Телефон" required />
                <Field name="email" label="E-mail" type="email" />
                <label>
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-neutral-500">Задача</span>
                  <textarea name="message" rows={5} className="w-full resize-none rounded-[20px] border border-black/10 bg-white px-5 py-4 outline-none focus:border-black" />
                </label>
              </div>
              <button type="submit" className="mt-6 w-full rounded-full bg-[#1c1b1b] px-7 py-4 text-sm font-black text-white">
                {content.contact.submit}
              </button>
            </form>
          </div>

          <YandexMap coordinates={company.coordinates} title={company.shortName} address={company.address} />
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", required = false }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <label>
      <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-neutral-500">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-full border border-black/10 bg-white px-5 py-4 outline-none focus:border-black"
      />
    </label>
  );
}

function ContactLine({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="grid grid-cols-[52px_1fr] gap-5 border-b border-black/10 p-6">
      <div className="grid h-12 w-12 place-items-center rounded-full border border-black/10">{icon}</div>
      <div>
        <p className="text-xs font-black uppercase tracking-[0.12em] text-neutral-500">{label}</p>
        <p className="mt-2 text-xl font-black leading-snug">{value}</p>
      </div>
    </div>
  );
}
