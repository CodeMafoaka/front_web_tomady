import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import type { Lang } from "../../../lib/translations";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RequestBody = {
  text?: string;
  texts?: string[];
  targetLang?: Lang;
  sourceLang?: Lang;
};

// Gemma 3 first, then Gemma 3 Nano, then Gemma 2 (more widely available),
// then Gemini Flash as a last resort (free tier, smaller context).
const MODEL_CANDIDATES = [
  process.env.GEMMA_MODEL,
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
].filter((m): m is string => Boolean(m));

function languageName(code: Lang): string {
  return code === "fr" ? "French (français)" : "English";
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GOOGLE_AI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "GOOGLE_AI_API_KEY manquante. Obtiens-en une gratuitement sur https://aistudio.google.com/apikey puis ajoute-la dans .env.local",
      },
      { status: 503 }
    );
  }

  let body: RequestBody;
  try {
    body = (await req.json()) as RequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const targetLang = body.targetLang;
  if (targetLang !== "fr" && targetLang !== "en") {
    return NextResponse.json(
      { error: "targetLang must be 'fr' or 'en'" },
      { status: 400 }
    );
  }

  const items: string[] = Array.isArray(body.texts)
    ? body.texts.filter((s): s is string => typeof s === "string" && s.length > 0)
    : typeof body.text === "string" && body.text.length > 0
    ? [body.text]
    : [];

  if (items.length === 0) {
    return NextResponse.json(
      { error: "Provide 'text' (string) or 'texts' (string[])" },
      { status: 400 }
    );
  }

  const sourceHint = body.sourceLang
    ? `Source language: ${languageName(body.sourceLang)}.\n`
    : "";

  const systemPrompt = `You are a professional translator for a mobile health & nutrition app called "tomady".
${sourceHint}Target language: ${languageName(targetLang)}.

Rules:
- Translate faithfully, preserving tone and meaning.
- Keep markdown, emojis, line breaks, bullet points as-is.
- For food/nutrition terms, use natural equivalents (e.g. "yaourt grec" / "Greek yogurt").
- Do NOT add commentary, explanations, or quotes around the output.
- Return ONLY the translated text, nothing else.`;

  const numberedInput = items.map((t, i) => `[${i + 1}]\n${t}`).join("\n\n");

  const userPrompt = `${sourceHint ? sourceHint : ""}Translate the following ${items.length === 1 ? "text" : `${items.length} numbered snippets`} into ${languageName(targetLang)}.

If there are multiple snippets, preserve the [number] markers exactly in your output, one per line block, in the same order.

${numberedInput}`;

  const genAI = new GoogleGenerativeAI(apiKey);
  const attempts: Array<{ model: string; error: string }> = [];

  for (const modelName of MODEL_CANDIDATES) {
    try {
      const model = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: systemPrompt,
        generationConfig: { temperature: 0.2 },
      });

      const result = await model.generateContent(userPrompt);
      const output = result.response.text().trim();

      const translations = parseNumberedOutput(output, items.length);

      return NextResponse.json({
        translated: translations.length === 1 ? translations[0] : output,
        translations,
        model: modelName,
        attempts: attempts.length,
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      const is404 = /404|not found|is not found/i.test(message);
      const is429 = /429|quota|rate/i.test(message);
      attempts.push({ model: modelName, error: message });
      if (!is404 && !is429) {
        return NextResponse.json(
          {
            error: `Translation failed on ${modelName}: ${message}`,
            attempts,
          },
          { status: 500 }
        );
      }
    }
  }

  const hasQuota = attempts.some((a) => /429|quota|rate/i.test(a.error));
  return NextResponse.json(
    {
      error: hasQuota
        ? "Quota exceeded on tous les modèles. Réessaie dans quelques minutes ou vérifie ton quota sur https://ai.dev/rate-limit."
        : "Aucun modèle disponible. Lance GET /api/models pour diagnostiquer.",
      attempts,
    },
    { status: 500 }
  );
}

function parseNumberedOutput(output: string, expected: number): string[] {
  if (expected <= 1) return [output];

  const found: Record<number, string> = {};
  const regex = /\[(\d+)\]([\s\S]*?)(?=\[\d+\]|$)/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(output)) !== null) {
    const idx = parseInt(match[1], 10);
    if (!Number.isNaN(idx) && idx >= 1 && idx <= expected) {
      found[idx] = match[2].trim();
    }
  }

  const blocks: string[] = [];
  for (let i = 1; i <= expected; i += 1) {
    blocks.push(found[i] ?? "");
  }
  return blocks.length > 0 ? blocks : [output];
}

export async function GET() {
  return NextResponse.json({
    endpoint: "/api/translate",
    method: "POST",
    body: {
      text: "string (single text to translate)",
      texts: "string[] (batch)",
      targetLang: "'fr' | 'en'",
      sourceLang: "(optional) 'fr' | 'en'",
    },
    fallbackChain: MODEL_CANDIDATES,
    note:
      "Set GOOGLE_AI_API_KEY in .env.local (free key at https://aistudio.google.com/apikey).",
  });
}