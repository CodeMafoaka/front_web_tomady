"use client";

import Link from "next/link";
import { useTranslation } from "./LanguageProvider";

export default function CTA() {
  const t = useTranslation();

  return (
    <section id="download" className="relative overflow-hidden" aria-label="Download">
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand via-brand-dark to-brand px-8 py-16 text-center text-white shadow-2xl md:px-16 md:py-20">
          <span className="blob h-72 w-72 bg-warning -top-20 -left-10 opacity-30" />
          <span className="blob h-72 w-72 bg-error -bottom-20 -right-10 opacity-25" />

          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            {t.cta.badge}
          </span>

          <h2 className="relative mt-5 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            {t.cta.title1}
            <br />
            {t.cta.title2}
          </h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-base text-white/90 md:text-lg">
            {t.cta.desc}
          </p>

          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#appstore"
              className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 text-foreground shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8"
                aria-hidden
              >
                <path d="M16.4 12.6c0-2.7 2.2-4 2.3-4.1-1.3-1.9-3.3-2.1-4-2.2-1.7-.2-3.3 1-4.1 1-.9 0-2.2-1-3.6-1-1.9 0-3.6 1.1-4.6 2.7-2 3.4-.5 8.5 1.4 11.3 1 1.4 2.1 2.9 3.6 2.9 1.5-.1 2-1 3.8-1 1.7 0 2.2 1 3.8 1 1.6 0 2.6-1.4 3.5-2.7 1.1-1.6 1.6-3.1 1.6-3.2-.1 0-3.1-1.2-3.1-4.7zM13.7 4.7c.8-1 1.4-2.4 1.2-3.7-1.2.1-2.6.8-3.4 1.8-.7.9-1.4 2.3-1.2 3.6 1.3.1 2.7-.7 3.4-1.7z" />
              </svg>
              <span className="text-left leading-tight">
                <span className="block text-[10px] opacity-70">
                  {t.hero.appStoreSub}
                </span>
                <span className="block text-base font-extrabold">
                  {t.hero.appStore}
                </span>
              </span>
            </Link>
            <Link
              href="#playstore"
              className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 text-foreground shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8"
                aria-hidden
              >
                <path d="M3.6 2.3c-.4.4-.6 1-.6 1.7v16c0 .7.2 1.3.6 1.7L13.2 12 3.6 2.3zm10.6 10.5 2.6 2.6-9 5.2 6.4-7.8zm0-1.6L7.8 3.4l9 5.2-2.6 2.6zm6.7-3.4-2.4 1.4-2.9-2.9 2.9-2.9 2.4 1.4c1.2.7 1.2 2.3 0 3z" />
              </svg>
              <span className="text-left leading-tight">
                <span className="block text-[10px] opacity-70">
                  {t.hero.playStoreSub}
                </span>
                <span className="block text-base font-extrabold">
                  {t.hero.playStore}
                </span>
              </span>
            </Link>
          </div>

          <p className="relative mt-6 text-xs text-white/70">{t.cta.rating}</p>
        </div>
      </div>
    </section>
  );
}