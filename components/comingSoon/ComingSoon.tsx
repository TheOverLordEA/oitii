"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { SubscriberType } from "@/types/newsletter";

export default function ComingSoon() {
  // const [email, setEmail] = useState("");
  const [type, setType] = useState<SubscriberType>("user");
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    company_name: "",
    industry: "",
    size: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  // Here you would typically send the email to your backend
  //   console.log("Submitted email:", email);
  //   setEmail("");
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const payload = {
      type,
      email: formData.email,
      ...(type === "user"
        ? { name: formData.name }
        : {
            company_name: formData.company_name,
            industry: formData.industry,
            size: formData.size,
          }),
    };

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error);

      setStatus("success");
      setMessage(data.message);
      setFormData({
        email: "",
        name: "",
        company_name: "",
        industry: "",
        size: "",
      });
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="inline-block w-8 h-8 bg-white rounded-full mr-2"></span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Payment
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Account
              </a>
            </li>
          </ul>
        </nav>
        <Button variant="outline" className="bg-gray-800 text-white">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.5 12.5c-1.03 0-1.9.62-2.29 1.5h-3.42c-.39-.88-1.26-1.5-2.29-1.5s-1.9.62-2.29 1.5H3.79c-.39-.88-1.26-1.5-2.29-1.5a2.5 2.5 0 000 5c1.03 0 1.9-.62 2.29-1.5h3.42c.39.88 1.26 1.5 2.29 1.5s1.9-.62 2.29-1.5h3.42c.39.88 1.26 1.5 2.29 1.5a2.5 2.5 0 000-5zM17.5 16a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
          </svg>
          App Store
        </Button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-6xl font-bold mb-4 text-center">
          <span className="text-green-400">Com</span>
          <span className="text-blue-400">ing </span>
          <span className="text-purple-400">So</span>
          <span className="text-pink-400">on</span>
        </h1>
        <p className="text-gray-400 text-center mb-8 max-w-md">
          From automation of people processes to creating an engaged and driven
          culture.
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="flex">
            <Input
              type="email"
              placeholder="Please enter your email address"
              value={formData.email}
              onChange={handleInputChange}
              className="flex-grow mr-2 bg-gray-800 text-white border-gray-700"
              required
            />
            <Button
              type="submit"
              className="bg-white text-gray-900 hover:bg-gray-200"
            >
              Notify Me
            </Button>
          </div>
        </form>
        <p className="mt-4 text-gray-500">- Notify me when App is launched -</p>
      </main>

      <footer className="p-4 flex justify-between items-center text-gray-500">
        <a href="#" className="hover:text-gray-300">
          Privacy Policy
        </a>
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-300">
            Facebook
          </a>
          <a href="#" className="hover:text-gray-300">
            Instagram
          </a>
          <a href="#" className="hover:text-gray-300">
            LinkedIn
          </a>
        </div>
      </footer>
    </section>
  );
}
