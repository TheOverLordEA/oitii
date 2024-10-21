// import { NextResponse, type NextRequest } from "next/server";

// export const JOB_CATEGORIES = [
//   "engineering",
//   "finance",
//   "marketing",
//   "healthcare",
//   "construction",
//   "government",
//   "retail",
//   "utilities",
// ];

// export function jobCategoryValidator(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // List of protected routes that include all paths under `/jobs`
//   //   const protectedRoutePattern = "/jobs/:path*";

//   // Check if the requested path is under `/jobs`
//   if (pathname.startsWith("/jobs")) {
//     // Check if the route matches `/jobs/[category]` pattern (direct job category route)
//     const categoryMatch = pathname.match(/^\/jobs\/([^/]+)$/);

//     if (categoryMatch) {
//       const category = categoryMatch[1];

//       // Check if the category is valid
//       if (JOB_CATEGORIES.some((cat) => cat === category)) {
//         // Allow the request to proceed to the valid category page
//         return NextResponse.next();
//       } else {
//         // Redirect to 404 page if the category is invalid
//         return NextResponse.redirect(new URL("/404", request.url));
//       }
//     }
//   }

//   // If the route does not match `/jobs/[category]`, continue without validation
//   return NextResponse.next();
// }
