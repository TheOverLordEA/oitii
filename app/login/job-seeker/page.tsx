import LoginBlock from "@/components/login/LoginBlock";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Oitii | Job Seeker Login",
  description: "...",
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
