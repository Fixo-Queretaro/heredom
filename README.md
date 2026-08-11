# Heredom

Portal masónico institucional, editorial y formativo. **Fase actual: laboratorio visual.**

## Stack

- [Astro 5](https://astro.build) + TypeScript estricto
- Astro Content Collections (`articles`, `documents`, `authors`, `courses`, `lessons`)
- MDX para artículos y lecciones extensas
- Sistema visual propio con variables CSS (`src/styles/tokens.css`)
- Fuentes autoalojadas vía Fontsource (Cormorant Garamond, Marcellus, Literata)

Sin CMS, sin autenticación, sin despliegue, sin servicios externos.

## Ejecutar

```bash
npm install
npm run dev       # http://localhost:4321/style-guide/
npm run build     # build de producción en dist/
npm run check     # verificación de tipos
```

## Estructura

```
src/
  components/    Componentes reutilizables (header, hero, tarjetas, etc.)
  content/       Colecciones de contenido (entradas demo marcadas con demo: true)
  content.config.ts  Esquemas Zod + campo controlado `naturaleza`
  layouts/       BaseLayout (fuentes, skip-link, metadatos)
  pages/         index (placeholder) y style-guide/
  styles/        tokens.css (semánticos) + global.css
```

## Naturaleza editorial

Todo contenido lleva un campo controlado `naturaleza`:
`tradicion` · `doctrina` · `historia-documentada` · `estudio` · `editorial`.
La tradición iniciática y la historia documentada se etiquetan siempre de forma
distinguible; no se presentan como equivalentes.

## Pendiente de aprobación (Hex)

Ver informe de entrega de la fase de laboratorio visual.
