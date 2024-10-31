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
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 h-full">
            <div className="p-6 border-b border-gray-100">
              <span className="inline-block px-4 py-1 bg-[#edfce7] text-[#2d9c3f] font-semibold rounded-full text-sm">
                AFFORDABLE JOB POSTING
              </span>
              <div className="flex items-baseline gap-2 mt-4">
                <h1 className="text-4xl font-bold text-gray-900">$10</h1>
                <span className="text-gray-600">per post</span>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl">
                <p className="text-lg font-semibold text-blue-700">
                  One-time payment of just $10 <br /> No costly per-click fees
                  or $100+ for a single post. <br />
                  Pay $10 for your job listing, and it's live instantly.
                </p>
              </div>

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

              <div className="bg-[#edfce7] p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5 text-[#33be49]" />
                  <span className="font-semibold text-[#2d9c3f]">
                    Best Value Guarantee
                  </span>
                </div>
                <p className="text-[#2d9c3f] text-sm">
                  Get maximum exposure for your job posting at the most
                  competitive price in the market
                </p>
              </div>

              <div className="pt-4">
                <button className="w-full bg-[#2d9c3f] hover:bg-[#38c84e] text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center group">
                  Post your job now
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 h-full">
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

            <div className="flex border-b border-gray-100">
              {[
                { id: "overview", label: "Overview", icon: TrendingUp },
                { id: "jobs", label: "Jobs", icon: Briefcase },
                { id: "team", label: "Team", icon: Users },
                // { id: "about", label: "About", icon: Info },
              ].map((tab) => (
                <button
                  key={tab.id}
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

            <div className="p-6">
              <div>
                <h3 className="text-lg font-semibold mb-6 text-gray-900">
                  Job Post Analytics
                </h3>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <ResponsiveContainer width="100%" height={400}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
