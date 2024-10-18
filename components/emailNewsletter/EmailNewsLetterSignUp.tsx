"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { div } from "framer-motion/client";

export default function EmailNewsLetterSignUp() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Submitted email:", email);
    // Reset the form
    setEmail("");
  };

  return (
    <div className="p-2">
      <div className="w-full p-6 bg-[#99ff99] rounded-xl">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-black">
          <h2 className="text-5xl font-bold leading-tight text-center w-2/5">
            Stay ahead in marketing
          </h2>
          <div className="w-1/2">
            <p className="text-xl mb-6">
              Get the <span className="font-semibold">weekly newsletter</span>{" "}
              sending thousands of marketers the latest marketing news,
              resources, and guides.
            </p>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="flex gap-5 h-12">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow rounded-2xl p-2 px-5 h-full bg-white text-black placeholder-blue-200 hover:border hover:border-green-500 focus:border-teal focus:outline-none focus:ring-0"
                  aria-label="Email address"
                />
                <Button
                  type="submit"
                  className="rounded-2xl bg-black hover:bg-gray-800 h-full text-white font-semibold px-6 py-2"
                >
                  Subscribe
                </Button>
              </div>
            </form>
            <p className="text-sm text-black">
              Unsubscribe anytime, no hard feelings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
