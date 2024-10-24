import { Upload, Search, Share2 } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-10 lg:mb-0">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Product interface"
              className="rounded-lg shadow-lg"
              width={600}
              height={400}
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold mb-8">How it works</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <Upload className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">
                    Job Posting & Verification
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Mica automatically takes in your sales call from your
                    existing recording/notetaking tools
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                    <Search className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">AI Analysis</h3>
                  <p className="mt-2 text-gray-600">
                    Our AI identifies key topics the prospect was interested in
                    such as product benefits, features, pricing etc
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-600">
                    <Share2 className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Share your Page</h3>
                  <p className="mt-2 text-gray-600">
                    Mica generates your personalized Deal Summary page that you
                    can easily share with your prospect
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
