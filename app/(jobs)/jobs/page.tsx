// import AppShowcaseJobs from "@/components/appShowcase/AppShowCaseJobs";
import EmailNewsLetterSignUp from "@/components/emailNewsletter/emailNewsLetterSignUp";
import HeroJobs from "@/components/hero/HeroJobs";
import FeaturedJobs from "@/components/trendingJobs/TrendingJobs";
// import { span } from "framer-motion/client";
import { Suspense } from "react";

const Page = () => {
  return (
    <>
      <HeroJobs />
      <section>
        <Suspense fallback={<span>Loading ...</span>}>
          <FeaturedJobs />
          <EmailNewsLetterSignUp />
          <div>
            <div></div>
            <div></div>
          </div>
        </Suspense>
      </section>
      {/* <Suspense fallback={<span>Loading ......</span>}>
        <AppShowcaseJobs />
      </Suspense> */}
      {/* Developers section */}
      {/* <section className="py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            By developers, for developers
          </h2>
          <p className="text-gray-400 text-center mb-8">
            APIs, SDKs, and tools empower devs and partners to build the apps,
            themes, and custom storefronts businesses are looking for.
          </p>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 opacity-20 blur-3xl"></div>
            <div className="relative bg-gray-800 rounded-lg p-4 shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900 rounded p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="text-green-400 text-sm">
                    <code>{`
$ npm install @shopify/app
$ shopify app create
...
Your app is ready!
                    `}</code>
                  </pre>
                </div>
                <div className="bg-gray-900 rounded p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="text-blue-400 text-sm">
                    <code>{`
import { shopifyApi } from "@shopify/shopify-api";

const shopify = shopifyApi({
  // Your config here
});
                    `}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Page;
