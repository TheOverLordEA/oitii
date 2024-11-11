"use client";

import { useSignupStore } from "@/components/store/useSignUpStoreEmail"; // import the store
import { Mail } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function CheckEmailCard() {
  const email = useSignupStore((state) => state.email); // Access the email from Zustand store

  if (!email) {
    return (
      <div className="min-h-screen flex items-start md:items-center justify-center p-4">
        <Card className="w-full max-w-sm md:max-w-lg mt-20 md:mt-0">
          <CardContent className="py-12 px-6 flex flex-col items-center text-center">
            <div className="rounded-full bg-blue-100 p-4 mb-6">
              <Mail className="w-12 h-12 text-blue-500" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold">No email found.</h2>
              <p className="text-gray-500">Please sign up to get started.</p>
              <Link
                href="/signup"
                className="text-primary underline underline-offset-4 hover:text-primary-600"
              >
                Sign Up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-start md:items-center justify-center p-4">
      <Card className="w-full max-w-sm md:max-w-lg mt-20 md:mt-5">
        <CardContent className="pt-12 pb-8 px-4 flex flex-col items-center text-center">
          <div className="rounded-full bg-blue-50 p-4 mb-6">
            <Mail className="w-12 h-12 text-blue-500" strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-semibold tracking-tight mb-2">
            Check your email
          </h1>
          <p className="text-muted-foreground">
            We've sent you a verification link to:{" "}
            <span className="text-blue-500">{email}</span>
          </p>
          <p>Please check your inbox to verify your email.</p>
        </CardContent>
      </Card>
    </div>
  );
}
