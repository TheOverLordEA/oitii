"use client";

import Link from "next/link";

import { Josefin_Sans } from "next/font/google";

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function ComingSoon() {
  return (
    <section className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <header className="p-6 flex justify-center items-center">
        <div className="md:w-8/12 flex justify-start w-full">
          <Link
            className={`ml-2 tracking-wider text-4xl font-bold text-black ${josefin_sans.className} `}
            href="/"
          >
            Oitii
          </Link>
        </div>
      </header>
      <main className="min-h-screen w-full flex items-start md:items-center justify-center p-8">
        <div className="max-w-4xl w-full mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col gap-2 pt-0 md:pt-0">
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-xl text-muted-foreground uppercase tracking-wide text-gray-800">
                all features are
              </h2>
              <h1 className=" text-8xl md:text-6xl font-bold py-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Coming Soon
              </h1>
            </div>
            <p className=" text-2xl md:text-xl text-muted-foreground text-gray-800">
              Avaliable next week.
            </p>
          </div>
          <div className="hidden md:block md:relative">
            <div className="aspect-square rounded-full bg-[#B8E1DD] relative overflow-hidden">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="100" cy="100" r="100" fill="#B8E1DD" />

                {/* Calendar */}
                <rect
                  x="50"
                  y="60"
                  width="100"
                  height="90"
                  rx="4"
                  fill="#FFFFFF"
                />
                <rect
                  x="50"
                  y="60"
                  width="100"
                  height="20"
                  rx="4"
                  fill="#FF6347"
                />
                <rect
                  x="60"
                  y="90"
                  width="20"
                  height="20"
                  rx="2"
                  fill="#FF6347"
                />
                <rect
                  x="90"
                  y="90"
                  width="20"
                  height="20"
                  rx="2"
                  fill="#E0E0E0"
                />
                <rect
                  x="120"
                  y="90"
                  width="20"
                  height="20"
                  rx="2"
                  fill="#E0E0E0"
                />
                <rect
                  x="60"
                  y="120"
                  width="20"
                  height="20"
                  rx="2"
                  fill="#E0E0E0"
                />
                <rect
                  x="90"
                  y="120"
                  width="20"
                  height="20"
                  rx="2"
                  fill="#E0E0E0"
                />
                <rect
                  x="120"
                  y="120"
                  width="20"
                  height="20"
                  rx="2"
                  fill="#E0E0E0"
                />

                {/* Clock */}
                <circle cx="160" cy="40" r="20" fill="#FFFFFF" />
                <path
                  d="M160 25V40H175"
                  stroke="#FF6347"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Stars/Confetti */}
                <path
                  d="M30 30L35 35M35 30L30 35"
                  stroke="#FFD700"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M170 170L175 175M175 170L170 175"
                  stroke="#FFD700"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="40" cy="160" r="3" fill="#FFD700" />
                <circle cx="180" cy="70" r="3" fill="#FFD700" />
                <path
                  d="M80 25L85 30L80 35"
                  stroke="#FFD700"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M120 175L125 180L120 185"
                  stroke="#FFD700"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
