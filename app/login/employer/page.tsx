import LoginBlockEmployer from "@/components/login/LoginBlockEmployer";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Oitii | Employer Login ",
  description:
    "Access your Oitii employer dashboard to manage job listings, review applications, and connect with top talent. Login to start hiring the best candidates today",
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
