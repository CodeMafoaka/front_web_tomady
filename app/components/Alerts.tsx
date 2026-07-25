"use client";

import { useLanguage, useTranslation } from "./LanguageProvider";

const items = [
  { key: "i1" as const, color: "bg-error" },
  { key: "i2" as const, color: "bg-warning" },
  { key: "i3" as const, color: "bg-brand" },
];

type Food = {
  n: string;
  nEn: string;
  r: string;
  rEn: string;
  ok: boolean;
  e: string;
};

const foods: Food[] = [
  {
    n: "Pad Thai aux cacahuètes",
    nEn: "Pad Thai with peanuts",
    r: "Contient : Arachides",
    rEn: "Contains: Peanuts",
    ok: false,
    e: "🥜",
  },
  {
    n: "Quinoa bowl légumes",
    nEn: "Quinoa veggie bowl",
    r: "Riche en fibres · 380 kcal",
    rEn: "High fiber · 380 kcal",
    ok: true,
    e: "🥗",
  },
  {
    n: "Croissant beurre",
    nEn: "Butter croissant",
    r: "Contient : Gluten, Lactose",
    rEn: "Contains: Gluten, Lactose",
    ok: false,
    e: "🥐",
  },
  {
    n: "Saumon grillé riz",
    nEn: "Grilled salmon rice",
    r: "Riche en protéines · 420 kcal",
    rEn: "High protein · 420 kcal",
    ok: true,
    e: "🐟",
  },
];

export default function Alerts() {
  const t = useTranslation();
  const { lang } = useLanguage();

  return (
    <section
      id="alerts"
      className="relative overflow-hidden bg-gradient-to-br from-white via-brand-soft/30 to-white py-24"
      aria-label="Alerts"
    >
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand shadow-sm ring-1 ring-border">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {t.alerts.tag}
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            {t.alerts.title1}
            <br />
            <span className="gradient-text">{t.alerts.title2}</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
            {t.alerts.desc}
          </p>

          <ul className="mt-8 space-y-4">
            {items.map((item) => (
              <li
                key={item.key}
                className="flex items-start gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span
                  className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full text-white ${item.color}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">
                    {t.alerts[`${item.key}Title` as const]}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">
                    {t.alerts[`${item.key}Desc` as const]}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-3xl border border-border bg-white p-6 shadow-2xl">
            <div className="flex items-center gap-2 rounded-2xl bg-foreground p-3 text-white">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-error text-base">
                🔔
              </span>
              <div className="flex-1">
                <p className="text-[10px] opacity-70">{t.alerts.alertSub}</p>
                <p className="text-sm font-bold">{t.alerts.alertTitle}</p>
              </div>
              <span className="text-[10px] opacity-70">{t.alerts.now}</span>
            </div>

            <div className="mt-4 space-y-3">
              {foods.map((f) => (
                <div
                  key={f.n}
                  className={`flex items-center gap-3 rounded-2xl border-2 p-3 ${
                    f.ok
                      ? "border-brand/40 bg-brand-soft"
                      : "border-error/40 bg-error/5"
                  }`}
                >
                  <span className="text-2xl" aria-hidden>
                    {f.e}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-foreground">
                      {lang === "fr" ? f.n : f.nEn}
                    </p>
                    <p className="text-[10px] text-muted">
                      {lang === "fr" ? f.r : f.rEn}
                    </p>
                  </div>
                  <span
                    className={`grid h-7 w-7 place-items-center rounded-full text-xs font-bold text-white ${
                      f.ok ? "bg-brand" : "bg-error"
                    }`}
                  >
                    {f.ok ? "✓" : "✕"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <span className="absolute -bottom-3 -left-3 grid h-12 w-12 place-items-center rounded-2xl bg-warning text-white shadow-lg text-xl animate-bounce-slow">
            ⚠️
          </span>
          <span className="absolute -right-3 top-20 grid h-10 w-10 place-items-center rounded-full bg-brand text-white shadow-lg text-base">
            ✓
          </span>
        </div>
      </div>
    </section>
  );
}