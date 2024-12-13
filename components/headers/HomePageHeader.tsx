import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { Button } from "../ui/button";
import { Josefin_Sans } from "next/font/google";
import { Lato } from "next/font/google";
import AvatarHeader from "../avatar/AvatarHeader";
import BurgerMenu from "../burgerMenu/BurgerMenu";

const BUTTON = {
  signIn: "Sign In",
  signUp: "Sign Up",
};

const LAUNCHLINK = "/coming-soon";

const navItems = [
  { name: "Jobs", href: LAUNCHLINK || "/jobs" },
  { name: "For employers", href: LAUNCHLINK || "/recruit/overview" },
  { name: "Post a Job", href: "/post-a-job" },
  // { name: "About", href: "/about" },
];

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

const HomePageHeader = async () => {
  // const router = useRouter();
  const supabase = await createClient();

  // console.log("code working");
  const { data, error } = await supabase.auth.getUser();
  console.log(data);
  if (error || !data?.user) {
    console.log("user not logged in");
  } else {
    console.log(data.user);
  }

  return (
    <header
      className={`px-4 lg:px-6 py-12 h-16 flex items-center justify-evenly bg-white sticky top-0 z-50 border-b border-gray-200`}
    >
      <div className="flex md:justify-around justify-between items-center gap-5 w-4/5 ">
        <div className="flex items-center justify-start md:justify-center flex-1">
          <Link className="sr-only" href="/" title="Oitii">
            Oitii
          </Link>
          <Link
            className={`ml-2 tracking-wider text-4xl font-bold text-black ${josefin_sans.className} `}
            href="/"
            title="Oitii"
          >
            Oitii
          </Link>
        </div>
        <nav className=" hidden md:flex flex-1 justify-center">
          <ul className="flex gap-1">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                <Link
                  className={` ${lato.className} text-md text-black transition-all duration-300 ease-in-out rounded-md border border-transparent hover:border-[#6bb36b] hover:bg-[#99ff99] hover:text-black font-medium hover:shadow-[0_0_0_4px_#99ff99;] py-2 px-4 inline-block`}
                  href={item.href}
                >
                  {item.name}
                </Link>
                {/* <div className="absolute inset-0 hover:border border-indigo-800 hover:bg-blue-500 rounded-full transition-all duration-300 ease-in-out -z-10"></div> */}
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:flex gap-5 flex-1 justify-center hidden ">
          {data.user ? (
            // <Link href="/login"> {data.user.email} </Link>
            <AvatarHeader email={data.user.email} />
          ) : (
            <>
              {" "}
              <Link href={`/login`} title="Sign In">
                <Button className="bg-white text-black transition-all ease-in-out hover:border hover:border-gray-500 hover:bg-white max-w-[75px]">
                  {BUTTON.signIn}
                </Button>
              </Link>
              <Link href={`/signup`} title="Sign Up">
                <Button className="max-w-[75px]">{BUTTON.signUp}</Button>
              </Link>
            </>
          )}
        </div>
        {/* <div className="block md:hidden"> */}

        <BurgerMenu />
        {/* </div> */}
      </div>
    </header>
  );
};

// HomePageHeader.getInitialProps = async () => {
//   const router = { pathname: "/post-a-job" };

//   console.log(router);

//   const backgroundColorClasses = {
//     "/post-a-job": "bg-gradient-to-r from-blue-200 to-cyan-200",
//   };

//   const backgroundColor =
//     backgroundColorClasses[
//       router.pathname as keyof typeof backgroundColorClasses
//     ] || "bg-white";

//   return { backgroundColor };
// };

export default HomePageHeader;
