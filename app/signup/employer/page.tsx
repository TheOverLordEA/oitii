import type { Metadata } from "next";
import SignUpBlockEmployer from "@/components/signup/SignUpBlockEmployer";

export const metadata = {
  title:
    "Sign Up for Oitii – Employer join the Future of Job Search & Recruitment Today",

  description: `Create your account on Oitii.com as an Employer and unlock access to a transparent, affordable, and efficient job board. Whether you're a job seeker or employer, Oitii makes it easy to connect, discover opportunities, and hire talent. Sign up now to start your journey!`,
};

const Page = () => {
  return (
    <main>
      <SignUpBlockEmployer />
    </main>
  );
};

export default Page;
