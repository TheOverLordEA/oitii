"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  category: string;
}

const jobCategories = [
  { value: "latest", label: "Latest" },
  { value: "engineering", label: "Engineering" },
  { value: "finance", label: "Finance" },
  { value: "marketing", label: "Marketing" },
  { value: "healthcare", label: "Healthcare" },
  { value: "construction", label: "Construction" },
  { value: "government", label: "Government" },
  { value: "retail", label: "Retail" },
  { value: "utilities", label: "Utilities" },
];

export default function JobSearchCity({ category = "latest" }: Props) {
  const router = useRouter();
  const [city, setCity] = useState("");

  const handleCategoryChange = (value: string) => {
    router.push(`/jobs/${value}`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement city search functionality here
    console.log("Searching for jobs in:", city, "category:", category);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center text-black ">
        Unlock Your Career Potential
      </h1>
      <p className="text-center text-muted-foreground">
        Discover amazing job opportunities in your city across various
        industries
      </p>
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Select onValueChange={handleCategoryChange} defaultValue={category}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a job category" />
            </SelectTrigger>
            <SelectContent>
              {jobCategories.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1 relative">
          <Input
            type="text"
            placeholder="Enter a city in the US..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="pr-10"
          />
          <Button
            type="submit"
            size="icon"
            variant="ghost"
            className="absolute right-0 top-0 h-full"
          >
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
// import { useRouter } from "next/navigation";

// interface Props {
//   category: string;
// }

// const JobCategorySelect: React.FC<Props> = ({ category }) => {
//   const router = useRouter();

//   const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedCategory = e.target.value;
//     router.push(`/jobs/${selectedCategory}`);
//   };

//   return (
//     <>
//       <select
//         onChange={handleCategoryChange}
//         className="w-full p-2 border rounded transition duration-300 ease-in-out"
//         defaultValue={category}
//       >
//         <option value="latest">Latest</option>
//         <option value="engineering">Engineering</option>
//         <option value="finance">Finance</option>
//         <option value="marketing">Marketing</option>
//         <option value="healthcare">Healthcare</option>
//         <option value="construction">Construction</option>
//         <option value="government">Government</option>
//         <option value="retail">Retail</option>
//         <option value="utilities">Utilities</option>
//       </select>
//     </>
//   );
// };

// export default JobCategorySelect;
