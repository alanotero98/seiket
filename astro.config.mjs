// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// TODO: reemplazar por el dominio definitivo antes de publicar.
// Se usa para canonical, Open Graph y sitemap (import.meta.env.SITE).
const SITE_URL = 'https://seiket.example';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  compressHTML: true,
  // Tipografía única del sitio: IBM Plex Sans (400/500/600/700).
  // Astro descarga, cachea y sirve las fuentes desde el propio dominio,
  // generando además fallbacks optimizados y preload links automáticamente.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'IBM Plex Sans',
      cssVariable: '--font-ibm-plex-sans',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
  build: {
    // Inlinea hojas de estilo chicas para reducir requests en el primer render.
    inlineStylesheets: 'auto',
  },
  image: {
    // El servicio por defecto (sharp) optimiza las imágenes locales.
    // Se usa desde los componentes con `astro:assets`.
  },
});
