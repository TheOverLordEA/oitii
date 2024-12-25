"use client";

import React from "react";
// import styled from "styled-components";
import Link from "next/link";

// const HeroContainer = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 4rem 2rem;
//   text-align: center;
//   background-color: white; /* Or your desired background */
//   min-height: 30vh; /* Ensure it takes up some space */

//   @media (min-width: 768px) {
//     padding: 6rem 4rem;
//   }
// `;

// const HeroTitle = styled.h1`
//   font-size: 1.8rem;
//   font-weight: 700;
//   margin-bottom: 2rem;
//   color: #000;

//   @media (min-width: 768px) {
//     font-size: 2.5rem;
//   }
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   width: 100%;
//   max-width: 500px; /* Limit button width on larger screens */

//   @media (min-width: 768px) {
//     flex-direction: row;
//     gap: 2rem;
//   }
// `;

// const Button = styled.a`
//   display: inline-block;
//   padding: 1rem 2rem;
//   border-radius: 8px;
//   text-decoration: none;
//   font-weight: 600;
//   text-align: center;
//   transition: background-color 0.3s ease, color 0.3s ease;
//   width: 100%; /* Full width on mobile */
//   box-sizing: border-box;

//   &:focus {
//     outline: 2px solid #007bff; /* Example focus style */
//     outline-offset: 2px;
//   }
//   @media (min-width: 768px) {
//     width: auto;
//     flex: 1;
//   }
// `;

// const PrimaryButton = styled(Button)`
//   background-color: #000;
//   color: white;

//   &:hover {
//     background-color: #333;
//   }
// `;

// const SecondaryButton = styled(Button)`
//   background-color: white;
//   color: #000;
//   border: 1px solid #000;

//   &:hover {
//     background-color: #f0f0f0;
//   }
// `;

const PageContent = {
  bannerText: "Connecting Employers with Top Talent",
};

export default function HomePageBanner() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 text-center bg-white min-h-[30vh] md:px-10 md:py-24 border-t border-solid border-b">
      <h2 className="text-2xl font-bold mb-8 text-black md:text-4xl">
        {PageContent.bannerText}
      </h2>
      <div className="flex flex-col gap-4 w-full max-w-lg md:flex-row md:gap-8">
        <Link href="/post-a-job" legacyBehavior>
          <button className="inline-block px-6 py-4 bg-black text-white hover:bg-gray-800  rounded-lg no-underline font-semibold text-center transition-colors w-full box-border focus:outline-2 focus:outline-[#007bff] focus:outline-offset-2 md:w-auto md:flex-1">
            Find talent
          </button>
        </Link>
        <Link href="/jobs" legacyBehavior>
          <button className="bg-white text-black border border-gray-400 hover:bg-gray-100 inline-block px-[2rem] py-[1rem] rounded-lg no-underline font-semibold text-center transition-colors w-full box-border focus:outline-2 focus:outline-[#007bff] focus:outline-offset-2 md:w-auto md:flex-1">
            Find your perfect job{" "}
          </button>
        </Link>
      </div>
    </section>
  );
}
