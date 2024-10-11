import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BarChart, Users, Briefcase } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import HomePageHeader from "@/components/headers/HomePageHeader";
import TrendingJobs from "@/components/trendingJobs/TrendingJobs";
// import FloatingBackground from "@/components/floatingBackground/FloatingBackground";
import JobSectionHome from "@/components/job-sections/JobSectionHome";

export const metadata: Metadata = {
  title: "Oitii | Real Jobs, Real Opportunities",
  description: "...",
};

const BUTTON = {
  search: "Search",
};

const JOBSECTIONTITLES = {
  latestJobs: "Latest Jobs",
  engineeringJobs: "Engineering Jobs",
  marketingJobs: "Marketing Jobs",
  healthcareJobs: "Healthcare Jobs",
  financeJobs: "Finance Jobs",
};

export default function LandingPage() {
  return (
    <>
      <HomePageHeader />

      <main className="flex flex-col min-h-screen bg-white text-black">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-black">
                    Find Your Dream Tech Job
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                    Connect with top startups and tech companies. Your next
                    career move starts here.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
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
                </div>
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
                <h2 className="text-4xl font-bold text-black">
                  Find what's next<span className="text-red-500">:</span>
                </h2>
                <p className="text-gray-600 mt-2">
                  OVER 130K REMOTE & LOCAL STARTUP JOBS
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
            <TrendingJobs />
            {/* Latest Jobs */}
            <JobSectionHome jobTitle={JOBSECTIONTITLES.latestJobs} />
            <div>Latest jobs</div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">
                Why Choose Oitii
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
                    <h3 className="text-xl font-bold text-black">
                      {item.title}
                    </h3>
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
                    WellShop has helped countless developers, designers, and
                    tech professionals find their dream jobs. Start your journey
                    today and see where your career can take you.
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
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t border-gray-200 bg-white text-black">
          <p className="text-xs text-gray-600">
            © 2023 WellShop Inc. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4 text-gray-600"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4 text-gray-600"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </footer>
      </main>
    </>
  );
}
