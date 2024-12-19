import { MetadataRoute } from "next";

// Generate the sitemap with URLs and metadata
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Home Page
    {
      url: "https://oitii.com",
      lastModified: new Date(),
      changeFrequency: "monthly", // Page content is likely updated monthly
      priority: 1, // Home page has the highest priority
    },
    // About Page

    {
      url: "https://oitii.com/jobs",
      lastModified: new Date(),
      changeFrequency: "daily", // Jobs page changes frequently
      priority: 0.9, // Highest priority as main jobs listing page
    },
    {
      url: "https://oitii.com/post-a-job",
      lastModified: new Date(),
      changeFrequency: "monthly", // Changes less frequently
      priority: 0.9, // High priority for employer conversion
    },
    {
      url: "https://oitii.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly", // Monthly updates expected
      priority: 0.9,
    },
    // Services Page
    {
      url: "https://oitii.com/services",
      lastModified: new Date(),
      changeFrequency: "monthly", // Monthly updates
      priority: 0.9,
    },
    // Contact Page
    {
      url: "https://oitii.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly", // Likely monthly content changes
      priority: 0.8,
    },
    // Privacy Policy Page (rarely changes)
    {
      url: "https://oitii.com/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "yearly", // Rarely updated (e.g., once a year)
      priority: 0.5,
    },
    // Login Pages
    {
      url: "https://oitii.com/login",
      lastModified: new Date(),
      changeFrequency: "monthly", // Content might change frequently
      priority: 0.9,
    },
    {
      url: "https://oitii.com/login/employer",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://oitii.com/login/job-seeker",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Sign-Up Pages
    {
      url: "https://oitii.com/sign-up",
      lastModified: new Date(),
      changeFrequency: "monthly", // Likely updated with new features or bug fixes
      priority: 0.9,
    },
    {
      url: "https://oitii.com/sign-up/employer",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://oitii.com/sign-up/job-seeker",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

// import type { MetadataRoute } from "next";

// export default function sitemap(): MetadataRoute.Sitemap {
//   return [
//     {
//       url: "https://oitii.com",
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 1,
//     },
//     {
//       url: "https://oitii.com/about",
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.9,
//     },
//     {
//       url: "https://oitii.com/services",
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.9,
//     },
//     {
//       url: "https://oitii.com/contact",
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.8,
//     },
//     {
//       url: "https://oitii.com/privacy-policy",
//       lastModified: new Date(),
//       changeFrequency: "yearly",
//       priority: 0.5,
//     },
//   ];
// }
