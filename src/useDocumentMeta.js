import { useEffect } from "react";

// Capture the static defaults from index.html once, so pages that don't
// set their own meta still fall back to the real site-wide values instead
// of leaking whatever the previously-visited page set.
const DEFAULT_TITLE = document.title;
const DEFAULT_DESCRIPTION =
  document.querySelector('meta[name="description"]')?.getAttribute("content") || "";
const DEFAULT_OG_TITLE =
  document.querySelector('meta[property="og:title"]')?.getAttribute("content") || DEFAULT_TITLE;
const DEFAULT_OG_DESCRIPTION =
  document.querySelector('meta[property="og:description"]')?.getAttribute("content") || DEFAULT_DESCRIPTION;
const DEFAULT_OG_URL =
  document.querySelector('meta[property="og:url"]')?.getAttribute("content") || "";
const DEFAULT_CANONICAL =
  document.querySelector('link[rel="canonical"]')?.getAttribute("href") || "";

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export default function useDocumentMeta({ title, description, url, canonical }) {
  useEffect(() => {
    if (title) {
      document.title = title;
      setMeta('meta[property="og:title"]', "content", title);
    }
    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
    }
    if (url) setMeta('meta[property="og:url"]', "content", url);
    if (canonical) setMeta('link[rel="canonical"]', "href", canonical);

    return () => {
      document.title = DEFAULT_TITLE;
      setMeta('meta[name="description"]', "content", DEFAULT_DESCRIPTION);
      setMeta('meta[property="og:title"]', "content", DEFAULT_OG_TITLE);
      setMeta('meta[property="og:description"]', "content", DEFAULT_OG_DESCRIPTION);
      setMeta('meta[property="og:url"]', "content", DEFAULT_OG_URL);
      setMeta('link[rel="canonical"]', "href", DEFAULT_CANONICAL);
    };
  }, [title, description, url, canonical]);
}
