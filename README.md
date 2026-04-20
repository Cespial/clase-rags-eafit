# Clase de RAGs — EAFIT (Invitada)

Presentación de 90 minutos sobre Retrieval-Augmented Generation usando Tribai y Kelsen como casos de estudio.

- **Fecha:** lunes 20 de abril de 2026, 12:00 p.m.
- **Sede:** Universidad EAFIT
- **Expositor:** Cristián Espinal
- **Anfitrión:** Santiago Jiménez Londoño
- **Audiencia:** estudiantes de pregrado de ingeniería (programas mixtos)

## Cómo correr el deck localmente (path primario)

```bash
cd /Users/cristianespinal/clase-rags-eafit
npx serve . -l 3000
# abrir http://localhost:3000
```

**Modo presenter / speaker notes:** presionar `S` en el deck (abre ventana con notas).

**Navegación:** flechas izquierda/derecha (horizontal), `Esc` para vista general, `F` para fullscreen.

## Correr el demo de embeddings (para §3 Demo #2)

```bash
cd /Users/cristianespinal/clase-rags-eafit/embeddings-demo
npm run dev
# abrir http://localhost:3001
```

El `.env.local` con `VOYAGE_API_KEY` ya está configurado localmente (no commiteado por seguridad).

## Pre-flight antes de la clase

Ver `demos/demo-script.md` para el checklist completo y queries exactas.

## Deploy Vercel (opcional, backup)

Proyecto ya creado en Vercel: `cespials-projects/clase-rags-eafit`.

**Estado:** Pendiente. API de Vercel respondió con errores transitorios al momento de crear esta clase (19-abr-2026 22h). Retry manual:

```bash
cd /Users/cristianespinal/clase-rags-eafit
vercel deploy --prod --yes
```

Si persiste el error, usar el dashboard web: https://vercel.com/cespials-projects/clase-rags-eafit

## Estructura

- `index.html` — Reveal.js deck con los 44 slides inline
- `styles/tokens.css` — design tokens Tribai (copy del design handoff)
- `styles/theme.css` — overrides de Reveal con identidad Tribai
- `assets/logos/` — logos Tribai
- `assets/diagrams/` — 7 diagramas SVG (evolución, SQL vs semántica, Lego, bibliotecario, flujos, mapa APIs)
- `assets/screenshots/` — capturas de Tribai y Kelsen (para T15, grabar manualmente)
- `assets/videos/` — videos backup de los 5 demos (grabar manualmente con QuickTime)
- `demos/demo-script.md` — queries exactas + plan B
- `demos/speaker-notes.md` — notas de orador con timing
- `embeddings-demo/` — mini-app Next.js para el Demo #2
- `docs/superpowers/specs/` — spec de diseño
- `docs/superpowers/plans/` — plan de implementación

## Recursos para los estudiantes (comparte al final)

- [tribai.co](https://tribai.co) — plataforma tributaria
- [kelsen-psi.vercel.app](https://kelsen-psi.vercel.app) — plataforma legal
- Este repo: https://github.com/Cespial/clase-rags-eafit

## Tareas manuales pendientes antes de la clase

1. **Grabar 5 videos de backup** con QuickTime (ver `demos/demo-script.md` para el script de cada uno):
   - Demo #1 Tribai cold open (~60s)
   - Demo #2 embeddings (~30s)
   - Demo #3 autopsia del panel de evidencia (~45s)
   - Demo #4 Kelsen legal (~60s)
   - Demo #5 código `rag-minimo.ts` (~30s)
   Guardar como `assets/videos/demo-{1..5}.mp4`

2. **Capturar 2 screenshots** y guardar en `assets/screenshots/`:
   - `tribai-asistente.png` (pantalla del chat Tribai)
   - `kelsen-chat.png` (pantalla del chat Kelsen)

3. **Rehearsal cronometrado** de 90 minutos (ver `demos/speaker-notes.md` para checkpoints de timing)

4. **Deploy Vercel** cuando la API recupere (o usar el dashboard web)
