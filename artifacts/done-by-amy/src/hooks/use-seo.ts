import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
}

export function useSEO({ title, description, keywords, canonical, noindex }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, value: string, attr: "content" | "href" = "content") => {
      let el = document.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
      if (!el) {
        if (attr === "href") {
          el = document.createElement("link");
        } else {
          el = document.createElement("meta");
        }
        const attrParts = selector.match(/\[([^\]]+)\]/);
        if (attrParts) {
          const [attrName, attrVal] = attrParts[1].replace(/['"]/g, "").split("=");
          el.setAttribute(attrName, attrVal);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);

    if (keywords) {
      setMeta('meta[name="keywords"]', keywords);
    }

    if (canonical) {
      setMeta('link[rel="canonical"]', canonical, "href");
      setMeta('meta[property="og:url"]', canonical);
      setMeta('meta[name="twitter:url"]', canonical);
    }

    const robotsEl = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (noindex) {
      setMeta('meta[name="robots"]', "noindex, nofollow");
    } else if (robotsEl) {
      robotsEl.setAttribute("content", "index, follow");
    }
  }, [title, description, keywords, canonical, noindex]);
}
