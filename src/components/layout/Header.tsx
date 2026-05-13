import { Menu, X } from "lucide-react";
import { useState } from "react";
import { content } from "../../content/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-black/10 bg-white">
      <div className="page-shell flex h-[78px] items-center justify-between gap-6">
        <a href="#top" className="text-2xl font-black leading-none" aria-label="ЛКК">
          {content.company.logoText}
        </a>

        <nav className="hidden items-center gap-16 text-sm font-semibold lg:flex" aria-label="Основная навигация">
          {content.nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-neutral-500">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contacts" className="rounded-full bg-[#1c1b1b] px-6 py-3 text-sm font-black text-white">
            Связаться
          </a>
          <button className="rounded-full border border-[#1c1b1b] px-6 py-3 text-sm font-black" type="button">
            Войти
          </button>
        </div>

        <button
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((value) => !value)}
          className="grid h-12 w-12 place-items-center rounded-full border border-[#1c1b1b] lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-black/10 px-4 py-4 lg:hidden" aria-label="Мобильная навигация">
          {content.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-black/10 py-4 text-2xl font-black"
            >
              {item.label}
            </a>
          ))}
          <a href="#contacts" onClick={() => setOpen(false)} className="mt-5 inline-flex rounded-full bg-[#1c1b1b] px-6 py-3 text-sm font-black text-white">
            Связаться
          </a>
        </nav>
      ) : null}
    </header>
  );
}
