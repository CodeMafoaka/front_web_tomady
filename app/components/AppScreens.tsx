"use client";

import Link from "next/link";
import { useTranslation } from "./LanguageProvider";
import DownloadButton from "./DownloadButton";
import {
  FishIcon,
  BowlIcon,
  PeanutIcon,
  AvocadoIcon,
  TargetIcon,
  PlusIcon,
  CheckIcon,
  CrossIcon,
  MicIcon,
  SendIcon,
  HappyFaceIcon,
  NeutralFaceIcon,
  FlameIcon,
} from "./icons";

function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto h-[440px] w-[210px] rounded-[36px] border-[8px] border-foreground bg-foreground shadow-xl">
      <div className="absolute left-1/2 top-2 h-4 w-20 -translate-x-1/2 rounded-full bg-black" />
      <div className="h-full w-full overflow-hidden rounded-[28px] bg-white">
        {children}
      </div>
    </div>
  );
}

const screenKeys = ["s1", "s2", "s3", "s4", "s5"] as const;

type FoodKind = "fish" | "bowl" | "peanut" | "avocado";
function FoodGlyph({ kind, size = 18 }: { kind: FoodKind; size?: number }) {
  const cls = `h-[${size}px] w-[${size}px]`;
  if (kind === "fish") return <FishIcon size={size} className={cls} />;
  if (kind === "bowl") return <BowlIcon size={size} className={cls} />;
  if (kind === "peanut") return <PeanutIcon size={size} className={cls} />;
  return <AvocadoIcon size={size} className={cls} />;
}

type MoodKind = "fire" | "happy" | "neutral";
function MoodGlyph({ kind }: { kind: MoodKind }) {
  if (kind === "fire") return <FlameIcon size={16} className="h-4 w-4" />;
  if (kind === "happy") return <HappyFaceIcon size={16} className="h-4 w-4" />;
  return <NeutralFaceIcon size={16} className="h-4 w-4" />;
}

export default function AppScreens() {
  const t = useTranslation();

  return (
    <section
      id="screens"
      className="relative bg-gradient-to-br from-white via-brand-soft/20 to-white py-24"
      aria-label="App screens"
    >
      <span className="blob h-72 w-72 bg-brand top-10 -right-20 opacity-15" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand shadow-sm ring-1 ring-border">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {t.screens.tag}
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            {t.screens.title1}{" "}
            <span className="gradient-text">{t.screens.title2}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg">
            {t.screens.desc}
          </p>
        </div>

        <div className="mt-16 space-y-24">
          {screenKeys.map((key, idx) => {
            const phone = renderScreen(key, t.phones);
            return (
              <div
                key={key}
                className={`grid items-center gap-10 md:grid-cols-2 ${
                  idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="flex justify-center">{phone}</div>
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                    {t.screens[`${key}Title` as const]}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-muted md:text-lg">
                    {t.screens[`${key}Desc` as const]}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand text-white">
                        <CheckIcon size={10} className="h-2.5 w-2.5" />
                      </span>
                      {t.screens[`${key}F1` as const]}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand text-white">
                        <CheckIcon size={10} className="h-2.5 w-2.5" />
                      </span>
                      {t.screens[`${key}F2` as const]}
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 flex flex-col items-center justify-center gap-3">
          <DownloadButton variant="compact" />
          <p className="text-[11px] text-muted">{t.download.androidOnly}</p>
        </div>
      </div>
    </section>
  );
}

function renderScreen(
  key: (typeof screenKeys)[number],
  phones: ReturnType<typeof useTranslation>["phones"]
) {
  if (key === "s1") {
    const p = phones.screen1;
    return (
      <PhoneShell>
        <div className="h-full bg-gradient-to-br from-brand-soft to-white p-4 pt-10">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-brand text-sm font-bold text-white">
              SR
            </div>
            <div>
              <p className="text-xs text-muted">{p.hello}</p>
              <p className="text-sm font-extrabold text-foreground">{p.name}</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-xl border border-border bg-white p-2">
              <p className="text-[9px] text-muted">{p.weight}</p>
              <p className="text-xs font-bold text-foreground">{p.weightV}</p>
            </div>
            <div className="rounded-xl border border-border bg-white p-2">
              <p className="text-[9px] text-muted">{p.height}</p>
              <p className="text-xs font-bold text-foreground">{p.heightV}</p>
            </div>
            <div className="rounded-xl border border-border bg-white p-2">
              <p className="text-[9px] text-muted">{p.age}</p>
              <p className="text-xs font-bold text-foreground">{p.ageV}</p>
            </div>
          </div>
          <div className="mt-3 rounded-xl bg-white p-3 shadow-sm">
            <p className="text-[10px] font-bold uppercase text-muted">
              {p.goalLabel}
            </p>
            <div className="mt-2 flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-soft text-brand-dark">
                <TargetIcon size={18} className="h-5 w-5" />
              </span>
              <p className="text-xs font-bold text-foreground">{p.goalValue}</p>
            </div>
          </div>
          <div className="mt-2 rounded-xl bg-error/10 p-3">
            <p className="text-[10px] font-bold uppercase text-error">
              {p.avoidLabel}
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              {p.avoids.map((a) => (
                <span
                  key={a}
                  className="rounded-full bg-white px-2 py-0.5 text-[9px] font-bold text-error"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </PhoneShell>
    );
  }

  if (key === "s2") {
    const p = phones.screen2;
    const kinds: FoodKind[] = ["fish", "bowl", "peanut", "avocado"];
    return (
      <PhoneShell>
        <div className="h-full bg-white p-4 pt-10">
          <p className="text-sm font-extrabold text-foreground">{p.title}</p>
          <div className="mt-2 flex gap-1">
            {p.tabs.map((tt, i) => (
              <span
                key={tt}
                className={`rounded-full px-2 py-1 text-[9px] font-bold ${
                  i === 0
                    ? "bg-brand text-white"
                    : "bg-brand-soft text-brand-dark"
                }`}
              >
                {tt}
              </span>
            ))}
          </div>
          <div className="mt-3 space-y-2">
            {p.items.map((f, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 rounded-xl border p-2 ${
                  f.ok
                    ? "border-brand/30 bg-brand-soft"
                    : "border-error/30 bg-error/5"
                }`}
              >
                <span
                  className={`grid h-7 w-7 place-items-center rounded-lg ${
                    f.ok ? "bg-white text-brand-dark" : "bg-white text-error"
                  }`}
                >
                  <FoodGlyph kind={kinds[i]} size={18} />
                </span>
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-foreground">
                    {f.name}
                  </p>
                  <p className="text-[9px] text-muted">{f.kcal}</p>
                </div>
                <span
                  className={`grid h-5 w-5 place-items-center rounded-full text-white ${
                    f.ok ? "bg-brand" : "bg-error"
                  }`}
                >
                  {f.ok ? (
                    <CheckIcon size={12} className="h-3 w-3" />
                  ) : (
                    <CrossIcon size={12} className="h-3 w-3" />
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </PhoneShell>
    );
  }

  if (key === "s3") {
    const p = phones.screen3;
    const moods: MoodKind[] = ["fire", "happy", "fire", "neutral"];
    return (
      <PhoneShell>
        <div className="h-full bg-white p-4 pt-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-muted">{p.today}</p>
              <p className="text-sm font-extrabold text-foreground">{p.title}</p>
            </div>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-brand text-white">
              <PlusIcon size={14} className="h-3.5 w-3.5" />
            </span>
          </div>
          <div className="mt-3 space-y-2">
            {p.meals.map((m, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-white p-2 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-brand">
                    {m.meal}
                  </p>
                  <span className="text-brand-dark">
                    <MoodGlyph kind={moods[i]} />
                  </span>
                </div>
                <p className="mt-1 text-[10px] text-muted">{m.items}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl bg-brand-soft p-2 text-center text-[10px] font-bold text-brand-dark">
            1,370 kcal · {p.remaining}
          </div>
        </div>
      </PhoneShell>
    );
  }

  if (key === "s4") {
    const p = phones.screen4;
    return (
      <PhoneShell>
        <div className="h-full bg-white p-4 pt-10">
          <div className="flex items-center justify-between">
            <p className="text-sm font-extrabold text-foreground">{p.title}</p>
            <span className="rounded-full bg-brand-soft px-2 py-0.5 text-[9px] font-bold text-brand-dark">
              {p.delta}
            </span>
          </div>
          <div className="mt-3 flex h-24 items-end gap-1.5 rounded-xl bg-brand-soft p-3">
            {[40, 55, 50, 70, 60, 80, 75].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t ${
                  i === 5 ? "bg-brand" : "bg-brand-dark/40"
                }`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="mt-1 flex justify-between text-[8px] text-muted">
            {p.days.map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {p.macros.map((m, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-white p-2 text-center"
              >
                <div className={`mx-auto h-1.5 w-6 rounded-full ${m.c}`} />
                <p className="mt-1 text-[10px] font-bold text-foreground">{m.v}</p>
                <p className="text-[8px] text-muted">{m.l}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl bg-foreground p-3 text-white">
            <p className="text-[10px] opacity-80">{p.caloriesLabel}</p>
            <div className="mt-1 h-2 w-full rounded-full bg-white/20">
              <div className="h-2 w-[71%] rounded-full bg-brand" />
            </div>
            <p className="mt-1 text-[9px] opacity-80">{p.caloriesValue}</p>
          </div>
        </div>
      </PhoneShell>
    );
  }

  // s5
  const p = phones.screen5;
  return (
    <PhoneShell>
      <div className="flex h-full flex-col bg-gradient-to-b from-white to-brand-soft/40 p-4 pt-10">
        <p className="text-sm font-extrabold text-foreground">{p.title}</p>
        <span className="mt-0.5 inline-flex items-center gap-1 text-[9px] font-bold text-brand">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
          {p.online}
        </span>
        <div className="mt-3 space-y-2">
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-brand px-3 py-2 text-[10px] text-white">
            {p.chatUser}
          </div>
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[10px] text-foreground shadow-sm">
            {p.chatBot}
          </div>
          <div className="ml-auto flex items-center gap-1 max-w-[80%] rounded-2xl rounded-tr-sm bg-brand px-3 py-2 text-[10px] text-white">
            <MicIcon size={12} className="h-3 w-3" />
            {p.chatVoice}
          </div>
        </div>
        <div className="mt-auto rounded-2xl border border-border bg-white p-2 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-soft text-brand">
              <MicIcon size={14} className="h-3.5 w-3.5" />
            </span>
            <p className="flex-1 text-[10px] text-muted">{p.dictLabel}</p>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-brand text-white">
              <SendIcon size={12} className="h-3 w-3" />
            </span>
          </div>
        </div>
      </div>
    </PhoneShell>
  );
}