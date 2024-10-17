// import AppShowcaseJobs from "@/components/appShowcase/AppShowCaseJobs";
import EmailNewsLetterSignUp from "@/components/emailNewsletter/EmailNewsLetterSignUp";
import HeroJobs from "@/components/hero/HeroJobs";
import FeaturedJobs from "@/components/trendingJobs/TrendingJobs";
// import { span } from "framer-motion/client";
import { Suspense } from "react";
import JobSectionHome from "@/components/job-sections/JobSectionHome";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oitii | Find real jobs",
  description: "...",
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
  },
  {
    id: "2",
    title: "Senior Compensation Business Partner",
    company: "Relativity Space",
    logo: "/placeholder.svg?height=40&width=40",
    location: "Long Beach",
    salary: "$132k - $169k",
    postedDate: "yesterday",
  },
  {
    id: "3",
    title: "Sr Analyst, Marketing Analytics & Insights",
    company: "2U",
    logo: "/placeholder.svg?height=40&width=40",
    location: "Arlington",
    salary: "$80k - $89k",
    postedDate: "1 day ago",
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
  },
  {
    id: "5",
    title: "Continuity Clinician - Nurse Practioner",
    company: "Virta Health",
    logo: "/placeholder.svg?height=40&width=40",
    location: "United States",
    salary: "$104k - $120k",
    postedDate: "yesterday",
  },
];

const JOBSECTIONTITLES = {
  latestJobs: "Latest Jobs",
  engineeringJobs: "Engineering Jobs",
  marketingJobs: "Marketing Jobs",
  healthcareJobs: "Healthcare Jobs",
  financeJobs: "Finance Jobs",
};

const Page = () => {
  return (
    <>
      <HeroJobs />
      <section className="text-black">
        <Suspense fallback={<span>Loading ...</span>}>
          <FeaturedJobs />
          <EmailNewsLetterSignUp />
          <div>
            {/* Latest Jobs */}
            <Suspense fallback={<span>Loading.....</span>}>
              <JobSectionHome
                jobTitle={JOBSECTIONTITLES.latestJobs}
                jobs={jobs}
              />
            </Suspense>
            {/* Tech Jobs */}
            <Suspense fallback={<span>Loading.....</span>}>
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
          </div>
        </Suspense>
      </section>
      {/* <Suspense fallback={<span>Loading ......</span>}>
        <AppShowcaseJobs />
      </Suspense> */}
      {/* Developers section */}
      {/* <section className="py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            By developers, for developers
          </h2>
          <p className="text-gray-400 text-center mb-8">
            APIs, SDKs, and tools empower devs and partners to build the apps,
            themes, and custom storefronts businesses are looking for.
          </p>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 opacity-20 blur-3xl"></div>
            <div className="relative bg-gray-800 rounded-lg p-4 shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900 rounded p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="text-green-400 text-sm">
                    <code>{`
$ npm install @shopify/app
$ shopify app create
...
Your app is ready!
                    `}</code>
                  </pre>
                </div>
                <div className="bg-gray-900 rounded p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="text-blue-400 text-sm">
                    <code>{`
import { shopifyApi } from "@shopify/shopify-api";

const shopify = shopifyApi({
  // Your config here
});
                    `}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Page;
