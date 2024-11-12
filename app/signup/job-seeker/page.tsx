import { SignUpBlock } from "@/components/signup/SignUpBlock";
import type { Metadata } from "next";

export const metadata = {
  title:
    "Sign Up for Oitii.com – Job Seeker Join the Future of Job Search & Recruitment Today",

  description: `Create your account on Oitii.com as a job seeker and unlock access to a transparent, affordable, and efficient job board. Whether you're a job seeker or employer, Oitii makes it easy to connect, discover opportunities, and hire talent. Sign up now to start your journey!`,
};

const Page = () => {
  return (
    <>
      <SignUpBlock />
    </>
  );
};

export default Page;
