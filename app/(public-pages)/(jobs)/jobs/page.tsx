// import AppShowcaseJobs from "@/components/appShowcase/AppShowCaseJobs";
import EmailNewsLetterSignUp from "@/components/emailNewsletter/EmailNewsLetterSignUp";
import HeroJobs from "@/components/hero/HeroJobs";
import FeaturedJobs from "@/components/trendingJobs/TrendingJobs";
// import { span } from "framer-motion/client";
import { Suspense } from "react";
import JobSectionHome from "@/components/job-sections/JobSectionBlock";
import Link from "next/link";

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
    category: "engineering",
  },
  {
    id: "5",
    title: "Continuity Clinician - Nurse Practioner",
    company: "Virta Health",
    logo: "/placeholder.svg?height=40&width=40",
    location: "United States",
    salary: "$104k - $120k",
    postedDate: "yesterday",
    category: "healtcare",
  },
];

const JOBSECTIONTITLES = {
  latestJobs: "Latest Jobs",
  engineeringJobs: "Engineering Jobs",
  marketingJobs: "Marketing Jobs",
  healthcareJobs: "Healthcare Jobs",
  financeJobs: "Finance Jobs",
};

const comingSoon = true;

const Page = () => {
  return (
    <>
      {comingSoon ? (
        <main className="min-h-screen w-full flex items-start md:items-center justify-center p-8">
          <div className="max-w-4xl w-full mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex flex-col gap-2 pt-0 md:pt-0">
              <div className="flex flex-col">
                <h2 className="text-2xl md:text-xl text-muted-foreground uppercase tracking-wide text-gray-800">
                  all features are
                </h2>
                <h1 className="text-8xl md:text-6xl font-bold py-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Coming Soon
                </h1>
              </div>
              <p className="text-2xl md:text-xl text-muted-foreground text-gray-800">
                Available next week.
              </p>
            </div>
          </div>
        </main>
      ) : (
        <>
          <HeroJobs />

          <section className="text-black mx-auto my-0 max-w-[80%] flex flex-col gap-5">
            <Suspense fallback={<span>Loading ...</span>}>
              <FeaturedJobs />
              <EmailNewsLetterSignUp />
              <div>
                <Suspense fallback={<span>Loading.....</span>}>
                  <JobSectionHome
                    jobTitle={JOBSECTIONTITLES.latestJobs}
                    jobs={jobs}
                  />
                </Suspense>
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
        </>
      )}
    </>
  );
};

export default Page;
