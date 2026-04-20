import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Embeddings Demo — EAFIT",
  description: "Demostración en vivo de similitud semántica con embeddings",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
