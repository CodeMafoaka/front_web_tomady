# Tomady — Landing Page

> **Page publicitaire bilingue (FR / EN) pour l'application mobile Tomady.**
> Coach nutrition IA disponible sur **iOS & Android**. Le site est uniquement
> une page de présentation / incitation au téléchargement. Il ne contient pas
> l'app elle-même — le code de l'app mobile vit dans un dépôt séparé
> (`tomady-mobile`).

---

## 🎯 Objectif de la page

Convaincre un visiteur de **télécharger Tomady sur son téléphone** :

- **Header sticky** + bouton « Télécharger App » toujours visible
- **Hero** avec mockup téléphone animé + 2 CTA App Store / Play Store
- **Bande de statistiques** (120k+ downloads · 5M repas · 4,9★)
- **3 solutions** : Suivi nutritionnel · Assistant IA vocal · Alertes allergies
- **5 captures écrans** de l'app (Profil · Catalogue · Journal · Dashboard · Chat IA)
- **Démo alertes intelligentes** avec indicateurs 🟢 / 🔴
- **QR code** pour téléchargement direct depuis desktop
- **Footer** avec disclaimer médical obligatoire

| | |
|---|---|
| **Type** | Landing page publicitaire (single-page) |
| **Langues** | Français (défaut) + English (toggle header) |
| **Framework** | Next.js 14 App Router + TypeScript + Tailwind CSS 3 |
| **Cible** | Utilisateurs soucieux de leur alimentation / santé |
| **Téléchargement** | APK Android direct (`/public/downloads/`) |

---

## 🚀 Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## 📜 Scripts

| Commande | Effet |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Démarre le build |
| `npm run lint` | ESLint (config `next/core-web-vitals`) |

---

## 📲 Téléchargement direct (APK)

Le bouton principal ne renvoie plus vers l'App Store / Google Play : il
télécharge directement l'APK signé depuis `/public/downloads/`.

Pour publier un vrai build :

1. Signer l'APK
2. Déposer le fichier dans `public/downloads/tomady-v{version}.apk`
3. Bumper `DOWNLOAD_VERSION` et le tableau `DOWNLOADS` dans `lib/download.ts`

> iOS : pour l'instant, le bouton affiche une note « iOS bientôt sur l'App
> Store ». Quand un build TestFlight sera prêt, on ajoutera un variant iOS
> dans `lib/download.ts`.

Le QR code dans la section finale pointe vers
`https://front-web-tomady.vercel.app/downloads/tomady-v1.0.0.apk` pour qu'un
visiteur sur desktop puisse scanner avec son téléphone et télécharger
directement.

---

## 🌍 i18n FR / EN

- Langue par défaut : **français**
- Switcher FR/EN dans le header (sticky + version mobile)
- Choix sauvegardé en `localStorage` (clé `tomady.lang`)
- `document.documentElement.lang` mis à jour dynamiquement (SEO)
- Toutes les chaînes — y compris le texte dans les **5 mockups de
  téléphone** de Hero et AppScreens — proviennent de `lib/translations.ts`
- Photos d'avatars et de témoignages dans `public/photo/`

---

## 📂 Structure du projet

```
app/
├── layout.tsx              # Root layout + JSON-LD SoftwareApplication
│                           # + Open Graph + Twitter card + canonical
├── page.tsx                # Composition des sections + FadeIn
├── globals.css             # Tailwind + animations reveal + blob
├── sitemap.ts              # /sitemap.xml (home + APK + logo)
├── robots.ts               # /robots.txt
├── not-found.tsx (404)
└── components/
    ├── LanguageProvider.tsx    # Context i18n + localStorage
    ├── Header.tsx              # Logo PNG + nav + switcher FR/EN
    ├── Hero.tsx                # Mockup + 4 avatars + CTA download
    ├── Stats.tsx               # 4 KPIs (SVG icons)
    ├── Solutions.tsx           # 3 solutions (Suivi · IA · Alertes)
    ├── AppScreens.tsx          # 5 mockups téléphone bilingues
    ├── Alerts.tsx              # Démo alertes avec icônes SVG
    ├── Testimonials.tsx        # 4 témoignages (photos célébrités)
    ├── CTA.tsx                 # Download + QR code
    ├── Footer.tsx              # Logo PNG + download + disclaimer
    ├── DownloadButton.tsx      # Bouton APK réutilisable
    ├── QrCode.tsx              # QR code SVG inline
    ├── FadeIn.tsx              # Animation d'entrée IntersectionObserver
    └── icons.tsx               # 24 SVG icons (food, ui, brand)
lib/
├── translations.ts         # Dictionnaire FR + EN (UI + mockups)
└── download.ts             # Métadonnées APK (version, taille, path)
public/
├── logo/
│   └── logo web.png        # Logo Tomady (header + footer + favicon)
├── photo/
│   ├── cristiano-ronaldo.jpg
│   ├── messi.jpg
│   ├── mr-bean.jpg
│   └── jim-carrey.jpg      # Avatars Hero + témoignages
└── downloads/
    └── tomady-v1.0.0.apk   # APK signé (placeholder pour l'instant)
.github/
└── workflows/
    └── ci.yml              # Lint + build sur push/PR master+main
```

---

## 🎨 Palette de couleurs

| Rôle | Hex |
| --- | --- |
| Marque / Succès | `#2ECC71` |
| Fond | `#FFFFFF` |
| Texte principal | `#1F2937` |
| Texte secondaire | `#6B7280` |
| Attention | `#F39C12` |
| Erreur / Danger | `#E74C3C` |

---

## 🏗️ Sections de la page (ordre d'affichage)

1. **Header** — Logo PNG + nav (Home · Solutions · App · Alerts · Reviews) + switcher FR/EN + bouton « Télécharger App »
2. **Hero** — Titre « Votre coach nutrition intelligent » + 2 CTA App Store / Play Store + mockup téléphone bilingue + 4 avatars
3. **Stats** — 120k+ downloads · 5M repas · 4,9★ · 98% goals
4. **Solutions** — 3 solutions : Suivi nutritionnel · Interaction IA · Alertes personnalisées (avec disclaimer médical)
5. **AppScreens** — 5 captures écrans de l'app : Profil · Catalogue · Journal · Dashboard · Assistant IA
6. **Alerts** — Démo alertes avec indicateurs 🟢 Conseillé / 🔴 À éviter
7. **Testimonials** — 4 témoignages (Cristiano Ronaldo, Lionel Messi, Mr Bean, Jim Carrey)
8. **CTA final** — Bandeau gradient + bouton Download + **QR code** « Scannez avec votre téléphone »
9. **Footer** — Logo PNG + bouton Download + 4 colonnes (App · Features · Resources · Legal) + disclaimer médical + réseaux sociaux

---

## 🔍 SEO

Inclus dans `app/layout.tsx` :

- **metadataBase** : `https://front-web-tomady.vercel.app`
- **canonical + hreflang** FR / EN
- **Open Graph** complet (titre, description, image 1200×630, locale FR + EN, siteName, url)
- **Twitter card** `summary_large_image`
- **JSON-LD `SoftwareApplication`** : name, OS, category, aggregateRating, offers Free, author, image, inLanguage FR/EN
- **robots / googleBot** directives
- **applicationName** + **category**

Routes générées automatiquement par Next.js :

- `/sitemap.xml` — home + APK + logo (priorités / lastModified)
- `/robots.txt` — allow `/`, disallow `/api/`, point vers sitemap

---

## ⚡ Animations

- `FadeIn` — IntersectionObserver, fade + translateY à l'entrée de chaque section
- Respecte `prefers-reduced-motion`
- Animations CSS du Hero : `float`, `bounce-slow`, `pulse`
- Blob backgrounds flous animés (`blob { filter: blur(60px) }`)

---

## 🩺 Disclaimer médical

L'application Tomady propose des suggestions alimentaires. En cas de
maladie ou de doute, consulter toujours un médecin ou un professionnel
de santé. Cette mention est présente :

- Dans le **footer** (sous le logo)
- Dans la **section Solutions** (avant les 3 cartes)
- Au début de chaque témoignage qui pourrait prêter à confusion

---

## 🚢 Déploiement

Compatible **Vercel** (déploiement automatique à chaque push sur `master`).

Pour activer :

1. Aller sur https://vercel.com/new
2. Importer le repo `CodeMafoaka/front_web_tomady`
3. Framework preset : Next.js (auto-détecté)
4. Cliquer **Deploy**

Aucune variable d'environnement requise — la page est 100 % statique.

---

## 📋 Conventions

- TypeScript strict
- ESLint `next/core-web-vitals`
- Pas d'emojis dans les composants (icônes SVG uniquement)
- Couleurs via classes Tailwind (`bg-brand`, `text-warning`, etc.) basées sur
  `tailwind.config.js`
- Toutes les chaînes UI en français par défaut + anglaise via
  `lib/translations.ts`
- Chaque composant est un Client Component (`"use client"`) — pas de SSR
  spécifique nécessaire pour cette page

---

## 🗺️ Roadmap possibles (non implémentés)

- Badge **App Store / Play Store officiels** (reconnaissance instantanée)
- Bannière **consentement cookies** (RGPD)
- **Analytics** anonymisés (Plausible ou Vercel Analytics)
- **Page FAQ** avec schema `FAQPage`
- **i18n supplémentaire** (espagnol, malgache)
- **Open Graph image dynamique** via `@vercel/og` (image de partage générée à la volée)
- **PWA manifest + service worker** pour installation directe
- **A/B testing** sur les CTA download