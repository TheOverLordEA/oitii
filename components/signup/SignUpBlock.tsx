"use client";

// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignupStore } from "@/components/store/useSignUpStoreEmail"; // import the store
import { Label } from "@/components/ui/label";
import { Josefin_Sans } from "next/font/google";

import { useRouter } from "next/navigation";

import { createClient } from "@/utils/supabase/client";
// import { s } from "framer-motion/client";
// import { Icons } from "@/components/ui/icons"

// export const description =
// "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account";

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export function SignUpBlock() {
  const [isLoading, setIsLoading] = useState(false);
  const setSignupEmail = useSignupStore((state) => state.setEmail); // get the setEmail function from the store

  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    password: string;
  }>({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleSignUpEmail = async () => {
    const supabase = await createClient();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        console.error("Sign-up error:", error.message); // Log the error message
        return false; // Return false if there's an error
      } else {
        console.log("Verify email");
        setSignupEmail(formData.email);
        return true;
      }

      // // If no error, sign-up was successful
      // console.log("Sign-up successful:", data.user?.email_confirmed_at);

      // if (!data.user?.email_confirmed_at) {
      //   console.log("verify email");
      //   // await supabase.auth.signOut();

      //   console.log("Redirect user to verify email page");
      //   // return true;
      // } else {
      //   return true;
      // }
    } catch (e) {
      console.log(e);
      return false;
    }
  };

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

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) throw userError;

      const userEmail = user?.email;

      const { data: existingUser, error: checkError } = await supabase
        .from("users_job_seekers")
        .select("email")
        .eq("email", userEmail)
        .single();

      if (checkError) throw checkError;

      if (!existingUser) {
        const { error: insertError } = await supabase
          .from("users_job_seekers")
          .insert([{ email: userEmail }]); // Insert email if not already in the table

        if (insertError) throw insertError;

        console.log("User email added to users_job_seekers:", userEmail);
      } else {
        console.log(
          "User email already exists in users_job_seekers:",
          userEmail
        );
      }

      // Don't manually push to homepage - let the OAuth flow complete
      if (data.url) {
        // Redirect to the auth URL provided by Supabase
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Auth error:", error);
    }
  };

  // async function onSubmit(event: React.SyntheticEvent) {
  //   event.preventDefault();
  //   setIsLoading(true);

  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // Destructure name and value from the event target
    console.log(name, value);

    setFormData((prevState) => ({
      ...prevState, // Keep previous state
      [name]: value, // Update the field based on the name attribute
    }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // console.log("Email:", formData.email);
    // console.log("Password:", formData.password);

    setIsLoading(true);

    const successfulSignUp = await handleSignUpEmail(); // Handle your sign-up logic here (e.g., call to API)

    if (!successfulSignUp) {
      setIsLoading(false);
      console.log("Unsuccessful signUp");
    } else {
      setIsLoading(false);
      router.push("/check-email");
    }
  };

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Say Goodbye to
            <br className="my-5" />
            Fake Listings Forever!
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-indigo-100 mt-5">
            Explore real job opportunities no ghost jobs, no wasting time on
            fake listings. Only genuine openings with Oitii!{" "}
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
      <div className="w-full lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] flex items-center justify-center relative">
        <div className="absolute top-5 left-5 md:top-5 md:left-10">
          <Link
            href="/"
            className={`tracking-wider text-4xl font-bold text-black ${josefin_sans.className}`}
          >
            Oitii
          </Link>
        </div>
        <div className="mx-auto mt-28 md:mt-0 max-w-sm space-y-6">
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

            <form onSubmit={onSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="full-name" className="text-gray-800">
                    Full Name
                  </Label>
                  <Input
                    id="full-name"
                    name="name"
                    placeholder="Enter text"
                    required
                    className="text-black"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-800">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="mail@website.com"
                    required
                    className="text-black"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-800">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    value={formData.password}
                    required
                    className="text-black"
                    type="password"
                    onChange={handleInputChange}
                    placeholder="Min 6 chars (letters & symbols)"
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
              </div>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              By continuing you accept our{" "}
              <a
                href="/terms-of-service"
                target="_blank"
                rel="noopener"
                className="underline underline-offset-2 hover:text-primary"
              >
                Terms of Service
              </a>{" "}
              and our{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener"
                className="underline underline-offset-2 hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary underline underline-offset-4 hover:text-primary"
              >
                Log in
              </Link>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
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
