import { Menu, X } from "lucide-react";
import { useState } from "react";
import { company } from "../../data/site-data";

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
    <header className="sticky top-0 z-50 border-b border-neutral-950 bg-stone-100/95 backdrop-blur">
      <div className="page-shell flex min-h-20 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-4" aria-label="ЛКК">
          <img src={company.logo} alt="" className="h-10 w-auto grayscale" />
          <span className="hidden text-xs font-black uppercase leading-tight tracking-[0.16em] sm:block">
            Логистический
            <br />
            контейнерный комплекс
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-black uppercase tracking-[0.16em] text-neutral-600 transition hover:text-neutral-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contacts" className="button-dark hidden lg:inline-flex">
          Связаться
        </a>

        <button
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center border border-neutral-950 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-neutral-950 bg-neutral-950 text-white lg:hidden">
          <nav className="page-shell flex flex-col py-5" aria-label="Мобильная навигация">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/15 py-4 text-2xl font-black uppercase"
              >
                {item.label}
              </a>
            ))}
            <a href="#contacts" onClick={() => setOpen(false)} className="button-light mt-5 w-full">
              Связаться
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
