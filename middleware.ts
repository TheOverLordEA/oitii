import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

import { createClient } from "@/utils/supabase/server";

export const JOB_CATEGORIES = [
  "latest",
  "engineering",
  "finance",
  "marketing",
  "healthcare",
  "construction",
  "government",
  "retail",
  "utilities",
];

const USER_ROLES = {
  employer: "employer",
  job_seeker: "job_seeker",
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (pathname === "/signup") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/signup/job-seeker";
    return NextResponse.redirect(redirectUrl);
  }

  // Redirect logic for /login to /login/job-seeker
  if (pathname === "/login") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/login/job-seeker";
    return NextResponse.redirect(redirectUrl);
  }

  // if()

  if (request.nextUrl.pathname.startsWith("/dashboard/employer") && user) {
    const { data, error } = await supabase
      .from("users_employers")
      .select("*")
      .eq("user_id", user.id);

    if (error) {
      console.error("Error fetching data:", error);
      const response = NextResponse.redirect(
        new URL("/dashboard/error", request.url)
      );
      response.headers.set("x-middleware-cache", "no-cache");
      return response; // Optional error page
    }

    const isEmployer = data?.[0]?.role === USER_ROLES.employer;
    // const isEmployer =
    // data && data.length > 0 ? data[0].role === USER_ROLES.employer : false;

    if (!isEmployer) {
      //Add a unotherized page
      const response = NextResponse.redirect(new URL("/", request.url));
      response.headers.set("x-middleware-cache", "no-cache");
      return response;
    }
  }

  if (request.nextUrl.pathname.startsWith("/dashboard/job_seeker") && user) {
    const { data, error } = await supabase
      .from("users_job_seekers")
      .select("*")
      .eq("user_id", user.id);

    if (error) {
      console.error("Error fetching data:", error);
      const response = NextResponse.redirect(
        new URL("/dashboard/error", request.url)
      );
      response.headers.set("x-middleware-cache", "no-cache");
      return response; // Optional error page
    }

    const isEmployer = data?.[0]?.role === USER_ROLES.job_seeker;
    // const isEmployer =
    // data && data.length > 0 ? data[0].role === USER_ROLES.employer : false;

    if (!isEmployer) {
      //Add a unotherized page
      const response = NextResponse.redirect(new URL("/", request.url));
      response.headers.set("x-middleware-cache", "no-cache");
      return response;
    }
  }

  if (
    request.nextUrl.pathname.startsWith("/login") &&
    user
    // (request.nextUrl.pathname.startsWith("/login") && error)
  ) {
    // return NextResponse.rewrite(new URL("/", request.url));
    const response = NextResponse.redirect(new URL("/", request.url));
    response.headers.set("x-middleware-cache", "no-cache");
    return response;
  }

  if (request.nextUrl.pathname.startsWith("/signup") && user) {
    // return NextResponse.rewrite(new URL("/", request.url));
    const response = NextResponse.redirect(new URL("/", request.url));
    response.headers.set("x-middleware-cache", "no-cache");
    return response;
  }

  if (pathname.startsWith("/jobs")) {
    const categoryMatch = pathname.match(/^\/jobs\/([^/]+)$/);

    if (categoryMatch) {
      const category = categoryMatch[1];

      // Check if the category is valid
      if (!JOB_CATEGORIES.includes(category)) {
        // Redirect to 404 page if the category is invalid
        return NextResponse.redirect(new URL("/404", request.url));
      }
    }
  }

  return await updateSession(request);
}

// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   if (pathname === "/signup") {
//     const redirectUrl = request.nextUrl.clone();
//     redirectUrl.pathname = "/signup/job-seeker";
//     return NextResponse.redirect(redirectUrl);
//   }

//   if (pathname === "/login") {
//     const redirectUrl = request.nextUrl.clone();
//     redirectUrl.pathname = "/login/job-seeker";
//     return NextResponse.redirect(redirectUrl);
//   }

//   // List of allowed paths that should load normally
//   const allowedPaths = [
//     "/", // Home page
//     "/coming-soon",
//     "/privacy-policy",
//     "/terms-of-service",
//     "/signup",
//     "/login",
//     "/check-email",
//     "/about",
//     "/dashboard",
//     "/api", // Optional: Allow API routes
//   ];

//   // Check if the current path starts with any allowed path
//   const isAllowedPath = allowedPaths.some(
//     (path) => pathname === path || pathname.startsWith(`${path}/`)
//   );

//   // Allow access to assets and public files
//   if (
//     pathname.startsWith("/_next") ||
//     pathname.startsWith("/static") ||
//     pathname.includes(".")
//   ) {
//     return;
//   }

//   // Allow the path if it's in the allowed list
//   if (isAllowedPath) {
//     return await updateSession(request);
//   }

//   // Redirect all other paths to home page
//   const response = NextResponse.redirect(new URL("/", request.url));

//   // Prevent caching of redirect response
//   response.headers.set("x-middleware-cache", "no-cache");

//   return response;
// }

// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Allow the home page to load normally
//   if (pathname === "/") {
//     return await updateSession(request);
//   }

//   // Redirect all other paths to home page
//   const response = NextResponse.redirect(new URL("/", request.url));
//   response.headers.set("x-middleware-cache", "no-cache");
//   return response;
// }

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
