import Image from "next/image";
import type { Metadata } from "next";

import Link from "next/link";
import { Target, Shield, CreditCard, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Oitii | About",
  description:
    "Discover Oitii, the platform that verifies job postings, ensuring genuine opportunities for employers and candidates alike. Affordable solutions for hiring.",
};
// TODO: Change href of Link Discover Oitii, the platform that verifies job postings, ensuring genuine opportunities for employers and candidates alike. Affordable solutions for hiring.vision to job post

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl text-black">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 md:mb-20">
        About Oitii
      </h1>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="relative max-h-72 md:max-h-auto">
          <div className="aspect-square rounded-full overflow-hidden bg-muted">
            <Image
              src="https://cdn.pixabay.com/photo/2022/08/31/18/11/teamwork-7423957_1280.png"
              alt="Team collaboration"
              width={600}
              height={600}
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            We're Ending Ghost Jobs Forever
          </h2>
          <p className="text-lg text-muted-foreground text-gray-600">
            Oitii is a platform that verifies every single job posting, ensuring
            job seekers never waste time on fake listings. We're transforming
            the job search experience by verifying every opportunity is
            <span className="text-black font-bold text-lg">
              {" "}
              Real and Active.
            </span>
          </p>
          <p className="text-lg text-muted-foreground text-gray-600">
            Through our rigorous verification process, we connect genuine
            employers with qualified candidates. Our platform eliminates the
            frustration of ghost jobs by maintaining strict verification
            standards and regular updates on all listings.
          </p>
          <p className="text-lg text-muted-foreground text-gray-600">
            We're committed to transparency in the job market, making sure every
            application counts and every opportunity is genuine.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Quality Hiring Shouldn't Break the Bank
          </h2>

          <p className="text-lg text-muted-foreground text-gray-600">
            Oitii makes job posting accessible to businesses of all sizes. We
            believe that finding great talent shouldn't be a luxury - it's a
            necessity for every growing company.
          </p>

          <p className="text-lg text-muted-foreground text-gray-600">
            With our{" "}
            <span className="text-lg font-bold text-black">
              Straightforward pricing with No hidden fees,{" "}
            </span>
            <span className="text-black font-bold text-lg">
              {" "}
              No pay-per-click,
            </span>{" "}
            <span className="text-black text-lg font-bold">
              No listing costs more than $100 - affordable hiring made easy.{" "}
            </span>{" "}
            You get premium features at a fraction of traditional job board
            costs. Each posting includes AI-powered candidate matching,
            unlimited applications, and detailed analytics.
          </p>

          <p className="text-lg text-muted-foreground text-gray-600">
            Say goodbye to complex pricing tiers and expensive recruiting
            services. Our platform delivers enterprise-level hiring tools at
            prices that work for startups and small businesses.
          </p>

          {/* Pricing highlights box */}
          {/* <div className="bg-muted rounded-lg p-6 space-y-3">
            <h3 className="font-semibold text-lg">Every posting includes:</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> 30-day visibility
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> AI candidate matching
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Analytics dashboard
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Unlimited applications
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Email support
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Social sharing
              </li>
            </ul>
          </div> */}
        </div>
        <div className="relative">
          <div className="rounded-xl overflow-hidden bg-muted">
            <Image
              src="https://cdn.pixabay.com/photo/2020/01/21/17/17/hr-process-4783430_1280.png"
              alt="Cost-effective hiring"
              width={600}
              height={600}
              className="object-cover"
            />
          </div>
          {/* Price tag decoration */}
          {/* <div className="absolute -bottom-4 -right-4 bg-green-500 text-white rounded-full w-24 h-24 flex items-center justify-center">
            <div className="text-center">
              <div className="text-xl font-bold">$49</div>
              <div className="text-xs">per post</div>
            </div>
          </div> */}
        </div>
      </div>
      {/* 
      <div className="bg-muted rounded-2xl p-8 mb-20 bg-yellow-200">
        <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
        <div className="flex flex-col gap-8">
          <p className="text-lg md:max-w-[80%]">
            Our goal is to provide a platform where job seekers can explore and
            trust the opportunities they see, and every employer can find their
            perfect match without the noise and inefficiency of traditional
            platforms.
          </p>
          <p className="text-lg md:max-w-[80%]">
            We aim to be the most trusted platform for job opportunities,
            providing real—no ghost jobs, just genuine opportunities. Offering
            affordable pricing for businesses of all sizes while staying
            committed to transparency and authenticity.
          </p>
        </div>
      </div> */}

      <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-3xl p-5 md:p-12 mb-20 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Target className="h-8 w-8 text-yellow-700" />
            <h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
          </div>

          <div className="space-y-12">
            <p className="text-xl md:text-2xl font-medium text-yellow-900 md:max-w-[90%] leading-relaxed">
              Our goal is to revolutionize the job search experience by creating
              a platform without the noise and inefficiency of traditional
              platforms.
            </p>
            <p className="text-xl md:text-2xl font-medium text-yellow-900 md:max-w-[90%] leading-relaxed">
              Built on trust, affordability, and genuine opportunities
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="bg-white/60 rounded-2xl p-4 w-12 h-12 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-yellow-700" />
                </div>
                <h3 className="text-lg font-semibold">Trust First</h3>
                <p className="text-gray-700">
                  Every job posting is verified and active, no ghost jobs just
                  genuine opportunities.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white/60 rounded-2xl p-4 w-12 h-12 flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-yellow-700" />
                </div>
                <h3 className="text-lg font-semibold">Affordable Access</h3>
                <p className="text-gray-700">
                  Premium job posting features at prices that work for
                  businesses of all sizes, from startups to enterprises.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white/60 rounded-2xl p-4 w-12 h-12 flex items-center justify-center">
                  <Users className="h-6 w-6 text-yellow-700" />
                </div>
                <h3 className="text-lg font-semibold">Perfect Matches</h3>
                <p className="text-gray-700">
                  Smart matching technology connects the right talent with the
                  right opportunities, reducing noise and inefficiency.
                </p>
              </div>
            </div>

            <div className="bg-white/40 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-6 flex-wrap">
                <p className="text-lg font-medium text-yellow-900">
                  Join us in creating a more transparent and efficient job
                  market
                </p>
                <Link
                  href="/"
                  title="Get Started"
                  className="px-6 py-3 bg-yellow-700 text-white rounded-xl hover:bg-yellow-800 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
