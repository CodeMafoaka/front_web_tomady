import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageProvider";

const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "tomady — Ton coach nutrition dans ta poche",
  description:
    "tomady est l'application mobile qui suit tes repas, construit des plans personnalisés et discute avec toi pour atteindre tes objectifs.",
  keywords: [
    "tomady",
    "nutrition",
    "coach",
    "santé",
    "alimentation",
    "application mobile",
    "IA",
  ],
  metadataBase: new URL("https://front-web-tomady.vercel.app"),
  icons: {
    icon: [
      {
        url: "/logo/logo web.png",
        type: "image/png",
        sizes: "any",
      },
    ],
    apple: "/logo/logo web.png",
  },
  openGraph: {
    title: "tomady — Ton coach nutrition dans ta poche",
    description:
      "Suis tes repas, atteins tes objectifs, mange mieux — dans une seule app.",
    type: "website",
    images: ["/logo/logo web.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-foreground overflow-x-hidden">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}