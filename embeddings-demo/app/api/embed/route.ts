import { NextRequest, NextResponse } from "next/server";

const VOYAGE_API_KEY = process.env.VOYAGE_API_KEY;
const VOYAGE_URL = "https://api.voyageai.com/v1/embeddings";

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0, normA = 0, normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

export async function POST(req: NextRequest) {
  const { text1, text2 } = await req.json();

  if (!VOYAGE_API_KEY) {
    return NextResponse.json({ error: "VOYAGE_API_KEY no configurada" }, { status: 500 });
  }
  if (!text1 || !text2) {
    return NextResponse.json({ error: "Ambos textos son requeridos" }, { status: 400 });
  }

  const res = await fetch(VOYAGE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${VOYAGE_API_KEY}`,
    },
    body: JSON.stringify({
      input: [text1, text2],
      model: "voyage-3-large",
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    return NextResponse.json({ error: `Voyage: ${err}` }, { status: res.status });
  }

  const data = await res.json();
  const [emb1, emb2] = data.data.map((d: { embedding: number[] }) => d.embedding);
  const similarity = cosineSimilarity(emb1, emb2);

  return NextResponse.json({ similarity, text1, text2 });
}
