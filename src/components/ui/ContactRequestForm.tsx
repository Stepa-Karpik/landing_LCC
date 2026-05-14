import type { FormEvent } from "react";
import { useSiteContent } from "../../context/LanguageContext";

type ContactRequestFormProps = {
  compact?: boolean;
  labelBg?: "white" | "soft";
  submitAlign?: "full" | "right";
};

export function ContactRequestForm({ compact = false, labelBg = "white", submitAlign = "full" }: ContactRequestFormProps) {
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
    <form onSubmit={submitRequest} className="text-[#1c1b1b]">
      <div className="grid gap-4">
        <Field name="name" label={copy.contact.fields.name} required labelBg={labelBg} compact={compact} />
        <Field name="phone" label={copy.contact.fields.phone} required labelBg={labelBg} compact={compact} />
        <Field name="email" label={copy.contact.fields.email} type="email" labelBg={labelBg} compact={compact} />
        <label className="relative block">
          <span
            className={`pointer-events-none absolute left-5 top-0 z-10 -translate-y-1/2 px-2 text-sm font-bold text-neutral-500 md:left-8 md:px-3 ${
              labelBg === "soft" ? "bg-[#f4f4f4]" : "bg-white"
            }`}
          >
            {copy.contact.fields.task}
          </span>
          <textarea
            name="message"
            rows={compact ? 4 : 5}
            className="w-full resize-none rounded-[16px] border border-black/16 bg-white px-5 py-5 text-base font-semibold outline-none transition focus:border-black md:rounded-[18px] md:px-7 md:py-6 md:text-lg"
          />
        </label>
      </div>
      <button
        type="submit"
        className={`mt-5 min-h-12 rounded-full bg-[#1c1b1b] px-7 text-sm font-black text-white transition hover:bg-neutral-700 ${
          submitAlign === "right" ? "ml-auto flex w-fit min-w-[178px] items-center justify-center sm:min-w-[190px]" : "w-full"
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
  labelBg,
  compact,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  labelBg: "white" | "soft";
  compact: boolean;
}) {
  return (
    <label className="relative block">
      <span
        className={`pointer-events-none absolute left-5 top-0 z-10 -translate-y-1/2 px-2 text-sm font-bold text-neutral-500 md:left-8 md:px-3 ${
          labelBg === "soft" ? "bg-[#f4f4f4]" : "bg-white"
        }`}
      >
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className={`w-full rounded-[16px] border border-black/16 bg-white px-5 font-semibold outline-none transition focus:border-black md:rounded-[18px] md:px-7 ${
          compact ? "h-[56px] text-base md:h-[60px]" : "h-[62px] text-base md:h-[70px] md:text-lg"
        }`}
      />
    </label>
  );
}
