import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle, Star } from "lucide-react";

export default function JobBoard() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-5 space-y-8">
        <div className="flex-1 flex justify-center flex-col items-baseline">
          <h2 className="text-[#FF6347] font-semibold mb-4 uppercase">
            Real Jobs, Verified Listings — No Ghost Jobs Here!
          </h2>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 relative">
            <span className="block text-gray-900 leading-tighter">
              Real jobs,
            </span>
            <span className="block text-[#FF6347] leading-tighter">
              No Ghost jobs!
            </span>
          </h2>
          <div className="flex flex-col gap-5">
            <div className="bg-gradient-to-r from-white to-orange-50 p-8 rounded-xl border border-orange-100 hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="w-8 h-8 text-orange-600 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-2xl text-gray-900">
                  No Ghost Jobs
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed ml-12">
                {/* We actively eliminate fake and outdated job postings to protect
                your time */}
                Only verified, up-to-date job postings.
              </p>
            </div>

            <div className="bg-gradient-to-r from-white to-blue-50 p-8 rounded-xl border border-blue-100 hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-2xl text-gray-900">
                  Verified Companies
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed ml-12">
                We ensure every opportunity is real by thoroughly vetting
                employers.
              </p>
            </div>

            <div className="bg-gradient-to-r from-white to-purple-50 p-8 rounded-xl border border-purple-100 hover:shadow-xl transition-all group ">
              <div className="flex items-center gap-4 mb-4">
                <Star className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-2xl text-gray-900">
                  Trusted Listings
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed ml-12">
                Every job on Oitii is posted directly by the company and
                reviewed by us, so you know it's the real deal.
              </p>
            </div>

            <Link href="/jobs" className="pt-5">
              <button className="group relative w-full md:w-auto overflow-hidden bg-black  px-10 hover:bg-gray-800 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 group-hover:scale-150 transition-transform duration-500 rounded-xl" />
                <div className="relative flex items-center justify-center gap-3 text-white">
                  <span className="text-xl font-bold tracking-wide">
                    View Available Jobs
                  </span>
                  <div className="p-2 rounded-lg group-hover:translate-x-1 transition-transform">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col flex-1 bg-gray-100 p-5 rounded-lg gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded mr-3"></div>
                <div>
                  <h3 className="text-lg font-semibold">Acme Tech</h3>
                  <p className="text-sm text-gray-500">Exceptional AI</p>
                </div>
              </CardTitle>
              <p className="text-sm text-gray-500">100-150 EMPLOYEES</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[1, 2, 3].map((job) => (
                  <li key={job} className="flex justify-between items-center">
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    <Button variant="outline" size="sm">
                      Apply
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="w-10 h-10 bg-red-500 rounded mr-3"></div>
                <div>
                  <h3 className="text-lg font-semibold">Infinity Beyond</h3>
                  <p className="text-sm text-gray-500">We design space suits</p>
                </div>
              </CardTitle>
              <p className="text-sm text-gray-500">1000-1500 EMPLOYEES</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[1, 2].map((job) => (
                  <li key={job} className="flex justify-between items-center">
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    <Button variant="outline" size="sm">
                      Apply
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
