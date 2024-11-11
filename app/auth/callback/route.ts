import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  try {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get("code");
    const next = searchParams.get("next") ?? "/";

    // Determine environment and set appropriate origin
    const isLocalEnv = process.env.NODE_ENV === "development";
    const finalOrigin = isLocalEnv ? "http://localhost:3000" : origin;

    if (!code) {
      console.error("No code provided in callback");
      return NextResponse.redirect(`${finalOrigin}/auth/auth-code-error`);
    }

    const supabase = await createClient();

    // Exchange code for session
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.exchangeCodeForSession(code);

    if (sessionError) {
      console.error("Session exchange error:", sessionError);
      return NextResponse.redirect(`${finalOrigin}/auth/auth-code-error`);
    }

    if (!session?.user) {
      console.error("No user in session");
      return NextResponse.redirect(`${finalOrigin}/auth/auth-code-error`);
    }

    // Check if user exists in users_job_seekers
    const { data: existingUser, error: userCheckError } = await supabase
      .from("users_job_seekers")
      .select("*")
      .eq("email", session.user.email)
      .single();

    if (userCheckError && userCheckError.code !== "PGRST116") {
      console.error("Error checking user:", userCheckError);
      return NextResponse.redirect(`${finalOrigin}/auth/auth-code-error`);
    }

    if (!existingUser) {
      // Insert new user into users_job_seekers
      const { error: insertError } = await supabase
        .from("users_job_seekers")
        .insert([
          {
            email: session.user.email,
            auth_provider: session.user.app_metadata.provider,
            provider_id: session.user.id,
            full_name: session.user.user_metadata?.full_name,
            avatar_url: session.user.user_metadata?.avatar_url,
            last_sign_in: new Date().toISOString(),
            created_at: new Date().toISOString(),
          },
        ]);

      if (insertError) {
        console.error("Error inserting user:", insertError);
        return NextResponse.redirect(`${finalOrigin}/auth/database-error`);
      }
    } else {
      // Update existing user's last sign in
      const { error: updateError } = await supabase
        .from("users_job_seekers")
        .update({
          last_sign_in: new Date().toISOString(),
          auth_provider: session.user.app_metadata.provider,
          full_name: session.user.user_metadata?.full_name,
          avatar_url: session.user.user_metadata?.avatar_url,
        })
        .eq("email", session.user.email);

      if (updateError) {
        console.error("Error updating user:", updateError);
        // Continue anyway as this is not critical
      }
    }

    // Handle redirect based on environment
    const forwardedHost = request.headers.get("x-forwarded-host");

    const response = new NextResponse(null, {
      status: 302,
      headers: {
        Location: isLocalEnv
          ? `${finalOrigin}${next}`
          : forwardedHost
          ? `https://${forwardedHost}${next}`
          : `${origin}${next}`,
      },
    });

    // Set any additional cookies if needed
    // const cookieStore = cookies();
    // response.cookies.set('last_sign_in', new Date().toISOString(), {
    //   path: '/',
    //   secure: !isLocalEnv,
    //   sameSite: 'lax',
    //   maxAge: 60 * 60 * 24 * 30, // 30 days
    // });

    return response;
  } catch (error) {
    console.error("Unexpected error in auth callback:", error);
    return NextResponse.redirect(
      `${
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000"
          : origin
      }/auth/auth-code-error`
    );
  }
}

// Optional: Add error handlers for specific paths
export async function generateErrorResponse(errorType: string, origin: string) {
  const errorMessages = {
    "auth-code-error":
      "Authentication code error. Please try signing in again.",
    "database-error": "Error saving user data. Please contact support.",
    "session-error": "Error creating session. Please try again.",
  };

  return NextResponse.json(
    {
      error:
        errorMessages[errorType as keyof typeof errorMessages] ||
        "Unknown error occurred",
    },
    { status: 400 }
  );
}

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
