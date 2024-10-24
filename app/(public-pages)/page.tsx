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

const josefin_sans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oitii | Real Jobs, Real Opportunities",
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

const earlyBuild = false;

export default function LandingPage() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-white text-black">
        <div className="flex-1">
          <section className="w-full py-12 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex flex-col gap-8">
                  <div className="uppercase">
                    <p className="text-black text-xl">
                      Apply to{" "}
                      <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent font-bold">
                        real jobs
                      </span>{" "}
                      not{" "}
                      <span className="bg-gradient-to-r from-orange-500 to-rose-800 bg-clip-text text-transparent font-bold">
                        ghost jobs
                      </span>
                    </p>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter pt-0 md:text-5xl lg:text-6xl/none text-black">
                    Find and apply to real jobs <br />
                    Authentic Careers
                  </h1>
                  <div>
                    <p className="uppercase text-black text-xl">
                      Verified opportunities. Zero time wasted. Your dream
                      career awaits.{" "}
                    </p>
                  </div>
                </div>
                {/* <div className="w-full max-w-sm space-y-2">
                  <form className="flex space-x-2">
                    <Input
                      className="flex-1"
                      placeholder="Search jobs..."
                      type="text"
                    />
                    <Button
                      className="bg-green-600 text-white hover:bg-green-700"
                      type="submit"
                    >
                      {BUTTON.search}
                    </Button>
                  </form>
                </div> */}
              </div>
            </div>
          </section>

          <section>
            <div className="flex flex-col md:flex-row justify-between items-center bg-white p-8 md:p-16">
              {/* Left Section with Profile and Shapes */}
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="relative">
                  {/* Profile Image */}
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Profile 1"
                    className="rounded-full w-20 h-20"
                  />
                  {/* Geometric Shapes */}
                  <div className="absolute -top-6 -left-6 w-20 h-20 bg-pink-400"></div>
                  <div className="absolute -top-6 left-10 w-20 h-20 bg-green-500"></div>
                  <div className="absolute top-6 left-6 w-10 h-10 bg-yellow-400"></div>
                  <div className="absolute top-10 left-16 w-10 h-10 bg-blue-600"></div>
                </div>
              </div>

              {/* Center Text Section */}
              <div className="text-center mt-8 md:mt-0">
                <h2 className="text-2xl font-bold text-black">
                  {/* Find what's next<span className="text-red-500">:</span> */}
                  Don't Waste Your Time on Fake Listings
                  <span className="text-green-500">:</span>
                </h2>
                <p className="text-gray-600 mt-2 uppercase">
                  Discover Authentic Jobs with Accurate Descriptions
                </p>
              </div>

              {/* Right Section with Profile and Shapes */}
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-8 md:mt-0">
                <div className="relative">
                  {/* Profile Image */}
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Profile 2"
                    className="rounded-full w-20 h-20"
                  />
                  {/* Geometric Shapes */}
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-500"></div>
                  <div className="absolute -top-6 right-10 w-20 h-20 bg-green-600"></div>
                  <div className="absolute top-6 right-6 w-10 h-10 bg-blue-600"></div>
                  <div className="absolute top-10 right-16 w-10 h-10 bg-orange-400"></div>
                </div>
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
