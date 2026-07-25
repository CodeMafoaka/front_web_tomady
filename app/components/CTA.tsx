"use client";

import Link from "next/link";
import { useTranslation } from "./LanguageProvider";
import DownloadButton from "./DownloadButton";

export default function CTA() {
  const t = useTranslation();

  return (
    <section
      id="download"
      className="relative overflow-hidden"
      aria-label="Download"
    >
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand via-brand-dark to-brand px-8 py-16 text-center text-white shadow-2xl md:px-16 md:py-20">
          <span className="blob h-72 w-72 bg-warning -top-20 -left-10 opacity-30" />
          <span className="blob h-72 w-72 bg-error -bottom-20 -right-10 opacity-25" />

          <h2 className="relative text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            {t.cta.title1}
            <br />
            {t.cta.title2}
          </h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-base text-white/90 md:text-lg">
            {t.cta.desc}
          </p>

          <div className="relative mt-10 flex flex-col items-center justify-center gap-4">
            <DownloadButton variant="primary" />
            <p className="text-xs text-white/80">
              {t.download.androidOnly} · {t.download.sizeLabel} ·{" "}
              {t.download.version}
            </p>
            <p className="max-w-md text-[11px] text-white/60">
              {t.download.iosNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}