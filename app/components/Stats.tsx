"use client";

import { useTranslation } from "./LanguageProvider";
import {
  UsersIcon,
  PlateIcon,
  StarIcon,
  HeartIcon,
} from "./icons";

const stats = [
  { value: "3+", labelKey: "users" as const, Icon: UsersIcon },
  { value: "1k+", labelKey: "meals" as const, Icon: PlateIcon },
  { value: "4,5", labelKey: "rating" as const, Icon: StarIcon },
  { value: "60%", labelKey: "goals" as const, Icon: HeartIcon },
];

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
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand shadow-md ring-1 ring-border transition-all group-hover:bg-brand group-hover:text-white group-hover:ring-brand">
              <s.Icon size={22} className="h-5 w-5" />
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
