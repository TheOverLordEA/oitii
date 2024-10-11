import Link from "next/link";
import { Button } from "../ui/button";

const BUTTON = {
  signIn: "Sign In",
  signUp: "Sign Up",
};

const HomePageHeader = () => {
  return (
    <header className="px-4 lg:px-6 py-12 h-16 flex items-center justify-evenly border-b border-gray-200 bg-white">
      <div className="flex justify-center items-center gap-20">
        <div className="flex items-center justify-center">
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
        <nav className="flex gap-4">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-black"
            href="/jobs"
          >
            Find Jobs
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-black"
            href="/companies/overview"
          >
            For Employers
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-black"
            href="#"
          >
            About
          </Link>
        </nav>
        <div className="flex gap-5">
          <Button className="bg-white text-black ">{BUTTON.signIn}</Button>
          <Button>{BUTTON.signUp}</Button>
        </div>
      </div>
    </header>
  );
};

export default HomePageHeader;
