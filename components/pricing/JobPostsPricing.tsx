import { Button } from "../ui/button";
import { CheckCircle, CheckCircle2 } from "lucide-react";

const JOB_POST_AMOUNT = {
  onePost: "1 Job Post",
  tenPost: "10 Job Posts",
  custom: "Need 100+ Job Posts?",
};

export default function JobPostsPricing() {
  return (
    <div className="text-center rounded-[100px] p-8 flex flex-col justify-center items-baseline md:items-center">
      {/* <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Flexible Pricing Plans
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        Choose a plan that fits your hiring needs. No hidden fees, no long-term
        commitments.
      </p> */}
      <div className="grid md:grid-cols-3 gap-6 px-4 w-full md:min-w-[70%] md:max-w-[70%]">
        <div className="flex flex-col justify-start bg-white border border-gray-200 text-black rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-2 shadow-md ">
          <div className="mb-6 text-left">
            <h3 className=" text-2xl font-bold mb-2">Basic</h3>
            <p>{JOB_POST_AMOUNT.onePost}</p>
          </div>
          <div className=" mb-6 flex gap-1">
            <span className="text-6xl font-bold">$10</span>
            <div className="flex flex-col justify-end items-start text-gray-600 text-base">
              <span className="uppercase">usd</span>
              <span>/per post</span>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full text-lg py-5 mb-6 bg-black text-white border-none hover:bg-gray-700 hover:text-white rounded-full"
          >
            Post a Job
          </Button>
          <ul className="space-y-3 text-sm text-blue-950">
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 text-blue-700 h-4 w-4" /> 30-day
              listing
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 text-blue-700 h-4 w-4" /> Free
              Automatic posting to job alerts
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 text-blue-700 h-4 w-4" />
              Smart Recruitment Tools
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 text-blue-700 h-4 w-4" /> Job post
              optimization assistance
            </li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="flex flex-col justify-start bg-white border border-gray-200 text-black rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-2 shadow-md ">
          <div className="mb-6 text-left">
            <h3 className=" text-2xl font-bold mb-2">Plus</h3>
            <p>{JOB_POST_AMOUNT.tenPost}</p>
          </div>
          <div className=" mb-6 flex gap-1">
            <span className="text-6xl font-bold">$85</span>
            <div className="flex flex-col justify-end items-start text-gray-600 text-base">
              <span className="uppercase">usd</span>
              <span>/10 posts</span>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full text-lg py-5 mb-6 bg-black text-white border-none hover:bg-gray-700 hover:text-white rounded-full"
          >
            Post a Job
          </Button>
          <ul className="space-y-3 text-sm text-blue-950">
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 text-blue-700 h-4 w-4" /> All Basic
              plan features included
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 text-blue-700 h-4 w-4" /> Post up to
              10 jobs simultaneously
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 text-blue-700 h-4 w-4" /> Perfect
              for growing teams
            </li>
            {/* <li className="flex items-center">
              <CheckCircle2 className="mr-2 text-purple-700 h-4 w-4" /> Featured
              listing
            </li> */}
          </ul>
        </div>

        {/* Custom Pricing component */}
        <div className="flex flex-col justify-start bg-white border border-gray-200 text-black rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-2 shadow-md ">
          <div className="mb-6 text-left">
            <h3 className=" text-2xl font-bold mb-2">Enterprise</h3>
            <p>{JOB_POST_AMOUNT.custom}</p>
          </div>
          <div className=" mb-6 flex gap-1">
            <span className="text-6xl font-bold">Custom</span>
            {/* <div className="flex flex-col justify-end items-start text-gray-600 text-base">
              <span className="uppercase">usd</span>
              <span>/10 posts</span>
            </div> */}
          </div>
          <Button
            variant="outline"
            className="w-full text-lg py-5 mb-6 bg-black text-white border-none hover:bg-gray-700 hover:text-white rounded-full"
          >
            Get in touch
          </Button>
          <ul className="space-y-3 text-sm text-blue-950">
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 text-blue-700 h-4 w-4" /> All Basic
              plan features included
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="mr-2 text-blue-700 h-4 w-4" />{" "}
              Volume-based discounts
            </li>

            <li className="flex items-center">
              <CheckCircle2 className="mr-2 text-blue-700 h-4 w-4" /> Great for
              high-volume hiring.
            </li>
            {/* <li className="flex items-center">
              <CheckCircle2 className="mr-2 text-purple-700 h-4 w-4" /> Featured
              listing
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
