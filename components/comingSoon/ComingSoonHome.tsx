"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Instagram, Dribbble, Sparkles, ArrowRight } from "lucide-react";
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
    <div className="min-h-[600px] bg-white shadow-lg rounded-lg p-4 md:p-8 relative overflow-hidden">
      {/* Top section */}
      {/* <div className="flex justify-between items-center">
        <div className="flex space-x-3">
          <span className="text-xl md:text-2xl font-bold">Be</span>
          <Instagram className="w-5 h-5 md:w-6 md:h-6 hover:text-blue-600 cursor-pointer" />
          <Dribbble className="w-5 h-5 md:w-6 md:h-6 hover:text-blue-600 cursor-pointer" />
        </div>
        <h1
          className={`text-2xl md:text-3xl font-bold tracking-wider text-black ${josefin_sans.className}`}
        >
          Oitii
        </h1>
        <div className="w-20" />
      </div> */}

      {/* Main content */}
      <div className="flex-grow flex flex-col justify-center items-center text-center mt-8 md:mt-12">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl w-full max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Platform Launch: Next Week
          </h2>

          <div className="max-w-xl mx-auto text-center space-y-4 px-4">
            <p className="text-lg md:text-xl font-semibold text-gray-800">
              Accelerate Your Business Growth with Our Enterprise Solutions
            </p>
            <p className="text-sm md:text-base text-gray-600">
              Our comprehensive platform delivers strategic value through
              innovative business solutions. Core features will be available
              next week, with additional enterprise capabilities rolling out
              continuously. Secure your early access for premium benefits.
            </p>

            {/* Tabs for different user types */}
            <div className="mt-6">
              <Tabs
                defaultValue="jobseeker"
                className="w-full max-w-md mx-auto"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="jobseeker">Professionals</TabsTrigger>
                  <TabsTrigger value="employer">Enterprise</TabsTrigger>
                </TabsList>

                <TabsContent value="jobseeker">
                  <form onSubmit={handleSubmit} className="space-y-3 mt-4">
                    <div className="flex flex-col md:flex-row gap-2">
                      <Input
                        type="email"
                        placeholder="Business email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-grow"
                      />
                      <Button
                        type="submit"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        <Sparkles className="mr-2 h-4 w-4" /> Priority Access
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500">
                      Unlock exclusive networking opportunities and market
                      insights
                    </p>
                  </form>
                </TabsContent>

                <TabsContent value="employer">
                  <form onSubmit={handleSubmit} className="space-y-3 mt-4">
                    <div className="flex flex-col md:flex-row gap-2">
                      <Input
                        type="email"
                        placeholder="Corporate email"
                        className="flex-grow"
                      />
                      <Button
                        type="submit"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        <ArrowRight className="mr-2 h-4 w-4" /> Schedule Demo
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500">
                      Access premium features and enterprise-grade solutions
                    </p>
                  </form>
                </TabsContent>
              </Tabs>
            </div>

            {submitted && (
              <Alert className="mt-4 bg-blue-50 border-blue-200">
                <AlertDescription className="text-blue-800">
                  Thank you for your interest. A member of our team will contact
                  you shortly.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
