import type { FormEvent } from "react";
import { useSiteContent } from "../../context/LanguageContext";

type ContactRequestFormProps = {
  dark?: boolean;
};

export function ContactRequestForm({ dark = false }: ContactRequestFormProps) {
  const copy = useSiteContent();

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

    window.location.href = `mailto:${copy.company.email}?subject=${encodeURIComponent("Запрос с сайта ЛКК")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={submitRequest} className={dark ? "rounded-[28px] bg-[#050505] p-4 text-white md:p-5" : "text-[#1c1b1b]"}>
      <div className="grid gap-4">
        <Field name="name" label={copy.contact.fields.name} required dark={dark} />
        <Field name="phone" label={copy.contact.fields.phone} required dark={dark} />
        <Field name="email" label={copy.contact.fields.email} type="email" dark={dark} />
        <label className="relative block">
          <span
            className={`pointer-events-none absolute -top-2 left-8 z-10 bg-inherit px-3 text-sm font-semibold ${
              dark ? "text-white/52" : "text-neutral-500"
            }`}
          >
            {copy.contact.fields.task}
          </span>
          <textarea
            name="message"
            rows={dark ? 4 : 5}
            className={
              dark
                ? "w-full resize-none rounded-[26px] border border-white/28 bg-transparent px-8 py-6 text-xl text-white outline-none transition placeholder:text-white/40 focus:border-white"
                : "w-full resize-none rounded-[22px] border border-black/10 bg-white px-5 py-4 outline-none focus:border-black"
            }
          />
        </label>
      </div>
      <button
        type="submit"
        className={`mt-5 w-full rounded-full px-7 py-4 text-sm font-black transition ${
          dark ? "bg-white text-[#1c1b1b] hover:bg-neutral-200" : "bg-[#1c1b1b] text-white hover:bg-neutral-700"
        }`}
      >
        {copy.contact.submit}
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  dark,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  dark: boolean;
}) {
  return (
    <label className="relative block">
      <span
        className={`pointer-events-none absolute -top-2 left-8 z-10 bg-inherit px-3 text-sm font-semibold ${
          dark ? "text-white/52" : "text-neutral-500"
        }`}
      >
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className={
          dark
            ? "h-[78px] w-full rounded-[28px] border border-white/24 bg-transparent px-8 text-2xl text-white outline-none transition placeholder:text-white/40 focus:border-white"
            : "w-full rounded-full border border-black/10 bg-white px-5 py-4 outline-none focus:border-black"
        }
      />
    </label>
  );
}
