# tomady — Landing Page

Publicité web (FR / EN) pour l'application mobile **tomady**, coach nutrition IA
disponible en **téléchargement direct** depuis le site (Android APK). Page
bilingue avec switcher, et **traduction IA** propulsée par Gemma 3.

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript 5**
- **Tailwind CSS 3**
- **@google/generative-ai** (Gemma 3 via Google AI Studio)

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande | Effet |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Démarre le build |
| `npm run lint` | ESLint (config `next/core-web-vitals`) |

## Download direct (Android APK)

Le site ne renvoie plus vers l'App Store / Google Play. À la place, un bouton
**« Télécharger maintenant »** télécharge directement l'APK signé depuis
`/public/downloads/`.

Pour publier un vrai build :

1. Signer l'APK
2. Le déposer dans `public/downloads/tomady-v{version}.apk`
3. Bumper `DOWNLOAD_VERSION` et le tableau `DOWNLOADS` dans `lib/download.ts`

> iOS : pour l'instant, le bouton montre une note « iOS bientôt sur l'App
> Store ». Quand un build TestFlight sera prêt, on ajoutera un variant
> iOS dans `lib/download.ts`.

## Traduction IA — Gemma 3

La section **« Traduction IA, en direct »** appelle l'endpoint
`/api/translate` qui interroge Gemma 3 via Google AI Studio.

### Configuration

```bash
cp .env.example .env.local
# Éditer .env.local et coller GOOGLE_AI_API_KEY=...
```

Clé gratuite : https://aistudio.google.com/apikey

### Endpoint

`POST /api/translate`

```json
{
  "text": "Une alimentation équilibrée est la clé d'une vie saine.",
  "targetLang": "en",
  "sourceLang": "fr"
}
```

Chaîne de modèles testés automatiquement (premier qui répond sans
404/429 gagne) :

```
gemma-3-4b-it → gemma-3-1b-it → gemma-3-12b-it → gemma-3-27b-it
→ gemma-3n-e4b-it → gemma-3n-e2b-it → gemma-3n-4b-it
→ gemma-2-9b-it → gemma-2-2b-it
→ gemini-2.0-flash-lite → gemini-1.5-flash
```

Réponse :

```json
{
  "translated": "A balanced diet is the key to a healthy life.",
  "model": "gemma-3-4b-it"
}
```

### Diagnostic

`GET /api/models` liste les modèles disponibles avec ta clé et te dit
lequel mettre dans `GEMMA_MODEL=`.

### Sans clé

Le widget affiche un message clair. La page reste 100% fonctionnelle.

## i18n FR / EN

- Langue par défaut : **français**
- Switcher FR/EN dans le header (sticky + mobile)
- Choix sauvegardé en `localStorage` (`tomady.lang`)
- `document.documentElement.lang` mis à jour dynamiquement
- Toutes les chaînes — y compris le texte dans les **mockups de téléphone**
  de Hero et AppScreens — viennent de `lib/translations.ts`

## Structure

```
app/
├── layout.tsx              # RootLayout, provider i18n, font
├── page.tsx                # Composition des sections
├── globals.css             # Tailwind + gradients + blob
├── api/
│   ├── translate/route.ts  # POST — Gemma 3 translate
│   └── models/route.ts     # GET — diagnostic modèles dispo
└── components/
    ├── LanguageProvider.tsx
    ├── Header.tsx          # Nav + switcher FR/EN + glassmorphism
    ├── Hero.tsx            # Mockup téléphone bilingue + download direct
    ├── Stats.tsx           # SVG icons
    ├── Solutions.tsx       # Badge "Powered by Gemma 3"
    ├── AppScreens.tsx      # 5 mockups téléphone bilingues
    ├── Alerts.tsx
    ├── TranslateDemo.tsx   # Widget de traduction Gemma 3
    ├── Testimonials.tsx
    ├── CTA.tsx             # Download direct principal
    ├── Footer.tsx          # Download direct + disclaimer médical
    ├── DownloadButton.tsx  # Bouton de download réutilisable
    └── icons.tsx           # 24 SVG icons (food, ui, brand)
lib/
├── translations.ts         # Dictionnaire FR + EN
└── download.ts             # Métadonnées APK (version, taille)
public/
└── downloads/              # APK signé (placeholder pour l'instant)
```

## Couleurs

- **Marque / Succès** : `#2ECC71`
- **Fond** : `#FFFFFF`
- **Texte principal** : `#1F2937`
- **Texte secondaire** : `#6B7280`
- **Attention** : `#F39C12`
- **Erreur / Danger** : `#E74C3C`

## Disclaimer médical

L'application tomady propose des suggestions alimentaires. En cas de maladie
ou de doute, consulter toujours un médecin ou un professionnel de santé.
Cette mention est présente dans le footer et la section Solutions.

## Déploiement

Compatible Vercel. Ajouter dans **Project Settings → Environment Variables** :

- `GOOGLE_AI_API_KEY` (clé Google AI Studio)
- `GEMMA_MODEL` (optionnel, défaut `gemma-3-4b-it`)

Sans clé, le widget affiche un message clair ; le reste de la page
fonctionne normalement.