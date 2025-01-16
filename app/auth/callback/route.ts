import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

enum UserType {
  JOB_SEEKER = "job_seeker",
  EMPLOYER = "employer",
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userType = searchParams.get("user_type");

  console.log(userType);

  // const supabaseApp = await createClient();

  // console.log("User input", supabaseApp.auth.getUser());

  const code = searchParams.get("code");
  // const next = "/dashboard" || "/";

  const next =
    userType === UserType.JOB_SEEKER
      ? "/dashboard/job-seeker"
      : userType === UserType.EMPLOYER
      ? "/dashboard/employer"
      : "/";

  if (code) {
    const supabase = await createClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.exchangeCodeForSession(code);

    // console.log(userType);

    if (!error) {
      const isLocalEnv = process.env.NODE_ENV === "development";

      const dbUserType =
        userType === UserType.JOB_SEEKER
          ? "users_job_seekers"
          : "users_employers";

      // console.log(userType, dbUserType);

      const { data: userData, error: fetchError } = await supabase
        .from(dbUserType)
        .select("*")
        .eq("user_id", user?.id)
        .single(); // Assuming user_id is unique

      // console.log(userData);

      if (fetchError && fetchError.code !== "PGRST116") {
        // Ignore "row not found" errors
        throw fetchError;
      }

      if (userData) {
        // If the user exists, update is_active status
        const { error: updateError } = await supabase
          .from(dbUserType)
          .update({ is_active: true })
          .eq("user_id", user?.id);
        console.log(user?.id);

        if (updateError) throw updateError;

        console.log("User updated successfully");
      } else {
        // If the user does not exist, insert a new row
        const { error: insertError } = await supabase.from(dbUserType).insert({
          user_id: user?.id,
          email: user?.email,
          ...(userType === "job_seeker"
            ? { full_name: user?.user_metadata.full_name }
            : {}),
          // full_name: user?.user_metadata.full_name,
          // company_name: formData.companyName.toLowerCase(),
          is_active: true,
          role: userType,
          auth_provider: user?.identities?.[0]?.provider,
        });

        if (insertError) {
          // await supabase.auth.signOut();
          // document.cookie.split(";").forEach((c) => {
          //   if (c.includes("sb-") || c.includes("supabase-auth")) {
          //     document.cookie = c
          //       .replace(/^ +/, "")
          //       .replace(
          //         /=.*/,
          //         "=;expires=" + new Date().toUTCString() + ";path=/"
          //       );
          //   }
          // });

          console.log("User signed out and cookies cleared");
          console.log("User signed out");
          throw insertError;
        }

        console.log("User added successfully");
      }

      if (isLocalEnv) {
        // Use the full local URL
        return NextResponse.redirect(
          `http://localhost:3000${next}/${user?.id}`
        );
      } else {
        // For production, use origin or forwarded host
        const forwardedHost = request.headers.get("x-forwarded-host");

        if (forwardedHost) {
          return NextResponse.redirect(`https://${forwardedHost}${next}`);
        } else {
          // console.log("error")
          return NextResponse.redirect(`${origin}${next}`);
        }
      }
    }
  }

  // Error case

  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
