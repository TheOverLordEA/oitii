import { NextResponse } from "next/server";
// The client you created from the Server-Side Auth instructions
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const next = "/about";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      const isLocalEnv = process.env.NODE_ENV === "development";

      if (isLocalEnv) {
        // Use the full local URL
        return NextResponse.redirect(`http://localhost:3000${next}`);
      } else {
        // For production, use origin or forwarded host
        const forwardedHost = request.headers.get("x-forwarded-host");

        if (forwardedHost) {
          return NextResponse.redirect(`https://${forwardedHost}${next}`);
        } else {
          return NextResponse.redirect(`${origin}${next}`);
        }
      }
    }
  }

  // Error case
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
// import { NextResponse } from "next/server";
// import { createClient } from "@/utils/supabase/server";
// import { data } from "framer-motion/client";

// // Mark the route as dynamic
// export const dynamic = "force-dynamic";

// export async function GET(request: Request) {
//   console.log("Node ENV:", process.env.NODE_ENV);
//   console.log("Forwarded Host:", request.headers.get("x-forwarded-host"));
//   console.log("Origin:", request.headers.get("origin"));

//   try {
//     const { searchParams } = new URL(request.url);
//     const code = searchParams.get("code");
//     // const next = searchParams.get("next") ?? "/about";
//     const next = "/dashbaord";

//     // Get the request headers early
//     const forwardedHost = request.headers.get("x-forwarded-host");
//     const origin = request.headers.get("origin") || "";

//     // Determine environment and set appropriate origin

//     // const isLocalEnv = process.env.NODE_ENV === "development";
//     // const baseUrl = isLocalEnv
//     //   ? "http://localhost:3000"
//     //   : forwardedHost
//     //   ? `https://${forwardedHost}`
//     //   : origin;

//     const isLocalEnv =
//       process.env.NODE_ENV === "development" ||
//       request.headers.get("host")?.includes("localhost") ||
//       request.headers.get("x-forwarded-host")?.includes("localhost");

//     const baseUrl = isLocalEnv
//       ? "http://localhost:3000"
//       : `https://${
//           request.headers.get("x-forwarded-host") ||
//           request.headers.get("host") ||
//           "oitii.com"
//         }`;

//     console.log("Determined Base URL:", baseUrl);

//     if (!code) {
//       console.error("No code provided in callback");
//       return NextResponse.redirect(`${baseUrl}/auth/auth-code-error`);
//     }

//     const supabase = await createClient();

//     // Exchange code for session
//     const {
//       data: { session },
//       error: sessionError,
//     } = await supabase.auth.exchangeCodeForSession(code);

//     console.log(data);

//     if (sessionError) {
//       console.error("Session exchange error:", sessionError);
//       return NextResponse.redirect(`${baseUrl}/auth/auth-code-error`);
//     }

//     if (!session?.user) {
//       console.error("No user in session");
//       return NextResponse.redirect(`${baseUrl}/auth/auth-code-error`);
//     }

//     // Check if user exists in users_job_seekers
//     const { data: existingUser, error: userCheckError } = await supabase
//       .from("users_job_seekers")
//       .select("*")
//       .eq("email", session.user.email)
//       .single();

//     console.log(existingUser);

//     if (userCheckError && userCheckError.code !== "PGRST116") {
//       console.error("Error checking user:", userCheckError);
//       return NextResponse.redirect(`${baseUrl}/auth/auth-code-error`);
//     }

//     if (!existingUser) {
//       // Insert new user into users_job_seekers
//       const { error: insertError } = await supabase
//         .from("users_job_seekers")
//         .insert([
//           {
//             email: session.user.email,
//             auth_provider: session.user.app_metadata.provider,
//             provider_id: session.user.id,
//             full_name: session.user.user_metadata?.full_name,
//             avatar_url: session.user.user_metadata?.avatar_url,
//             // last_sign_in: new Date().toISOString(),
//             // created_at: new Date().toISOString(),
//           },
//         ]);

//       if (insertError) {
//         console.error("Error inserting user:", insertError);
//         return NextResponse.redirect(`${baseUrl}/auth/database-error`);
//       }
//     } else {
//       // Update existing user's last sign in
//       const { error: updateError } = await supabase
//         .from("users_job_seekers")
//         .update({
//           last_sign_in: new Date().toISOString(),
//           auth_provider: session.user.app_metadata.provider,
//           full_name: session.user.user_metadata?.full_name,
//           avatar_url: session.user.user_metadata?.avatar_url,
//         })
//         .eq("email", session.user.email);

//       if (updateError) {
//         console.error("Error updating user:", updateError);
//         // Continue anyway as this is not critical
//       }
//     }

//     return NextResponse.redirect(`${baseUrl}${next}`);
//   } catch (error) {
//     console.error("Unexpected error in auth callback:", error);
//     const errorBaseUrl =
//       process.env.NODE_ENV === "development"
//         ? "http://localhost:3000"
//         : request.headers.get("origin") || "";
//     return NextResponse.redirect(`${errorBaseUrl}/auth/auth-code-error`);
//   }
// }

// import { NextResponse } from "next/server";
// import { createClient } from "@/utils/supabase/server";
// import { data } from "framer-motion/client";

// // Mark the route as dynamic
// export const dynamic = "force-dynamic";

// export async function GET(request: Request) {

//   try {
//     const { searchParams } = new URL(request.url);
//     const code = searchParams.get("code");
//     const next = searchParams.get("next") ?? "/about";
//     // const next = "/dashbaord";

//     // Get the request headers early
//     const forwardedHost = request.headers.get("x-forwarded-host");
//     const origin = request.headers.get("origin") || "";

//     // Determine environment and set appropriate origin
//     const isLocalEnv = process.env.NODE_ENV === "development";
//     const baseUrl = isLocalEnv
//       ? "http://localhost:3000"
//       : forwardedHost
//       ? `https://${forwardedHost}`
//       : origin;

//     if (!code) {
//       console.error("No code provided in callback");
//       return NextResponse.redirect(`${baseUrl}/auth/auth-code-error`);
//     }

//     const supabase = await createClient();

//     // Exchange code for session
//     const {
//       data: { session },
//       error: sessionError,
//     } = await supabase.auth.exchangeCodeForSession(code);

//     console.log(data);

//     if (sessionError) {
//       console.error("Session exchange error:", sessionError);
//       return NextResponse.redirect(`${baseUrl}/auth/auth-code-error`);
//     }

//     if (!session?.user) {
//       console.error("No user in session");
//       return NextResponse.redirect(`${baseUrl}/auth/auth-code-error`);
//     }

//     // Check if user exists in users_job_seekers
//     const { data: existingUser, error: userCheckError } = await supabase
//       .from("users_job_seekers")
//       .select("*")
//       .eq("email", session.user.email)
//       .single();

//     console.log(existingUser);

//     if (userCheckError && userCheckError.code !== "PGRST116") {
//       console.error("Error checking user:", userCheckError);
//       return NextResponse.redirect(`${baseUrl}/auth/auth-code-error`);
//     }

//     if (!existingUser) {
//       // Insert new user into users_job_seekers
//       const { error: insertError } = await supabase
//         .from("users_job_seekers")
//         .insert([
//           {
//             email: session.user.email,
//             auth_provider: session.user.app_metadata.provider,
//             provider_id: session.user.id,
//             full_name: session.user.user_metadata?.full_name,
//             avatar_url: session.user.user_metadata?.avatar_url,
//             // last_sign_in: new Date().toISOString(),
//             // created_at: new Date().toISOString(),
//           },
//         ]);

//       if (insertError) {
//         console.error("Error inserting user:", insertError);
//         return NextResponse.redirect(`${baseUrl}/auth/database-error`);
//       }
//     } else {
//       // Update existing user's last sign in
//       const { error: updateError } = await supabase
//         .from("users_job_seekers")
//         .update({
//           last_sign_in: new Date().toISOString(),
//           auth_provider: session.user.app_metadata.provider,
//           full_name: session.user.user_metadata?.full_name,
//           avatar_url: session.user.user_metadata?.avatar_url,
//         })
//         .eq("email", session.user.email);

//       if (updateError) {
//         console.error("Error updating user:", updateError);
//         // Continue anyway as this is not critical
//       }
//     }

//     return NextResponse.redirect(`${baseUrl}${next}`);
//   } catch (error) {
//     console.error("Unexpected error in auth callback:", error);
//     const errorBaseUrl =
//       process.env.NODE_ENV === "development"
//         ? "http://localhost:3000"
//         : request.headers.get("origin") || "";
//     return NextResponse.redirect(`${errorBaseUrl}/auth/auth-code-error`);
//   }
// }

// import { NextResponse } from "next/server";
// import { createClient } from "@/utils/supabase/server";

// export const dynamic = "force-dynamic";

// export async function GET(request: Request) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const code = searchParams.get("code");

//     // Determine base URL
//     const isLocalEnv = process.env.NODE_ENV === "development";
//     const forwardedHost = request.headers.get("x-forwarded-host");
//     const origin = request.headers.get("origin") || "";
//     const baseUrl = isLocalEnv
//       ? "http://localhost:3000"
//       : forwardedHost
//       ? `https://${forwardedHost}`
//       : origin;

//     if (!code) {
//       return NextResponse.redirect(`${baseUrl}/auth/auth-code-error`);
//     }

//     const supabase = await createClient();

//     // Exchange code for session
//     const { data: { session }, error: sessionError } =
//       await supabase.auth.exchangeCodeForSession(code);

//     if (sessionError || !session?.user) {
//       return NextResponse.redirect(`${baseUrl}/auth/auth-code-error`);
//     }

//     // Check user role in database
//     const { data: userRole, error: roleError } = await supabase
//       .from("users")  // Adjust table name as needed
//       .select("role")
//       .eq("email", session.user.email)
//       .single();

//     if (roleError || !userRole) {
//       return NextResponse.redirect(`${baseUrl}/auth/user-error`);
//     }

//     // Role-based redirection
//     const dashboardRoute =
//       userRole.role === 'employer'
//         ? '/dashboard/employer'
//         : '/dashboard/job-seeker';

//     return NextResponse.redirect(`${baseUrl}${dashboardRoute}`);

//   } catch (error) {
//     console.error("Authentication callback error:", error);
//     return NextResponse.redirect(`${baseUrl}/auth/auth-code-error`);
//   }
// }

// import { NextResponse } from "next/server";
// // The client you created from the Server-Side Auth instructions
// import { createClient } from "@/utils/supabase/server";

// export async function GET(request: Request) {
//   const { searchParams, origin } = new URL(request.url);
//   const code = searchParams.get("code");
//   // if "next" is in param, use it as the redirect URL
//   const next = searchParams.get("next") ?? "/";

//   const isLocalEnv = process.env.NODE_ENV === "development";
//   const finalOrigin = isLocalEnv ? "http://localhost:3000" : origin;

//   // if (isLocalEnv) {
//   //   finalOrigin = "http://localhost:3000"; // Override origin to localhost:3000 in development
//   // }

//   if (code) {
//     const supabase = await createClient();
//     const { error } = await supabase.auth.exchangeCodeForSession(code);
//     if (!error) {
//       const forwardedHost = request.headers.get("x-forwarded-host"); // original origin before load balancer
//       const isLocalEnv = process.env.NODE_ENV === "development";
//       if (isLocalEnv) {
//         // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
//         return NextResponse.redirect(`${finalOrigin}${next}`); // Redirect to localhost in dev

//         // return NextResponse.redirect(`${origin}${next}`);
//       } else if (forwardedHost) {
//         return NextResponse.redirect(`https://${forwardedHost}${next}`);
//       } else {
//         return NextResponse.redirect(`${origin}${next}`);
//       }
//     }
//   }

//   // return the user to an error page with instructions
//   return NextResponse.redirect(`${origin}/auth/auth-code-error`);
// }
