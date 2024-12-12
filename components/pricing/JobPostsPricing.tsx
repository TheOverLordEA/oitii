import { Button } from "../ui/button";
import { CheckCircle, CheckCircle2 } from "lucide-react";

const JOB_POST_AMOUNT = {
  onePost: "Post 1 Job",
  tenPost: "Post 10 Jobs",
  custom: "Need 100+ Job Posts?",
};

export default function JobPostsPricing() {
  return (
    <div className="text-center bg-[#F5F5F7] rounded-[100px] p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Flexible Pricing Plans
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        Choose a plan that fits your hiring needs. No hidden fees, no long-term
        commitments.
      </p>
      <div className="grid md:grid-cols-3 gap-6 px-4">
        <div className="bg-white border text-black border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-2 shadow-md">
          <div className="mb-6 text-center">
            <h3 className="text-xl font-semibold mb-2">
              {JOB_POST_AMOUNT.onePost}{" "}
            </h3>
          </div>
          <div className="text-center mb-6">
            <span className="text-4xl font-bold">$10</span>
            <span className="text-sm block">Per Job Posting</span>
          </div>
          <Button
            variant="outline"
            className="w-full mb-6 bg-black text-white border-none hover:bg-blue-100"
          >
            Purchase Now
          </Button>
          <ul className="space-y-3 text-sm text-blue-950">
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 text-blue-700 h-4 w-4" /> 30-day
              listing
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 text-blue-700 h-4 w-4" /> Basic
              candidate matching
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 text-blue-700 h-4 w-4" /> Email
              support
            </li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="bg-white border border-gray-200 text-black rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-2 shadow-md ">
          <div className="mb-6 text-center">
            <h3 className="text-xl font-semibold  mb-2">
              {JOB_POST_AMOUNT.tenPost}
            </h3>{" "}
            {/* <p className="text-sm text-purple-800">Most Popular</p> */}
          </div>
          <div className="text-center mb-6">
            <span className="text-4xl font-bold ">$85</span>
            <span className="text-sm block">Per Job Posting</span>
          </div>
          <Button className="w-full mb-6 bg-black text-white border-none hover:bg-purple-900 ">
            Purchase Now
          </Button>
          <ul className="space-y-3 text-sm text-purple-950">
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 text-purple-700 h-4 w-4" /> 60-day
              listing
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 text-purple-700 h-4 w-4" /> Advanced
              candidate matching
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 text-purple-700 h-4 w-4" /> Priority
              support
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 text-purple-700 h-4 w-4" /> Featured
              listing
            </li>
          </ul>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white border border-green-200 rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-2 shadow-md">
          <div className="mb-6 text-center">
            <h3 className="text-xl font-semibold text-green-950 mb-2">
              {JOB_POST_AMOUNT.custom}
            </h3>
            {/* <p className="text-sm text-green-800">
              Custom Enterprise Solutions
            </p> */}
          </div>
          <div className="text-center mb-6">
            <span className="text-4xl font-bold text-green-900">Custom</span>
            <span className="text-sm text-blue-700 block">Per Job Posting</span>

            {/* <span className="text-sm text-green-700 block">
              Tailored Pricing for Your Needs
            </span> */}
          </div>
          <Button
            variant="outline"
            className="w-full mb-6 border-green-600 text-green-900 hover:bg-green-100"
          >
            Contact Us
          </Button>

          <ul className="space-y-3 text-sm text-green-950">
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 text-green-700 h-4 w-4" /> 90-day
              listing
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 text-green-700 h-4 w-4" />{" "}
              AI-powered matching
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 text-green-700 h-4 w-4" /> 24/7
              dedicated support
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 text-green-700 h-4 w-4" /> Branded
              company page
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
