"use client";

// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
// import { Icons } from "@/components/ui/icons"

export const description =
  "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account";

export function SignUpBlock() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleGoogleSignUp = async () => {
    const supabase = await createClient();

    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo:
            // process.env.NEXT_PUBLIC_SITE_URL + "/auth/callback"
            process.env.NEXT_DEV_SITE_URL + "/auth/callback",
          // Use environment variable for flexibility between local and production
        },
      });

      if (error) throw error;

      // Don't manually push to homepage - let the OAuth flow complete
      if (data.url) {
        // Redirect to the auth URL provided by Supabase
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Auth error:", error);
    }
  };

  // const handleGoogleSignUp = async () => {
  //   const supabase = await createClient();

  //   const { data, error } = await supabase.auth.signInWithOAuth({
  //     provider: "google",
  //     options: {
  //       redirectTo: "http://localhost:3000/auth/callback",

  //       // redirectTo: "http://oitii.com/auth/callback",
  //     },
  //   });

  //   if (data.url) {
  //     router.push("/");
  //   }
  // };

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="relative h-full w-full overflow-hidden hidden md:block">
        {/* Contrasting background */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600 via-indigo-500 to-white" />

        {/* Animated Waves */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-40"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgba(255, 255, 255, 0.3)"
              fillOpacity="1"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              className="animate-wave"
            ></path>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-32"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgba(255, 255, 255, 0.5)"
              fillOpacity="1"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,122.7C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              className="animate-wave-slow"
            ></path>
          </svg>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-75 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-pink-400 rounded-lg rotate-45 opacity-75 animate-bounce"></div>
        {/* <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-green-400 rounded-full opacity-75 animate-ping"></div> */}
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-red-400 rounded-full opacity-75 animate-pulse"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Find the job
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            made for you.
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-indigo-100">
            Browse over 130K jobs at top companies and fast-growing startups.
          </p>
        </div>
      </div>
      {/* <div className="hidden bg-muted lg:block"> */}
      {/* <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> */}
      {/* </div> */}

      {/* A a updated code */}
      <div className="w-full mt-20 md:mt-0 lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] flex items-center justify-center">
        <div className="mx-auto max-w-sm space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-black">Create Account</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Find your next opportunity!
            </p>
          </div>
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full text-black"
              disabled={isLoading}
              onClick={handleGoogleSignUp}
            >
              {/* <Icons.google className="mr-2 h-4 w-4" /> */}
              Sign up with Google
            </Button>
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-sm text-gray-500">
                  Or sign up using your email address
                </span>
              </div>
            </div>
            {/* <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  or Sign up with Email
                </span>
              </div>
            </div> */}
            <form onSubmit={onSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="full-name">Full Name</Label>
                  <Input id="full-name" placeholder="Enter text" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="mail@website.com"
                    required
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    required
                    type="password"
                    placeholder="min 8 characters"
                  />
                </div>
                <Button className="w-full" type="submit" disabled={isLoading}>
                  {isLoading &&
                    //   <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    "loading"}
                  Sign Up
                </Button>
              </div>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              By continuing you accept our{" "}
              <a
                href="#"
                className="underline underline-offset-2 hover:text-primary"
              >
                terms and conditions
              </a>{" "}
              and our{" "}
              <a
                href="#"
                className="underline underline-offset-2 hover:text-primary"
              >
                privacy policy
              </a>
              .
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="/"
                className="text-primary underline underline-offset-4 hover:text-primary"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>

        {/* <script src="https://accounts.google.com/gsi/client" async></script>
        <div
          id="g_id_onload"
          data-client_id="<client ID>"
          data-context="signin"
          data-ux_mode="popup"
          data-callback="handleSignInWithGoogle"
          data-nonce=""
          data-auto_select="true"
          data-itp_support="true"
          data-use_fedcm_for_prompt="true"
        ></div>

        <div
          className="g_id_signin"
          data-type="standard"
          data-shape="pill"
          data-theme="outline"
          data-text="signin_with"
          data-size="large"
          data-logo_alignment="left"
        ></div> */}
      </div>
    </div>
  );
}
