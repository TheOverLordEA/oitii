import { Zap, Cloud, Hexagon, Droplet } from "lucide-react";

const TextHero = {
  h2: "we’ve got the perfect fit for your ambitions. Start your career breakthrough today! ",
};

const HeroJobs = () => {
  return (
    <div className="relative text-black w-full bg-white py-16 overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center p-8">
          <h2 className="text-sm font-semibold text-gray-500 tracking-wide uppercase mb-2">
            {TextHero.h2}
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight">
            Find what's next<span className="text-red-500">.</span>
          </h1>
        </div>
      </div>

      {/* Modified decorative elements */}
      <Zap className="absolute left-0 top-0 w-24 h-24 text-yellow-400 fill-current -translate-x-1/2 -translate-y-1/2 transform rotate-12" />
      <Cloud className="absolute left-1/4 bottom-0 w-20 h-20 text-blue-400 fill-current translate-y-1/2" />
      <Hexagon className="absolute right-1/4 top-0 w-16 h-16 text-green-500 fill-current -translate-y-1/2 rotate-45" />
      <Droplet className="absolute right-0 bottom-0 w-28 h-28 text-pink-400 fill-current translate-x-1/2 translate-y-1/2 rotate-45" />

      {/* Curved path */}
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        width="300"
        height="100"
        viewBox="0 0 300 100"
      >
        <path
          d="M0,50 C75,0 225,100 300,50"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-purple-400"
        />
      </svg>

      {/* Placeholder images */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-24 h-24 bg-orange-200 rounded-full overflow-hidden hidden md:block"></div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-24 h-24 bg-teal-200 rounded-full overflow-hidden hidden md:block"></div>

      {/* Accessibility enhancement */}
      <span className="sr-only">
        Decorative background with playful shapes including a lightning bolt,
        cloud, hexagon, and water droplet
      </span>
    </div>
  );
};

export default HeroJobs;
