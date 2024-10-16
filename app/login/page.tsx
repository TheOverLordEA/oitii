import LoginBlock from "@/components/login/LoginBlock";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oitii | Login",
  description: "...",
};

const Page = () => {
  return (
    <>
      <LoginBlock />
      {/* <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form> */}
    </>
  );
};

export default Page;