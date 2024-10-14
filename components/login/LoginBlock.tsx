"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState } from "react";
import { login } from "@/app/login/actions";

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image.";

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
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
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
                className="w-full px-3 py-2 border rounded-md"
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
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
            <button
              type="button"
              className="w-full border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition duration-300"
            >
              Login with Google
            </button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {/* {!isLoading && !error && (
              <p className="text-green-500 text-sm">
                Login successful! Redirecting...
              </p>
            )} */}
          </form>
          <div className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
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
