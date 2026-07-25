"use client";

import Link from "next/link";
import { useTranslation } from "./LanguageProvider";
import {
  AvocadoIcon,
  BowlIcon,
  StrawberryIcon,
  MicIcon,
  BellIcon,
  LogomarkIcon,
  HeartIcon,
} from "./icons";

const ITEM_ICON_KEYS = ["avocado", "bowl", "strawberry"] as const;

function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto h-[520px] w-[240px] rounded-[44px] border-[10px] border-foreground bg-foreground shadow-2xl">
      <div className="absolute left-1/2 top-3 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
      <div className="h-full w-full overflow-hidden rounded-[34px] bg-white">
        {children}
      </div>
    </div>
  );
}

function FoodGlyph({ kind }: { kind: (typeof ITEM_ICON_KEYS)[number] }) {
  const cls = "h-6 w-6";
  if (kind === "avocado") return <AvocadoIcon size={24} className={cls} />;
  if (kind === "bowl") return <BowlIcon size={24} className={cls} />;
  return <StrawberryIcon size={24} className={cls} />;
}

export default function Hero() {
  const t = useTranslation();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-28"
      aria-label="Hero"
    >
      <span className="blob h-72 w-72 bg-brand -top-10 -left-20" />
      <span className="blob h-80 w-80 bg-warning top-40 -right-20" />
      <span className="blob h-64 w-64 bg-error bottom-0 left-1/3 opacity-20" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-dark">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
            {t.hero.badge}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {t.hero.title1}
            <br />
            <span className="gradient-text">{t.hero.title2}</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            <strong className="text-foreground">tomady</strong> {t.hero.desc}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#appstore"
              className="group inline-flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
                aria-hidden
              >
                <path d="M16.4 12.6c0-2.7 2.2-4 2.3-4.1-1.3-1.9-3.3-2.1-4-2.2-1.7-.2-3.3 1-4.1 1-.9 0-2.2-1-3.6-1-1.9 0-3.6 1.1-4.6 2.7-2 3.4-.5 8.5 1.4 11.3 1 1.4 2.1 2.9 3.6 2.9 1.5-.1 2-1 3.8-1 1.7 0 2.2 1 3.8 1 1.6 0 2.6-1.4 3.5-2.7 1.1-1.6 1.6-3.1 1.6-3.2-.1 0-3.1-1.2-3.1-4.7zM13.7 4.7c.8-1 1.4-2.4 1.2-3.7-1.2.1-2.6.8-3.4 1.8-.7.9-1.4 2.3-1.2 3.6 1.3.1 2.7-.7 3.4-1.7z" />
              </svg>
              <span className="text-left leading-tight">
                <span className="block text-[10px] opacity-80">
                  {t.hero.appStoreSub}
                </span>
                <span className="block text-base font-extrabold">
                  {t.hero.appStore}
                </span>
              </span>
            </Link>
            <Link
              href="#playstore"
              className="group inline-flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
                aria-hidden
              >
                <path d="M3.6 2.3c-.4.4-.6 1-.6 1.7v16c0 .7.2 1.3.6 1.7L13.2 12 3.6 2.3zm10.6 10.5 2.6 2.6-9 5.2 6.4-7.8zm0-1.6L7.8 3.4l9 5.2-2.6 2.6zm6.7-3.4-2.4 1.4-2.9-2.9 2.9-2.9 2.4 1.4c1.2.7 1.2 2.3 0 3z" />
              </svg>
              <span className="text-left leading-tight">
                <span className="block text-[10px] opacity-80">
                  {t.hero.playStoreSub}
                </span>
                <span className="block text-base font-extrabold">
                  {t.hero.playStore}
                </span>
              </span>
            </Link>
          </div>

          <div className="mt-6 flex items-center gap-3 text-xs font-medium text-muted">
            <HeartIcon size={16} className="h-4 w-4 text-brand" />
            {t.hero.free}
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {["bg-brand", "bg-warning", "bg-error", "bg-brand-dark"].map(
                (c, i) => (
                  <span
                    key={i}
                    className={`grid h-10 w-10 place-items-center rounded-full border-2 border-white text-xs font-bold text-white ${c}`}
                  >
                    {["SR", "LM", "AT", "JP"][i]}
                  </span>
                )
              )}
            </div>
            <div>
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
              <p className="mt-1 text-xs font-medium text-muted">
                {t.hero.social}
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto h-[560px] w-full max-w-md md:max-w-lg">
          <div className="absolute right-0 top-1/2 h-[440px] w-[440px] -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-soft to-white" />
          <div className="absolute right-0 top-1/2 h-[440px] w-[440px] -translate-y-1/2 rounded-full border-2 border-dashed border-brand/30 animate-[spin_40s_linear_infinite]" />

          <div className="absolute right-12 top-12 h-6 w-6 rotate-45 bg-warning animate-float" />
          <div className="absolute right-44 bottom-16 animate-bounce-slow text-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8"
              aria-hidden
            >
              <path d="M12 2l2.39 7.36H22l-6.19 4.5L18.2 21 12 16.5 5.8 21l2.39-7.14L2 9.36h7.61L12 2z" />
            </svg>
          </div>
          <div className="absolute left-4 top-20 h-4 w-4 rounded-full bg-error animate-pulse" />
          <div className="absolute left-12 bottom-32 h-5 w-5 rounded-full border-2 border-brand" />

          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 animate-float">
            <PhoneMockup>
              <div className="bg-gradient-to-br from-brand to-brand-dark px-5 pt-12 pb-6 text-white">
                <p className="text-xs opacity-90">{t.phones.hero.greeting}</p>
                <p className="mt-1 text-xl font-bold">{t.phones.hero.name}</p>
                <div className="mt-4 rounded-2xl bg-white/20 p-3 backdrop-blur-sm">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-medium">
                      {t.phones.hero.caloriesLabel}
                    </span>
                    <span className="font-bold">1,420 / 2,000</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-white/25">
                    <div className="h-2 w-[71%] rounded-full bg-white" />
                  </div>
                </div>
              </div>
              <div className="space-y-3 px-4 py-4">
                {t.phones.hero.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-xl border border-border bg-white px-3 py-2.5 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-soft text-brand-dark">
                        <FoodGlyph kind={ITEM_ICON_KEYS[idx]} />
                      </span>
                      <p className="text-xs font-semibold text-foreground">
                        {item.name}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-muted">
                      {item.kcal}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mx-4 rounded-xl bg-brand-soft p-3 text-center text-xs font-bold text-brand-dark">
                {t.phones.hero.tip}
              </div>
            </PhoneMockup>
          </div>

          <div className="absolute left-2 top-32 z-20 rounded-2xl bg-white p-3 shadow-xl animate-float">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-error text-white">
                <MicIcon size={18} className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[10px] text-muted">AI listening</p>
                <p className="text-sm font-bold text-foreground">
                  {t.hero.voiceOn}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute right-2 bottom-20 z-20 rounded-2xl bg-white p-3 shadow-xl animate-float">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-warning text-white">
                <BellIcon size={18} className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[10px] text-muted">Alert</p>
                <p className="text-sm font-bold text-foreground">
                  {t.hero.alert}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Logomark so it's not dead code if needed elsewhere */}
      <span className="hidden">
        <LogomarkIcon size={24} />
      </span>
    </section>
  );
}