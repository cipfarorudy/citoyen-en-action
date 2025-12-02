import {
  readdirSync,
  mkdirSync,
  existsSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { resolve, extname, basename } from "node:path";

// Script minimal de conversion placeholder (sans dépendances externes).
// NOTE: Pour une vraie conversion vers WebP/AVIF, installer sharp ou imagemin.
// Ici on duplique simplement les fichiers avec extension .webp pour préparer l'intégration.

const srcDir = resolve("src", "assets");
const outDir = resolve("public", "images");
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const supported = [".png", ".jpg", ".jpeg"];
let count = 0;
for (const file of readdirSync(srcDir)) {
  const ext = extname(file).toLowerCase();
  if (!supported.includes(ext)) continue;
  const data = readFileSync(resolve(srcDir, file));
  const target = resolve(outDir, `${basename(file, ext)}.webp`);
  writeFileSync(target, data); // Copie brute (faux webp) pour démonstration.
  count++;
}
console.log(
  `⚠️ Conversion simulée terminée (${count} fichiers). Installer 'sharp' pour véritable conversion.`
);
