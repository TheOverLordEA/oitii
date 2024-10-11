import { ChevronRight } from "lucide-react";

const companies = [
  {
    name: "Key",
    logo: "/placeholder.svg?height=40&width=40",
    employees: "11-50 employees",
    description:
      "First purpose-built professional networking & community platform",
    openPositions: 4,
    tags: [],
  },
  {
    name: "Red Collar",
    logo: "/placeholder.svg?height=40&width=40",
    employees: "51-200 employees",
    description: "Creating digital products with a human face",
    openPositions: 11,
    tags: [
      "Top 10% of responders",
      "Responds within a week",
      "B2B",
      "Early Stage",
      "Growing fast",
    ],
  },
  {
    name: "Studybuddy",
    logo: "/placeholder.svg?height=40&width=40",
    employees: "1-10 employees",
    description: "AI Tools for Students",
    openPositions: 4,
    tags: [
      "Top 5% of responders",
      "Responds within a few days",
      "Growing fast",
    ],
  },
  {
    name: "Abridge",
    logo: "/placeholder.svg?height=40&width=40",
    employees: "51-200 employees",
    description:
      "Abridge transforms conversations into clinical notes, powered by the most advanced AI in healthcare",
    openPositions: 34,
    tags: [
      "B2B",
      "Scale Stage",
      "Top Investors",
      "Valuation $500M+",
      "Growing fast",
    ],
  },
];

export default function TrendingJobs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Trending startups hiring now</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {companies.map((company, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center mb-2">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-10 h-10 mr-2"
                />
                <div>
                  <h2 className="font-bold">{company.name}</h2>
                  <p className="text-sm text-gray-500">{company.employees}</p>
                </div>
              </div>
              <p className="text-sm mb-2">{company.description}</p>
              <div className="flex flex-wrap gap-1 mb-2">
                {company.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-2 py-1 bg-pink-100 text-pink-800 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm font-medium">
                {company.openPositions} open positions
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
