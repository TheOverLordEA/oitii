import FreeJobPost from "@/components/banner/FreeJobPost";
import PostAJobFAQ from "@/components/faq/FeaturedJobsFAQ";
import FeaturedJobPosts from "@/components/featured/FeaturedJobPosts";
import JobPostsPricing from "@/components/pricing/JobPostsPricing";

import { WithContext, WebPage } from "schema-dts";

const jsonLd: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Post a Job - Oitii Jobs",
  description:
    "Post your job listings on Oitii Jobs. First job post free, then $10 per post. Reach qualified candidates quickly and easily.",
  url: "https://www.oitii.com/post-a-job",
  datePublished: new Date("2024-01-01").toISOString(),
  dateModified: new Date().toISOString(),
  isPartOf: {
    "@type": "WebSite",
    name: "Oitii Jobs",
    url: "https://www.oitii.com",
  },
  offers: {
    "@type": "Offer",
    price: "10",
    priceCurrency: "USD",
    description: "Post a job listing",
  },
  publisher: {
    "@type": "Organization" as const,
    name: "Oitii LLC",
    description: "Leading job board for tech professionals",
    url: "https://www.oitii.com",
    logo: "https://www.oitii.com/assets/logo.png",
    sameAs: [
      "https://twitter.com/oitii",
      "https://www.linkedin.com/company/oitii",
    ],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-gradient-to-r from-neutral-50 to-cyan-100 flex flex-col gap-3 md:gap-5 ">
        <div className="text-center space-y-4 container mx-auto px-4 md:py-10 py-5 text-black">
          <h2 className="text-3xl font-semibold leading-tight text-center sm:text-4xl md:text-4xl">
            PRICING
          </h2>
          <h1 className="text-3xl font-normal tracking-normal sm:text-4xl md:text-5xl">
            Post your first job for free
            <br className="mb-3" />
            then just $10 per post after that!
          </h1>
          <p className="text-lg text-gray-600 sm:text-xl">
            Choose the best option for your business. Buy More When You’re
            Ready.
          </p>
        </div>
        <JobPostsPricing />

        <FreeJobPost />
      </section>
      <section className="flex flex-col py-16 gap-8 md:gap-5">
        <FeaturedJobPosts />
        <PostAJobFAQ />
      </section>
    </>
  );
}
