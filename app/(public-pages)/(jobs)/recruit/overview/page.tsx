import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-pink-600 font-semibold mb-4">JOB LISTINGS</h2>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            A job board built for the startup world
          </h1>
          <p className="text-gray-600 mb-6">
            Post an infinite amount of jobs (for free) and instantly reach the
            most responsive, startup-ready community looking for their next
            great opportunity.
          </p>
          <div className="flex space-x-4">
            <Button className="bg-black text-white hover:bg-gray-800">
              Post a job
            </Button>
            <Button variant="outline">Request a demo</Button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="relative bg-gray-200 rounded-lg aspect-video">
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="w-16 h-16 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Companies Section */}
      <div className="mb-16">
        <p className="text-center text-gray-600 mb-8">
          More than 25K companies have used Wellfound to build their team
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[
            "Adonis",
            "Consensys",
            "Cruise",
            "DoorDash",
            "Roblox",
            "Honey",
            "Peloton",
            "IFTTT",
            "Postmates",
            "Plaid",
            "Airtable",
            "NerdWallet",
          ].map((company) => (
            <div key={company} className="flex items-center justify-center">
              <div className="text-gray-400 font-semibold">{company}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Get Posting Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-pink-600 font-semibold mb-4">
            HIGH EXPOSURE, GREAT CONNECTION
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Get posting, get visibility, get ready to hire
          </h3>
          <p className="text-gray-600 mb-6">
            Job Listings are visible where job-seekers spend their time:
            Wellfound's job search, candidate emails, and our newsletter. Your
            Job Listing typically gets thousands of views per week; if you need
            more exposure, promote your job with a few clicks and gain
            visibility on a larger scale.
          </p>
          <Button className="text-pink-600 hover:text-pink-700">
            Post a job for free <span className="ml-2">→</span>
          </Button>
        </div>
        <div className="lg:w-1/2 space-y-4">
          {["Airtable", "Cruise"].map((company) => (
            <div key={company} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                <div className="font-semibold">{company}</div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
