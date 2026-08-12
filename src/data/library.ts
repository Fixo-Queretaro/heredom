export type LibraryShelfId = "fundamentos" | "ruptura-1717" | "ritual-y-ciclo";

export type LibraryNature =
  | "Controversia doctrinal"
  | "Debate institucional"
  | "Tradición institucional"
  | "Estudio ritual"
  | "Estudio de fondo"
  | "Simbolismo cíclico";

export type LibraryCoverTone = "ink" | "burgundy" | "bottle" | "parchment";

export interface LibraryDocument {
  slug: string;
  title: string;
  shortTitle?: string;
  pdfPath: string;
  pages: number;
  bytes: number;
  responsible: string;
  nature: LibraryNature;
  shelf: LibraryShelfId;
  summary: string;
  editorialNote: string;
  topics: string[];
  relatedSlugs: string[];
  coverTone: LibraryCoverTone;
  featured?: boolean;
}

export interface LibraryShelf {
  id: LibraryShelfId;
  number: string;
  title: string;
  description: string;
}

export const libraryShelves: LibraryShelf[] = [
  {
    id: "fundamentos",
    number: "I",
    title: "Fundamentos y filiación",
    description:
      "Textos sobre la continuidad operativa, la transmisión de Heredom y sus cuerpos capitulares.",
  },
  {
    id: "ruptura-1717",
    number: "II",
    title: "La ruptura de 1717",
    description:
      "Lecturas críticas sobre Anderson, la Gran Logia de Londres y el concepto moderno de regularidad.",
  },
  {
    id: "ritual-y-ciclo",
    number: "III",
    title: "Ritual, símbolos y ciclo",
    description:
      "Estudios de palabras, joyas, grados y correspondencias del simbolismo cristiano tradicional.",
  },
];

export const libraryDocuments: LibraryDocument[] = [
  {
    slug: "aspectos-historia-sagrada-francmasoneria-operativa",
    title: "Algunos aspectos de la historia sagrada de la Francmasonería Operativa",
    shortTitle: "Historia sagrada de la Francmasonería Operativa",
    pdfPath: "/biblioteca/pdf/aspectos-historia-sagrada-francmasoneria-operativa.pdf",
    pages: 67,
    bytes: 522346,
    responsible: "Homero Moreno Arredondo · San Juan Evangelista N.º 1",
    nature: "Estudio de fondo",
    shelf: "fundamentos",
    summary:
      "Un recorrido amplio por los Antiguos Deberes, la tradición noaquita, los constructores medievales, el legado céltico, el Templarismo y el Jacobitismo.",
    editorialNote:
      "Es el estudio más extenso de esta selección. Reúne cronología, mitología e historia sagrada desde la perspectiva doctrinal de la Orden.",
    topics: ["Antiguos Deberes", "Masonería Operativa", "Kilwinning", "Templarismo"],
    relatedSlugs: ["operativo-y-especulativo", "capitulo-primordial-arras"],
    coverTone: "parchment",
  },
  {
    slug: "operativo-y-especulativo",
    title: "Operativo y especulativo",
    pdfPath: "/biblioteca/pdf/operativo-y-especulativo.pdf",
    pages: 3,
    bytes: 133795,
    responsible: "Ambrosio Merlino · Logia de Investigaciones «René Guénon» N.º 2",
    nature: "Controversia doctrinal",
    shelf: "fundamentos",
    summary:
      "Contrasta la Masonería Operativa con la Especulativa a partir de tres elementos: filiación, doctrina tradicional y método de realización.",
    editorialNote:
      "Texto breve y frontal. Presenta una posición doctrinal propia de la tradición institucional de Heredom.",
    topics: ["Masonería Operativa", "Masonería Especulativa", "René Guénon"],
    relatedSlugs: ["aspectos-historia-sagrada-francmasoneria-operativa", "regularidad-masonica"],
    coverTone: "ink",
  },
  {
    slug: "capitulo-primordial-arras",
    title: "El Capítulo Primordial de Arras de la Orden Real de Heredom de Kilwinning",
    shortTitle: "El Capítulo Primordial de Arras",
    pdfPath: "/biblioteca/pdf/capitulo-primordial-arras.pdf",
    pages: 5,
    bytes: 78422,
    responsible: "Ambrosio Merlino · Logia de Investigaciones «René Guénon» N.º 2",
    nature: "Tradición institucional",
    shelf: "fundamentos",
    summary:
      "Examina la fundación atribuida a Charles Edward Stuart en 1747 y la transmisión capitular de Heredom fuera del sistema de Grandes Logias.",
    editorialNote:
      "La pieza articula memoria institucional, tradición jacobita y documentos conservados por la Orden.",
    topics: ["Arras", "Charles Edward Stuart", "Jacobitismo", "Rosa+Cruz"],
    relatedSlugs: ["soberano-principe-rosa-cruz-heredom", "aspectos-historia-sagrada-francmasoneria-operativa"],
    coverTone: "bottle",
    featured: true,
  },
  {
    slug: "soberano-principe-rosa-cruz-heredom",
    title: "El grado masónico de Soberano Príncipe Rosa+Cruz de Heredom de Kilwinning",
    shortTitle: "Soberano Príncipe Rosa+Cruz de Heredom",
    pdfPath: "/biblioteca/pdf/soberano-principe-rosa-cruz-heredom.pdf",
    pages: 5,
    bytes: 79431,
    responsible: "Ambrosio Merlino · Logia de Investigaciones «René Guénon» N.º 2",
    nature: "Estudio ritual",
    shelf: "fundamentos",
    summary:
      "Estudia el séptimo grado de Heredom, sus antecedentes hermético-cristianos y las prerrogativas que la tradición le atribuye.",
    editorialNote:
      "Lectura institucional del grado supremo de la Orden y de su lugar frente a escalas masónicas posteriores.",
    topics: ["Rosa+Cruz", "Altos Grados", "Heredom", "Escocismo"],
    relatedSlugs: ["capitulo-primordial-arras", "regularidad-masonica"],
    coverTone: "parchment",
    featured: true,
  },
  {
    slug: "a-300-anos-fundacion-gran-logia-londres",
    title: "A 300 años de la fundación de la Gran Logia de Londres",
    pdfPath: "/biblioteca/pdf/a-300-anos-fundacion-gran-logia-londres.pdf",
    pages: 7,
    bytes: 81639,
    responsible: "Logia de Investigaciones «René Guénon» N.º 2",
    nature: "Debate institucional",
    shelf: "ruptura-1717",
    summary:
      "Una revisión crítica del contexto político y religioso de 1717 y de las transformaciones asociadas al nacimiento de la Masonería Especulativa.",
    editorialNote:
      "Ensayo con una tesis explícita. Debe leerse como interpretación doctrinal, no como consenso historiográfico.",
    topics: ["1717", "Gran Logia de Londres", "Casa de Estuardo", "Anderson"],
    relatedSlugs: ["escuadrando-historia-oficial-masoneria-moderna", "lado-oscuro-james-anderson"],
    coverTone: "burgundy",
  },
  {
    slug: "escuadrando-historia-oficial-masoneria-moderna",
    title: "Escuadrando y puliendo la historia oficial de la Masonería moderna",
    shortTitle: "Escuadrando la historia oficial",
    pdfPath: "/biblioteca/pdf/escuadrando-historia-oficial-masoneria-moderna.pdf",
    pages: 11,
    bytes: 68500,
    responsible: "Logia de Investigaciones «René Guénon» N.º 2",
    nature: "Controversia doctrinal",
    shelf: "ruptura-1717",
    summary:
      "Un examen de las alteraciones atribuidas a la Masonería Especulativa desde 1717: palabras, orientación ritual, geometría, cargos y transmisión.",
    editorialNote:
      "Documento central del expediente crítico sobre la Masonería moderna. Expone una postura deliberadamente polémica y aporta bibliografía para contrastarla.",
    topics: ["1717", "James Anderson", "Inversiones rituales", "Geometría"],
    relatedSlugs: ["lado-oscuro-james-anderson", "a-300-anos-fundacion-gran-logia-londres", "regularidad-masonica"],
    coverTone: "ink",
    featured: true,
  },
  {
    slug: "lado-oscuro-james-anderson",
    title: "El lado oscuro del Dr. James Anderson y los orígenes de la Masonería Especulativa",
    shortTitle: "El lado oscuro del Dr. James Anderson",
    pdfPath: "/biblioteca/pdf/lado-oscuro-james-anderson.pdf",
    pages: 5,
    bytes: 141435,
    responsible: "Ambrosio Merlino · Logia de Investigaciones «René Guénon» N.º 2",
    nature: "Controversia doctrinal",
    shelf: "ruptura-1717",
    summary:
      "Una acusación directa contra el papel de Anderson en la ruptura de 1717 y la formación de la Masonería Especulativa.",
    editorialNote:
      "La contundencia del título refleja la tesis del autor. Se publica para estudio y contraste dentro del expediente de 1717.",
    topics: ["James Anderson", "Masonería Especulativa", "St. Paul", "1717"],
    relatedSlugs: ["escuadrando-historia-oficial-masoneria-moderna", "a-300-anos-fundacion-gran-logia-londres"],
    coverTone: "burgundy",
  },
  {
    slug: "regularidad-masonica",
    title: "Para terminar con la «regularidad masónica»",
    pdfPath: "/biblioteca/pdf/regularidad-masonica.pdf",
    pages: 3,
    bytes: 137348,
    responsible: "Ambrosio Merlino · Logia de Investigaciones «René Guénon» N.º 2",
    nature: "Debate institucional",
    shelf: "ruptura-1717",
    summary:
      "Distingue la regularidad administrativa de la iniciática y cuestiona los criterios de reconocimiento de las obediencias modernas.",
    editorialNote:
      "Un alegato breve sobre autoridad, filiación y legitimidad masónica desde la posición doctrinal de Heredom.",
    topics: ["Regularidad iniciática", "Obediencias", "Reconocimiento", "René Guénon"],
    relatedSlugs: ["operativo-y-especulativo", "escuadrando-historia-oficial-masoneria-moderna"],
    coverTone: "parchment",
    featured: true,
  },
  {
    slug: "palabra-sagrada-arco-real-ingles",
    title: "La Palabra Sagrada del grado del Arco Real inglés",
    pdfPath: "/biblioteca/pdf/palabra-sagrada-arco-real-ingles.pdf",
    pages: 2,
    bytes: 134535,
    responsible: "Ambrosio Merlino · Logia de Investigaciones «René Guénon» N.º 2",
    nature: "Estudio ritual",
    shelf: "ritual-y-ciclo",
    summary:
      "Cuestiona el origen y la coherencia tradicional de la palabra trisilábica empleada en el Arco Real inglés.",
    editorialNote:
      "El texto aborda el tema desde fuentes masónicas publicadas y evita reproducir en esta ficha el término ritual discutido.",
    topics: ["Arco Real", "Palabra Sagrada", "Arch Masonry", "Ritual"],
    relatedSlugs: ["joyas-primer-segundo-guardian", "operativo-y-especulativo"],
    coverTone: "ink",
  },
  {
    slug: "joyas-primer-segundo-guardian",
    title: "El simbolismo de las Joyas del Primer y Segundo Guardianes",
    pdfPath: "/biblioteca/pdf/joyas-primer-segundo-guardian.pdf",
    pages: 4,
    bytes: 136209,
    responsible: "Ambrosio Merlino · Logia de Investigaciones «René Guénon» N.º 2",
    nature: "Estudio ritual",
    shelf: "ritual-y-ciclo",
    summary:
      "Examina la posible inversión moderna entre Nivel y Plomada a partir de las operaciones constructivas y los Misterios Menores y Mayores.",
    editorialNote:
      "Estudio simbólico sobre la correspondencia entre herramientas, cargos y operaciones espirituales.",
    topics: ["Nivel", "Plomada", "Guardianes", "Simbolismo operativo"],
    relatedSlugs: ["palabra-sagrada-arco-real-ingles", "escuadrando-historia-oficial-masoneria-moderna"],
    coverTone: "parchment",
  },
  {
    slug: "fin-de-ciclo-simbolos-cristianos",
    title: "Fin de ciclo y pasaje de algunos símbolos cristianos",
    pdfPath: "/biblioteca/pdf/fin-de-ciclo-simbolos-cristianos.pdf",
    pages: 3,
    bytes: 203222,
    responsible: "Logia de Investigaciones «René Guénon» N.º 2",
    nature: "Simbolismo cíclico",
    shelf: "ritual-y-ciclo",
    summary:
      "Relaciona Piscis, Acuario y Leo con la continuidad del simbolismo cristiano, el Grial y el Sagrado Corazón.",
    editorialNote:
      "Una interpretación simbólica del pasaje entre eras; se presenta como lectura doctrinal, no como predicción astronómica.",
    topics: ["Ciclos", "Simbolismo cristiano", "Grial", "Acuario"],
    relatedSlugs: ["comentarios-fin-de-ciclo"],
    coverTone: "burgundy",
  },
  {
    slug: "comentarios-fin-de-ciclo",
    title: "Comentarios a Fin de ciclo y pasaje de algunos símbolos cristianos",
    shortTitle: "Comentarios a Fin de ciclo",
    pdfPath: "/biblioteca/pdf/comentarios-fin-de-ciclo.pdf",
    pages: 12,
    bytes: 577590,
    responsible: "Homero Moreno Arredondo",
    nature: "Simbolismo cíclico",
    shelf: "ritual-y-ciclo",
    summary:
      "Amplía el estudio original mediante el bestiario cristiano, el simbolismo zodiacal, el Sagrado Corazón, el León de Judá y Ganímedes.",
    editorialNote:
      "Segunda pieza de un expediente de lectura. Conviene comenzar por el texto original, enlazado entre las lecturas relacionadas.",
    topics: ["Bestiario cristiano", "Zodiaco", "Sagrado Corazón", "Ganímedes"],
    relatedSlugs: ["fin-de-ciclo-simbolos-cristianos"],
    coverTone: "ink",
  },
];

export const featuredLibraryDocuments = libraryDocuments.filter(
  (document) => document.featured,
);

export function getLibraryDocument(slug: string): LibraryDocument | undefined {
  return libraryDocuments.find((document) => document.slug === slug);
}

export function formatLibraryFileSize(bytes: number): string {
  return bytes < 1024 * 1024
    ? `${Math.round(bytes / 1024)} KB`
    : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
