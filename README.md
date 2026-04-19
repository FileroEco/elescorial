# El Escorial — Visitas Teatralizadas

## Setup rápido

1. Instala Node.js desde https://nodejs.org (botón LTS, doble clic, siguiente siguiente)
2. Abre "Símbolo del sistema" (cmd) o PowerShell
3. Navega a la carpeta del proyecto:
   ```
   cd C:\Users\rjsol\elescorial
   ```
4. Instala dependencias:
   ```
   npm install
   ```
5. Arranca el servidor local:
   ```
   npm run dev
   ```
6. Abre en el navegador: http://localhost:4321/es/

## Estructura del proyecto

```
src/
  data/i18n.js          ← Traducciones y config central (EDITAR AQUÍ)
  layouts/Base.astro     ← Layout con hreflang + JSON-LD
  pages/
    es/                  ← Páginas en español
    it/                  ← Páginas en italiano
    en/                  ← Páginas en inglés
    fr/                  ← Páginas en francés
```

## TODO antes de lanzar

- [ ] Cambiar `SITE.guideName` en `src/data/i18n.js`
- [ ] Cambiar `SITE.whatsapp` en `src/data/i18n.js`
- [ ] Cambiar `SITE.domain` cuando tengas dominio
- [ ] Rellenar contenido de las páginas (buscar `[Contenido pendiente]`)
- [ ] Añadir fotos en `/public/`
- [ ] Completar páginas IT/EN/FR de Ávila, Segovia, Cuelgamuros (copiar patrón ES)
- [ ] Conectar formulario de contacto (Formspree o similar)

## Páginas creadas

### Completas (con JSON-LD)
- ES: Home, El Escorial (landing + producto), Ávila, Segovia, Cuelgamuros, Sobre mí, Contacto
- IT: Home, El Escorial (landing + producto)
- EN: Home, El Escorial (landing)
- FR: Home, El Escorial (landing)

### Pendientes (copiar patrón de ES)
- IT/EN/FR: Ávila, Segovia, Cuelgamuros, About, Contact
- EN/FR: Product pages de El Escorial
- Todas: Product pages de Ávila, Segovia, Cuelgamuros
