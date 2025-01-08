import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles } from "lucide-react";

export default function JobPosting() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-xl">
        <CardContent className="pt-6 px-6">
          <div className="flex justify-center mb-2">
            <div className="text-blue-500">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl font-bold tracking-tight">
              Find your next
              <br />
              great hire
            </h1>
            <p className="text-muted-foreground">
              80% of jobs get a qualified applicant in one day
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="jobTitle" className="flex items-center gap-2">
                Job title
                <span className="text-muted-foreground hover:text-foreground cursor-help rounded-full border w-4 h-4 inline-flex items-center justify-center text-xs">
                  ?
                </span>
              </Label>
              <Input
                id="jobTitle"
                placeholder="e.g. Software Engineer"
                className="w-full"
              />
            </div>

            <div className="space-y-3">
              <Button className="w-full" size="lg">
                <Sparkles className="w-4 h-4 mr-2" />
                Write with AI
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                Write on my own
              </Button>
            </div>

            <div className="text-center space-y-2 text-sm text-muted-foreground">
              <p>
                If you write with AI, we'll use the job title and details from
                your company page to suggest a job post.{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Learn more
                </a>
              </p>
              <p>
                Limits may apply to free job posts.{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  View our policy
                </a>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
