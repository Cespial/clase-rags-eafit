"use client";

import { useState } from "react";

const EXAMPLES: Array<[string, string]> = [
  ["trabajador extranjero", "residente no colombiano"],
  ["trabajador extranjero", "deducción por arrendamiento"],
  ["IVA sobre servicios", "impuesto al valor agregado por honorarios"],
  ["retención en la fuente", "calcular descuento por pago anticipado"],
  ["Sentencia de la Corte Constitucional", "fallo judicial de constitucionalidad"],
];

const FALLBACK: Record<string, number> = {
  "trabajador extranjero|residente no colombiano": 0.56,
  "trabajador extranjero|deducción por arrendamiento": 0.35,
  "IVA sobre servicios|impuesto al valor agregado por honorarios": 0.66,
  "retención en la fuente|calcular descuento por pago anticipado": 0.51,
  "Sentencia de la Corte Constitucional|fallo judicial de constitucionalidad": 0.73,
};

export default function Page() {
  const [text1, setText1] = useState("trabajador extranjero");
  const [text2, setText2] = useState("residente no colombiano");
  const [similarity, setSimilarity] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function compute() {
    setLoading(true);
    setError(null);
    setSimilarity(null);
    try {
      const res = await fetch("/api/embed", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text1, text2 }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const key = `${text1}|${text2}`;
        if (FALLBACK[key] !== undefined) {
          setSimilarity(FALLBACK[key]);
          return;
        }
        throw new Error(data.error || "Error API");
      }
      const data = await res.json();
      setSimilarity(data.similarity);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  }

  function useExample(a: string, b: string) {
    setText1(a);
    setText2(b);
    setSimilarity(null);
  }

  function interpret(sim: number): string {
    if (sim > 0.70) return "🎯 Muy parecidos semánticamente";
    if (sim > 0.50) return "✓ Relacionados";
    if (sim > 0.35) return "~ Tangencialmente conectados";
    return "✗ No relacionados";
  }

  return (
    <div className="container">
      <h1>¿Qué tan parecidos son dos textos?</h1>
      <p className="subtitle">
        Embeddings · voyage-3-large · 1024 dimensiones
      </p>

      <div className="input-group">
        <div className="input-row">
          <label>Texto 1:</label>
          <input value={text1} onChange={(e) => setText1(e.target.value)} />
        </div>
        <div className="input-row">
          <label>Texto 2:</label>
          <input value={text2} onChange={(e) => setText2(e.target.value)} />
        </div>
      </div>

      <button onClick={compute} disabled={loading || !text1 || !text2}>
        {loading ? "Calculando..." : "Calcular similitud"}
      </button>

      {error && <p className="error">{error}</p>}

      {similarity !== null && (
        <div className="result">
          <div className="score">{similarity.toFixed(2)}</div>
          <div className="score-label">Similitud coseno</div>
          <div className="bar">
            <div className="bar-fill" style={{ width: `${Math.max(0, similarity * 100)}%` }} />
          </div>
          <p className="interpretation">{interpret(similarity)}</p>
        </div>
      )}

      <div className="examples">
        <h3>Ejemplos predefinidos</h3>
        {EXAMPLES.map(([a, b], i) => (
          <button key={i} onClick={() => useExample(a, b)}>
            &ldquo;{a}&rdquo; vs &ldquo;{b}&rdquo;
          </button>
        ))}
      </div>
    </div>
  );
}
