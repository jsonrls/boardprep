import DOMPurify from "dompurify";

export interface PressApiArticle {
  id: string;
  title: string;
  content: string;
  author: string;
  imageUrl?: string | null;
  date: string;
}

export const FALLBACK_PRESS_IMAGE =
  "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2400&auto=format&fit=crop";

export function sanitizePressHtml(html: string) {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "ul",
      "ol",
      "li",
      "strong",
      "b",
      "em",
      "i",
      "u",
      "blockquote",
      "a",
      "br",
      "hr",
      "span",
    ],
    ALLOWED_ATTR: ["href", "target", "rel", "class", "style"],
  });
}

export function getPlainTextFromHtml(html: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  return doc.body.textContent?.replace(/\s+/g, " ").trim() ?? "";
}

export function getExcerptFromHtml(html: string, maxLength = 180) {
  const plain = getPlainTextFromHtml(html);
  if (plain.length <= maxLength) return plain;
  return `${plain.slice(0, maxLength).trimEnd()}...`;
}

export function estimateReadTimeFromHtml(html: string) {
  const plain = getPlainTextFromHtml(html);
  const words = plain.length ? plain.split(/\s+/).length : 0;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export function formatPressDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });
}
