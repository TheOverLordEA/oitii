import { Suspense } from "react";
import TrendingJobs from "@/components/trendingJobs/TrendingJobs";
import JobSectionHome from "../job-sections/JobSectionBlock";
import { Button } from "../ui/button";
import Link from "next/link";
import { Josefin_Sans } from "next/font/google";

import { Search, BarChart, Users, Briefcase } from "lucide-react";

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

const JOBSECTIONTITLES = {
  latestJobs: "Latest Jobs",
  engineeringJobs: "Engineering Jobs",
  marketingJobs: "Marketing Jobs",
  healthcareJobs: "Healthcare Jobs",
  financeJobs: "Finance Jobs",
};

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Main() {
  return (
    <>
      {/* Center Text Section */}
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
        {/* Trending jobs */}
        {/* TODO: Add skeleton ui for Suspense components */}
        <Suspense fallback={<span>Loading.....</span>}>
          <TrendingJobs />
        </Suspense>
        {/* Latest Jobs */}
        <Suspense fallback={<span>Loading.....</span>}>
          <JobSectionHome jobTitle={JOBSECTIONTITLES.latestJobs} jobs={jobs} />
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
        <div className="flex justify-center">
          <Button className="bg-black text-white rounded-none ">
            <Link href="/jobs" className="text-xl">
              View All jobs
            </Link>
          </Button>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">
            Why Choose{" "}
            <span
              className={`tracking-wider font-bold text-black ${josefin_sans.className}`}
            >
              Oitii
            </span>
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 items-start">
            {[
              {
                icon: Search,
                title: "Smart Job Matching",
                description:
                  "Our AI-powered algorithm finds the perfect job matches for you.",
              },
              {
                icon: BarChart,
                title: "Salary Insights",
                description:
                  "Get detailed salary information for informed decisions.",
              },
              {
                icon: Users,
                title: "Direct Connections",
                description:
                  "Connect directly with hiring managers and founders.",
              },
              {
                icon: Briefcase,
                title: "Curated Opportunities",
                description:
                  "Access exclusive job listings from top tech companies.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 border border-gray-200 p-4 rounded-lg"
              >
                <item.icon className="h-8 w-8 text-green-600" />
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                <p className="text-sm text-gray-600 text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 md:gap-16 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                Join Thousands of Tech Professionals
              </h2>
              <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                WellShop has helped countless developers, designers, and tech
                professionals find their dream jobs. Start your journey today
                and see where your career can take you.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Testimonial
              </div>
              <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl text-black">
                "Thanks to WellShop, I found an amazing opportunity at a
                cutting-edge startup. The process was smooth, and I felt
                supported every step of the way."
              </blockquote>
              <p className="text-sm text-gray-600">
                - Sarah L., Full Stack Developer
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
