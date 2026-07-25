import type { MetadataRoute } from "next";

const SITE_URL = "https://front-web-tomady.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          fr: `${SITE_URL}/`,
          en: `${SITE_URL}/`,
        },
      },
    },
    {
      url: `${SITE_URL}/downloads/tomady-v1.0.0.apk`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/logo/logo web.png`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}