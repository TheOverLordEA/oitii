import LoginBlockEmployer from "@/components/login/LoginBlockEmployer";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Oitii | Employer Login ",
  description: "...",
};

const Page = () => {
  return (
    <>
      <Suspense>
        <LoginBlockEmployer />
      </Suspense>
    </>
  );
};

export default Page;
