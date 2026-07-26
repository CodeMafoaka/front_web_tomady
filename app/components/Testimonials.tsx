"use client";

import Image from "next/image";
import { useLanguage, useTranslation } from "./LanguageProvider";
import { QuoteIcon } from "./icons";

type T = {
  fr: { name: string; role: string; quote: string };
  en: { name: string; role: string; quote: string };
};

type Testimonial = {
  photo: string;
  accent: string;
  t: T;
};

const testimonialsData: Testimonial[] = [
  {
    photo: "/photo/cristiano-ronaldo.jpg",
    accent: "bg-brand",
    t: {
      fr: {
        name: "Cristiano Ronaldo",
        role: "Athlète de renommée mondiale",
        quote:
          "La discipline nutritionnelle est la base de la performance. Tomady me permet de suivre mes macros où que je sois, sans compromis. 💪",
      },
      en: {
        name: "Cristiano Ronaldo",
        role: "World-class athlete",
        quote:
          "Nutritional discipline is the foundation of performance. Tomady lets me track my macros anywhere, no compromise. 💪",
      },
    },
  },
  {
    photo: "/photo/messi.jpg",
    accent: "bg-warning",
    t: {
      fr: {
        name: "Lionel Messi",
        role: "Footballeur professionnel",
        quote:
          "Tomady est devenu un outil indispensable pour ma préparation. Les repas équilibrés et les macros précises m'aident à rester au top sur le terrain. ⚽",
      },
      en: {
        name: "Lionel Messi",
        role: "Professional footballer",
        quote:
          "Tomady has become an essential tool in my preparation. The balanced meals and precise macros help me stay at the top on the pitch. ⚽",
      },
    },
  },
  {
    photo: "/photo/mr-bean.jpg",
    accent: "bg-error",
    t: {
      fr: {
        name: "Mr Bean",
        role: "Papa maladroit & humoriste",
        quote:
          "Moi et la cuisine, on n'a jamais été amis. Avec Tomady, je nourris mon petit-fils correctement sans rien faire brûler. 😅",
      },
      en: {
        name: "Mr Bean",
        role: "Clumsy dad & comedian",
        quote:
          "Cooking and I were never friends. With Tomady, I feed my grandson properly without burning anything. 😅",
      },
    },
  },
  {
    photo: "/photo/jim-carrey.jpg",
    accent: "bg-brand-dark",
    t: {
      fr: {
        name: "Jim Carrey",
        role: "Acteur & amateur de bien-être",
        quote:
          "Entre deux tournages, Tomady m'aide à garder une alimentation saine et à ne pas céder aux tentations. Ma santé mentale et physique s'en ressentent. 🌱",
      },
      en: {
        name: "Jim Carrey",
        role: "Actor & wellness enthusiast",
        quote:
          "Between shoots, Tomady helps me stay healthy and resist temptations. My mental and physical health benefit from it. 🌱",
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

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonialsData.map((item) => {
            const txt = item.t[lang];
            return (
              <article
                key={item.photo}
                className="relative flex flex-col rounded-3xl border border-border bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <span
                  className={`absolute -top-3 left-7 grid h-9 w-9 place-items-center rounded-2xl text-white shadow-md ${item.accent}`}
                >
                  <QuoteIcon size={16} className="h-4 w-4" />
                </span>

                <div className="flex items-center gap-1 text-warning">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                      aria-hidden
                    >
                      <path d="M12 2l2.39 7.36H22l-6.19 4.5L18.2 21 12 16.5 5.8 21l2.39-7.14L2 9.36h7.61L12 2z" />
                    </svg>
                  ))}
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                  &ldquo;{txt.quote}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white shadow-sm ring-1 ring-border">
                    <Image
                      src={item.photo}
                      alt={txt.name}
                      width={44}
                      height={44}
                      className="h-full w-full object-cover"
                    />
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