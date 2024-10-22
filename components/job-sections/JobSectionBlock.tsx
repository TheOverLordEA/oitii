import JobSectionCard from "../JobPostsCards/JobSectionCard";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  salary: string;
  equity?: string;
  postedDate: string;
  category: string;

  // userLoggedIn: boolean
}

interface JobSectionsProp {
  jobTitle: string;
  jobs: Job[];
}

const JobSectionHome: React.FC<JobSectionsProp> = async ({
  jobTitle,
  jobs,
}) => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  const userLoggedIn = data.user?.email;

  const VIEW_ALL_JOBS_TITLE = jobTitle.split(" ")[0].toLowerCase();

  // console.log(VIEW_ALL_JOBS_TITLE);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{jobTitle}</h1>
        <Link
          href={`/jobs/${VIEW_ALL_JOBS_TITLE}`}
          className="text-gray-800 hover:underline"
        >
          View all jobs
        </Link>
      </div>
      <ul className="space-y-4">
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
            userLoggedIn={!!userLoggedIn}
            category={job.category}
            loginError={!!error}
          />
        ))}
      </ul>
    </div>
  );
};

export default JobSectionHome;
