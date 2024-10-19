"use client";
import Link from "next/link";
// import Image from "next/image";
import { Button } from "@/components/ui/button";
import JobApplication from "../jobApplication/JobApplication";
import { useState } from "react";
import { useJobStore } from "@/components/store/useJobStore"; // Import Zustand store

interface JobProps {
  id: string;
  logo: string;
  companyName: string;
  title: string;
  location: string;
  salary: string;
  equity?: string;
  postedDate: string;
  index: number;
}

interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  salary: string;
  equity?: string;
  postedDate: string;
}

const jobs: Job[] = [
  {
    id: "1",
    title: "Founding AI Engineer",
    company: "Console",
    logo: "/placeholder.svg?height=40&width=40",
    location: "San Francisco",
    salary: "$185k - $250k",
    equity: "0.1% - 1.0%",
    postedDate: "yesterday",
  },
  {
    id: "2",
    title: "Senior Compensation Business Partner",
    company: "Relativity Space",
    logo: "/placeholder.svg?height=40&width=40",
    location: "Long Beach",
    salary: "$132k - $169k",
    postedDate: "yesterday",
  },
  {
    id: "3",
    title: "Sr Analyst, Marketing Analytics & Insights",
    company: "2U",
    logo: "/placeholder.svg?height=40&width=40",
    location: "Arlington",
    salary: "$80k - $89k",
    postedDate: "1 day ago",
  },
  {
    id: "4",
    title: "Staff Product Manager",
    company: "Cleric",
    logo: "/placeholder.svg?height=40&width=40",
    location: "San Francisco",
    salary: "$140k - $200k",
    equity: "0.5% - 1.5%",
    postedDate: "yesterday",
  },
  {
    id: "5",
    title: "Continuity Clinician - Nurse Practioner",
    company: "Virta Health",
    logo: "/placeholder.svg?height=40&width=40",
    location: "United States",
    salary: "$104k - $120k",
    postedDate: "yesterday",
  },
];

const JobSectionCard: React.FC<JobProps> = ({
  id,
  index,
  logo,
  companyName,
  title,
  location,
  salary,
  equity,
  postedDate,
}) => {
  const setSelectedJob = useJobStore((state) => state.setSelectedJob);
  const [showJobApply, setShowJobApply] = useState(false);

  const handleJobClick = () => {
    setSelectedJob({
      id,
      title,
      company: companyName,
      logo,
      location,
      salary,
      equity,
      postedDate,
    });
  };

  const handleJobApply = () => {
    if (!showJobApply) {
      setShowJobApply(true);
    } else {
      setShowJobApply(false);
    }
  };

  return (
    <div
      key={id}
      className={`flex items-center justify-between p-4 rounded-lg ${
        index % 2 === 0 ? "bg-gray-50" : "bg-white"
      }`}
    >
      <div className="flex items-center space-x-4">
        <img
          src={logo}
          alt={`${companyName} logo`}
          className="w-10 h-10 rounded-full"
        />
        <Link href={`jobs/${id}`} onClick={handleJobClick}>
          <h2 className="font-semibold">{title}</h2>
          <p className="text-sm text-gray-600">
            {companyName} • {location} • {salary}
            {equity && ` • ${equity}`} • {postedDate}
          </p>
        </Link>
      </div>
      <div className="flex space-x-2">
        <Button variant="outline">Save</Button>

        {/* TODO: Add a link href for job app  */}

        <Button className="bg-black" onClick={handleJobApply}>
          Apply
        </Button>
      </div>
      {showJobApply ? <JobApplication handleJobApply={handleJobApply} /> : ""}
    </div>
  );
};

export default JobSectionCard;
