"use client";
import { useRouter } from "next/navigation";

interface Props {
  category: string;
}

const JobCategorySelect: React.FC<Props> = ({ category }) => {
  const router = useRouter();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    router.push(`/jobs/${selectedCategory}`);
  };

  return (
    <select
      onChange={handleCategoryChange}
      className="w-full p-2 border rounded transition duration-300 ease-in-out"
      defaultValue={category}
    >
      <option value="latest">Latest</option>
      <option value="engineering">Engineering</option>
      <option value="finance">Finance</option>
      <option value="marketing">Marketing</option>
      <option value="healthcare">Healthcare</option>
      <option value="construction">Construction</option>
      <option value="government">Government</option>
      <option value="retail">Retail</option>
      <option value="utilities">Utilities</option>
    </select>
  );
};

export default JobCategorySelect;
