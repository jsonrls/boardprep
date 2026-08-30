const HTML_ENTITY_REPLACEMENTS: Record<string, string> = {
  "&amp;": "&",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
  "&nbsp;": " ",
};

export function plainTextFromHtml(value: string): string {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&(amp|quot|#39|apos|nbsp);/gi, (entity) =>
      HTML_ENTITY_REPLACEMENTS[entity.toLowerCase()] ?? " ",
    )
    .replace(/&#(\d+);/g, (_, codePoint: string) =>
      String.fromCodePoint(Number(codePoint)),
    )
    .replace(/&#x([\da-f]+);/gi, (_, codePoint: string) =>
      String.fromCodePoint(Number.parseInt(codePoint, 16)),
    )
    .replace(/\s+/g, " ")
    .trim();
}

export function truncateAtWord(value: string, maxLength = 155): string {
  const cleanValue = value.replace(/\s+/g, " ").trim();
  if (cleanValue.length <= maxLength) return cleanValue;

  const availableLength = Math.max(1, maxLength - 1);
  const candidate = cleanValue.slice(0, availableLength + 1);
  const finalSpace = candidate.lastIndexOf(" ");
  const cutoff = finalSpace >= Math.floor(availableLength * 0.65)
    ? finalSpace
    : availableLength;

  return `${candidate.slice(0, cutoff).replace(/[\s,;:.-]+$/g, "")}…`;
}

export function metaDescriptionFromHtml(value: string, maxLength = 155): string {
  return truncateAtWord(plainTextFromHtml(value), maxLength);
}
