import { Rocket, Trophy, Users } from "lucide-react";

export default function KeyBenefits() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-16">
      <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
        <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <Rocket className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          Rapid Hiring
        </h3>
        <p className="text-gray-600 mb-4 text-sm">
          Reduce time-to-hire by 60% with AI-powered matching and streamlined
          recruitment.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
        <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <Users className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          Global Talent Pool
        </h3>
        <p className="text-gray-600 mb-4 text-sm">
          Access 500,000+ pre-vetted professionals across 50+ industries
          worldwide.
        </p>
      </div>
      <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
        <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <Trophy className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          Quality Candidates
        </h3>
        <p className="text-gray-600 mb-4 text-sm">
          95% candidate match rate with advanced AI-driven screening and
          matching.
        </p>
      </div>
    </div>
  );
}
