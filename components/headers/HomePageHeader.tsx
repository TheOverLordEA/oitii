import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { Button } from "../ui/button";

const BUTTON = {
  signIn: "Sign In",
  signUp: "Sign Up",
};

const HomePageHeader = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    console.log("user not logged in");
  } else {
    console.log(data.user);
  }

  return (
    <header className="px-4 lg:px-6 py-12 h-16 flex items-center justify-evenly border-b border-gray-200 bg-white">
      <div className="flex justify-around items-center gap-20 w-4/5 ">
        <div className="flex items-center justify-center flex-1">
          <Link className="sr-only" href="/">
            Oitii
          </Link>
          <Link
            className="ml-2 text-xl sm:text-2xl font-bold text-black"
            href="/"
          >
            Oitii
          </Link>
        </div>
        <nav className="flex gap-4 flex-1 justify-center">
          <ul className="flex gap-4 ">
            <li>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4 text-black"
                href="/jobs"
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4 text-black"
                href="/companies/overview"
              >
                For Employers
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4 text-black"
                href="#"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-5 flex-1 justify-center">
          {data.user ? (
            <div> {data.user.email} </div>
          ) : (
            <>
              {" "}
              <Link href="/login">
                <Button className="bg-white text-black ">
                  {BUTTON.signIn}
                </Button>
              </Link>
              <Link href="/signup">
                <Button>{BUTTON.signUp}</Button>
              </Link>{" "}
            </>
          )}
          {/* <Link href="/login">
            <Button className="bg-white text-black ">{BUTTON.signIn}</Button>
          </Link>
          <Link href="/signup">
            <Button>{BUTTON.signUp}</Button>
          </Link> */}
        </div>
      </div>
    </header>
  );
};

export default HomePageHeader;
