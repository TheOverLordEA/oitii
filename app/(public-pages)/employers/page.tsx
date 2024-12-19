import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Stars } from "lucide-react";
import Link from "next/link"; // Add Link import
import { Metadata } from "next";

const comingSoon = true;

export const metadata: Metadata = {
  title: "Post Jobs & Hire Talent | Employer Solutions | Oitii",
  description:
    "Post jobs and hire top talent efficiently. Simple job posting, AI-powered candidate matching, and premium recruiting tools. Start hiring with Oitii's trusted recruiting platform.",
  keywords: [
    "post jobs",
    "hire talent",
    "job posting",
    "recruiting platform",
    "talent acquisition",
    "employer solutions",
    "hiring platform",
    "recruitment tools",
    "candidate matching",
    "tech recruiting",
  ],
  openGraph: {
    title: "Post Jobs & Hire Talent | Employer Solutions | Oitii",
    description:
      "Post jobs and hire top talent efficiently. Simple job posting, AI-powered candidate matching, and premium recruiting tools.",
    type: "website",
    url: "https://www.oitii.com/employers",
  },
};

export default function Page() {
  return (
    <div key="employer-page">
      {" "}
      {/* Add unique key */}
      {comingSoon ? (
        <div className="min-h-screen w-full flex items-start md:items-center justify-center p-8">
          <div className="max-w-4xl w-full mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex flex-col gap-2 pt-0 md:pt-0">
              <div className="flex flex-col">
                <h2 className="text-2xl md:text-xl text-muted-foreground uppercase tracking-wide text-gray-800">
                  all features are
                </h2>
                <h1 className="text-8xl md:text-6xl font-bold py-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Coming Soon
                </h1>
              </div>
              <p className="text-2xl md:text-xl text-muted-foreground text-gray-800">
                Available next week.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Stars className="h-4 w-4 mr-2" />
              <span className="text-xs font-medium">
                Game-Changing Recruitment Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Hiring with{" "}
              <span className="text-primary">Oitii</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Connect with top-tier talent effortlessly. Our intelligent
              platform matches your perfect candidates in minutes.
            </p>
            <div className="flex justify-center space-x-4">
              {/* Use Link for client-side navigation */}
              <Link href="/post-a-job">
                <Button size="lg" className="shadow-md">
                  Start Posting <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="shadow-sm">
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
