"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import JobPreview from "../jobPreview/JobPreview";
import EditJob from "./EditJob";

export default function JobPosting() {
  const [isEditing, setIsEditing] = useState(true);

  const handleToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Warning Banner */}
      <div className="bg-destructive/20 p-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <X className="w-4 h-4" />
          <span>Don't forget to verify your email!</span>
          <Button variant="link" className="text-blue-600 p-0 h-auto">
            Resend email
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 border-r p-4 space-y-4 hidden lg:block">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Jobs</h2>
            {/* <Button variant="outline" size="sm">
              + Post Job
            </Button> */}
          </div>

          <Input type="search" placeholder="Search by job" className="w-full" />

          <div className="flex border rounded-lg">
            <button className="flex-1 p-2 text-sm text-center border-r">
              Active (0)
            </button>
            <button className="flex-1 p-2 text-sm text-center bg-muted">
              Drafts (0)
            </button>
          </div>

          <div className="bg-muted p-2 rounded-lg">New Job Posting</div>

          <div className="space-y-2 text-center py-4">
            <h3 className="font-medium">Post a job for free</h3>
            <p className="text-sm text-muted-foreground">
              We have a global network of over 3.5M active job seekers. Let them
              know you're hiring.
            </p>
            <Button className="w-full" variant="default">
              Post a job
            </Button>
            {/* <Button className="w-full" variant="outline">
              Connect ATS
            </Button> */}
          </div>
        </div>

        {/* Main Form Area */}
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">New Job Posting</h1>
            <div className="space-x-2">
              <Button variant="outline">Save draft</Button>
              <Button>Publish</Button>
            </div>
          </div>

          <Tabs defaultValue="edit" className="w-full">
            <TabsList>
              <TabsTrigger value="overview" onClick={handleToggle}>
                Preview
              </TabsTrigger>
              <TabsTrigger value="edit" onClick={handleToggle}>
                Edit Job
              </TabsTrigger>
              {/* <TabsTrigger value="questions">
                Applicants Questions
                <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded">
                  NEW
                </span>
              </TabsTrigger> */}
            </TabsList>
          </Tabs>

          {isEditing ? <EditJob /> : <JobPreview />}

          <EditJob />
        </div>
      </div>
    </div>
  );
}

//   title: string;
//   company: string;
//   location: string;
//   employmentType: "full-time" | "part-time" | "contract";
//   workplaceType: "remote" | "hybrid" | "on-site";
//   experienceLevel: "entry" | "mid-level" | "senior";
//   salaryRange: {
//     min: number;
//     max: number;
//   };
//   description: string;
//   requirements: string;
//   benefits: string;
//   applicationUrl: string;
//   visaSponsorship: boolean;
// }

// // JobPostForm.tsx
// import React from "react";
// import { useForm as useHookForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { Switch } from "@/components/ui/switch";

// const formSchema = z.object({
//   title: z.string().min(3, "Job title must be at least 3 characters"),
//   company: z.string().min(2, "Company name must be at least 2 characters"),
//   location: z.string().min(2, "Location is required"),
//   employmentType: z.enum(["full-time", "part-time", "contract"]),
//   workplaceType: z.enum(["remote", "hybrid", "on-site"]),
//   experienceLevel: z.enum(["entry", "mid-level", "senior"]),
//   salaryRange: z
//     .object({
//       min: z.number().min(0, "Minimum salary must be positive"),
//       max: z.number().min(0, "Maximum salary must be positive"),
//     })
//     .refine((data) => data.max > data.min, {
//       message: "Maximum salary must be greater than minimum salary",
//       path: ["max"],
//     }),
//   description: z
//     .string()
//     .min(50, "Job description must be at least 50 characters"),
//   requirements: z
//     .string()
//     .min(30, "Requirements must be at least 30 characters"),
//   benefits: z.string().min(20, "Benefits must be at least 20 characters"),
//   applicationUrl: z.string().url("Must be a valid URL"),
//   visaSponsorship: z.boolean(),
// });

// const JobPostWrapper = () => {
//   const form = useHookForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       title: "",
//       company: "",
//       location: "",
//       employmentType: "full-time",
//       workplaceType: "on-site",
//       experienceLevel: "mid-level",
//       salaryRange: {
//         min: 0,
//         max: 0,
//       },
//       description: "",
//       requirements: "",
//       benefits: "",
//       applicationUrl: "",
//       visaSponsorship: false,
//     },
//   });

//   const onSubmit = async (data: z.infer<typeof formSchema>) => {
//     try {
//       // Here you would typically make an API call to save the job posting
//       console.log("Form submitted:", data);
//       // Example API call:
//       // await createJobPosting(data);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Job Title */}
//           <FormField
//             control={form.control}
//             name="title"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Job Title</FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder="e.g. Senior Software Engineer"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Company Name */}
//           <FormField
//             control={form.control}
//             name="company"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Company Name</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Your company name" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Location */}
//           <FormField
//             control={form.control}
//             name="location"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Location</FormLabel>
//                 <FormControl>
//                   <Input placeholder="e.g. New York, NY" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Employment Type */}
//           <FormField
//             control={form.control}
//             name="employmentType"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Employment Type</FormLabel>
//                 <Select
//                   onValueChange={field.onChange}
//                   defaultValue={field.value}
//                 >
//                   <FormControl>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select employment type" />
//                     </SelectTrigger>
//                   </FormControl>
//                   <SelectContent>
//                     <SelectItem value="full-time">Full-time</SelectItem>
//                     <SelectItem value="part-time">Part-time</SelectItem>
//                     <SelectItem value="contract">Contract</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Workplace Type */}
//           <FormField
//             control={form.control}
//             name="workplaceType"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Workplace Type</FormLabel>
//                 <Select
//                   onValueChange={field.onChange}
//                   defaultValue={field.value}
//                 >
//                   <FormControl>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select workplace type" />
//                     </SelectTrigger>
//                   </FormControl>
//                   <SelectContent>
//                     <SelectItem value="remote">Remote</SelectItem>
//                     <SelectItem value="hybrid">Hybrid</SelectItem>
//                     <SelectItem value="on-site">On-site</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Experience Level */}
//           <FormField
//             control={form.control}
//             name="experienceLevel"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Experience Level</FormLabel>
//                 <Select
//                   onValueChange={field.onChange}
//                   defaultValue={field.value}
//                 >
//                   <FormControl>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select experience level" />
//                     </SelectTrigger>
//                   </FormControl>
//                   <SelectContent>
//                     <SelectItem value="entry">Entry Level</SelectItem>
//                     <SelectItem value="mid-level">Mid Level</SelectItem>
//                     <SelectItem value="senior">Senior Level</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Salary Range - Min */}
//           <FormField
//             control={form.control}
//             name="salaryRange.min"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Minimum Salary</FormLabel>
//                 <FormControl>
//                   <Input
//                     type="number"
//                     placeholder="e.g. 50000"
//                     {...field}
//                     onChange={(e) => field.onChange(Number(e.target.value))}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Salary Range - Max */}
//           <FormField
//             control={form.control}
//             name="salaryRange.max"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Maximum Salary</FormLabel>
//                 <FormControl>
//                   <Input
//                     type="number"
//                     placeholder="e.g. 80000"
//                     {...field}
//                     onChange={(e) => field.onChange(Number(e.target.value))}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>

//         {/* Job Description */}
//         <FormField
//           control={form.control}
//           name="description"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Job Description</FormLabel>
//               <FormControl>
//                 <Textarea
//                   placeholder="Describe the role and responsibilities..."
//                   className="min-h-[150px]"
//                   {...field}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Requirements */}
//         <FormField
//           control={form.control}
//           name="requirements"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Requirements</FormLabel>
//               <FormControl>
//                 <Textarea
//                   placeholder="List the required qualifications and skills..."
//                   className="min-h-[100px]"
//                   {...field}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Benefits */}
//         <FormField
//           control={form.control}
//           name="benefits"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Benefits</FormLabel>
//               <FormControl>
//                 <Textarea
//                   placeholder="List the benefits and perks..."
//                   className="min-h-[100px]"
//                   {...field}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Application URL */}
//         <FormField
//           control={form.control}
//           name="applicationUrl"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Application URL</FormLabel>
//               <FormControl>
//                 <Input type="url" placeholder="https://..." {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Visa Sponsorship */}
//         <FormField
//           control={form.control}
//           name="visaSponsorship"
//           render={({ field }) => (
//             <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
//               <div className="space-y-0.5">
//                 <FormLabel className="text-base">
//                   Visa Sponsorship Available
//                 </FormLabel>
//               </div>
//               <FormControl>
//                 <Switch
//                   checked={field.value}
//                   onCheckedChange={field.onChange}
//                 />
//               </FormControl>
//             </FormItem>
//           )}
//         />

//         <Button type="submit" className="w-full">
//           Post Job
//         </Button>
//       </form>
//     </Form>
//   );
// };

// export default JobPostWrapper;
