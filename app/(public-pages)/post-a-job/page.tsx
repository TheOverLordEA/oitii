// import KeyBenefits from "@/components/keyBenefits/KeyBenefitsPostAJob";
import FreeJobPost from "@/components/banner/FreeJobPost";
import JobPostsPricing from "@/components/pricing/JobPostsPricing";
import { Button } from "@/components/ui/button";
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import { Check } from "lucide-react";

// bg-gradient-to-t from-cyan-100 to-slate-50

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-t from-cyan-200 to-indigo-100">
        <div className="text-center space-y-4 container mx-auto px-4 py-16 text-black">
          <h2 className="text-2xl font-semibold leading-7 text-center">
            PRICING
          </h2>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Start for free, then enjoy
            <br />
            your first month for $1
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose the best option for your business. Buy More When You’re
            Ready.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="bg-secondary rounded-full p-1 flex">
              <button className="px-4 py-2 rounded-full bg-background">
                Pay monthly
              </button>
              <button className="px-4 py-2 rounded-full">
                Pay yearly (save 25%)*
              </button>
            </div>
          </div>
        </div>
        <JobPostsPricing />

        <FreeJobPost />
      </section>
      <section className="container mx-auto px-4 py-16">
        {/* <JobPostsPricing /> */}
      </section>
    </>
  );
}
