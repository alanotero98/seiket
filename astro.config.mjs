// @ts-check
import { defineConfig } from 'astro/config';

// TODO: reemplazar por el dominio definitivo antes de publicar.
// Se usa para canonical, Open Graph y sitemap (import.meta.env.SITE).
const SITE_URL = 'https://seiket.example';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  compressHTML: true,
  build: {
    // Inlinea hojas de estilo chicas para reducir requests en el primer render.
    inlineStylesheets: 'auto',
  },
  image: {
    // El servicio por defecto (sharp) optimiza las imágenes locales.
    // Se usa desde los componentes con `astro:assets`.
  },
});
