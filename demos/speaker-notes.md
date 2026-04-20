# Speaker Notes — Clase RAGs EAFIT 20-abr-2026 12:00

## Tono general
- Hablar despacio, respirar entre slides
- Mirar al público, no al deck
- Usar "ustedes" (no "tú"): audiencia EAFIT
- Si ven caras perdidas, pausar y preguntar "¿alguna pregunta hasta aquí?"

---

## §0 · Cold open (5 min, slides 1-2)

**Abrir:** sonreír, presentarse, mencionar que Santiago los invitó.

**Bullets:**
- "Hoy no les voy a dar clase de bases de datos. Ya tienen eso. Les voy a mostrar qué pasa DESPUÉS de las bases de datos."
- "Vamos a ver algo en vivo primero. Después lo desmontamos."
- Ejecutar Demo #1. Mientras carga: "ojo a dos cosas: la respuesta y las fuentes que cita."
- Post-respuesta: "¿cómo hizo eso? Lo averiguamos en 90 minutos, sin código."

---

## §1 · Paradigma (8 min, slides 3-6)

- "Lo que ustedes ya saben: SELECT devuelve filas. Funciona muy bien cuando la pregunta es literal."
- "El problema: muchas preguntas no son literales. '¿Cómo le declaro renta a un trabajador extranjero?' — ni la palabra 'extranjero' aparece necesariamente en los artículos relevantes."
- Punto clave: **"los LLMs ya saben escribir. El trabajo ahora es pasarles los datos correctos."**
- Cerrar con la frase: "RAG = cuaderno abierto vs memoria inventada."

---

## §2 · Galería (12 min, slides 7-13)

- "Antes de meternos en el cómo, veamos el qué. 7 ejemplos reales en 2 minutos cada uno."
- Tocar levemente cada caso. No profundizar.
- Micro-ejercicio slide 12: "por 30 segundos, piensen en SU dominio."
- **Cronometrar 30 segundos reales** (miro reloj, ojalá en silencio).

---

## §3 · Las piezas Lego (18 min, slides 14-21) — SECCIÓN LARGA

- Abrir con la metáfora: "imaginen un bibliotecario con una máquina de escribir".
- Una pieza por slide, 2-3 min cada una.
- Demo #2 (embeddings) cae en slide 17. Es el momento "aha" de la clase.
- **Esperar similitud ~0.56** para "trabajador extranjero" vs "residente no colombiano".
- Contrastar en vivo con "trabajador extranjero" vs "deducción por arrendamiento" → ~0.35.
- Narración: *"Con SQL LIKE, ambos dan cero. Con embeddings, hay una diferencia CLARA de 20 puntos."*
- Si el demo falla: usar los valores hardcoded (FALLBACK) — la UI los muestra automáticamente.
- Cerrar con slide 21 (5 piezas juntas): "orquestar estas 5 = RAG."

---

## §4 · Flujo (12 min, slides 22-27)

- "Hasta aquí vimos las piezas. Ahora cómo las armó Tribai vs cómo las armó Kelsen."
- Tribai = pipeline lineal (predecible, debuggable).
- Demo #3: volver al cold open, abrir panel de evidencia.
- Kelsen = agente con tools (más flexible, multi-paso).
- Demo #4: Kelsen con query legal. **Decir en voz alta "miren que está pensando — está ejecutando la tool".**
- Punchline: **"no hay UN RAG. Hay decisiones de diseño."**

---

## §5 · Ecosistema (15 min, slides 28-34) — SECCIÓN CENTRAL

- "Este es el slide más importante de la clase."
- Mapa de APIs: que cuenten los orbitales. **12**.
- "La BD es UNA de DOCE."
- Costo real: $0.031 por query. Con optimización: $0.013.
- Tabla "para replicar esto": todos los free tiers.
- Demo #5: receta mínima de 60 líneas.
- RAG de juguete vs productivo: "el salto es disciplina, no tecnología."
- Cerrar: **"la BD es el cimiento. La orquestación es la arquitectura. Ambas son ingeniería."**

---

## §6 · Industria (10 min, slides 35-39)

- Harvey.ai $11B → "lo que hay en juego."
- Agentic RAG: "la IA que decide cuándo actuar."
- MCP: "USB-C de las IAs" — muy reciente, oportunidad para early adopters.
- Multi-model: "usar el modelo correcto, no el más caro."
- Cerrar: **"orquestar es la nueva ingeniería de software."**

---

## §7 · Colombia (5 min, slides 40-42)

- "300K contadores, 410K abogados, 50M habitantes — en Colombia sola."
- 6 dominios candidatos. Que escojan uno mentalmente.
- Plan de 4 semanas: les doy el roadmap.
- **"Si arman el MVP, me escriben. Yo los ayudo."** ← cerrar con eso.

---

## §8 · Cierre (5 min, slides 43-44)

- "De SELECT a orquestación. La ingeniería cambió de forma."
- Agradecer a Santiago y a EAFIT.
- Q&A abierto.
- Si no hay preguntas, invitar a acercarse al escritorio.
- Compartir enlaces: tribai.co, kelsen-psi.vercel.app, github.com/Cespial/clase-rags-eafit.

---

## Checkpoints de timing

| Min | Debería estar en | Slide esperado |
|---|---|---|
| 0 | Arranque §0 | 1 |
| 5 | Inicio §1 | 3 |
| 13 | Inicio §2 | 7 |
| 25 | Inicio §3 | 14 |
| 43 | Inicio §4 | 22 |
| 55 | Inicio §5 | 28 |
| 70 | Inicio §6 | 35 |
| 80 | Inicio §7 | 40 |
| 85 | Inicio §8 | 43 |
| 90 | Fin | — |

Si a los 45 min no estoy en §4, **acortar §3** (saltar slide 20 o 19).
Si a los 70 min no estoy en §6, **acortar §5** (saltar slide 33 "RAG juguete vs productivo").

---

## Referencia rápida — números a memorizar

- **Tribai:** 36K vectores, 6 namespaces, ~12 APIs, costo $0.031→$0.013/query
- **Kelsen:** 1.69M docs, 2.6M chunks, 22 GB Neon, 4 tools del agente
- **Harvey:** $11B valoración, $190M ARR, 100K+ abogados, 60 países
- **Colombia:** 300K contadores, 410K abogados, 88K normas SUIN, 29K sentencias CC, 952K tutelas/año
- **Stanford JELS 2025:** Lexis+ 17%, Westlaw 33%, GPT-4 43% alucinaciones
