"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.solutions, href: "#features" },
    { label: t.nav.app, href: "#screens" },
    { label: t.nav.alerts, href: "#alerts" },
    { label: t.nav.reviews, href: "#blog" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-white/70 backdrop-blur-xl shadow-sm"
          : "bg-white/0 backdrop-blur-0"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="#home"
          className="group flex items-center gap-2"
          aria-label="Tomady — Accueil"
        >
          <Image
            src="/logo/logo web.png"
            alt="Tomady"
            width={140}
            height={36}
            priority
            className="h-9 w-auto transition-transform group-hover:scale-[1.02]"
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="relative text-sm font-semibold text-foreground/80 transition-colors hover:text-brand after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <div className="flex items-center overflow-hidden rounded-full border border-border bg-white/80 p-0.5 backdrop-blur-sm">
            {(["fr", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                aria-label={`Switch language to ${code.toUpperCase()}`}
                className={`px-3 py-1.5 text-[11px] font-bold uppercase transition-all ${
                  lang === code
                    ? "rounded-full bg-brand text-white shadow-sm"
                    : "text-muted hover:text-brand"
                }`}
              >
                {code}
              </button>
            ))}
          </div>
          <Link
            href="#download"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden
            >
              <path d="M12 4v12" />
              <path d="m7 11 5 5 5-5" />
              <path d="M5 20h14" />
            </svg>
            {t.nav.download}
          </Link>
        </div>

        <button
          type="button"
          aria-label={t.nav.toggleMenu}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-foreground transition-colors hover:bg-brand-soft hover:text-brand lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            className="h-6 w-6"
            aria-hidden
          >
            {open ? (
              <path d="M6 6l12 12M18 6l-12 12" />
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-white/95 px-6 py-4 backdrop-blur-xl lg:hidden">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-semibold text-foreground/80 transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-2 pt-2">
              <div className="flex items-center overflow-hidden rounded-full border border-border bg-white p-0.5">
                {(["fr", "en"] as const).map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    aria-pressed={lang === code}
                    className={`px-3 py-1.5 text-[11px] font-bold uppercase transition-all ${
                      lang === code
                        ? "rounded-full bg-brand text-white"
                        : "text-muted hover:text-brand"
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>
              <Link
                href="#download"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-brand px-5 py-2.5 text-center text-sm font-bold text-white shadow-md"
              >
                {t.nav.download}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}