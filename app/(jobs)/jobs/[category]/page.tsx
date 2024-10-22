import { ReactHTMLElement, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { ChevronDown, MapPin, DollarSign, Clock } from "lucide-react";
import Loading from "./loading";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Metadata, ResolvingMetadata } from "next";
import { createClient as createServerClient } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/server";

import JobSectionCard from "@/components/JobPostsCards/JobSectionCard";

import { unstable_cache } from "next/cache";
import Link from "next/link";
import JobCategorySelect from "@/components/jobCategory/JobCategorySelect";

type Props = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// import { createClient } from "@/utils/supabase/server";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

const supabase = createServerClient(supabaseUrl, supabaseAnonKey);

// Constants for pagination
const ITEMS_PER_PAGE = 10;

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const category = (await params).category;

  const METADATACATEGORY = category.charAt(0).toUpperCase() + category.slice(1);

  console.log(category);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  // console.log(id);
  return {
    title: `Explore Exciting Opportunities in ${
      METADATACATEGORY || "the United States"
    } || Find Your Next Career Move`,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

// export const metadata: Metadata = {
//   title: "Oitii | Real Jobs, Real Opportunities",
//   description: "...",
// };

const revalidateSec = 3600;

// Modified to include pagination
const fetchPosts = async (category: string, page: number) => {
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE - 1;

  const [{ data: posts, error }, { count }] = await Promise.all([
    supabase
      .from("fake_jobs")
      .select("*")
      .eq("category", category)
      .range(start, end)
      .order("id", { ascending: true }),
    supabase
      .from("fake_jobs")
      .select("*", { count: "exact", head: true })
      .eq("category", category),
  ]);

  if (error) {
    throw new Error(error.message);
  }

  return {
    posts: posts || [],
    totalCount: count || 0,
  };
};

// const fetchPosts = async (category: string) => {
//   const { data, error } = await supabase
//     .from("fake_jobs")
//     .select("*")
//     .eq("category", category);

//   if (error) {
//     throw new Error(error.message);
//   }
//   return data;
// };

const getPosts = unstable_cache(
  async (category: string, page: number) => {
    return await fetchPosts(category, page);
  },
  ["posts"],
  { revalidate: revalidateSec, tags: ["posts"] }
);

// const getPosts = unstable_cache(
//   async (category: string) => {
//     return await fetchPosts(category);
//   },
//   ["posts"], // Unique cache key
//   { revalidate: revalidateSec, tags: ["posts"] }
// );

const PaginationControls = ({
  currentPage,
  totalPages,
  category,
}: {
  currentPage: number;
  totalPages: number;
  category: string;
}) => {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Link href={`/jobs/${category}?page=${currentPage - 1}`}>
        <Button
          variant="outline"
          disabled={currentPage <= 1}
          // href={`/jobs/${category}?page=${currentPage - 1}`}
          className="flex items-center gap-1"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
      </Link>

      <span className="mx-4 text-sm">
        Page {currentPage} of {totalPages}
      </span>

      <Link href={`/jobs/${category}?page=${currentPage + 1}`}>
        <Button
          variant="outline"
          disabled={currentPage >= totalPages}
          className="flex items-center gap-1"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
};

const Page = async ({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: { page?: string };
}) => {
  const { category } = params;
  const currentPage = Number(searchParams.page) || 1;

  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  const userLoggedIn = data.user?.email;

  // const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectedCategory = e.target.value;
  //   redirect(`/job/${selectedCategory}`);
  // };

  const { posts: allPosts, totalCount } = await getPosts(category, currentPage);
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  return (
    <section className="">
      <div>Category page for: {category}</div>
      <Suspense fallback={<Loading />}>
        <h1>Show Jobs in {category}</h1>
        <div className="container mx-auto p-4">
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex-grow">
              <JobCategorySelect category={category} />
              {/* <Input placeholder="Software Engineer" className="w-full" /> */}
            </div>
            <div className="flex items-center space-x-2 flex-grow">
              <span className="text-sm font-medium">roles, hiring in</span>
              <Input placeholder="United States" className="w-full" />
            </div>
            <Button variant="default">Search</Button>
          </div>

          <div className="flex justify-between items-center mb-4">
            <h1>Posts in Category: {category}</h1>
            <span className="text-sm text-gray-500">
              Showing {Math.min(ITEMS_PER_PAGE, allPosts.length)} of{" "}
              {totalCount} results
            </span>
          </div>

          {allPosts.length === 0 ? (
            <div>No jobs found</div>
          ) : (
            <div className="container mx-auto px-4 max-w-7xl">
              <ul className="space-y-4">
                {allPosts.map((post, index) => (
                  <JobSectionCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    companyName={post.company}
                    logo={post.logo}
                    index={index}
                    location={post.location}
                    salary={post.salary}
                    equity={post.equity}
                    postedDate={post.postedDate}
                    loginError={!!error}
                    userLoggedIn={!!userLoggedIn}
                    category={post.category}
                  />
                ))}
              </ul>

              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                category={category}
              />
            </div>
          )}
        </div>
      </Suspense>
    </section>
  );
};

// const Page = async ({
//   params,
//   searchParams,
// }: {
//   params: { category: string };
//   searchParams: { page?: string };
// }) => {
//   const { category } = params; // Extract category from params

//   const supabase = createClient();

//   const { data, error } = await supabase.auth.getUser();

//   const userLoggedIn = data.user?.email;

//   console.log(category);

//   const allPosts = await getPosts(category);
//   // console.log(allPosts);

//   const handlePageChange = (newPage: number) => {
//     const url = new URL(window.location.href);
//     url.searchParams.set("page", newPage.toString());
//     window.location.href = url.toString();
//   };

//   return (
//     <div className="h-screen">
//       <div>Category page for: {category}</div>
//       <Suspense fallback={<Loading />}>
//         <h1>Show Jobs in {category}</h1>
//         <div className="container mx-auto p-4">
//           <div className="flex items-center space-x-4 mb-8">
//             <div className="flex-grow">
//               <Input placeholder="Software Engineer" className="w-full" />
//             </div>
//             <div className="flex items-center space-x-2 flex-grow">
//               <span className="text-sm font-medium">roles, hiring in</span>
//               <Input placeholder="United States" className="w-full" />
//             </div>
//             <Button variant="default">Search</Button>
//           </div>
//           <h1>Posts in Category: {category}</h1>

//           {allPosts === undefined || allPosts.length === 0 ? (
//             <div>Job Post empty</div>
//           ) : (
//             <ul>
//               {allPosts.map((post, index) => (
//                 <JobSectionCard
//                   key={post.id}
//                   id={post.id}
//                   title={post.title}
//                   companyName={post.company}
//                   logo={post.logo}
//                   index={index}
//                   location={post.location}
//                   salary={post.salary}
//                   equity={post.equity}
//                   postedDate={post.postedDate}
//                   loginError={!!error}
//                   userLoggedIn={!!userLoggedIn}
//                   category={post.category}
//                 />
//               ))}
//             </ul>
//           )}

{
  /* Pagination controls */
}
{
  /* <div>
            <button
              disabled={page === 1}
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          </div> */
}
//   </div>
// </Suspense>
{
  /* <div className="container mx-auto p-4">
        <div className="flex items-center space-x-4 mb-8">
          <div className="flex-grow">
            <Input placeholder="Software Engineer" className="w-full" />
          </div>
          <div className="flex items-center space-x-2 flex-grow">
            <span className="text-sm font-medium">roles, hiring in</span>
            <Input placeholder="United States" className="w-full" />
          </div>
          <Button variant="default">Search</Button>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              Software Engineer Jobs in United States
            </h2>
            <p className="text-gray-500 mb-4">6150 results total</p>

            <Card className="mb-4">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Cherre</h3>
                    <p className="text-sm text-gray-500">
                      The real estate industry's leading data management and
                      analytics platform
                    </p>
                    <p className="text-sm text-gray-500">51-200 Employees</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Actively Hiring
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span>B2B</span>
                  <span>Growth Stage</span>
                  <span>5.0 Highly rated</span>
                  <span>+2</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Software Engineer</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <DollarSign className="w-4 h-4" />
                        <span>$80k - $150k</span>
                        <MapPin className="w-4 h-4 ml-2" />
                        <span>New York City</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500">2 days ago</span>
                      <Button variant="outline" size="sm">
                        Save
                      </Button>
                      <Button variant="default" size="sm">
                        Apply
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">
                        Senior DevOps and Site Reliability Engineer, remote
                      </h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <DollarSign className="w-4 h-4" />
                        <span>$170k - $210k • 0.01% - 1.0%</span>
                        <MapPin className="w-4 h-4 ml-2" />
                        <span>Remote • New York City</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500">4 years ago</span>
                      <Button variant="outline" size="sm">
                        Save
                      </Button>
                      <Button variant="default" size="sm">
                        Apply
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card> */
}

{
  /* Additional job listings would go here */
}
{
  /* </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Explore other jobs in United States</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Account Executive in United States</li>
                  <li>Account Manager in United States</li>
                  <li>Backend Engineer in United States</li>
                  <li>Engineering Manager in United States</li>
                  <li>Finance in United States</li>
                  {/* More job categories... */
}
{
  /* </ul>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Explore remote jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Sales Remote</li>
                  <li>Chief Information Security Officer (CISO) Remote</li>
                  <li>Cloud Architect Remote</li>
                  {/* More remote job categories... */
}
{
  /* </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>  */
}
//     </div>
//   );
// };

export default Page;
