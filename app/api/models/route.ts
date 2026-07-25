import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MODEL_CANDIDATES = [
  "gemma-3-4b-it",
  "gemma-3-1b-it",
  "gemma-3-12b-it",
  "gemma-3-27b-it",
  "gemma-3n-e4b-it",
  "gemma-3n-e2b-it",
  "gemma-3n-4b-it",
  "gemma-2-9b-it",
  "gemma-2-2b-it",
  "gemini-2.0-flash-lite",
  "gemini-1.5-flash",
];

const API_VERSIONS = ["v1beta", "v1"];

export async function GET() {
  const apiKey = process.env.GOOGLE_AI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "GOOGLE_AI_API_KEY manquante. Configure-la dans .env.local — clé gratuite sur https://aistudio.google.com/apikey",
      },
      { status: 503 }
    );
  }

  const results: Array<{
    model: string;
    apiVersion: string;
    status: "ok" | "404" | "error";
    supportsGenerateContent?: boolean;
    error?: string;
  }> = [];

  for (const apiVersion of API_VERSIONS) {
    for (const model of MODEL_CANDIDATES) {
      try {
        const url = `https://generativelanguage.googleapis.com/${apiVersion}/models/${model}?key=${apiKey}`;
        const res = await fetch(url, { method: "GET" });
        if (res.status === 404) {
          results.push({ model, apiVersion, status: "404" });
          continue;
        }
        if (!res.ok) {
          const text = await res.text();
          results.push({
            model,
            apiVersion,
            status: "error",
            error: `${res.status} ${text.slice(0, 200)}`,
          });
          continue;
        }
        const data = await res.json();
        const supported =
          Array.isArray(data.supportedGenerationMethods) &&
          data.supportedGenerationMethods.includes("generateContent");
        results.push({
          model,
          apiVersion,
          status: "ok",
          supportsGenerateContent: supported,
        });
      } catch (e) {
        results.push({
          model,
          apiVersion,
          status: "error",
          error: e instanceof Error ? e.message : String(e),
        });
      }
    }
  }

  const usable = results.filter(
    (r) => r.status === "ok" && r.supportsGenerateContent
  );

  return NextResponse.json({
    apiKeyConfigured: true,
    apiKeyPrefix: apiKey.slice(0, 4) + "…",
    testedCount: results.length,
    usableForTranslate: usable.map((r) => `${r.model}@${r.apiVersion}`),
    recommended: usable[0] ? usable[0].model : null,
    nextStep:
      usable.length > 0
        ? `Set GEMMA_MODEL=${usable[0].model} in .env.local`
        : "Aucun modèle disponible avec cette clé.",
    all: results,
  });
}