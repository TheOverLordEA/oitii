import JobSectionCard from "../JobPostsCards/JobSectionCard";

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

interface JobSectionsProp {
  jobTitle: string;
  jobs: Job[];
}

const JobSectionHome: React.FC<JobSectionsProp> = ({ jobTitle, jobs }) => {
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
