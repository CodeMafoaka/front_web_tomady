"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const SAMPLES: { fr: string; en: string } = {
  fr: "Une alimentation équilibrée est la clé d'une vie saine. Mangez varié, hydratez-vous et écoutez votre corps. Demandez conseil à un médecin en cas de doute.",
  en: "A balanced diet is the key to a healthy life. Eat varied, stay hydrated and listen to your body. Always consult a doctor in case of doubt.",
};

export default function TranslateDemo() {
  const { lang } = useLanguage();
  const [input, setInput] = useState(SAMPLES[lang]);
  const [output, setOutput] = useState("");
  const [model, setModel] = useState("");
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  const targetLang = lang === "fr" ? "en" : "fr";
  const targetLabel = targetLang === "fr" ? "Français" : "English";

  const handleTranslate = () => {
    setError("");
    setOutput("");
    startTransition(async () => {
      try {
        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: input,
            targetLang,
            sourceLang: lang,
          }),
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Translation failed");
        }
        setOutput(data.translated || "");
        if (data.model) setModel(data.model);
      } catch (e) {
        setError(e instanceof Error ? e.message : String(e));
      }
    });
  };

  return (
    <section
      id="ai"
      className="relative overflow-hidden bg-gradient-to-br from-foreground via-foreground to-brand-dark py-24 text-white"
      aria-label="Gemma 3 AI translation"
    >
      <span className="blob h-72 w-72 bg-brand top-10 -left-20 opacity-25" />
      <span className="blob h-72 w-72 bg-warning -bottom-10 -right-20 opacity-20" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
            Powered by Gemma 3
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-5xl">
            {lang === "fr"
              ? "Traduction IA, en direct"
              : "AI translation, on the fly"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70 md:text-lg">
            {lang === "fr"
              ? "Colle une recette, une étiquette ou une description de repas — Gemma 3 la traduit instantanément entre le français et l'anglais."
              : "Paste a recipe, food label or meal description — Gemma 3 translates it instantly between French and English."}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm">
            <div className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white/70">
              <span>
                {lang === "fr" ? "Français" : "English"} (source)
              </span>
              <span className="rounded-full bg-white/10 px-2 py-0.5">
                {input.length} chars
              </span>
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={6}
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white outline-none placeholder-white/40 focus:border-brand"
              placeholder={
                lang === "fr"
                  ? "Tape ou colle ton texte ici…"
                  : "Type or paste your text here…"
              }
            />
          </div>

          <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm">
            <div className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white/70">
              <span>{targetLabel} (target)</span>
              {model && (
                <span className="rounded-full bg-brand/30 px-2 py-0.5 text-brand">
                  {model}
                </span>
              )}
            </div>
            <div
              className={`min-h-[10rem] whitespace-pre-wrap rounded-2xl border p-4 text-sm ${
                output
                  ? "border-brand/40 bg-brand/10 text-white"
                  : "border-dashed border-white/10 text-white/40"
              }`}
            >
              {pending
                ? lang === "fr"
                  ? "⏳ Traduction en cours…"
                  : "⏳ Translating…"
                : output ||
                  (lang === "fr"
                    ? "La traduction apparaîtra ici."
                    : "Translation will appear here.")}
            </div>
            {error && (
              <p className="mt-3 rounded-xl bg-error/20 px-3 py-2 text-xs text-error">
                ⚠️ {error}
              </p>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleTranslate}
            disabled={pending || input.trim().length === 0}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-white shadow-lg shadow-brand/30 transition-all hover:-translate-y-0.5 hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden
            >
              <path d="M5 8h14M9 5l-3 3 3 3" />
              <path d="M19 16H5M15 19l3-3-3-3" />
            </svg>
            {pending
              ? lang === "fr"
                ? "Traduction…"
                : "Translating…"
              : lang === "fr"
              ? `Traduire en ${targetLabel}`
              : `Translate to ${targetLabel}`}
          </button>
          <button
            type="button"
            onClick={() => {
              setInput(SAMPLES[lang]);
              setOutput("");
              setError("");
            }}
            className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white/80 transition-colors hover:bg-white/10"
          >
            {lang === "fr" ? "Exemple" : "Sample"}
          </button>
        </div>

        <p className="mt-8 text-center text-xs text-white/50">
          {lang === "fr" ? (
            <>
              Traduction par Google AI Studio · Gemma 3.{" "}
              <Link href="#download" className="underline hover:text-brand">
                Télécharger l&apos;app
              </Link>{" "}
              pour la traduction intégrée au journal alimentaire.
            </>
          ) : (
            <>
              Translation by Google AI Studio · Gemma 3.{" "}
              <Link href="#download" className="underline hover:text-brand">
                Download the app
              </Link>{" "}
              for built-in translation in your food journal.
            </>
          )}
        </p>
      </div>
    </section>
  );
}