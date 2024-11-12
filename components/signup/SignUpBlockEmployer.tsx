"use client";

import Link from "next/link";
import { Github } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import { Josefin_Sans } from "next/font/google";

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function SignUpBlockEmployer() {
  const [formData, setFormData] = useState<{
    companyName: string;
    email: string;
    password: string;
  }>({
    companyName: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSignUo = async () => {};

  const handleGoogleSignUp = async () => {};

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value);

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center bg-white p-10">
        <div className="absolute top-12 left-8 block md:hidden">
          <Link
            href="/"
            className={`tracking-wider text-5xl font-bold text-black ${josefin_sans.className}`}
          >
            Oitii
          </Link>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-black">Create an account</h1>
            <p className="text-gray-500">
              Enter your business details and join us today{" "}
            </p>
          </div>
          <div className="space-y-4">
            <form className="flex flex-col gap-5">
              <div className="space-y-2">
                <Label className="text-gray-800">Company Name</Label>
                <Input
                  className=" text-black placeholder:text-zinc-400"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Company Name"
                  required
                  type="text"
                />
              </div>
              <div className="space-y-2 ">
                <Label className="text-gray-800">Email</Label>
                <Input
                  className=" text-black placeholder:text-zinc-400"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  required
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-gray-800">Password</Label>
                <Input
                  className=" text-black placeholder:text-zinc-400"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Min 6 chars (letters & symbols)"
                  required
                  type="password"
                />
              </div>
              <Button
                className="w-full bg-black"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loading loading-dots loading-md"></span>
                ) : (
                  "Sign Up"
                )}
              </Button>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-zinc-400">
                  OR CONTINUE WITH
                </span>
              </div>
            </div>
            {/* <Button
              className="w-full bg-zinc-900 text-white hover:bg-zinc-800"
              variant="outline"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub


              
            </Button> */}

            <Button
              variant="outline"
              className="w-full text-black"
              disabled={isLoading}
              onClick={handleGoogleSignUp}
            >
              {/* <Icons.google className="mr-2 h-4 w-4" /> */}
              Sign up with Google
            </Button>
          </div>
          <div className="text-center text-sm text-gray-500">
            By clicking continue, you agree to our{" "}
            <Link
              className="underline underline-offset-4 hover:text-white"
              target="_blank"
              rel="noopener"
              href="/terms-of-service"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              className="underline underline-offset-4 hover:text-white"
              href="/privacy-policy"
              target="_blank"
              rel="noopener"
            >
              Privacy Policy
            </Link>
            .
          </div>
        </div>
      </div>

      <div className="relative md:flex flex-col items-center justify-center bg-[#0c0c0c] p-10 text-white hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.1) 2px,
              rgba(255,255,255,0.1) 4px
            )`,
          }}
        />
        <Link
          href="/"
          className={`tracking-wider text-7xl font-bold text-white p-2 transition-all duration-300 ease-in-out border-2 border-transparent 
        hover:bg-white hover:text-black hover:p-5 hover:rounded hover:cursor-pointer hover:shadow-lg 
        active:scale-95 z-10 ${josefin_sans.className}`}
        >
          Oitii
        </Link>
      </div>
    </div>
  );
}
