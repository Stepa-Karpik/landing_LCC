import { company } from "../../data/site-data";

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-10 text-white">
      <div className="page-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-2xl font-black uppercase leading-none md:text-4xl">{company.shortName}</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-400">
            {company.name}. Контейнерный терминал, ремонтное депо и складская инфраструктура в Новороссийске.
          </p>
        </div>
        <div className="text-sm text-neutral-400 md:text-right">
          <p>ИНН {company.inn}</p>
          <p>© 2026 {company.name}</p>
        </div>
      </div>
    </footer>
  );
}
