"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Josefin_Sans } from "next/font/google";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function OitiiFooter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the newsletter signup
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-lime-200 p-8 rounded-lg max-w-[80%] mx-auto my-0">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <Link className="sr-only" href="/">
            Oitii
          </Link>
          <Link
            className={`ml-2 tracking-wider text-2xl md:text-4xl font-bold text-black ${josefin_sans.className} `}
            href="/"
          >
            Oitii
          </Link>
          {/* <h2 className="text-4xl font-bold mb-2 flex items-center">Oitii</h2> */}
        </div>

        <div className="flex justify-between">
          <div className="mb-8">
            <p className="text-center mb-4">
              Sign up to our newsletter for exclusive content:
            </p>
            <form onSubmit={handleSubmit} className="flex justify-center">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-64 mr-2 rounded-full"
                aria-label="Email for newsletter"
              />
              <Button
                type="submit"
                className="bg-purple-400 hover:bg-purple-500 text-white rounded-full px-6"
              >
                Submit
              </Button>
            </form>
          </div>

          <nav className="flex justify-center space-x-6">
            <a href="#imprint" className="hover:underline">
              Imprint
            </a>
            <a href="#privacy" className="hover:underline">
              Privacy
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
