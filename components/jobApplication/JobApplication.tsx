"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useJobAppStore } from "../store/useJobAppStore";

interface JobApplicationProps {
  handleJobApply: () => void;
}

const handleStopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
  e.stopPropagation();
};

const JobApplication: React.FC<JobApplicationProps> = ({ handleJobApply }) => {
  const jobAppStore = useJobAppStore((state) => state.selectedJob);
  const _hasHydrated = useJobAppStore((state) => state._hasHydrated);

  if (!_hasHydrated) {
    return "loading...";
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleJobApply}
    >
      <Card
        className="w-full max-w-4xl mx-auto relative"
        onClick={handleStopPropagation}
      >
        <Button
          size="icon"
          variant="ghost"
          onClick={handleJobApply}
          className="absolute -top-2 -right-2 bg-white rounded-full"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
        <CardContent className="p-0">
          <div className="grid md:grid-cols-[300px_1fr]">
            <div className="bg-muted p-6 space-y-4">
              <CardTitle>Apply To:</CardTitle>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center">
                    <svg
                      className=" w-6 h-6 text-pink-500"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" />
                      <path d="M13.5 14.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" />
                      <path d="M19.5 21a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" />
                      <path d="M8.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg">
                    {jobAppStore?.company}
                  </h3>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold">{jobAppStore?.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {jobAppStore?.location}
                  </p>
                  <p className="text-sm text-muted-foreground">Full Time</p>
                  <p className="text-sm text-muted-foreground">
                    Visa Sponsorship: Not available
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <CardTitle>Your Application</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Complete the fields below or{" "}
                <a href="#" className="text-primary hover:underline">
                  Log in
                </a>{" "}
                with your account to apply.
              </p>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="full-name">Full Name*</Label>
                  <Input id="full-name" placeholder="Jane Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email*</Label>
                  <Input
                    id="email"
                    placeholder="mail@website.com"
                    required
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Set a Password*</Label>
                  <Input
                    id="password"
                    placeholder="min 8 characters"
                    required
                    type="password"
                  />
                  <p className="text-xs text-muted-foreground">
                    Create a password to protect and access your account
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password*</Label>
                  <Input
                    id="confirm-password"
                    placeholder="repeat password"
                    required
                    type="password"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Set Your Location*</Label>
                  <div className="flex space-x-2">
                    <Input
                      className="flex-1"
                      id="location"
                      placeholder="e.g. San Francisco"
                      required
                    />
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remote" />
                      <label
                        htmlFor="remote"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I'm open to work remotely
                      </label>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of experience*</Label>
                    <Select>
                      <SelectTrigger id="experience">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5+">5+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="salary">Desired Salary*</Label>
                    <Input
                      id="salary"
                      placeholder="enter amount in USD"
                      required
                      type="number"
                    />
                  </div>
                </div>
                <Button className="w-full" type="submit">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobApplication;
