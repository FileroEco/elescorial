# Proyecto: El Escorial - Web Astro

## Stack
- **Framework**: Astro + Tailwind CSS
- **Hosting**: GitHub Pages
- **Repo**: https://github.com/FileroEco/elescorial
- **URL pública**: https://fileroeco.github.io/elescorial/
- **Deploy**: automático via GitHub Actions al hacer push a `main`

## Configuración importante

### astro.config.mjs
```js
site: 'https://fileroeco.github.io',
base: '/elescorial',
```
El `base` es obligatorio para que las rutas funcionen en GitHub Pages.

### Estructura de páginas
Las páginas están organizadas por idioma en `src/pages/<lang>/`:
- Idiomas: `es`, `en`, `fr`, `it`, `pt`
- Layouts en: `src/layouts/Base.astro`
- Datos i18n en: `src/data/i18n.js`

## Errores ya corregidos (no repetir)

### 1. Imports con ruta incorrecta
Las páginas en subcarpetas (`<lang>/<sección>/<subsección>/index.astro`) necesitan **4 niveles** de `../`:
```js
// ✅ Correcto para páginas en src/pages/es/el-escorial/visita-teatralizada/
import Base from '../../../../layouts/Base.astro';
import { SITE, t } from '../../../../data/i18n.js';

// ✅ Correcto para páginas en src/pages/es/el-escorial/ (3 niveles)
import Base from '../../../layouts/Base.astro';
```

### 2. Redirección raíz ignoraba el base path
`src/pages/index.astro` usaba `Astro.redirect('/es/')` que ignoraba el base `/elescorial`.
```js
// ✅ Correcto
return Astro.redirect(import.meta.env.BASE_URL + 'es/');
```

### 3. node_modules subido a git
El proyecto no tenía `.gitignore`. Ya está creado y excluye:
`node_modules/`, `dist/`, `.astro/`, `.env`

## Comandos útiles
```bash
npm run build     # construir localmente
npm run dev       # servidor de desarrollo
git add . && git commit -m "mensaje" && git push  # subir cambios
```

## Notas
- El workflow de GitHub Actions está en `.github/workflows/deploy.yml`
- Cada push a `main` despliega automáticamente
- El usuario actualiza la web desde otro chat — consultar estado real antes de asumir nada
