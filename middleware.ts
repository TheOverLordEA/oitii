import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

import { createClient } from "@/utils/supabase/server";

export async function middleware(request: NextRequest) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (request.nextUrl.pathname.startsWith("/login") && data.user) {
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
