"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "./LanguageProvider";
import { getAndroidDownload } from "../../lib/download";

type Variant = "primary" | "compact" | "compactWhite" | "footer";

type Props = {
  variant?: Variant;
  href?: string;
  className?: string;
};

export default function DownloadButton({
  variant = "primary",
  href,
  className = "",
}: Props) {
  const t = useTranslation();
  const download = getAndroidDownload();
  const [downloading, setDownloading] = useState(false);
  const [done, setDone] = useState(false);

  const target = href ?? download?.file ?? "#";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!target || target === "#") return;
    e.preventDefault();
    setDownloading(true);
    const link = document.createElement("a");
    link.href = target;
    link.download = `tomady-v${download?.version ?? "1.0.0"}.apk`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      setDownloading(false);
      setDone(true);
      setTimeout(() => setDone(false), 2400);
    }, 900);
  };

  const base =
    "inline-flex items-center gap-3 rounded-full transition-all active:scale-[0.98]";

  const sizes =
    variant === "primary"
      ? "px-8 py-4 text-base"
      : variant === "footer"
      ? "px-5 py-3 text-sm"
      : "px-6 py-3 text-sm";

  const styles =
    variant === "primary"
      ? "bg-brand text-white shadow-lg shadow-brand/30 hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-xl"
      : variant === "footer"
      ? "bg-white text-foreground hover:-translate-y-0.5"
      : variant === "compactWhite"
      ? "bg-white text-foreground shadow-xl hover:-translate-y-0.5"
      : "bg-foreground text-white hover:bg-black hover:-translate-y-0.5";

  const label = downloading
    ? t.download.downloading
    : done
    ? t.download.thanks
    : t.download.downloadNow;

  return (
    <Link
      href={target}
      onClick={handleClick}
      className={`${base} ${sizes} ${styles} font-bold ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden
      >
        {done ? (
          <path d="M20 6 9 17l-5-5" />
        ) : (
          <>
            <path d="M12 4v12" />
            <path d="m7 11 5 5 5-5" />
            <path d="M5 20h14" />
          </>
        )}
      </svg>
      {label}
    </Link>
  );
}