import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
        <div>
          <h2 className="font-semibold">{title}</h2>
          <p className="text-sm text-gray-600">
            {companyName} • {location} • {salary}
            {equity && ` • ${equity}`} • {postedDate}
          </p>
        </div>
      </div>
      <div className="flex space-x-2">
        <Button variant="outline">Save</Button>

        {/* TODO: Add a link href for job app  */}

        <Link href="/">
          <Button variant={index === 3 ? "default" : "secondary"}>Apply</Button>
        </Link>
      </div>
    </div>
  );
};

export default JobSectionCard;
