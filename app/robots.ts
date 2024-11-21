import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    // Define rules for search engine crawlers
    rules: [
      {
        userAgent: "*", // Apply to all user agents (all search engine bots)
        allow: "/", // Allow crawling the homepage and general content
        disallow: [
          "/private/", // Prevent access to private content
          "/admin/", // Prevent access to admin areas (if any)
          "/auth/", // Prevent crawling authentication-related pages
        ],
      },
      {
        userAgent: "Googlebot", // Example: specific rule for Google's bot
        allow: "/public/", // Googlebot can access the public section
        disallow: "/admin/", // Disallow access to admin pages for Googlebot
      },
    ],
    // Dynamically set the sitemap URL based on the origin
    sitemap: `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://oitii.com"
    }/sitemap.xml`,
  };
}

// import type { MetadataRoute } from "next";

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: {
//       userAgent: "*",
//       allow: "/",
//       disallow: "/private/",
//     },
//     sitemap: "https://oitii.com/sitemap.xml",
//   };
// }
