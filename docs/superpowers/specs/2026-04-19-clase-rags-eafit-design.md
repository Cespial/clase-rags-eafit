# Spec — Clase de RAGs para EAFIT (Invitada)

- **Autor:** Cristián Espinal
- **Fecha:** 2026-04-19
- **Clase:** lunes 20 de abril de 2026, 12:00 p.m.
- **Sede:** Universidad EAFIT
- **Profesor anfitrión:** Santiago Jiménez Londoño
- **Duración:** 90 minutos
- **Formato:** Presentación invitada, un expositor (Cristián), slides HTML (Reveal.js) + demos en vivo

---

## 1. Objetivo

Transmitir a estudiantes de pregrado de ingeniería (programas mixtos) que la ingeniería de software moderna **orquesta ecosistemas de servicios** en vez de solo consultar bases de datos, usando Tribai y Kelsen como casos de estudio reales.

### Mensaje unificador

> *"La base de datos es el cimiento — una pieza entre doce. La creatividad está en la orquestación."*

### Lo que los estudiantes deben llevarse

1. **Entender qué es un RAG** a nivel conceptual, sin código denso.
2. **Ver que la arquitectura moderna se diseña, no se codifica** — mismas piezas, decisiones distintas → Tribai ≠ Kelsen.
3. **Saber exactamente qué piezas necesitan** para construir su propio RAG este mes, con el stack mínimo accionable.
4. **Dimensionar la oportunidad**: hay empresas de miles de millones construyéndose en LATAM sobre esta tecnología.

### Lo que NO se busca

- No es un curso técnico profundo de RAG.
- No es un pitch comercial de Tribai/Kelsen.
- No se busca que salgan sabiendo programar uno — se busca que salgan con curiosidad y plan.

---

## 2. Audiencia

- **Programa:** mixto de ingeniería (Sistemas, Informática, Industrial, Electrónica). No se puede asumir homogeneidad técnica.
- **Conocimientos previos asumidos:** SQL, PostgreSQL básico, idea de qué es una API REST.
- **Expectativa:** están acostumbrados a clases de bases de datos tradicionales. Objetivo explícito: romperles el esquema *"base de datos = SQL"*.

### Consecuencias de diseño

- Evitar math (coseno, BM25, RRF formulas) — usar analogías.
- Evitar métricas sin contexto (P@5, NDCG, recall) — preferir ejemplos tangibles.
- Preferir screenshots/diagramas sobre bloques de código largos.
- Usar analogías dominantes recurrentes: **"bibliotecario experto con máquina de escribir"** y **"darle a la IA un cuaderno abierto"**.

---

## 3. Enfoque pedagógico — híbrido A+B

Estructura narrativa:

1. **Cold open con demo en vivo** (B) — gancho emocional, pregunta "¿cómo lo hizo?"
2. **Narrativa evolutiva** (A) — desde SQL/PostgreSQL que ya conocen, hasta RAG agentic
3. **Retorno cíclico al demo inicial** en cada capa — mantiene el hilo
4. **Cierre con industria + call-to-action**

Balance: 70% narrativa pedagógica, 30% demos en vivo. Tono conversacional, accionable.

---

## 4. Outline de contenido (8 secciones, ~44 slides, 90 min)

### §0 · Cold open (5 min, 2 slides)
- Slide 1: portada con logo Tribai, título, autor, EAFIT, fecha
- Slide 2: **Demo #1 en vivo** (tribai.co con query tributaria compleja)
- Cliffhanger: *"conversación entre 12 servicios — vamos a desmontarlo sin código"*

### §1 · El cambio de paradigma (8 min, 4 slides)
- Las apps de antes: "la app consulta la BD"
- Las apps de ahora: "la app conversa con la persona consultando muchas fuentes"
- El problema ya no es "cómo responder", es **"qué darle de contexto"**
- Idea síntesis: *"RAG = darle a la IA un cuaderno abierto en vez de que invente"*

### §2 · Galería de capacidades (12 min, 7 slides)
Siete casos reales, uno por slide, con screenshot + una frase:
1. Tributario — Tribai
2. Legal — Kelsen
3. Soporte técnico interno
4. Análisis de contratos (due diligence M&A)
5. Investigación médica
6. Onboarding corporativo
7. E-commerce con catálogo gigante

Mensaje: cualquier dominio con **mucho texto + preguntas humanas** es candidato. Ustedes pueden escoger el suyo.

### §3 · Las piezas del Lego (18 min, 8 slides)
Analogía dominante: **bibliotecario experto con máquina de escribir**.

1. **Las fuentes** — los libros de la biblioteca
2. **Los embeddings** — clasificación por significado (animación visual vectores 2D)
3. **La vector DB** — el estante de coordenadas de significado
4. **El reranker** — segundo filtro para quedarse con los mejores
5. **El LLM** — el escritor que redacta citando los libros

**Demo #2 en vivo:** `embeddings-demo` mini-página mostrando que *"trabajador extranjero"* y *"residente no colombiano"* son parecidos en embeddings pero no en SQL.

### §4 · Cómo se arma el flujo (12 min, 6 slides)
- Diagrama animado del flujo de Tribai (6 etapas visuales, sin código)
- **Demo #3 en vivo:** volver al cold open, abrir panel de evidencia, mostrar en qué documentos se basó
- Kelsen hace distinto: **un agente con herramientas** que decide qué usar
- **Demo #4 en vivo:** Kelsen con query legal diferente, mostrando el tool `buscar_jurisprudencia`
- Insight: *"no hay UN RAG. Hay decisiones de diseño. Por eso es creativo."*

### §5 · El ecosistema — qué necesitan para replicar (15 min, 7 slides)
**Corazón del mensaje.** Accionable.

- Slide-mapa radial: Tribai en el centro, 12 APIs alrededor
- Tabla *"Para construir tu propio RAG este mes necesitas:"*
  - LLM (Anthropic / Gemini / Groq free tier)
  - Embeddings (Voyage / Cohere free tier)
  - Vector DB (Supabase pgvector / Pinecone free)
  - Framework (Next.js / FastAPI)
  - Deploy (Vercel hobby)
  - Observabilidad (Langfuse cloud free)
- Receta pseudocódigo de 5 pasos
- **Demo #5:** VSCode en pantalla mostrando `rag-minimo.ts` (60 líneas aprox)
- Mensaje: *"Todo lo anterior cabe en $0. Esta noche pueden tener un RAG básico corriendo."*

### §6 · A dónde va la industria (10 min, 5 slides)
- Harvey.ai como caso de estudio ($11B, 100K abogados)
- Agentic RAG — la IA decide cuándo buscar, cuándo escribir, cuándo pedir ayuda
- MCP (Model Context Protocol) — analogía USB-C de las IAs con herramientas
- Multi-model routing — el modelo correcto para cada tarea
- Síntesis: *"Orquestar es la nueva ingeniería de software"*

### §7 · Colombia y ustedes (5 min, 3 slides)
- Oportunidad LATAM: 300K contadores, 410K abogados, 50M+ habitantes sin acceso a especialistas
- Tribai y Kelsen como pruebas de que se puede construir desde Colombia
- Dominios con oportunidad: salud rural, educación, gobierno digital, PyMEs, agrotech
- CTA: *"escojan un dominio. Construyan el MVP este mes. Yo los ayudo."*

### §8 · Cierre + Q&A (5 min, 2 slides)
- Imagen síntesis: *"De SELECT a orquestación — la ingeniería cambió de forma"*
- Contacto + 3 enlaces (tribai.co, kelsen-psi.vercel.app, repo de referencia público)

---

## 5. Arquitectura técnica del deck

### Stack

- **Framework:** Reveal.js 5 (vanilla, sin build step)
- **CSS:** un solo `tokens.css` (copy directo de `colors_and_type.css` del design handoff Tribai) + `theme.css` para overrides de Reveal
- **Fuentes:** Inter 400/500/600/700, JetBrains Mono, DM Serif Display (solo para pull-quotes). Embebidas localmente en `assets/fonts/` como fallback a Google Fonts.
- **Plugins:** `RevealHighlight` para syntax highlighting, `RevealNotes` para speaker notes
- **Deploy:** Vercel (proyecto nuevo: `clase-rags-eafit`), URL pública para respaldo

### Estructura de archivos

```
clase-rags-eafit/
├── index.html              # Reveal principal, incluye todas las secciones
├── styles/
│   ├── tokens.css          # Tokens Tribai (copy de design handoff)
│   └── theme.css           # Overrides de Reveal para identidad Tribai
├── slides/                 # Un .html por sección (para modular)
│   ├── 00-cold-open.html
│   ├── 01-paradigma.html
│   ├── 02-galeria.html
│   ├── 03-lego.html
│   ├── 04-flujo.html
│   ├── 05-ecosistema.html
│   ├── 06-industria.html
│   ├── 07-colombia.html
│   └── 08-cierre.html
├── assets/
│   ├── fonts/              # Inter, JetBrains Mono, DM Serif Display
│   ├── logos/              # logo-tribai-*.svg (copiados de brand-assets)
│   ├── diagrams/           # 7 SVGs (ver Sección 6)
│   ├── screenshots/        # Fallbacks para demos (PNG/JPG)
│   └── videos/             # 5 MP4 de backup (1 por demo)
├── demos/
│   ├── demo-script.md      # Queries exactas y backups
│   └── speaker-notes.md    # 2-3 bullets esenciales por sección
├── embeddings-demo/        # Mini-app Next.js para Demo #2
│   ├── package.json
│   ├── app/page.tsx        # Input + similitud Voyage embeddings
│   ├── app/api/embed/route.ts
│   └── .env.local          # VOYAGE_API_KEY
├── docs/
│   └── superpowers/
│       └── specs/
│           └── 2026-04-19-clase-rags-eafit-design.md   # Este doc
├── .gitignore
├── README.md
└── vercel.json             # Deploy config
```

### Templates de slide (6 tipos)

1. **Hero / Cover** — navy full bleed, Inter 700 56px blanco, gold accent
2. **Concepto-analogía** — fondo blanco, H1 izq + ilustración der, eyebrow blue
3. **Galería** — grid 2×2 o 2×3, screenshot + título + frase por celda
4. **Diagrama animado** — SVG full bleed, Reveal fragments para animación paso a paso
5. **Demo embedded** — iframe 16:9 centrado con borde gold, label "EN VIVO"
6. **Pull-quote / Síntesis** — navy full bleed, DM Serif 48px centrado (único uso de DM)

### Paleta de uso

| Contexto | Fondo | Texto primario | Acento |
|---|---|---|---|
| Cover / síntesis | `#0A1628` | blanco | gold `#C4952A` |
| Concepto | blanco | navy | blue `#0066FF` |
| Galería | `#F5F8FA` | navy | blue hover, gold stat |
| Demo | blanco | navy | gold border |
| Código (raro) | `#131B2E` | `#E8E6E3` | JetBrains Mono + tokens |

### Accesibilidad

- Contraste WCAG AA en todas las combinaciones
- `prefers-reduced-motion` respetado (sin animaciones bruscas)
- Fuentes embebidas localmente (no depender de Google Fonts en salón EAFIT)
- Slides navegables con teclado (Reveal default)

---

## 6. Diagramas SVG (7 piezas)

1. **`sql-vs-semantic.svg`** — dos mundos contrastados: tabla relacional (§1) vs nube de puntos embeddings
2. **`lego-pieces.svg`** — 5 piezas Lego etiquetadas (fuentes, embeddings, vector DB, reranker, LLM)
3. **`bibliotecario.svg`** — la metáfora dominante (§3)
4. **`flujo-tribai.svg`** — pipeline animado 6 etapas visuales (§4)
5. **`flujo-kelsen.svg`** — agente + 4 tools en lugar de pipeline lineal (§4)
6. **`mapa-apis.svg`** — radial, Tribai centro, 12 orbitales (Anthropic, Voyage, Pinecone, Cohere, Neon, Vercel, Langfuse, Clerk, Stripe, Upstash, Supabase, Cloud Run) (§5)
7. **`evolucion-sql-rag.svg`** — timeline horizontal SQL → FTS → embeddings → RAG → agentic (§1, §6)

---

## 7. Demos en vivo — choreografía

### Demo #1 — Cold open (§0)

- **URL:** tribai.co/asistente
- **Query:** *"Una empresa colombiana paga honorarios a un ingeniero residente en España por un diseño mecánico. ¿Qué retención en la fuente aplica y qué artículos del ET la soportan?"*
- **Por qué:** toca convenio doble imposición España-Colombia + Art. 408 ET + residencia fiscal → multi-namespace
- **Backup:** video MP4 30s

### Demo #2 — Embeddings (§3)

- **URL:** `localhost:3000` (embeddings-demo)
- **Interacción:** input de dos frases, output similitud coseno
- **Ejemplos:** "trabajador extranjero" vs "residente no colombiano" (0.87) | vs "deducción por arrendamiento" (0.31)
- **Backup:** GIF + screenshot

### Demo #3 — Autopsia (§4)

- **URL:** tribai.co/asistente (volver al cold open)
- **Acción:** abrir panel de evidencia, mostrar documentos fuente + confidence
- **Backup:** screenshot anotado

### Demo #4 — Kelsen (§4)

- **URL:** kelsen-psi.vercel.app
- **Query:** *"¿Qué ha dicho la Corte Constitucional sobre el mínimo vital en pensiones?"*
- **Backup:** video MP4

### Demo #5 — Réplica mínima (§5)

- **Abrir:** VSCode con `rag-minimo.ts` (60 líneas pseudocódigo narrado)
- **Mensaje:** todo cabe en $0 y 60 líneas
- **Backup:** el archivo como syntax-highlighted slide

---

## 8. Riesgos y mitigaciones

| Riesgo | Probabilidad | Mitigación |
|---|---|---|
| Red EAFIT lenta/filtrada | Media | Hotspot móvil + 5 videos pre-grabados con botón "▶ sin red" |
| Cold open query da respuesta mediocre | Baja | 2 queries alternativas en `demo-script.md` |
| Kelsen rate-limit (Clerk/Upstash) | Baja | Cuenta de prueba ya warm, dispositivo probado |
| Proyector aspect ratio raro | Media | Slides responsive 16:9, probar 1080p |
| Créditos Anthropic agotados en Tribai | **Alta (pendiente verificar)** | Videos pre-grabados como plan B **obligatorio**; revisar y recargar antes de mañana |
| Perder el hilo en vivo | Alta | `speaker-notes.md` con 2-3 bullets por sección |
| Voyage API no responde en `embeddings-demo` | Baja | Pre-computar los 10 pares de ejemplo y servir desde JSON local |

**Dependencia crítica:** confirmar que `ANTHROPIC_API_KEY` en `.env.local` de Tribai ya está con créditos antes del smoke test de mañana. Si no, todos los demos #1 y #3 deben usarse video.

---

## 9. Plan de ejecución (sprint mañana madrugada 19→20 abril)

| Bloque | Duración | Producto | Prioridad |
|---|---|---|---|
| 1. Scaffold Reveal + tokens + logo | 30 min | `index.html`, `tokens.css`, estructura | P0 |
| 2. Diagramas SVG | 2 h | 7 SVGs | P0 |
| 3. Slides §0-§3 | 2 h | 21 slides | P0 |
| 4. Slides §4-§5 | 1.5 h | 13 slides | P0 |
| 5. Slides §6-§8 | 1 h | 10 slides | P1 |
| 6. `embeddings-demo` Next.js | 1 h | mini-app funcional | P0 |
| 7. Grabación 5 videos MP4 | 45 min | backups | P0 |
| 8. `speaker-notes.md` + `demo-script.md` | 30 min | notas + queries | P0 |
| 9. Deploy Vercel + smoke test | 30 min | URL + verificación | P0 |
| 10. Rehearsal cronometrado | 90 min | clase completa probada | P1 |

**Total trabajo:** ~10 horas. Clase 20-abr 12:00 p.m. → margen de ~16 horas útiles.

---

## 10. Definition of done

- [ ] 44 slides construidos, navegables sin errores
- [ ] Los 5 demos funcionan end-to-end, cada uno con su video backup grabado
- [ ] Rehearsal cronometrado: la clase sale entre 85-90 minutos
- [ ] URL desplegada en Vercel + versión local funcional como fallback
- [ ] `speaker-notes.md` y `demo-script.md` accesibles en modo presenter o en papel
- [ ] Repo público en GitHub con README de referencia para los estudiantes
- [ ] Smoke test 30 min antes de la clase: las 5 queries dan respuesta razonable

---

## 11. Entregables post-clase (no bloqueantes)

- Grabación de la clase (si EAFIT la graba o si se autoriza grabarla en MacBook)
- Versión pública del deck con notas de orador redactadas como texto (para que los estudiantes puedan leerlo sin el audio)
- Enlaces de seguimiento: formulario corto para estudiantes interesados en mentoría/prácticas en Tribai
