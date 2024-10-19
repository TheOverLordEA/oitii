"use client";
import { useJobStore } from "@/components/store/useJobStore";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  //   CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import JobPostSkeleton from "@/components/skeleton/JobPostSkeleton";
import JobApplication from "../jobApplication/JobApplication";
import { DollarSign } from "lucide-react";

import { useState } from "react";

interface JobPostblockProps {
  user: string | null;
}

const JobPostBlock: React.FC<JobPostblockProps> = ({ user }) => {
  const jobStore = useJobStore((state) => state.selectedJob);
  const _hasHydrated = useJobStore((state) => state._hasHydrated);
  const [showJobApply, setShowJobApply] = useState(false);

  const router = useRouter();

  if (!_hasHydrated) {
    return <JobPostSkeleton />;
  }

  const handleSaveJob = () => {
    if (!user) {
      router.push("/login");
    } else {
      console.log("Show saved component");
    }
  };

  const handleJobApply = () => {
    if (!showJobApply) {
      setShowJobApply(true);
    } else {
      setShowJobApply(false);
    }
  };

  return (
    <>
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="flex flex-row justify-between items-start">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white text-xl font-bold">
              {jobStore?.logo}
            </div>
            <div>
              <h2 className="text-xl font-bold">{jobStore?.company}</h2>
              <p className="text-sm text-gray-500">
                Making sales simple using AI-assistants for membership-based
                businesses
              </p>
              <Badge
                variant="secondary"
                className="mt-1 bg-pink-100 text-pink-800"
              >
                <DollarSign className="w-3 h-3 mr-1" />
                Recently funded
              </Badge>
            </div>
          </div>
          <div className="space-x-2">
            <Button variant="outline" onClick={handleSaveJob}>
              Save
            </Button>
            <Button
              className="bg-black text-white hover:bg-gray-800"
              onClick={handleJobApply}
            >
              Apply Now
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="text-2xl font-bold mb-2">{jobStore?.title}</h3>
          <div className="text-sm text-gray-600 mb-4">
            $120k - $180k • 0.1% - 0.5% | Remote • Chicago <sup>+2</sup> | 3
            years of exp | Full Time
          </div>
          <div className="text-sm text-gray-500 mb-6">
            Posted: {jobStore?.postedDate} • Recruiter recently active
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-semibold mb-1">Job Location</h4>
              {jobStore?.location}
              <p>Remote • Chicago • New York City • San Francisco</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Visa Sponsorship</h4>
              <p>Not Available</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Remote Work Policy</h4>
              <p>Remote only</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Hires remotely in</h4>
              <p>Chicago - New York City - San Francisco</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Preferred Timezones</h4>
              <p>Eastern Time</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Relocation</h4>
              <p>
                Allowed <span className="text-gray-400">△</span>
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "Javascript",
                "SQL",
                "Node.js",
                "React.js",
                "LLMs",
              ].map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-purple-100 text-purple-800"
                >
                  {skill}
                </Badge>
              ))}
            </div>
            <Badge
              variant="secondary"
              className="mt-2 bg-purple-100 text-purple-800"
            >
              LLMs, Langchain, Llama-Index, Huggingface
            </Badge>
          </div>
        </CardContent>
      </Card>
      {showJobApply ? <JobApplication handleJobApply={handleJobApply} /> : ""}
    </>
  );
};

export default JobPostBlock;
