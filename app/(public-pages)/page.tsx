import React from "react";
// import { Button } from "@/components/ui/button";
// import { Search, BarChart, Users, Briefcase } from "lucide-react";
// import Link from "next/link";
import type { Metadata } from "next";
// import TrendingJobs from "@/components/trendingJobs/TrendingJobs";
// import JobSectionHome from "@/components/job-sections/JobSectionBlock";
// import { Josefin_Sans } from "next/font/google";
import JobBoard from "@/components/jobBoard/JobBoard";
import CompingSoonHome from "@/components/comingSoon/ComingSoonHome";
import HowItWorks from "@/components/howItWorks/HowItWorks";
import JobAnalytics from "@/components/jobBoard/JobAnalytics";
import { WithContext, WebPage } from "schema-dts";
import { Button } from "@/components/ui/button";
import AnimatedHero from "@/components/hero/AnimatedHero";
// import GetStarted from "@/components/banner/GetStarted";
import HomePageBanner from "@/components/banner/HomePageBanner";
import Link from "next/link";

// const josefin_sans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Find Real Jobs & Career Opportunities | No Ghost Jobs | Oitii",
  description:
    "Discover verified tech jobs with real salaries. No ghost listings, no fake opportunities. Apply to software, design, and product roles at top companies. Start your authentic career search with Oitii.",
  keywords: [
    "real jobs",
    "verified jobs",
    "tech jobs",
    "software jobs",
    "design jobs",
    "product jobs",
    "no ghost jobs",
    "authentic jobs",
    "career opportunities",
    "job search",
  ],
  alternates: {
    canonical: "https://www.oitii.com",
  },
  openGraph: {
    title: "Find Real Jobs & Career Opportunities | Oitii",
    description:
      "Discover verified jobs. No ghost listings, no fake opportunities. Apply to authentic roles at top companies.",
    type: "website",
    url: "https://www.oitii.com",
    images: [
      {
        url: "https://www.oitii.com/assets/oitii-logo-opengraph.png",
        width: 1200,
        height: 630,
        alt: "Oitii - Real Jobs, Real Opportunities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Real Tech Jobs & Career Opportunities | Oitii",
    description:
      "Discover verified tech jobs with real salaries. No ghost listings, apply to authentic roles at top companies.",
    images: ["https://www.oitii.com/twitter-image.png"],
  },
  robots: "index, follow",
};

interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  salary: string;
  equity?: string;
  postedDate: string;
  category: string;
}

// const jobs: Job[] = [
//   {
//     id: "1",
//     title: "Founding AI Engineer",
//     company: "Console",
//     logo: "/placeholder.svg?height=40&width=40",
//     location: "San Francisco",
//     salary: "$185k - $250k",
//     equity: "0.1% - 1.0%",
//     postedDate: "yesterday",
//     category: "engineering",
//   },
//   {
//     id: "2",
//     title: "Senior Compensation Business Partner",
//     company: "Relativity Space",
//     logo: "/placeholder.svg?height=40&width=40",
//     location: "Long Beach",
//     salary: "$132k - $169k",
//     postedDate: "yesterday",
//     category: "engineering",
//   },
//   {
//     id: "3",
//     title: "Sr Analyst, Marketing Analytics & Insights",
//     company: "2U",
//     logo: "/placeholder.svg?height=40&width=40",
//     location: "Arlington",
//     salary: "$80k - $89k",
//     postedDate: "1 day ago",
//     category: "finance",
//   },
//   {
//     id: "4",
//     title: "Staff Product Manager",
//     company: "Cleric",
//     logo: "/placeholder.svg?height=40&width=40",
//     location: "San Francisco",
//     salary: "$140k - $200k",
//     equity: "0.5% - 1.5%",
//     postedDate: "yesterday",
//     category: "healthcare",
//   },
//   {
//     id: "5",
//     title: "Continuity Clinician - Nurse Practioner",
//     company: "Virta Health",
//     logo: "/placeholder.svg?height=40&width=40",
//     location: "United States",
//     salary: "$104k - $120k",
//     postedDate: "yesterday",
//     category: "healthcare",
//   },
// ];

// const JOBSECTIONTITLES = {
//   latestJobs: "Latest Jobs",
//   engineeringJobs: "Engineering Jobs",
//   marketingJobs: "Marketing Jobs",
//   healthcareJobs: "Healthcare Jobs",
//   financeJobs: "Finance Jobs",
// };

export default function LandingPage() {
  const jsonLd: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Oitii",
    url: "https://www.oitii.com",
    description:
      "Oitii - Your trusted partner for innovative software solutions and digital transformation",
    datePublished: new Date("2024-01-01").toISOString(), // Adjust the date as needed

    publisher: {
      "@type": "Organization" as const,
      name: "Oitii LLC",
      description:
        "A forward-thinking software development company specializing in web and mobile solutions",

      url: "https://www.oitii.com",
      logo: "https://www.oitii.com/assets/logo.png",
      sameAs: [
        "https://x.com/oitiiJobs",
        "https://www.linkedin.com/company/oitii",
        // "https://github.com/oitii",
        // "https://facebook.com/oitii"
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex flex-col min-h-screen bg-white text-black">
        <div className="flex-1">
          <div className="container mx-auto px-4 py-14">
            <div className="grid lg:grid-cols-2 gap-5 md:gap-8 items-center ">
              <div className="space-y-6">
                <h1 className=" text-6xl md:text-7xl font-medium tracking-tight md:tracking-tighter md:leading-tighter leading-tight">
                  {/* <span className="text-2xl">Real jobs.</span>.{" "} */}
                  {/* <br className="mb-2" />{" "} */}
                  {/* <span className=" text-5xl"> */}
                  No Ghost jobs. <br /> No Fake jobs. {/* </span>{" "} */}
                  {/* <br /> <span className="text-6xl">No Fake Jobs.</span> */}
                </h1>
                <p className="text-xl sm:text-2xl pb-8 md:pb-6x text-muted-foreground max-w-xl">
                  {/* Figma helps design and development teams build great products,
                  together. */}
                  Stop wasting time on fake jobs — apply only to{" "}
                  <span className="font-bold">Real Jobs</span>, verified by
                  Oitii.
                </p>
                <Link href="/post-a-job">
                  <Button
                    size="lg"
                    className="rounded-md text-xl md:text-2xl px-6 h-12 bg-black hover:bg-black/90"
                  >
                    Post a job
                  </Button>
                </Link>
              </div>
              <AnimatedHero />
            </div>
          </div>

          <HomePageBanner />

          <JobBoard />

          <HowItWorks />
          <JobAnalytics />
          <CompingSoonHome />
        </div>
      </main>
    </>
  );
}

{
  /* <section> */
}
{
  /* <div className="flex flex-col md:flex-row justify-between items-center bg-white p-8 md:p-16"> */
}
{
  /* Left Section with Profile and Shapes */
}
{
  /* <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
    <div className="relative"> */
}
{
  /* Profile Image */
}
{
  /* <img
        src="https://via.placeholder.com/150"
        alt="Profile 1"
        className="rounded-full w-20 h-20"
      /> */
}
{
  /* Geometric Shapes */
}
{
  /* <div className="absolute -top-6 -left-6 w-20 h-20 bg-pink-400"></div>
      <div className="absolute -top-6 left-10 w-20 h-20 bg-green-500"></div>
      <div className="absolute top-6 left-6 w-10 h-10 bg-yellow-400"></div>
      <div className="absolute top-10 left-16 w-10 h-10 bg-blue-600"></div>
    </div>
  </div> */
}

{
  /* Center Text Section */
}
{
  /* <div className="text-center mt-8 md:mt-0">
    <h2 className="text-2xl font-bold text-black"> */
}
{
  /* Find what's next<span className="text-red-500">:</span> */
}
{
  /* Don't Waste Your Time on Fake Listings
      <span className="text-green-500">:</span>
    </h2>
    <p className="text-gray-600 mt-2 uppercase">
      Discover Authentic Jobs with Accurate Descriptions
    </p>
  </div> */
}

{
  /* Right Section with Profile and Shapes */
}
{
  /* <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-8 md:mt-0">
    <div className="relative"> */
}
{
  /* Profile Image */
}
{
  /* <img
        src="https://via.placeholder.com/150"
        alt="Profile 2"
        className="rounded-full w-20 h-20"
      /> */
}
{
  /* Geometric Shapes */
}
{
  /* <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-500"></div>
      <div className="absolute -top-6 right-10 w-20 h-20 bg-green-600"></div>
      <div className="absolute top-6 right-6 w-10 h-10 bg-blue-600"></div>
      <div className="absolute top-10 right-16 w-10 h-10 bg-orange-400"></div>
    </div>
  </div>
</div> */
}
{
  /* Trending jobs */
}
{
  /* TODO: Add skeleton ui for Suspense components */
}
{
  /* <Suspense fallback={<span>Loading.....</span>}>
  <TrendingJobs />
</Suspense> */
}
{
  /* Latest Jobs */
}
{
  /* <Suspense fallback={<span>Loading.....</span>}>
  <JobSectionHome
    jobTitle={JOBSECTIONTITLES.latestJobs}
    jobs={jobs}
  />
</Suspense> */
}
{
  /* Tech Jobs */
}
{
  /* <Suspense fallback={<span>Loading.....</span>}>
  <JobSectionHome
    jobTitle={JOBSECTIONTITLES.engineeringJobs}
    jobs={jobs}
  />
</Suspense>
<Suspense fallback={<span>Loading.....</span>}>
  <JobSectionHome
    jobTitle={JOBSECTIONTITLES.marketingJobs}
    jobs={jobs}
  />
</Suspense>
<div className="flex justify-center">
  <Button className="bg-black text-white rounded-none ">
    <Link href="/jobs" className="text-xl">
      View All jobs
    </Link>
  </Button>
</div>
</section> */
}
