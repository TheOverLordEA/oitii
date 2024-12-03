import Link from "next/link";
import { Josefin_Sans } from "next/font/google";

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
      <div className="w-4/5 mx-auto px-2 py-4 md:py-8">
        <div className="flex justify-between items-start md:items-center gap-5 md:gap-0 flex-col md:flex-row">
          <Link
            className={` pl-2 md:pl-40 tracking-wider text-4xl font-bold text-black ${josefin_sans.className} `}
            href="/"
          >
            Oitii
          </Link>
          <ul className="flex flex-wrap items-center pl-2 md:pl-0 text-sm font-medium text-gray-500 pr-0 md:pr-20 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="https://www.linkedin.com/company/oitii"
                className="hover:underline me-4 md:me-6"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://x.com/oitiiJobs"
                title="twitter"
                className="hover:underline me-4 md:me-6"
                target="_blank"
                rel="noopener"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://bsky.app/profile/oitii.bsky.social"
                className="hover:underline me-4 md:me-6"
                title="Bluesky"
                target="_blank"
                rel="noopener"
              >
                Bluesky
              </a>
            </li>
            <li>
              <Link
                href="/about"
                title="About"
                className="hover:underline me-4 md:me-6"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                title="Privacy Policy"
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
