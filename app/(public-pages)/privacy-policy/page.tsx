import PrivacyPolicy from "@/components/privacyPolicy/PrivacyPolicy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oitii | Privacy Policy",
  description:
    "Learn how we collect, use, and protect your personal information. Our Privacy Policy explains your data rights and our commitment to safeguarding your privacy.",
};

export default function Page() {
  return <PrivacyPolicy />;
}
