"use client";
import { useEffect } from "react";

export default function MetaDebugger() {
  useEffect(() => {
    // Get all meta tags
    const metaTags = document.getElementsByTagName("meta");

    // Filter and log Open Graph tags
    const ogTags = Array.from(metaTags).filter((tag) =>
      tag.getAttribute("property")?.startsWith("og:")
    );

    console.log(
      "Open Graph Tags:",
      ogTags.map((tag) => ({
        property: tag.getAttribute("property"),
        content: tag.getAttribute("content"),
      }))
    );

    // Check if image is loading
    const imgUrl = document
      .querySelector('meta[property="og:image"]')
      ?.getAttribute("content");

    if (imgUrl) {
      const img = new Image();
      img.onload = () => console.log("OG Image loaded successfully");
      img.onerror = () => console.error("OG Image failed to load");
      img.src = imgUrl;
    }
  }, []);

  return null;
}
