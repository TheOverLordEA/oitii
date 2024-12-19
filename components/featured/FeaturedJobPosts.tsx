import { Card, CardContent } from "@/components/ui/card";
import {
  ShieldCheck,
  Users,
  Target,
  Briefcase,
  BarChart3,
  AppWindowIcon as Apps,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck, // or a similar verification icon
    title: "Verified Job Posts Only",
    description:
      "Each job posting is verified to ensure legitimacy and protect candidates from scams.",
  },
  {
    icon: Users, // or a similar candidate icon
    title: "Quality Candidate Pool",
    description:
      "Access a pool of top-tier candidates, carefully vetted for skills, experience, and fit.",
  },
  {
    icon: Target, // or a similar targeting icon
    title: "Easy job management.",
    description:
      "Effortlessly manage job postings with Oitii — view applicants, edit listings, and pause posts with ease.",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description:
      "Track applications, candidate engagement, and performance with detailed reports.",
  },
  {
    icon: Briefcase, // or a similar job posting icon
    title: "Enhanced Visibility",
    description:
      "Gain enhanced visibility with verified job posts that build trust and attract the right candidates.",
  },
];

export default function FeaturedJobPosts() {
  return (
    <div className="px-4 py-8 md:py-12 mx-auto max-w-[95%] md:max-w-[80%] flex flex-col gap-5">
      <h2 className="text-2xl md:text-3xl font-thin text-black mb-8 text-left">
        What each job post includes
      </h2>
      {/* Outer container with overflow handling */}
      <div className="relative w-full">
        {/* Scrollable container */}
        <div className="flex overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:grid md:grid-cols-2 lg:grid-cols-5 gap-4 scrollbar-hide">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-solid border-gray-200 shadow-xl flex-shrink-0 pb-2 w-[280px] md:w-full"
            >
              <CardContent className="flex flex-col gap-5 pt-6 pb-1">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50">
                    <feature.icon className="w-5 h-5 text-blue-500" />
                  </div>
                </div>
                <div>
                  <h3 className="font-base text-xl mb-2">{feature.title}</h3>
                  <p className="text-base text-muted-foreground text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
