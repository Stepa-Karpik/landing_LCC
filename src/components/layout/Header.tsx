import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export function Header() {
  const [open, setOpen] = useState(false);
  const { copy, language, setLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/92 backdrop-blur-xl">
      <div className="page-shell flex h-14 items-center justify-between gap-3 md:gap-5">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center text-2xl font-black leading-none"
          aria-label={copy.company.shortName}
          onClick={() => setOpen(false)}
        >
          {copy.company.logoText}
        </Link>

        <nav className="hidden items-center gap-2 text-sm font-bold xl:gap-5 lg:flex" aria-label="Основная навигация">
          {copy.nav.map((item) => (
            <NavLink key={item.href} to={item.href} end={item.href === "/"} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link to="/contacts" className="inline-flex min-h-10 items-center rounded-full bg-[#1c1b1b] px-5 text-sm font-black text-white transition hover:bg-neutral-700 xl:px-6">
            {language === "ru" ? "Контакты" : "Contacts"}
          </Link>
          <LanguageToggle language={language} setLanguage={setLanguage} />
        </div>

        <button
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-[#1c1b1b] lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-black/10 bg-white px-4 lg:hidden"
            aria-label="Мобильная навигация"
          >
            <div className="max-h-[calc(100svh-3.5rem)] overflow-y-auto py-4">
              {copy.nav.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block border-b border-black/10 py-4 text-[clamp(1.6rem,7vw,2.25rem)] font-black leading-none ${isActive ? "text-neutral-400" : "text-[#1c1b1b]"}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-5 flex items-center justify-between gap-4">
                <Link
                  to="/contacts"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-11 items-center rounded-full bg-[#1c1b1b] px-6 text-sm font-black text-white"
                >
                  {language === "ru" ? "Контакты" : "Contacts"}
                </Link>
                <LanguageToggle language={language} setLanguage={setLanguage} />
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function LanguageToggle({
  language,
  setLanguage,
}: {
  language: "ru" | "en";
  setLanguage: (language: "ru" | "en") => void;
}) {
  return (
    <div className="flex rounded-full border border-[#1c1b1b] p-1 text-xs font-black">
      {(["ru", "en"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLanguage(item)}
          className={`min-h-10 min-w-10 rounded-full px-3 transition ${language === item ? "bg-[#1c1b1b] text-white" : "text-[#1c1b1b] hover:bg-black/5"}`}
          aria-pressed={language === item}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function navLinkClass({ isActive }: { isActive: boolean }) {
  return [
    "relative inline-flex min-h-10 items-center whitespace-nowrap px-2 transition duration-200 hover:text-neutral-500",
    "after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:bg-current after:transition-transform after:duration-300",
    isActive ? "after:scale-x-100 text-[#1c1b1b]" : "after:scale-x-0 text-[#1c1b1b]",
  ].join(" ");
}
