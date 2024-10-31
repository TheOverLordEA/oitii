import JobPostBlock from "@/components/jobPost/JobPostBlock";
import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    console.log("user not logged in");
  } else {
    console.log(data.user);
  }

  return (
    <section>
      <JobPostBlock user={data?.user?.email || null} />
    </section>
  );
}
