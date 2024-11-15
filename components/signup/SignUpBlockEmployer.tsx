"use client";

import Link from "next/link";
import { Github, Router } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignupStore } from "@/components/store/useSignUpStoreEmail"; // import the store

import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
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

  const setSignupEmail = useSignupStore((state) => state.setEmail); // get the setEmail function from the store

  const router = useRouter();

  const handleEmailSignUp = async () => {
    // Make sure createClient is properly initialized with headers
    const supabase = await createClient();
    try {
      // First check if user already exists in users_employers
      const { data: existingUser, error: checkError } = await supabase
        .from("users_employers")
        .select("*")
        .eq("email", formData.email);

      // Check if any users were found (without using .single())
      if (existingUser && existingUser.length > 0) {
        throw new Error("User already exists");
      }

      // If no existing user, proceed with signup
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        console.error("Sign-up error:", error.message);
        return false;
      }

      // Add user to users_employers table
      const { error: dbError } = await supabase.from("users_employers").insert({
        email: formData.email,
        company_name: formData.companyName.toLowerCase(),
        is_active: true,
        role: "job_seeker",
      });

      if (dbError) {
        throw new Error(dbError.message);
      }

      console.log("Added user to db");
      setSignupEmail(formData.email);
      return true;
    } catch (e) {
      console.log(e);
      await supabase.auth.signOut();
      return false;
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const supabase = await createClient();

      // Determine the correct redirect URL based on environment
      const redirectUrl =
        process.env.NODE_ENV === "development"
          ? `${process.env.NEXT_PUBLIC_DEV_SITE_URL}/auth/callback`
          : `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`;

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: redirectUrl,
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
        },
      });

      if (error) throw error;

      if (data.url) {
        // Important: This should be the last thing that happens
        window.location.href = data.url;
        return;
      }
    } catch (error) {
      console.error("Auth error:", error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value);

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const successfulSignUp = await handleEmailSignUp();

    if (!successfulSignUp) {
      setIsLoading(false);
    } else {
      setIsLoading(false);
      router.push("/check-email");
    }
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
            <form className="flex flex-col gap-5" onSubmit={onSubmit}>
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
          <div className="text-left text-gray-500 flex flex-col gap-4">
            <p className="text-xs">
              By continuing you accept our{" "}
              <Link
                className="underline underline-offset-4 hover:text-white"
                target="_blank"
                rel="noopener"
                href="/terms-of-service"
              >
                Terms of Service
              </Link>{" "}
              and our{" "}
              <Link
                className="underline underline-offset-4 hover:text-white"
                href="/privacy-policy"
                target="_blank"
                rel="noopener"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-left">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary underline underline-offset-4 hover:text-primary"
              >
                Log in
              </Link>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-left">
              Employer account?{" "}
              <Link
                href="/signup/employer"
                className="text-primary underline underline-offset-4 hover:text-primary"
              >
                Employer Account
              </Link>
            </p>
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
