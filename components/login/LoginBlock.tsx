"use client";

// import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Circle, Square, Triangle } from "lucide-react";
import { Josefin_Sans } from "next/font/google";
import { createClient } from "@/utils/supabase/client";
import OneTapComponent from "@/components/google/SignInGoogle";
import { Montserrat } from "next/font/google";

import { useState } from "react";
import { login } from "@/app/login/actions";

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image.";

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function LoginBlock() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/dashboard";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const result = await login(new FormData(event.currentTarget));

    if (!result.success) {
      // setError(result.message);
      console.log(result.message);
      setShowError(true);
      if (result.message === "Invalid login credentials") {
        setErrorMessage(result.message);
      } else {
        setErrorMessage(result.message ?? "An unknown error occurred");
      }
      setIsLoading(false);
    } else {
      // Show success message briefly before redirecting
      setTimeout(() => {
        router.push(redirectTo);
      }, 1000);
    }
  };

  const handleGoogleSignIn = async () => {
    const supabase = await createClient();
    try {
      const redirectUrl =
        process.env.NODE_ENV === "development"
          ? `http://localhost:3000/auth/callback`
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
        // options: {
        //   redirectTo: `http://localhost:3000`,
        // },
      });
      console.log(data);

      if (error) throw error;

      if (data.url) {
        window.location.href = data.url;
      }
      // setUser(data.user)
    } catch (error) {
      console.error("Error signing in with Google:", error);
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
        console.log(data.url);
        window.location.href = data.url;
        return;
      }
    } catch (error) {
      console.error("Auth error:", error);
    }
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-baseline justify-center py-12 text-black">
        <div className="mx-auto grid w-[350px] gap-5">
          <div className="flex items-center justify-start flex-1 pb-2">
            <Link className="sr-only" href="/">
              Oitii
            </Link>
            <Link
              className={`tracking-wider text-4xl font-bold text-black ${josefin_sans.className} `}
              href="/"
            >
              Oitii
            </Link>
          </div>
          <div className="flex flex-col gap-5 pt-10 md:pt-20">
            <div className="grid gap-2">
              <h1 className="text-4xl font-bold text-left">Login</h1>
              <p
                className={`font-base text-balance text-base text-muted-foreground ${montserrat.className}`}
              >
                Find real opportunities!
              </p>
            </div>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="w-full px-3 py-2 border rounded-md bg-white"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-3 py-2 border rounded-md bg-white"
                />
              </div>
              {showError ? (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle className="mt-1">Error</AlertTitle>
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              ) : (
                ""
              )}
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loading loading-dots loading-md"></span>
                ) : (
                  "Login"
                )}
              </button>

              <div className="flex items-center py-5">
                <div className="border flex-1 h-[1px] bg-gray-950"></div>
                <span className="px-10 text-sm text-gray-500 uppercase ">
                  continue with google
                </span>
                <div className="border flex-1 h-[1px] bg-gray-950"></div>
              </div>
              <button
                onClick={handleGoogleSignIn}
                type="button"
                className="w-full border flex justify-center gap-5 border-gray-300 py-2 rounded-md hover:bg-gray-100 transition duration-300"
              >
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/color/48/google-logo.png"
                  alt="google-logo"
                />
                <span>Login with Google</span>
              </button>
            </form>

            {/* <OneTapComponent /> */}

            <div className="mt-4 flex flex-col gap-5 text-gray-600">
              <div className="text-center text-sm">
                <span>Log in to your Business Account? </span>
                <Link
                  href="/login/employer"
                  className="text-primary underline underline-offset-4 hover:text-primary "
                >
                  Login
                </Link>
              </div>
              <div className=" text-center text-sm">
                <span>Don't have an account? </span>
                <Link
                  href="/signup/job-seeker"
                  className="text-primary underline-offset-4 hover:text-primary underline"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative h-full w-full overflow-hidden bg-gradient-to-br from-pink-100 to-blue-100 p-8">
        <div className="absolute -left-4 -top-4 h-32 w-32 rounded-full bg-yellow-300 opacity-50" />
        <div className="absolute -bottom-4 -right-4 h-40 w-40 rounded-full bg-blue-300 opacity-50" />
        <div className="absolute left-1/4 top-1/4 h-24 w-24 rounded-lg bg-green-300 opacity-50 rotate-12" />

        <div className="relative z-10 grid grid-cols-3 gap-4">
          <div className="col-span-2 row-span-2">
            <div className="h-full w-full bg-blue-400 rounded-lg flex items-center justify-center p-8">
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3/4 h-3/4"
              >
                <path
                  d="M0,50 Q25,30 50,50 T100,50"
                  fill="none"
                  stroke="white"
                  strokeWidth="5"
                />
                <path
                  d="M0,70 Q25,50 50,70 T100,70"
                  fill="none"
                  stroke="white"
                  strokeWidth="5"
                />
              </svg>
            </div>
          </div>
          <div>
            <div className="h-full w-full bg-pink-400 rounded-full flex items-center justify-center overflow-hidden p-6">
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="w-1/2 h-1/2"
              >
                <path
                  d="M0,50 Q25,0 50,50 T100,50"
                  fill="none"
                  stroke="white"
                  strokeWidth="5"
                />
              </svg>
            </div>
          </div>
          <div>
            <div className="h-full w-full bg-yellow-400 rounded-full flex items-center justify-center overflow-hidden p-6">
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="w-1/2 h-1/2"
              >
                <path
                  d="M0,50 Q25,100 50,50 T100,50"
                  fill="none"
                  stroke="white"
                  strokeWidth="5"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Circle className="h-12 w-12 text-blue-500" />
          </div>
          <div className="flex items-center justify-center">
            <Square className="h-12 w-12 text-pink-500" />
          </div>
          <div className="flex items-center justify-center">
            <Triangle className="h-12 w-12 text-yellow-500" />
          </div>
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-950 mb-2">
            Say Goodbye to
          </h1>
          <h2 className="text-5xl font-bold text-gray-950 mb-4">
            Fake Listings!
          </h2>
          {/* <p className="mt-6 text-xl text-gray-950 leading-relaxed">
            We vet every listing to ensure you only see real, verified
            opportunities.
            <br /> */}
          <span className="font-semibold text-[#6559EF] text-lg">
            Only verified opportunities are available to you — every time!
          </span>
          {/* </p> */}
          <div className="mt-8 flex justify-center space-x-4">
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
              ✓ Authentic Employers
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
              ✓ Real Job Opportunities
            </span>
          </div>
        </div>
        {/* <div className="mt-12 text-center">
          <h2 className="text-5xl font-bold text-gray-950 mb-2">
            Find the opportunity
          </h2>
          <h2 className="text-5xl font-bold text-gray-950 mb-4">
            built for your success!
          </h2>
          <p className="mt-6 text-xl text-gray-950">
            Real jobs, real opportunities—no more wasting time on ghost
            listings.
            <br />
            Value your time and apply to roles that matter.
          </p>
        </div> */}

        <div className="absolute bottom-4 left-4 right-4 flex justify-between">
          <div className="h-8 w-8 rounded-full bg-orange-400" />
          <div className="h-8 w-8 rounded-full bg-purple-400" />
          <div className="h-8 w-8 rounded-full bg-green-400" />
        </div>
      </div>
    </div>
  );
}
