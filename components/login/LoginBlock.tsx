"use client";

// import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

import { Circle, Square, Triangle } from "lucide-react";
import { Josefin_Sans } from "next/font/google";
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
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/dashboard";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const result = await login(new FormData(event.currentTarget));

    if (result.error) {
      setError(result.error);
      setIsLoading(false);
    } else {
      // Show success message briefly before redirecting
      setTimeout(() => {
        router.push(redirectTo);
      }, 1000);
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
              className={`tracking-wider text-2xl md:text-4xl font-bold text-black ${josefin_sans.className} `}
              href="/"
            >
              Oitii
            </Link>
          </div>
          <div className="flex flex-col gap-5 pt-20">
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
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>

              <div className="flex items-center py-5">
                <div className="border flex-1 h-[1px] bg-gray-950"></div>
                <span className="px-10 text-gray-500">
                  or Login with Google
                </span>
                <div className="border flex-1 h-[1px] bg-gray-950"></div>
              </div>
              <button
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
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {/* {!isLoading && !error && (
              <p className="text-green-500 text-sm">
                Login successful! Redirecting...
              </p>
            )} */}
            </form>
            <div className="mt-4 text-center text-sm">
              <span>Don't have an account? </span>
              <Link href="/signup" className="underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div> */}

      <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-pink-100 to-blue-100 p-8">
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

        <div className="mt-12 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-2">
            Find the job
          </h2>
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            made for you.
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            Browse over 130K jobs at top companies
            <br />
            and fast-growing startups.
          </p>
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex justify-between">
          <div className="h-8 w-8 rounded-full bg-orange-400" />
          <div className="h-8 w-8 rounded-full bg-purple-400" />
          <div className="h-8 w-8 rounded-full bg-green-400" />
        </div>
      </div>
    </div>

    // <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
    //   <div className="flex items-center justify-center py-12">
    //     <div className="mx-auto grid w-[350px] gap-6">
    //       <div className="grid gap-2 text-center">
    //         <h1 className="text-3xl font-bold">Login</h1>
    //         <p className="text-balance text-muted-foreground">
    //           Enter your email below to login to your account
    //         </p>
    //       </div>
    //       <div className="grid gap-4">
    //         <div className="grid gap-2">
    //           <Label htmlFor="email">Email</Label>
    //           <Input
    //             id="email"
    //             type="email"
    //             placeholder="m@example.com"
    //             required
    //           />
    //         </div>
    //         <div className="grid gap-2">
    //           <div className="flex items-center">
    //             <Label htmlFor="password">Password</Label>
    //             <Link
    //               href="/forgot-password"
    //               className="ml-auto inline-block text-sm underline"
    //             >
    //               Forgot your password?
    //             </Link>
    //           </div>
    //           <Input id="password" type="password" required />
    //         </div>
    //         <Button type="submit" className="w-full">
    //           Login
    //         </Button>
    //         <Button variant="outline" className="w-full">
    //           Login with Google
    //         </Button>
    //       </div>
    //       <div className="mt-4 text-center text-sm">
    //         Don&apos;t have an account?{" "}
    //         <Link href="#" className="underline">
    //           Sign up
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="hidden bg-muted lg:block">
    //     <Image
    //       src="/placeholder.svg"
    //       alt="Image"
    //       width="1920"
    //       height="1080"
    //       className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
    //     />
    //   </div>

    //   <form onSubmit={handleSubmit}>
    //     {/* Form fields here */} <label htmlFor="email">Email:</label>
    //     <input id="email" name="email" type="email" required />
    //     <label htmlFor="password">Password:</label>
    //     <input id="password" name="password" type="password" required />
    //     {/* <button formAction={login}>Log in</button> */}
    //     {/* <button formAction={signup}>Sign up</button> */}
    //     <button type="submit">Log in</button>
    //     <Button>
    //       <Link href="/signup"></Link>
    //     </Button>
    //     {error && <p className="error">{error}</p>}
    //     {isLoading && <p>Logging in...</p>}
    //     {/* {!isLoading && !error && <p>Login successful! Redirecting...</p>} */}
    //   </form>
    // </div>
  );
}
