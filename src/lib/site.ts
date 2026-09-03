import { satellitePages } from "../data/satellites";

export const site = {
  url: "https://heredom.com.mx",
  name: "Orden Real de Heredom de Kilwinning",
  shortName: "Heredom México",
  descriptor: "Capítulo Soberano para México y el Caribe",
  description:
    "Portal público del Capítulo Soberano para México y el Caribe de la Orden Real de Heredom de Kilwinning: Masonería Operativa, tradición, biblioteca y formación.",
  language: "es-MX",
  locale: "es_MX",
  themeColor: "#123a31",
  logo: "/images/escudo.png",
  socialImage: "/images/heredom-social-el-greco.jpg",
  socialImageAlt:
    "San Juan Evangelista sosteniendo el cáliz, obra de El Greco, imagen principal del portal Heredom México.",
  sameAs: [
    "https://www.facebook.com/profile.php?id=100095300929470",
    "https://www.youtube.com/@hrdm-klwnnng.m.x",
    "https://www.tiktok.com/@hrdm.klwnnng.mx",
  ],
} as const;

export const absoluteSiteUrl = (path: string) => new URL(path, site.url).toString();

export function createHomeStructuredData() {
  const homeUrl = absoluteSiteUrl("/");
  const logoUrl = absoluteSiteUrl(site.logo);
  const imageUrl = absoluteSiteUrl(site.socialImage);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${homeUrl}#organization`,
        name: site.name,
        alternateName: site.shortName,
        url: homeUrl,
        description: site.description,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
          contentUrl: logoUrl,
        },
        image: { "@id": `${homeUrl}#primaryimage` },
        sameAs: site.sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${homeUrl}#website`,
        url: homeUrl,
        name: site.shortName,
        alternateName: site.name,
        description: site.description,
        inLanguage: site.language,
        publisher: { "@id": `${homeUrl}#organization` },
        hasPart: satellitePages.map((page) => ({
          "@type": "WebPage",
          "@id": `${absoluteSiteUrl(page.href)}#webpage`,
          url: absoluteSiteUrl(page.href),
          name: page.title,
          description: page.description,
        })),
      },
      {
        "@type": "ImageObject",
        "@id": `${homeUrl}#primaryimage`,
        url: imageUrl,
        contentUrl: imageUrl,
        width: 1200,
        height: 630,
        caption: site.socialImageAlt,
      },
      {
        "@type": "WebPage",
        "@id": `${homeUrl}#webpage`,
        url: homeUrl,
        name: `${site.name} | México y el Caribe`,
        description: site.description,
        isPartOf: { "@id": `${homeUrl}#website` },
        about: { "@id": `${homeUrl}#organization` },
        primaryImageOfPage: { "@id": `${homeUrl}#primaryimage` },
        inLanguage: site.language,
      },
    ],
  };
}
