import { div } from "framer-motion/client";

export default function FreeJobPost() {
  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2 ">
      <div className=" w-full overflow-hidden py-5 bg-gradient-to-r from-[#4ade80] via-[#60a5fa] to-[#a78bfa]">
        <div className="animate-scroll-right flex whitespace-nowrap">
          <div className="flex items-center gap-4 px-4 py-2 text-black font-mono animate-marquee">
            <span>Post Your First Job for Free!</span>
            <span className="font-bold">→</span>
            <span>Post Your First Job for Free!L</span>
            <span className="font-bold">→</span>
            <span>Post Your First Job for Free!</span>
            <span className="font-bold">→</span>
            <span>Post Your First Job for Free!</span>
            <span className="font-bold">→</span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center gap-4 px-4 py-2 text-black font-mono animate-marquee">
            <span>Post Your First Job for Free!L</span>
            <span className="font-bold">→</span>
            <span>Post Your First Job for Free!</span>
            <span className="font-bold">→</span>
            <span>Post Your First Job for Free!</span>
            <span className="font-bold">→</span>
            <span>Post Your First Job for Free!</span>
            <span className="font-bold">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}
