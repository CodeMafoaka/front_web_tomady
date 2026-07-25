"use client";

import { useLanguage, useTranslation } from "./LanguageProvider";

const solutions = [
  {
    key: "s1" as const,
    color: "bg-brand-soft text-brand",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden
      >
        <path d="M3 11h18M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
        <path d="M3 16h18M5 16v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3" />
      </svg>
    ),
  },
  {
    key: "s2" as const,
    color: "bg-[#FEE2E2] text-error",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden
      >
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3" />
      </svg>
    ),
  },
  {
    key: "s3" as const,
    color: "bg-[#FEF3C7] text-warning",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden
      >
        <path d="M12 9v4M12 17h.01" />
        <path d="M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.7 3.86a2 2 0 0 0-3.4 0z" />
      </svg>
    ),
  },
];

export default function Solutions() {
  const t = useTranslation();
  const { lang } = useLanguage();

  return (
    <section
      id="features"
      className="relative bg-white py-24"
      aria-label="Solutions"
    >
      <span className="blob h-72 w-72 bg-warning top-10 -left-20 opacity-15" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-dark" />
            {t.solutions.tag}
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            {t.solutions.title1}{" "}
            <span className="gradient-text">{t.solutions.title2}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg">
            {t.solutions.desc}
          </p>
          <p className="mx-auto mt-3 max-w-xl text-xs italic text-muted">
            {t.solutions.medical}
          </p>

          <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
            {lang === "fr"
              ? "Propulsé par Gemma 3 · Google AI Studio"
              : "Powered by Gemma 3 · Google AI Studio"}
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {solutions.map((s, idx) => (
            <article
              key={s.key}
              className="group relative overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <span className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-soft/50 transition-transform group-hover:scale-150" />
              <span className="absolute right-4 top-4 text-xs font-bold text-muted">
                0{idx + 1}
              </span>

              <div
                className={`relative grid h-16 w-16 place-items-center rounded-2xl ${s.color} transition-transform group-hover:scale-110 group-hover:rotate-3`}
              >
                {s.icon}
              </div>

              <h3 className="relative mt-6 text-xl font-bold text-foreground">
                {t.solutions[`${s.key}Title` as const]}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted">
                {t.solutions[`${s.key}Desc` as const]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}