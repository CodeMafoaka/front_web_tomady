"use client";

import Link from "next/link";
import { useTranslation } from "./LanguageProvider";
import DownloadButton from "./DownloadButton";
import { LogomarkIcon, BowlIcon, StrawberryIcon } from "./icons";

export default function Footer() {
  const t = useTranslation();

  return (
    <footer className="border-t-4 border-brand bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link
              href="#home"
              className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-brand"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-white shadow-sm">
                <LogomarkIcon size={20} className="h-5 w-5" />
              </span>
              tomady
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {t.footer.tagline}
            </p>

            <div className="mt-6 flex flex-col items-start gap-3">
              <DownloadButton variant="footer" />
              <p className="text-[11px] text-white/50">
                {t.download.androidOnly} · {t.download.sizeLabel} ·{" "}
                {t.download.version}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: BowlIcon, color: "bg-brand" },
                { Icon: StrawberryIcon, color: "bg-warning" },
              ].map((s, i) => (
                <span
                  key={i}
                  className={`grid h-10 w-10 place-items-center rounded-full text-white ${s.color}`}
                >
                  <s.Icon size={22} className="h-5 w-5" />
                </span>
              ))}
            </div>

            <p className="mt-6 text-[11px] leading-relaxed text-white/50">
              {t.footer.disclaimer}
            </p>
          </div>

          {Object.entries(t.footer.cols).map(([title, items]) => (
            <div key={title}>
              <p className="text-sm font-bold uppercase tracking-wider text-white">
                {title}
              </p>
              <ul className="mt-4 space-y-3">
                {(items as readonly string[]).map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm text-white/70 transition-colors hover:text-brand"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-3">
            {[
              {
                name: "Twitter",
                d: "M22 5.8c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1A4.1 4.1 0 0 0 11.5 9c-3.4-.2-6.4-1.8-8.4-4.3a4 4 0 0 0 1.3 5.4c-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.8.1.5 1.6 2 2.8 3.8 2.8A8.3 8.3 0 0 1 2 18.4a11.7 11.7 0 0 0 6.3 1.8c7.5 0 11.7-6.2 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.2z",
              },
              {
                name: "Instagram",
                d: "M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5zM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm5-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",
              },
              {
                name: "Facebook",
                d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
              },
            ].map((s) => (
              <Link
                key={s.name}
                href={`#${s.name.toLowerCase()}`}
                aria-label={s.name}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition-all hover:bg-brand hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden
                >
                  <path d={s.d} />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}