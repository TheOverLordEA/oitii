import LoginBlock from "@/components/login/LoginBlock";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Oitii | Job Seeker Login",
  description:
    "Log in to your Oitii account to access job opportunities, manage your profile, and stay connected with potential employers. Your gateway to the next step in your career starts here.",
};

const Page = () => {
  return (
    <>
      <Suspense>
        <LoginBlock />
      </Suspense>
    </>
  );
};

export default Page;
