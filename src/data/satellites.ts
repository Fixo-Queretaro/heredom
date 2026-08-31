export interface SatellitePage {
  href: string;
  title: string;
  description: string;
}

/**
 * Catálogo SEO de páginas satélite.
 *
 * La portada lo declara mediante datos estructurados sin alterar su diseño.
 * Cada satélite usa el mismo catálogo para enlazar visualmente a los demás.
 */
export const satellitePages: SatellitePage[] = [
  {
    href: "/entrar-a-la-masoneria/",
    title: "Entrar a la Masonería",
    description:
      "Requisitos, compromiso y proceso de acercamiento a la Masonería Operativa en Heredom.",
  },
  {
    href: "/masoneria-operativa/",
    title: "Masonería Operativa",
    description:
      "Origen, doctrina, realización espiritual y diferencias con la Masonería especulativa.",
  },
  {
    href: "/rene-guenon/",
    title: "René Guénon",
    description:
      "Una guía para abordar su obra sobre tradición, iniciación, simbolismo y Masonería.",
  },
];
