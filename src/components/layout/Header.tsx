import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Услуги", href: "#services" },
  { label: "Ремонт", href: "#repair" },
  { label: "Техбаза", href: "#technical-base" },
  { label: "Качество", href: "#quality" },
  { label: "Контакты", href: "#contacts" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pt-6">
      <div className="page-shell">
        <div className="flex min-h-[68px] items-center justify-between gap-5 rounded-[22px] border border-black/10 bg-[#f3f3f3]/95 px-4 shadow-[0_18px_60px_rgba(28,27,27,0.08)] backdrop-blur md:px-5">
          <a href="#top" className="flex items-center gap-3" aria-label="ЛКК">
            <span className="text-xl font-black leading-none tracking-normal">/ЛКК</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Основная навигация">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-neutral-700 transition hover:text-neutral-950"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              aria-label="Текущий язык: русский"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-black/10 bg-white px-4 text-sm font-black"
            >
              <span aria-hidden="true">🇷🇺</span>
              RU
            </button>
            <a href="#contacts" className="button-dark">
              Связаться
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-neutral-950 lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="page-shell mt-2 lg:hidden">
          <nav className="rounded-[22px] border border-black/10 bg-neutral-950 p-5 text-white" aria-label="Мобильная навигация">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/15 py-4 text-2xl font-black"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-5 flex gap-2">
              <button type="button" className="button-light shrink-0 px-4" aria-label="Текущий язык: русский">
                🇷🇺 RU
              </button>
              <a href="#contacts" onClick={() => setOpen(false)} className="button-light flex-1">
                Связаться
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
