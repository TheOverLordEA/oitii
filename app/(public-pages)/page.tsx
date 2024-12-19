import React, { Suspense } from "react";
// import { Button } from "@/components/ui/button";
// import { Search, BarChart, Users, Briefcase } from "lucide-react";
// import Link from "next/link";
import type { Metadata } from "next";
// import TrendingJobs from "@/components/trendingJobs/TrendingJobs";
// import JobSectionHome from "@/components/job-sections/JobSectionBlock";
import { Josefin_Sans } from "next/font/google";
import JobBoard from "@/components/jobBoard/JobBoard";
import CompingSoonHome from "@/components/comingSoon/ComingSoonHome";
import HowItWorks from "@/components/howItWorks/HowItWorks";
import JobAnalytics from "@/components/jobBoard/JobAnalytics";
import { WithContext, WebPage } from "schema-dts";

// const josefin_sans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oitii | Real Jobs, Real Opportunities",
  description:
    "Oitii – Discover real, verified job listings with no ghost jobs. Save time and find genuine opportunities tailored to you. Start your career search confidently with Oitii.",
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

const jobs: Job[] = [
  {
    id: "1",
    title: "Founding AI Engineer",
    company: "Console",
    logo: "/placeholder.svg?height=40&width=40",
    location: "San Francisco",
    salary: "$185k - $250k",
    equity: "0.1% - 1.0%",
    postedDate: "yesterday",
    category: "engineering",
  },
  {
    id: "2",
    title: "Senior Compensation Business Partner",
    company: "Relativity Space",
    logo: "/placeholder.svg?height=40&width=40",
    location: "Long Beach",
    salary: "$132k - $169k",
    postedDate: "yesterday",
    category: "engineering",
  },
  {
    id: "3",
    title: "Sr Analyst, Marketing Analytics & Insights",
    company: "2U",
    logo: "/placeholder.svg?height=40&width=40",
    location: "Arlington",
    salary: "$80k - $89k",
    postedDate: "1 day ago",
    category: "finance",
  },
  {
    id: "4",
    title: "Staff Product Manager",
    company: "Cleric",
    logo: "/placeholder.svg?height=40&width=40",
    location: "San Francisco",
    salary: "$140k - $200k",
    equity: "0.5% - 1.5%",
    postedDate: "yesterday",
    category: "healthcare",
  },
  {
    id: "5",
    title: "Continuity Clinician - Nurse Practioner",
    company: "Virta Health",
    logo: "/placeholder.svg?height=40&width=40",
    location: "United States",
    salary: "$104k - $120k",
    postedDate: "yesterday",
    category: "healthcare",
  },
];

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
          <section className="w-full py-12 md:py-20 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-pink-100/20 to-purple-200/30 opacity-70" />

            <div className="relative container mx-auto px-4 md:px-6 z-10">
              <div className="flex flex-col items-center space-y-6 text-center max-w-4xl mx-auto">
                <div className="flex flex-col gap-6 md:gap-8 p-6 lg:p-10">
                  <div
                    className="uppercase text-center"
                    aria-label="Job search tagline"
                    role="text"
                  >
                    <p className="text-gray-700 text-base md:text-xl">
                      Apply to{" "}
                      <span
                        className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent font-bold"
                        aria-label="real jobs"
                      >
                        real jobs
                      </span>{" "}
                      not{" "}
                      <span
                        className="bg-gradient-to-r from-orange-500 to-rose-800 bg-clip-text text-transparent font-bold"
                        aria-label="ghost jobs"
                      >
                        ghost jobs
                      </span>
                    </p>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-center text-gray-900">
                    Find and Apply to <br className="block md:hidden" />
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Real Jobs
                    </span>{" "}
                    <br className="my-2 md:my-0" />
                    Authentic Careers
                  </h1>

                  <div>
                    <p
                      className="text-gray-600 text-base md:text-xl leading-relaxed text-center max-w-2xl mx-auto 
            tracking-wide"
                    >
                      Verified opportunities. Zero time wasted.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-white py-12 md:py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
              {/* Left Profile with Geometric Shapes */}
              <div className="hidden md:block relative w-48 h-48">
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-300 to-pink-300 opacity-40 rounded-full blur-xl"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-300 to-blue-300 opacity-40 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-1/2 w-16 h-16 bg-gradient-to-tr from-yellow-300 to-orange-300 opacity-40 rounded-full blur-xl transform -translate-x-1/2"></div>
                <div className="absolute bottom-0 left-1/2 w-16 h-16 bg-gradient-to-tr from-yellow-300 to-orange-300 opacity-40 rounded-full blur-xl transform -translate-x-1/2"></div>

                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-300 to-pink-300 opacity-30 rounded-lg blur-lg transform rotate-45"></div>
              </div>

              {/* Center Text Section */}
              <div className="text-center max-w-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Don't Waste Your Time on
                  <br className="block md:hidden" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {" "}
                    Fake Listings
                  </span>
                </h2>
                <p className="text-gray-600 text-base md:text-lg uppercase tracking-wide">
                  Discover Authentic Jobs with Accurate Descriptions
                </p>
              </div>

              {/* Right Profile with Geometric Shapes */}
              <div className="hidden md:block relative w-48 h-48">
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-300 to-pink-300 opacity-40 rounded-full blur-xl"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-300 to-blue-300 opacity-40 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-1/2 w-16 h-16 bg-gradient-to-tr from-yellow-300 to-orange-300 opacity-40 rounded-full blur-xl transform -translate-x-1/2"></div>
                <div className="absolute bottom-0 left-1/2 w-16 h-16 bg-gradient-to-tr from-yellow-300 to-orange-300 opacity-40 rounded-full blur-xl transform -translate-x-1/2"></div>

                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-300 to-pink-300 opacity-30 rounded-lg blur-lg transform rotate-45"></div>
              </div>
            </div>
          </section>

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
