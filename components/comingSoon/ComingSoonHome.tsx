import { Instagram, Dribbble, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

export default function CompingSoonHome() {
  return (
    <div className="min-h-screen bg-green-200 flex flex-col p-8 relative overflow-hidden">
      {/* Top section */}
      <div className="flex justify-between items-start">
        <div className="flex space-x-4">
          <span className="text-2xl font-bold">Be</span>
          <Instagram size={24} />
          <Dribbble size={24} />
        </div>
        <h1 className="text-3xl font-bold">MATHUX</h1>
        <div className="w-24" /> {/* Spacer for alignment */}
      </div>

      {/* Main content */}
      <div className="flex-grow flex flex-col justify-center items-center text-center">
        <h2 className="text-6xl font-bold mb-4">Coming soon</h2>
        <p className="text-xl mb-6">Em construção</p>
        <div className="max-w-2xl text-center space-y-4">
          <p className="text-2xl font-semibold">
            Get ready for a revolutionary experience!
          </p>
          <p className="text-lg">
            Our cutting-edge platform is about to transform the way you interact
            with design. Packed with innovative features, MATHUX will empower
            you to create impactful designs like never before.
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <Button className="bg-black text-white hover:bg-gray-800">
              <Sparkles className="mr-2 h-4 w-4" /> Join Waitlist
            </Button>
          </div>
        </div>
      </div>

      {/* Circular text */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <path
              id="curve"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="transparent"
            />
            <text fontSize="9">
              <textPath xlinkHref="#curve">
                Design de Impacto • Design de Impacto •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold">V</span>
          </div>
        </div>
      </div>

      {/* Vertical text */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 -rotate-90 origin-left">
        <span className="text-xl whitespace-nowrap">Experience First</span>
      </div>

      {/* Bottom section */}
      <div className="flex justify-between items-end mt-8">
        <div className="w-4 h-4 bg-black transform rotate-45" />
        <p className="text-sm">&copy; 2021 - MATHUX</p>
      </div>
    </div>
  );
}
