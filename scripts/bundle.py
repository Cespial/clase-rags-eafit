#!/usr/bin/env python3
"""Bundle el deck en un solo clase.html autocontenido.
Inlinea tokens.css + theme.css + SVGs (logos + diagrams).
Queda con dependencia externa SOLO a la CDN de Reveal.js.
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "index.html"
OUT = ROOT / "clase.html"

def read(p: Path) -> str:
    return p.read_text(encoding="utf-8")

def resolve_imports_in_css(css: str, base: Path) -> str:
    """Resuelve @import "tokens.css" en-line (solo local, no Google Fonts)."""
    def repl(m):
        name = m.group(1)
        if name.startswith("http"):
            return m.group(0)  # mantener CDN imports
        target = (base / name).resolve()
        if target.exists():
            return read(target)
        return m.group(0)
    return re.sub(r'@import\s+"([^"]+)";', repl, css)

def inline_css_links(html: str) -> str:
    def repl(m):
        href = m.group(1)
        if href.startswith("http"):
            return m.group(0)
        css_path = ROOT / href
        if not css_path.exists():
            return m.group(0)
        css = read(css_path)
        css = resolve_imports_in_css(css, css_path.parent)
        return f"<style>\n{css}\n</style>"
    return re.sub(
        r'<link\s+rel="stylesheet"\s+href="([^"]+)"\s*/?>',
        repl,
        html,
    )

def inline_img_svgs(html: str) -> str:
    """Reemplaza <img src="assets/.../X.svg" ...> con <svg>...</svg> inline."""
    def repl(m):
        attrs_pre = m.group(1)
        src = m.group(2)
        attrs_post = m.group(3)
        if not src.endswith(".svg"):
            return m.group(0)
        svg_path = ROOT / src
        if not svg_path.exists():
            return m.group(0)
        svg_content = read(svg_path).strip()
        # Extraer class/style/alt del <img> para aplicar al <svg>
        cls = re.search(r'class="([^"]+)"', attrs_pre + attrs_post)
        sty = re.search(r'style="([^"]+)"', attrs_pre + attrs_post)
        # Remover el xml prolog si existe
        svg_content = re.sub(r'^<\?xml[^>]*\?>\s*', '', svg_content)
        # Inyectar class/style al primer <svg ...>
        if cls or sty:
            def inject(ms):
                open_tag = ms.group(0)
                if cls and 'class=' not in open_tag:
                    open_tag = open_tag[:-1] + f' class="{cls.group(1)}">'
                if sty and 'style=' not in open_tag:
                    open_tag = open_tag[:-1] + f' style="{sty.group(1)}">'
                return open_tag
            svg_content = re.sub(r'<svg[^>]*>', inject, svg_content, count=1)
        return svg_content
    # Match <img ... src="..." ... />
    return re.sub(
        r'<img([^>]*?)\s+src="([^"]+)"([^>]*?)/?>',
        repl,
        html,
    )

def main():
    html = read(SRC)
    html = inline_css_links(html)
    html = inline_img_svgs(html)
    OUT.write_text(html, encoding="utf-8")
    size_kb = OUT.stat().st_size / 1024
    print(f"→ {OUT.name} ({size_kb:.1f} KB)")

if __name__ == "__main__":
    main()
