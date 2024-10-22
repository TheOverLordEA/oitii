"use client";
import Link from "next/link";
// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
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
  loginError: boolean;
  userLoggedIn: boolean;
  category: string;
}

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
  loginError,
  userLoggedIn,
  category,
}) => {
  const setSelectedJob = useJobStore((state) => state.setSelectedJob);
  const [showJobApply, setShowJobApply] = useState(false);

  const router = useRouter();

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

  const handleSaveJob = () => {
    if (!userLoggedIn || loginError) {
      console.log("user ! logged ");
      router.push("/login");
    } else {
      console.log("User Logged in");
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
    <li
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
        <Link href={`jobs/${category}/${id}`} onClick={handleJobClick}>
          <h2 className="font-semibold">{title}</h2>
          <p className="text-sm text-gray-600">
            {companyName} • {location} • {salary}
            {equity && ` • ${equity}`} • {postedDate}
          </p>
        </Link>
      </div>
      <div className="flex space-x-2 text-black">
        <Button variant="outline" onClick={handleSaveJob}>
          Save
        </Button>

        {/* TODO: Add a link href for job app  */}

        <Button className="bg-black" onClick={handleJobApply}>
          Apply
        </Button>
      </div>
      {showJobApply ? <JobApplication handleJobApply={handleJobApply} /> : ""}
    </li>
  );
};

export default JobSectionCard;
