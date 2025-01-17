import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

import { createClient } from "@/utils/supabase/server";
import { use } from "react";
import path from "path";

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

  // async function checkUserStatus() {
  //   // First check employers table
  //   const { data: employerData, error: employerError } = await supabase
  //     .from('users_employers')
  //     .select('role, is_active')
  //     .eq('user_id', user?.id)
  //     .single()

  //   if (!employerError && employerData) {
  //     return employerData
  //   }

  //     // If not found in employers, check job seekers table
  //     const { data: jobSeekerData, error: jobSeekerError } = await supabase
  //     .from('users_job_seekers')
  //     .select('role, is_active')
  //     .eq('user_id', user?.id)
  //     .single()

  //   if (!jobSeekerError && jobSeekerData) {
  //     return jobSeekerData
  //   }

  //   // If no user data found in either table
  //   return null
  // }

  // const userData = await checkUserStatus()

  async function checkUserStatusJobSeeker() {
    const { data: jobSeekerData, error: jobSeekerError } = await supabase
      .from("users_job_seekers")
      .select("role, is_active")
      .single();

    if (!jobSeekerError && jobSeekerData) {
      if (
        jobSeekerData.role === "job_seeker" &&
        jobSeekerData.is_active === true
      ) {
        return true;
      }
    }
    return false;
  }

  async function checkUserStatusEmployer() {
    const { data: employerData, error: employerError } = await supabase
      .from("users_employers")
      .select("role, is_active")
      .single();

    if (!employerError && employerData) {
      if (employerData.role === "employer" && employerData.is_active === true) {
        return true;
      }
    }
    return false;
  }

  if (pathname === "/recruit") {
    const url = request.nextUrl.clone();
    url.pathname = "/recruit/1111";
    return NextResponse.redirect(url);
  }

  // if (pathname === "/recruit") {
  //   // No user - redirect to employer login
  //   if (!user) {
  //     const redirectUrl = request.nextUrl.clone();
  //     redirectUrl.pathname = "/login/employer";
  //     return NextResponse.redirect(redirectUrl);
  //   }

  //   // User exists - check their status
  //   try {
  //     const [jobSeeker, employer] = await Promise.all([
  //       checkUserStatusJobSeeker(),
  //       checkUserStatusEmployer(),
  //     ]);

  //     if (jobSeeker) {
  //       const redirectUrl = request.nextUrl.clone();
  //       redirectUrl.pathname = "/login/job-seeker";
  //       return NextResponse.redirect(redirectUrl);
  //     }

  //     if (employer) {
  //       const res = NextResponse.redirect(
  //         new URL(`/recruit/${user.id}`, request.url)
  //       );
  //       res.headers.set("x-middleware-cache", "no-cache");
  //       return res;
  //     }

  //     // Handle case where user is neither jobSeeker nor employer
  //     const redirectUrl = request.nextUrl.clone();
  //     redirectUrl.pathname = "/";
  //     return NextResponse.redirect(redirectUrl);
  //   } catch (error) {
  //     console.error("Error checking user status:", error);
  //     // Handle error case - redirect to error page or login
  //     return NextResponse.redirect(new URL("/error", request.url));
  //   }
  // }

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

  if (request.nextUrl.pathname === "/dashboard" && user) {
    const jobSeeker = await checkUserStatusJobSeeker();

    const employer = await checkUserStatusEmployer();

    if (jobSeeker) {
      const res = NextResponse.redirect(
        new URL(`/dashboard/job-seeker/${user?.id}`, request.url)
      );

      res.headers.set("x-middleware-cache", "no-cache");
      return res;
    }

    if (employer) {
      const res = NextResponse.redirect(
        new URL(`/dashboard/employer/${user?.id}`, request.url)
      );

      res.headers.set("x-middleware-cache", "no-cache");
      return res;
    } else {
      const response = NextResponse.redirect(
        new URL("/dashboard/error", request.url)
      );
      response.headers.set("x-middleware-cache", "no-cache");
      return response;
    }
  }

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
    console.log("code running");

    const isEmployer =
      data?.[0]?.role === USER_ROLES.employer && data?.[0]?.is_active;
    // const isEmployer =
    // data && data.length > 0 ? data[0].role === USER_ROLES.employer : false;

    if (!isEmployer) {
      //Add a unotherized page
      const checkIfJobSeeker = await checkUserStatusJobSeeker();
      if (checkIfJobSeeker) {
        const response = NextResponse.redirect(
          new URL("/unauthorized", request.url)
        );
        response.headers.set("x-middleware-cache", "no-cache");
        return response;
      }
      const response = NextResponse.redirect(new URL("/", request.url));
      response.headers.set("x-middleware-cache", "no-cache");
      return response;
    }
  }

  if (request.nextUrl.pathname.startsWith("/dashboard/job-seeker") && user) {
    const { data, error } = await supabase
      .from("users_job_seekers")
      .select("*")
      .eq("user_id", user.id);

    console.log("code running");
    if (error) {
      console.error("Error fetching data:", error);
      const response = NextResponse.redirect(
        new URL("/dashboard/error", request.url)
      );
      response.headers.set("x-middleware-cache", "no-cache");
      return response; // Optional error page
    }

    const isJobSeek =
      data?.[0]?.role === USER_ROLES.job_seeker && data?.[0]?.is_active;
    // const isEmployer = data[0].role === USER_ROLES.employer && data?.[0]?.is_active
    console.log(isJobSeek);
    if (!isJobSeek) {
      //Add a unotherized page
      const checkIfEmployer = await checkUserStatusEmployer();
      if (checkIfEmployer) {
        const response = NextResponse.redirect(
          new URL("/unauthorized", request.url)
        );
        response.headers.set("x-middleware-cache", "no-cache");
        return response;
      }
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
