import KeyBenefits from "@/components/keyBenefits/KeyBenefitsPostAJob";
import JobPostsPricing from "@/components/pricing/JobPostsPricing";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Stars } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-white">
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
            Connect with top-tier talent effortlessly. Our intelligent platform
            matches your perfect candidates in minutes.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="shadow-md">
              Start Posting <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="shadow-sm">
              Learn More <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <KeyBenefits />
        <JobPostsPricing />
      </div>
    </div>
  );
}
