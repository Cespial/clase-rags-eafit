# Demo Script — Clase RAGs EAFIT 20-abr-2026 12:00

## Queries para copy-paste rápido

### Demo #1 — Cold open (§0)
**URL:** https://tribai.co/asistente

**Query principal:**
```
Una empresa colombiana paga honorarios a un ingeniero residente en España por un diseño mecánico. ¿Qué retención en la fuente aplica y qué artículos del ET la soportan?
```

**Queries de backup (si la primera da respuesta floja):**
```
¿Qué retención debo aplicar al pagar servicios técnicos a una empresa española sin sucursal en Colombia?
```
```
Soy persona natural, pago honorarios por diseño de ingeniería a un profesional residente en España. ¿Cuál es la tarifa de retención aplicable?
```

**Backup video:** `assets/videos/demo-1-cold-open.mp4`

---

### Demo #2 — Embeddings (§3)
**URL local:** http://localhost:3001
**URL Vercel:** (pendiente, se agregará post-deploy)

**Par 1 (similitud moderada — el caso canónico):**
- Texto 1: `trabajador extranjero`
- Texto 2: `residente no colombiano`
- Esperado: **0.56** — "Relacionados"

**Par 2 (baja similitud — contraste):**
- Texto 1: `trabajador extranjero`
- Texto 2: `deducción por arrendamiento`
- Esperado: **0.35** — "Tangencialmente conectados" / "No relacionados"

**Pares adicionales para improvisar:**

| Par | Similitud esperada | Interpretación |
|---|---|---|
| "IVA sobre servicios" vs "impuesto al valor agregado por honorarios" | 0.66 | Relacionados |
| "retención en la fuente" vs "calcular descuento por pago anticipado" | 0.51 | Relacionados |
| "Sentencia de la Corte Constitucional" vs "fallo judicial de constitucionalidad" | 0.73 | Muy parecidos |

**Backup:** los 5 pares están pre-computados en `embeddings-demo/app/page.tsx` como `FALLBACK`. Si la API Voyage falla durante la clase, la UI usa estos valores hardcoded.

**Insight pedagógico:**
- 0.56 vs 0.35 — gap de 0.21 puntos entre "mismo significado, distintas palabras" vs "temas no relacionados"
- Ese gap es lo que ningún `LIKE '%...%'` de PostgreSQL puede detectar
- Voyage-3-large es más conservador que embeddings generalistas (ej. OpenAI text-embedding-3) — por eso los valores "altos" se quedan en 0.7-0.75, no 0.9

---

### Demo #3 — Autopsia del flujo (§4)
**URL:** https://tribai.co/asistente (volver a la misma sesión del cold open)

**Acción:** abrir el panel de evidencia (ícono "Fuentes" o "Ver evidencia" junto a la respuesta). Mostrar:
1. Lista de documentos recuperados (título + namespace + score)
2. Artículos del ET citados en la respuesta
3. Confidence badge (alto/medio/bajo)

**Narración:** *"El LLM no inventó esto. Le pasamos exactamente estos 5 documentos. Aquí está el cuaderno abierto."*

**Backup video:** `assets/videos/demo-3-autopsia.mp4`

---

### Demo #4 — Kelsen (§4)
**URL:** https://kelsen-psi.vercel.app

**Query principal:**
```
¿Qué ha dicho la Corte Constitucional sobre el mínimo vital en pensiones?
```

**Query de backup:**
```
¿Cuáles son los requisitos de la tutela según la jurisprudencia de la Corte Constitucional colombiana?
```

**Lo que los estudiantes deben notar:**
- Kelsen "piensa" antes de responder (10-15s) — está invocando la tool
- Cita sentencias específicas con número (T-XXX/YYYY, C-XXX/YYYY, SU-XXX/YYYY)
- El UI muestra las fuentes separadas de la respuesta redactada

**Backup video:** `assets/videos/demo-4-kelsen.mp4`

---

### Demo #5 — Receta mínima (§5)
**Acción:** si hay proyector secundario, abrir VSCode con `embeddings-demo/app/api/embed/route.ts` para mostrar las 5 funciones reales que componen un RAG mínimo.

Si no hay segunda pantalla, usar el slide 32 del deck (ya tiene syntax highlighting).

**Mensaje clave:** *"Esto es TODO. 60 líneas. 5 servicios en free tier. Pueden tener un RAG corriendo esta misma noche."*

---

## Pre-flight checklist (ejecutar 30 min antes de la clase)

- [ ] Confirmar créditos Anthropic arriba en tribai.co (enviar query corta de prueba)
- [ ] tribai.co/asistente carga OK desde red EAFIT
- [ ] kelsen-psi.vercel.app carga OK desde red EAFIT
- [ ] localhost:3001 (embeddings-demo) corriendo en terminal de repuesto
- [ ] Hotspot móvil listo (iPhone Personal Hotspot o Android)
- [ ] Conectar MacBook a proyector + probar resolución (target 1600×900 o 1920×1080)
- [ ] Abrir el deck en modo presenter: `?view=reader` o presionar `S` para speaker notes
- [ ] Silenciar notificaciones (macOS DND on)
- [ ] 4 pestañas pre-cargadas en el browser:
  1. Deck local (http://localhost:3000) o Vercel URL
  2. tribai.co/asistente (con sesión iniciada)
  3. kelsen-psi.vercel.app
  4. embeddings-demo (localhost:3001 o Vercel URL)
- [ ] Cargador + adaptador HDMI/USB-C en el bolso
- [ ] `speaker-notes.md` impreso o abierto en iPad/celular

---

## Plan B — si algo falla

| Problema | Acción |
|---|---|
| Red EAFIT lenta | Cambiar a hotspot móvil (pre-configurado) |
| Demo #1 responde raro | Usar query backup #1 o #2 |
| localhost:3001 cayó | La UI tiene FALLBACK hardcoded — muestra valores correctos sin red |
| Iframe no carga | Abrir URL directamente en pestaña externa (alt-tab) |
| Proyector no muestra | Pedir 2 min, reconectar HDMI; mientras contar anécdota de Tribai |
| Me trabo con una pregunta difícil | "Excelente pregunta — ¿me das 2 segundos? Vamos al siguiente y volvemos" |
| Demo #4 Kelsen rate-limit | Usar video backup + narrar |

---

## Métricas de éxito post-clase

- [ ] Al menos 3 estudiantes se acercan a preguntar al final
- [ ] Al menos 1 se suscribe a tribai.co o clona el repo
- [ ] Santiago dice "vuelve el próximo semestre"
- [ ] Me llega al menos 1 email pidiendo mentoría en las 72h siguientes
