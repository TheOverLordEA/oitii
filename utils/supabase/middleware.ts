import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: any) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // List of protected routes that require authentication
  const protectedRoutes = ["/dashboard", "/profile", "/settings"];

  if (
    !user &&
    protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    // For protected routes, redirect to login if there's no user
    const redirectUrl = new URL("/login", request.url);
    redirectUrl.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // For API routes, add user ID to the request object if a user exists
  if (request.nextUrl.pathname.startsWith("/api")) {
    if (user) {
      response.headers.set("X-User-Id", user.id);
    }
    return response;
  }

  // For all other routes, allow the request to continue
  return response;
}

// import { createServerClient } from "@supabase/ssr";
// import { NextResponse, type NextRequest } from "next/server";

// export async function updateSession(request: NextRequest) {
//   let supabaseResponse = NextResponse.next({
//     request,
//   });

//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return request.cookies.getAll();
//         },
//         setAll(cookiesToSet) {
//           cookiesToSet.forEach(({ name, value, options }) =>
//             request.cookies.set(name, value)
//           );
//           supabaseResponse = NextResponse.next({
//             request,
//           });
//           cookiesToSet.forEach(({ name, value, options }) =>
//             supabaseResponse.cookies.set(name, value, options)
//           );
//         },
//       },
//     }
//   );

// IMPORTANT: Avoid writing any logic between createServerClient and
// supabase.auth.getUser(). A simple mistake could make it very hard to debug
// issues with users being randomly logged out.

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   const protectedRoutes = ["/dashboard", "/profile", "/settings"];

//   if (
//     !user &&
//     protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
//   ) {
//     // Redirect to login page only for protected routes when user is not authenticated
//     const url = request.nextUrl.clone();
//     url.pathname = "/login";
//     return NextResponse.redirect(url);
//   }

//   if (
//     !user &&
//     !request.nextUrl.pathname.startsWith("/login") &&
//     !request.nextUrl.pathname.startsWith("/auth")
//   ) {
// no user, potentially respond by redirecting the user to the login page
//     const url = request.nextUrl.clone();
//     url.pathname = "/login";
//     return NextResponse.redirect(url);
//   }

// IMPORTANT: You *must* return the supabaseResponse object as it is. If you're
// creating a new response object with NextResponse.next() make sure to:
// 1. Pass the request in it, like so:
//    const myNewResponse = NextResponse.next({ request })
// 2. Copy over the cookies, like so:
//    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
// 3. Change the myNewResponse object to fit your needs, but avoid changing
//    the cookies!
// 4. Finally:
//    return myNewResponse
// If this is not done, you may be causing the browser and server to go out
// of sync and terminate the user's session prematurely!

//   return supabaseResponse;
// }
