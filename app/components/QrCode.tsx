"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

type Props = {
  url: string;
  size?: number;
  className?: string;
  fg?: string;
  bg?: string;
};

export default function QrCode({
  url,
  size = 160,
  className = "",
  fg = "#1f2937",
  bg = "#ffffff",
}: Props) {
  const [svg, setSvg] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    QRCode.toString(url, {
      type: "svg",
      margin: 1,
      width: size,
      color: { dark: fg, light: bg },
      errorCorrectionLevel: "M",
    })
      .then((out) => {
        if (!cancelled) setSvg(out);
      })
      .catch(() => {
        if (!cancelled) setSvg("");
      });
    return () => {
      cancelled = true;
    };
  }, [url, size, fg, bg]);

  if (!svg) {
    return (
      <div
        className={`grid place-items-center rounded-2xl bg-white ${className}`}
        style={{ width: size, height: size }}
        aria-hidden
      >
        <span className="text-xs font-bold text-muted">QR…</span>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl bg-white p-2 shadow-md ring-1 ring-border ${className}`}
      style={{ width: size + 16, height: size + 16 }}
      role="img"
      aria-label={`QR code linking to ${url}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}