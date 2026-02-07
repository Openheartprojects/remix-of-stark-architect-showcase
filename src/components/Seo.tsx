import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type SeoProps = {
  title: string;
  description: string;
  canonicalPath?: string;
  imagePath?: string;
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const ensureMeta = (selector: string, attrs: Record<string, string>) => {
  const head = document.head;
  let el = head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    head.appendChild(el);
  }
  return el;
};

const ensureLink = (rel: string) => {
  const head = document.head;
  let el = head.querySelector(`link[rel=\"${rel}\"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    head.appendChild(el);
  }
  return el;
};

const ensureJsonLd = (id: string) => {
  const head = document.head;
  let el = head.querySelector(`script#${id}`) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    head.appendChild(el);
  }
  return el;
};

const getBaseUrl = () => {
  const env = (import.meta as unknown as { env?: Record<string, string> }).env;
  const configured = env?.VITE_SITE_URL;
  if (configured) return configured.replace(/\/$/, "");
  return window.location.origin;
};

const Seo = ({
  title,
  description,
  canonicalPath,
  imagePath,
  noIndex,
  jsonLd,
}: SeoProps) => {
  const location = useLocation();

  useEffect(() => {
    const baseUrl = getBaseUrl();
    const path = canonicalPath ?? location.pathname;
    const canonicalUrl = `${baseUrl}${path}`;
    const imageUrl = imagePath ? `${baseUrl}${imagePath}` : undefined;

    document.title = title;

    ensureMeta('meta[name="description"]', { name: "description" }).setAttribute(
      "content",
      description
    );

    const canonical = ensureLink("canonical");
    canonical.setAttribute("href", canonicalUrl);

    ensureMeta('meta[property="og:title"]', {
      property: "og:title",
    }).setAttribute("content", title);

    ensureMeta('meta[property="og:description"]', {
      property: "og:description",
    }).setAttribute("content", description);

    ensureMeta('meta[property="og:type"]', { property: "og:type" }).setAttribute(
      "content",
      "website"
    );

    ensureMeta('meta[property="og:url"]', { property: "og:url" }).setAttribute(
      "content",
      canonicalUrl
    );

    ensureMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
    }).setAttribute("content", "Altair Axis");

    if (imageUrl) {
      ensureMeta('meta[property="og:image"]', {
        property: "og:image",
      }).setAttribute("content", imageUrl);

      ensureMeta('meta[name="twitter:image"]', {
        name: "twitter:image",
      }).setAttribute("content", imageUrl);
    }

    ensureMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
    }).setAttribute("content", "summary_large_image");

    ensureMeta('meta[name="twitter:title"]', { name: "twitter:title" }).setAttribute(
      "content",
      title
    );

    ensureMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
    }).setAttribute("content", description);

    if (noIndex) {
      ensureMeta('meta[name="robots"]', { name: "robots" }).setAttribute(
        "content",
        "noindex,nofollow"
      );
    } else {
      const robots = document.head.querySelector(
        'meta[name="robots"]'
      ) as HTMLMetaElement | null;
      if (robots) robots.remove();
    }

    if (jsonLd) {
      const el = ensureJsonLd("seo-jsonld");
      el.textContent = JSON.stringify(jsonLd);
    } else {
      const el = document.head.querySelector(
        "script#seo-jsonld"
      ) as HTMLScriptElement | null;
      if (el) el.remove();
    }
  }, [title, description, canonicalPath, imagePath, noIndex, jsonLd, location.pathname]);

  return null;
};

export default Seo;
