// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
// import MetaDebugger from "@/components/metadataDebugger/MetaDataDebugger";
import type { Metadata } from "next";

// import Footer from "@/components/footer/Footer";
// import OitiiFooter from "@/components/footer/OitiiFooter";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// TODO: Alter Header to HomaPageHeader

export const metadata: Metadata = {
  openGraph: {
    title: "Oitii | Real Jobs, Real Opportunities",
    description:
      "Oitii – Discover real, verified job listings with no ghost jobs. Save time and find genuine opportunities tailored to you. Start your career search confidently with Oitii.",
    url: "https://oitii.com",
    siteName: "Oitii",
    images: [
      {
        url: "/assets/oitii-logo-opengraph.ong",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  metadataBase: new URL("https://oitii.com"),
  verification: {
    google: "n8h4bzVX8TcdwhATBUFw6AingingSz-t3nMziiDELfzaUE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <head>
        <meta
          name="google-site-verification"
          content="n8h4bzVX8TcdwhATBUFw6AingSz-t3nMziiDELfzaUE"
        />
        {/* <script
          src="https://rankai.ai/apply.js"
          data-rankai-id="cm3ylfhso00018ca0efhor268"
          crossOrigin="anonymous"
          defer
        ></script> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {children}
        <Analytics />
        {/* {process.env.NODE_ENV === "development" && <MetaDebugger />} */}
      </body>
    </html>
  );
}
