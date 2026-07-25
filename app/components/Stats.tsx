"use client";

import { useTranslation } from "./LanguageProvider";

const stats = [
  { value: "120k+", labelKey: "users" as const, icon: "users" },
  { value: "5M+", labelKey: "meals" as const, icon: "meal" },
  { value: "4,9", labelKey: "rating" as const, icon: "star" },
  { value: "98%", labelKey: "goals" as const, icon: "heart" },
];

function Icon({ name }: { name: string }) {
  const cls = "h-5 w-5";
  switch (name) {
    case "users":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cls}
          aria-hidden
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "meal":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cls}
          aria-hidden
        >
          <path d="M3 11h18M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
          <path d="M3 16h18M5 16v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3" />
        </svg>
      );
    case "star":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={cls}
          aria-hidden
        >
          <path d="M12 2l2.39 7.36H22l-6.19 4.5L18.2 21 12 16.5 5.8 21l2.39-7.14L2 9.36h7.61L12 2z" />
        </svg>
      );
    case "heart":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={cls}
          aria-hidden
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Stats() {
  const t = useTranslation();

  return (
    <section
      className="border-y border-border bg-gradient-to-r from-white via-brand-soft/40 to-white"
      aria-label="Statistics"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4 md:gap-4">
        {stats.map((s) => (
          <div
            key={s.labelKey}
            className="group flex flex-col items-center gap-3 text-center transition-transform hover:-translate-y-1 md:flex-row md:text-left"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand shadow-md ring-1 ring-border transition-all group-hover:bg-brand group-hover:text-white">
              <Icon name={s.icon} />
            </span>
            <div>
              <p className="text-3xl font-extrabold text-foreground md:text-4xl">
                {s.value}
              </p>
              <p className="mt-0.5 text-sm font-medium text-muted">
                {t.stats[s.labelKey]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}