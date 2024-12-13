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

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-t from-cyan-100 to-slate-50">
        <div className="text-center space-y-4 mb-16 container mx-auto px-4 py-16 text-black">
          <h2 className="text-base font-semibold leading-7 text-center">
            PLANS & PRICING
          </h2>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Start for free, then enjoy
            <br />
            your first month for $1
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose the best plan for your business. Change plans as you grow.
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
      </section>

      <section className="container mx-auto px-4 py-16">
        <FreeJobPost />

        <JobPostsPricing />
      </section>

      {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> */}
      {/* Basic Plan */}
      {/* <Card className="relative">
          <div className="absolute -top-4 left-0 right-0 text-center">
            <div className="bg-[#2ecc71] text-white text-sm py-1 px-4 rounded-full inline-block">
              $1 for your first month
            </div>
          </div>
          <CardHeader className="pt-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">Basic</h3>
                <p className="text-sm text-muted-foreground">
                  For solo entrepreneurs
                </p>
              </div>
              <div className="bg-[#2ecc71] text-white text-xs px-2 py-1 rounded-full">
                Most Popular
              </div>
            </div>
            <div className="mt-4">
              <span className="text-4xl font-bold">$19</span>
              <span className="text-muted-foreground ml-1">/month</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full" variant="default">
              Try for free
            </Button>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">
                  Card rates starting at
                </h4>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span className="text-sm">
                    2% 3rd-party payment providers
                  </span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Standout features</h4>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span className="text-sm">10 inventory locations</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card> */}

      {/* Shopify Plan */}
      {/* <Card className="relative">
          <div className="absolute -top-4 left-0 right-0 text-center">
            <div className="bg-[#2ecc71] text-white text-sm py-1 px-4 rounded-full inline-block">
              $1 for your first month
            </div>
          </div>
          <CardHeader className="pt-8">
            <div>
              <h3 className="text-xl font-bold">Shopify</h3>
              <p className="text-sm text-muted-foreground">For small teams</p>
            </div>
            <div className="mt-4">
              <span className="text-4xl font-bold">$49</span>
              <span className="text-muted-foreground ml-1">/month</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full" variant="default">
              Try for free
            </Button>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">
                  Card rates starting at
                </h4>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span className="text-sm">
                    1% 3rd-party payment providers
                  </span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Standout features</h4>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span className="text-sm">10 inventory locations</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card> */}

      {/* Advanced Plan */}
      {/* <Card className="relative">
          <div className="absolute -top-4 left-0 right-0 text-center">
            <div className="bg-[#2ecc71] text-white text-sm py-1 px-4 rounded-full inline-block">
              $1 for your first month
            </div>
          </div>
          <CardHeader className="pt-8">
            <div>
              <h3 className="text-xl font-bold">Advanced</h3>
              <p className="text-sm text-muted-foreground">
                As your business scales
              </p>
            </div>
            <div className="mt-4">
              <span className="text-4xl font-bold">$299</span>
              <span className="text-muted-foreground ml-1">/month</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full" variant="default">
              Try for free
            </Button>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">
                  Card rates starting at
                </h4>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span className="text-sm">
                    0.6% 3rd-party payment providers
                  </span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Standout features</h4>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span className="text-sm">Custom reports and analytics</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card> */}

      {/* Plus Plan */}
      {/* <Card>
          <CardHeader className="pt-8">
            <div className="bg-blue-600 text-white text-sm py-1 px-4 rounded-full inline-block mb-4">
              Available on a 1- or 3-year term
            </div>
            <div>
              <h3 className="text-xl font-bold">Plus</h3>
              <p className="text-sm text-muted-foreground">
                For more complex businesses
              </p>
            </div>
            <div className="mt-4">
              <div className="text-sm text-muted-foreground">Starting at</div>
              <span className="text-4xl font-bold">$2,300</span>
              <span className="text-muted-foreground ml-1">/month</span>
              <div className="text-sm text-muted-foreground">
                on a 3-year term
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full" variant="default">
              Get in touch
            </Button>
            <Button className="w-full" variant="link">
              Learn more
            </Button>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Card rates</h4>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span className="text-sm">
                    Competitive rates for high-volume merchants
                  </span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Standout features</h4>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span className="text-sm">Custom reports and analytics</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div> */}
    </>
    // <div className="bg-white">
    //   <div className="container mx-auto px-4 py-16">
    //     <div className="text-center mb-16">
    //       <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
    //         <Stars className="h-4 w-4 mr-2" />
    //         <span className="text-xs font-medium">
    //           Game-Changing Recruitment Platform
    //         </span>
    //       </div>
    //       <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
    //         Transform Your Hiring with{" "}
    //         <span className="text-primary">Oitii</span>
    //       </h1>
    //       <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
    //         Connect with top-tier talent effortlessly. Our intelligent platform
    //         matches your perfect candidates in minutes.
    //       </p>
    //       <div className="flex justify-center space-x-4">
    //         <Button size="lg" className="shadow-md">
    //           Start Posting <ArrowRight className="ml-2 h-4 w-4" />
    //         </Button>
    //         <Button variant="outline" size="lg" className="shadow-sm">
    //           Learn More <ChevronRight className="ml-2 h-4 w-4" />
    //         </Button>
    //       </div>
    //     </div>
    //     <KeyBenefits />
    //     <JobPostsPricing />
    //   </div>
    // </div>
  );
}
