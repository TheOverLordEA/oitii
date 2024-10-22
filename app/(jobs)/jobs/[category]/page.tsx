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
import JobsCategorySkeleton from "@/components/skeleton/JobsCategorySkeleton";
import CitySearch from "@/components/jobCategory/CitySearch";

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

  const { posts: allPosts, totalCount } = await getPosts(category, currentPage);
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  return (
    <section className="">
      <div>Category page for: {category}</div>
      <Suspense fallback={<Loading />}>
        <h1>Show Jobs in {category}</h1>
        <CitySearch />
        <div className="container mx-auto p-4">
          <div className="flex items-center space-x-4 mb-8 text-black">
            <div className="flex-grow">
              <h1>Search: </h1>
              <JobCategorySelect category={category} />
              {/* <Input placeholder="Software Engineer" className="w-full" /> */}
            </div>
            {/* <div className="flex items-center space-x-2 flex-grow">
              <span className="text-sm font-medium">roles, hiring in</span>
              <Input placeholder="United States" className="w-full" />
            </div> */}
            {/* <Button variant="default">Search</Button> */}
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
      <JobsCategorySkeleton />
    </section>
  );
};

export default Page;
