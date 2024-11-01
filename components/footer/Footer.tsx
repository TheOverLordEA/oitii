import Link from "next/link";
import { Josefin_Sans } from "next/font/google";

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            className={`ml-2 tracking-wider text-2xl md:text-4xl font-bold text-black ${josefin_sans.className} `}
            href="/"
          >
            Oitii
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="https://www.linkedin.com/company/oitii"
                className="hover:underline me-4 md:me-6"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:underline me-4 md:me-6"
              >
                Privacy Policy
              </Link>
            </li>
            {/* <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li> */}
            {/* <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li> */}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </div>
    </footer>
  );
}
