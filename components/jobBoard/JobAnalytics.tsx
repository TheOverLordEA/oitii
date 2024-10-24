"use client";

import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  ArrowRight,
  Check,
  Sparkles,
  Building2,
  Users,
  Briefcase,
  Info,
  TrendingUp,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// const analyticsData = [
//   { name: "Mon", views: 120, applications: 15 },
//   { name: "Tue", views: 150, applications: 20 },
//   { name: "Wed", views: 180, applications: 25 },
//   { name: "Thu", views: 190, applications: 30 },
//   { name: "Fri", views: 160, applications: 22 },
//   { name: "Sat", views: 100, applications: 10 },
//   { name: "Sun", views: 80, applications: 5 },
// ];

// Sample data for the chart
const analyticsData = [
  { name: "Jan", views: 400, applications: 240 },
  { name: "Feb", views: 300, applications: 139 },
  { name: "Mar", views: 500, applications: 221 },
  { name: "Apr", views: 280, applications: 180 },
  { name: "May", views: 590, applications: 290 },
  { name: "Jun", views: 350, applications: 198 },
];

const jobs = [
  { title: "Software Engineer", status: "Active", applicants: 45 },
  { title: "Product Manager", status: "Active", applicants: 32 },
  { title: "UX Designer", status: "New", applicants: 12 },
];

export default function JobAnalytics() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <div className=" bg-white rounded-2xl shadow-lg border border-gray-100">
            {/* Header Section - Matching padding with analytics component */}
            <div className="p-6 border-b border-gray-100">
              <span className="inline-block px-4 py-1 bg-pink-100 text-pink-600 font-semibold rounded-full text-sm">
                AFFORDABLE JOB POSTING
              </span>

              {/* Price Tag - Adjusted spacing */}
              <div className="flex items-baseline gap-2 mt-4">
                <h1 className="text-4xl font-bold text-gray-900">$10</h1>
                <span className="text-gray-600">per post</span>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Value Proposition */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl">
                <p className="text-lg font-semibold text-blue-700">
                  One-time payment of just $10! No costly per-click fees or
                  $100+ for a single post. Pay $10 for your job listing, and
                  it's live instantly.
                </p>
              </div>

              {/* Features List - Adjusted spacing */}
              <div className="space-y-3">
                {[
                  "Flat $10 fee per job posting",
                  "No hidden costs or per-click charges",
                  "Unlimited visibility—your post stays up until filled",
                  "Analytics available at no extra cost!",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Highlight Box */}
              <div className="bg-pink-50 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5 text-pink-500" />
                  <span className="font-semibold text-pink-700">
                    Best Value Guarantee
                  </span>
                </div>
                <p className="text-pink-600 text-sm">
                  Get maximum exposure for your job posting at the most
                  competitive price in the market
                </p>
              </div>

              {/* CTA Button - Positioned at bottom */}
              <div className="pt-4">
                <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center group">
                  Post your job now
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="lg:w-1/2">
          <h2 className="text-pink-600 font-semibold mb-2">
            AFFORDABLE JOB POSTING
          </h2>
          <h1 className="text-4xl font-bold mb-4">Post a job for just $10</h1>
          <p className="text-lg mb-6 font-bold text-blue-600">
            One-time payment of just $10! No costly per-click fees or $100+ for
            a single post. Pay $10 for your job listing, and it’s live
            instantly.
          </p>

          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Flat $10 fee per job posting</li>
            <li>No hidden costs or per-click charges</li>
            <li>
              Enjoy unlimited visibility—your post stays up until you fill the
              position!
            </li>
            <li>Analytics available at no extra cost!</li>
          </ul>
          <Button className="bg-pink-600 hover:bg-pink-700 text-white">
            Post your job now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Button>
        </div> */}

        <div className="lg:w-1/2">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Company Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-sm">
                  A
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Acme Inc</h2>
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    Technology Solutions
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-gray-100">
              {[
                { id: "overview", label: "Overview", icon: TrendingUp },
                { id: "jobs", label: "Jobs", icon: Briefcase },
                { id: "team", label: "Team", icon: Users },
                { id: "about", label: "About", icon: Info },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors
                ${
                  activeTab === tab.id
                    ? "text-slate-900 border-b-2 border-slate-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-6 space-y-8">
              {/* Analytics Chart */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  Job Post Analytics
                </h3>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={analyticsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="name" stroke="#6b7280" />
                      <YAxis
                        yAxisId="left"
                        orientation="left"
                        stroke="#64748b"
                      />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#64748b"
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#fff",
                          border: "1px solid #e5e7eb",
                          borderRadius: "6px",
                        }}
                      />
                      <Bar
                        yAxisId="left"
                        dataKey="views"
                        fill="#94a3b8"
                        radius={[4, 4, 0, 0]}
                        name="Views"
                      />
                      <Bar
                        yAxisId="right"
                        dataKey="applications"
                        fill="#cbd5e1"
                        radius={[4, 4, 0, 0]}
                        name="Applications"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Recent Job Postings */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  Recent Job Postings
                </h3>
                <div className="space-y-3">
                  {jobs.map((job, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {job.title}
                        </h4>
                        <div className="flex items-center gap-3 mt-1">
                          <span
                            className={`text-xs px-2 py-1 rounded-full font-medium
                        ${
                          job.status === "New"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                          >
                            {job.status}
                          </span>
                          <span className="text-sm text-gray-500">
                            {job.applicants} applicants
                          </span>
                        </div>
                      </div>
                      <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="lg:w-1/2">
          <Card className="shadow-lg border border-gray-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div>
                  <h2 className="text-xl font-bold">Acme Inc</h2>
                  <p className="text-sm text-gray-500">Technology Solutions</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-6">
                <Button variant="ghost">Overview</Button>
                <Button variant="ghost">Jobs</Button>
                <Button variant="ghost">Team</Button>
                <Button variant="ghost">About</Button>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Job Post Analytics
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={analyticsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                      <XAxis dataKey="name" stroke="#555" />
                      <YAxis
                        yAxisId="left"
                        orientation="left"
                        stroke="#007bff" // A calming blue for the left Y-axis
                      />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#28a745" // A refreshing green for the right Y-axis
                      />
                      <Tooltip />
                      <Bar
                        yAxisId="left"
                        dataKey="views"
                        fill="#007bff" // Matching the left Y-axis color
                        name="Views"
                      />
                      <Bar
                        yAxisId="right"
                        dataKey="applications"
                        fill="#28a745" // Matching the right Y-axis color
                        name="Applications"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Recent Job Postings
                  </h3>
                  {["Software Engineer", "Product Manager", "UX Designer"].map(
                    (job, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center mb-2"
                      >
                        <span>{job}</span>
                        <Button size="sm">View Details</Button>
                      </div>
                    )
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </div>
  );
}
