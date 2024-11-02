import { CheckCheck, FileText, Goal } from "lucide-react";
import LoopingJobApplication from "../jobBoard/LoopingJobApplication";

export default function HowItWorks() {
  return (
    <div className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <LoopingJobApplication />
          <div>
            <h2 className="text-3xl font-extrabold mb-8">How it works</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <CheckCheck className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">
                    Job Posting & Verification
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Our team verifies each posting by confirming the company's
                    existence, validating the position's availability, and
                    ensuring all details are accurate.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                    <FileText className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Find & Apply</h3>
                  <p className="mt-2 text-gray-600">
                    Apply using the employer's preferred method:{" "}
                    <span className="text-black font-bold">Oitii Apply</span>,{" "}
                    <span className="text-black font-bold">
                      company website
                    </span>
                    , <span className="text-black font-bold">email</span>, or{" "}
                    <span className="text-black font-bold">phone number</span>.
                    Choose the option that suits you best!
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-600">
                    <Goal className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">
                    Your Journey Continues — Response Ahead!
                  </h3>
                  <p className="mt-2 text-gray-600">
                    We guarantee a response to all applications—no ghosting
                    allowed. This ensures accountability and gives job seekers
                    peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
