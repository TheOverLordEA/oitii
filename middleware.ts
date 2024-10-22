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

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (
    request.nextUrl.pathname.startsWith("/login") &&
    data.user
    // (request.nextUrl.pathname.startsWith("/login") && error)
  ) {
    // return NextResponse.rewrite(new URL("/", request.url));
    const response = NextResponse.redirect(new URL("/", request.url));
    response.headers.set("x-middleware-cache", "no-cache");
    return response;
  }

  if (request.nextUrl.pathname.startsWith("/signup") && data.user) {
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
