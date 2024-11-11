import { createClient } from "../supabase/client";

export async function checkIfUserExistsJobSeeker(
  email: string,
  googleId?: string
): Promise<{ exists: boolean; provider?: string }> {
  const supabase = await createClient();
  try {
    const { data, error } = await supabase
      .from("users_job_seekers")
      .select("email, auth_provider")
      .or(`email.eq.${email},google_id.eq.${googleId}`)
      .single();

    if (error && error.code !== "PGRST116") {
      // PGRST116 is the "no rows returned" error
      console.error("Error checking user existence:", error);
      throw error;
    }

    return {
      exists: !!data,
      provider: data?.auth_provider,
    };
  } catch (error) {
    console.error("Error in checkIfUserExists:", error);
    return { exists: false };
  }
}
