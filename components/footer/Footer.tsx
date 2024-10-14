import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t border-gray-200 bg-white text-black">
      <p className="text-xs text-gray-600">
        © 2023 WellShop Inc. All rights reserved.
      </p>
      <nav className="flex gap-4 sm:gap-6">
        <Link
          className="text-xs hover:underline underline-offset-4 text-gray-600"
          href="#"
        >
          Terms of Service
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4 text-gray-600"
          href="#"
        >
          Privacy
        </Link>
      </nav>
    </footer>
  );
}
