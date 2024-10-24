import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function JobBoard() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-5 space-y-8">
        <div className="flex-1 flex justify-center flex-col items-baseline">
          <h2 className="text-[#FF6347] font-semibold mb-4 uppercase">
            Real Jobs, Verified Listings — No Ghost Jobs Here!
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {/* High exposure, great connection */}
            Real opportunities, <br />
            avoid ghost jobs!
          </h1>
          <ul className="list-disc mb-8 max-w-3xl pl-5 text-gray-900 space-y-2">
            <li>
              <strong>Transparency in Hiring:</strong> Employers must be
              transparent about their hiring processes, including the use of
              third-party companies and Applicant Tracking Systems (ATS).
            </li>
            <li>
              <strong>Realistic Job Requirements:</strong> We require employers
              to have realistic job requirements.
            </li>
            <li>
              <strong>Salary Transparency:</strong> Employers must provide clear
              salary ranges.
            </li>
            <li>
              <strong>Applicant Communication:</strong> All applicants receive
              responses, ensuring no one is left in the dark.
            </li>
          </ul>
          {/* <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            All job listings are verified as genuine opportunities. We require
            employers to be transparent about their hiring processes, including
            the use of third-party companies and ATS. We ensure realistic job
            requirements and mandate that employers provide salary ranges and
            respond to all applicants, so no one is left in the dark.
          </p> */}
          <Button className="bg-[#FF6347] hover:bg-black transition-all ease-in-out duration-300 text-white">
            {/* Post a job for free */}
            View Jobs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Button>
        </div>

        <div className="flex flex-col flex-1 bg-gray-100 p-5 rounded-lg gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded mr-3"></div>
                <div>
                  <h3 className="text-lg font-semibold">Acme Tech</h3>
                  <p className="text-sm text-gray-500">AI at its finest</p>
                </div>
              </CardTitle>
              <p className="text-sm text-gray-500">100-150 EMPLOYEES</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[1, 2, 3].map((job) => (
                  <li key={job} className="flex justify-between items-center">
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    <Button variant="outline" size="sm">
                      Apply
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="w-10 h-10 bg-red-500 rounded mr-3"></div>
                <div>
                  <h3 className="text-lg font-semibold">Infinity Beyond</h3>
                  <p className="text-sm text-gray-500">We design space suits</p>
                </div>
              </CardTitle>
              <p className="text-sm text-gray-500">1000-1500 EMPLOYEES</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[1, 2].map((job) => (
                  <li key={job} className="flex justify-between items-center">
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    <Button variant="outline" size="sm">
                      Apply
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
