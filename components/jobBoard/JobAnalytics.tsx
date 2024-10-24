"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const analyticsData = [
  { name: "Mon", views: 120, applications: 15 },
  { name: "Tue", views: 150, applications: 20 },
  { name: "Wed", views: 180, applications: 25 },
  { name: "Thu", views: 190, applications: 30 },
  { name: "Fri", views: 160, applications: 22 },
  { name: "Sat", views: 100, applications: 10 },
  { name: "Sun", views: 80, applications: 5 },
];

export default function JobAnalytics() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
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
        </div>
        <div className="lg:w-1/2">
          <Card>
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
        </div>
      </div>
    </div>
  );
}
