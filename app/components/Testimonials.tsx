"use client";

import { useLanguage, useTranslation } from "./LanguageProvider";
import { StarIcon, QuoteIcon } from "./icons";

type T = {
  fr: { name: string; role: string; quote: string };
  en: { name: string; role: string; quote: string };
};

const testimonialsData: { avatar: string; color: string; t: T }[] = [
  {
    avatar: "SR",
    color: "bg-brand",
    t: {
      fr: {
        name: "Sarah Rakoto",
        role: "A perdu 12 kg en 6 mois",
        quote:
          "tomady a complètement changé ma façon de manger. Les plans de repas IA sont délicieux et je ne me sens jamais privée. J'ai perdu 12 kg sans souffrir !",
      },
      en: {
        name: "Sarah Rakoto",
        role: "Lost 12 kg in 6 months",
        quote:
          "tomady completely changed how I eat. The AI meal plans are delicious and I never feel deprived. Lost 12 kg without suffering!",
      },
    },
  },
  {
    avatar: "LB",
    color: "bg-warning",
    t: {
      fr: {
        name: "Lucas Bernard",
        role: "Coureur de marathon",
        quote:
          "Pour un athlète, la nutrition est tout. tomady m'aide à atteindre mes macros chaque jour et les recettes sont vraiment savoureuses. 10/10.",
      },
      en: {
        name: "Lucas Bernard",
        role: "Marathon runner",
        quote:
          "As an athlete, nutrition is everything. tomady helps me hit my macros daily and the recipes are actually tasty. 10/10.",
      },
    },
  },
  {
    avatar: "AT",
    color: "bg-error",
    t: {
      fr: {
        name: "Aina Tessier",
        role: "Maman de 3 enfants",
        quote:
          "La liste de courses intelligente me fait gagner des heures chaque semaine. Mes enfants adorent les recettes et je me sens enfin sereine sur ce qu'on mange.",
      },
      en: {
        name: "Aina Tessier",
        role: "Busy mom of 3",
        quote:
          "The smart grocery list saves me hours every week. My kids love the recipes and I finally feel good about what we eat.",
      },
    },
  },
];

export default function Testimonials() {
  const t = useTranslation();
  const { lang } = useLanguage();

  return (
    <section
      id="blog"
      className="relative bg-gradient-to-br from-white via-brand-soft/30 to-white"
      aria-label="Testimonials"
    >
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand shadow-sm ring-1 ring-border">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {t.testimonials.tag}
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            {t.testimonials.title1}{" "}
            <span className="gradient-text">{t.testimonials.title2}</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonialsData.map((item) => {
            const txt = item.t[lang];
            return (
              <article
                key={item.avatar}
                className="relative rounded-3xl border border-border bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="absolute -top-3 left-7 grid h-9 w-9 place-items-center rounded-2xl bg-brand text-white shadow-md">
                  <QuoteIcon size={16} className="h-4 w-4" />
                </span>

                <div className="flex items-center gap-1 text-warning">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} size={16} className="h-4 w-4" />
                  ))}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-foreground">
                  &ldquo;{txt.quote}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-full text-sm font-bold text-white ${item.color}`}
                  >
                    {item.avatar}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-foreground">{txt.name}</p>
                    <p className="text-xs text-muted">{txt.role}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}