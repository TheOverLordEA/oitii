"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  User,
  Rocket,
  Building2,
  Bell,
  Linkedin,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
// import { Josefin_Sans } from "next/font/google";

// const josefin_sans = Josefin_Sans({
//   subsets: ["latin"],
//   display: "swap",
// });

export default function ComingSoonHome() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission logic here
  };
  return (
    <div className="min-h-[600px] bg-gradient-to-br from-slate-50 via-white to-blue-50 shadow-xl rounded-xl p-6 md:p-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20 -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 rounded-full filter blur-3xl opacity-20 -ml-32 -mb-32" />

      {/* Main content */}
      <div className="relative flex-grow flex flex-col justify-center items-center text-center mt-8 md:mt-12">
        <div className="w-full max-w-3xl">
          {/* Header Section */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <Rocket className="w-8 h-8 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1 rounded-full">
                Launching Next Week
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Our platform features are being rolled out progressively.
            </h2>

            <p className="text-xl md:text-2xl font-medium text-slate-700 mb-4 max-w-2xl mx-auto">
              Subscribe to our newsletter and follow us on social media to stay
              in the loop with the latest updates!
            </p>
          </div>

          {/* Enhanced Tabs Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <Tabs defaultValue="jobseeker" className="w-full max-w-xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-100 rounded-lg">
                <TabsTrigger
                  value="jobseeker"
                  className="flex items-center justify-center space-x-2 py-1 data-[state=active]:bg-white data-[state=active]:text-blue-700"
                >
                  <User className="w-4 h-4" />
                  <span>Professionals</span>
                </TabsTrigger>
                <TabsTrigger
                  value="employer"
                  className="flex items-center justify-center space-x-2 py-1 data-[state=active]:bg-white data-[state=active]:text-blue-700"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Enterprise</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="jobseeker">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Apply to real jobs not Ghost jobs
                    </h3>
                    {/* <p className="text-slate-600">
                      Access exclusive opportunities and industry insights
                    </p> */}
                    <div className="flex items-center justify-center space-x-2">
                      <Bell className="w-4 h-4 text-blue-500" />
                      <span>Get notified when new features launch</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-3">
                      <Input
                        type="email"
                        placeholder="Enter your business email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-grow bg-slate-50 border-slate-200"
                      />
                      <Button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
                      >
                        {/* <Sparkles className="mr-2 h-4 w-4" /> */}
                        Subscribe Now
                      </Button>
                    </div>
                  </form>
                </div>
              </TabsContent>

              <TabsContent value="employer">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Discover Top Talent at Unbeatable Value
                    </h3>
                    <div className="flex items-center justify-center space-x-2">
                      <Bell className="w-4 h-4 text-blue-500" />
                      <span>Get notified when new features launch</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-3">
                      <Input
                        type="email"
                        placeholder="Enter your corporate email"
                        className="flex-grow bg-slate-50 border-slate-200"
                      />
                      <Button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
                      >
                        Subscribe Now
                      </Button>
                    </div>
                  </form>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {submitted && (
            <Alert className="mt-6 bg-green-50 border-green-100 text-green-800">
              <AlertDescription className="flex items-center justify-center">
                <Sparkles className="mr-2 h-4 w-4" />
                Thank you! We'll be in touch with exclusive access details
                shortly.
              </AlertDescription>
            </Alert>
          )}

          {/* New Features Availability Section */}
          <div className="mt-12 space-y-6">
            {/* Social Media Section */}
            <div className="flex flex-col items-center space-y-3">
              <p className="text-slate-600">
                Stay updated with our latest announcements
              </p>
              <Button
                variant="outline"
                className="bg-white hover:bg-slate-50 text-slate-800 border-slate-200 flex items-center space-x-2"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/oitii/",
                    "_blank"
                  )
                }
              >
                <Linkedin className="w-5 h-5 text-blue-600" />
                <span>Follow us on LinkedIn</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
