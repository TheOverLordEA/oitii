import JobSectionCard from "../JobPostsCards/JobSectionCard";

interface JobSectionsProp {
  jobTitle: string;
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

const JobSectionHome: React.FC<JobSectionsProp> = ({ jobTitle }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{jobTitle}</h1>
        <a href="#" className="text-blue-600 hover:underline">
          View all jobs
        </a>
      </div>
      <div className="space-y-4">
        {jobs.map((job, index) => (
          <JobSectionCard
            id={job.id}
            logo={job.logo}
            companyName={job.company}
            index={index}
            title={job.title}
            location={job.location}
            salary={job.salary}
            equity={job.equity}
            postedDate={job.postedDate}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default JobSectionHome;
