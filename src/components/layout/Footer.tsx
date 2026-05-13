import { company } from "../../data/site-data";

export function Footer() {
  return (
    <footer className="pb-6">
      <div className="page-shell">
        <div className="grid gap-8 rounded-[28px] bg-neutral-950 p-6 text-white md:grid-cols-[1fr_auto] md:items-end md:p-8">
          <div>
            <p className="text-2xl font-black leading-none md:text-4xl">/ {company.shortName}</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-400">
              {company.name}. Контейнерный терминал, ремонтное депо и складская инфраструктура в Новороссийске.
            </p>
          </div>
          <div className="text-sm text-neutral-400 md:text-right">
            <p>ИНН {company.inn}</p>
            <p>© 2026 {company.name}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
