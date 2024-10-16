"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

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
    <div className="w-full mx-auto p-6">
      <div className="max-w-80">
        <h2 className="text-4xl font-bold mb-4">Stay ahead in marketing</h2>
        <div>
        <p className="text-lg mb-6">
          Get the <span className="font-semibold">weekly newsletter</span>{" "}
          sending thousands of marketers the latest marketing news, resources,
          and guides.
        </p>
        </div>
    <div>
    <form onSubmit={handleSubmit} className="mb-4">
          <div className="flex">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow rounded-r-none"
              aria-label="Email address"
            />
            <Button
              type="submit"
              className="rounded-l-none bg-black hover:bg-gray-800 text-white"
            >
              Join for $0
            </Button>
          </div>
        </form>
        <p className="text-sm text-gray-500">
          Unsubscribe anytime, no hard feelings.
        </p>
    </div>
       
      </div>
    </div>
  );
}
