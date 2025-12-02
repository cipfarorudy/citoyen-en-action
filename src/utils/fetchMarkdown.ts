// Utilitaire de récupération Markdown avec cache mémoire simple.
const markdownCache: Record<string, string> = {};

export async function fetchMarkdown(path: string): Promise<string> {
  if (markdownCache[path]) return markdownCache[path];
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Échec chargement: ${path}`);
  const text = await res.text();
  markdownCache[path] = text;
  return text;
}
