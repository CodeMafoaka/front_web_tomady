# tomady — Landing Page

Publicité web (FR / EN) pour l'application mobile **tomady**, coach nutrition IA
disponible sur iOS & Android. Page statique, traduite en deux langues avec un
switcher.

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript 5**
- **Tailwind CSS 3**

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

## i18n

Le site est bilingue FR / EN. La langue est sauvegardée dans
`localStorage` (clé `tomady.lang`). Langue par défaut : **français**.

Le switcher se trouve dans le header (FR / EN) et dans le menu mobile.

Toutes les chaînes — y compris le texte dans les mockups de téléphone —
proviennent de `lib/translations.ts`.

## Structure

```
app/
├── layout.tsx              # RootLayout, provider i18n, font
├── page.tsx                # Composition des sections
├── globals.css             # Tailwind + gradients + blob
└── components/
    ├── LanguageProvider.tsx
    ├── Header.tsx          # Nav + switcher FR/EN
    ├── Hero.tsx            # Mockup téléphone bilingue
    ├── Stats.tsx
    ├── Solutions.tsx
    ├── AppScreens.tsx      # 5 mockups téléphone bilingues
    ├── Alerts.tsx
    ├── Testimonials.tsx
    ├── CTA.tsx
    └── Footer.tsx
lib/
└── translations.ts         # Dictionnaire FR + EN (UI + mockups)
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

Compatible Vercel (déploiement automatique). Aucune variable d'environnement
requise — le site est entièrement statique.