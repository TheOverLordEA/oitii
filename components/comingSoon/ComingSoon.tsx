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
        </div>
      </main>
    </section>
  );
}
