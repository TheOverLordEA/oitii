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
                  <h3 className="md:text-xl text-2xl font-medium">
                    Job Posting & Verification
                  </h3>
                  <p className="mt-2 text-gray-600 text-lg">
                    Every job is checked for company legitimacy, position
                    availability, and accurate information.
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
                  <h3 className="md:text-xl text-2xl font-medium">
                    Find & Apply
                  </h3>
                  <p className="mt-2 text-gray-600 text-lg">
                    Apply using the employer's preferred method:{" "}
                    <span className="text-black font-bold">Oitii Apply</span> or{" "}
                    <span className="text-black font-bold">
                      Employer Website
                    </span>{" "}
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
                  <h3 className="md:text-xl text-2xl font-medium">
                    Your Journey Continues — Response Ahead!
                  </h3>
                  <p className="mt-2 text-gray-600 text-lg">
                    No ghosting. Guaranteed responses to all applications.
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
