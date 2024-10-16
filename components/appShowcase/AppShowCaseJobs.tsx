"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Mock data for app icons
const appIcons = Array(50)
  .fill(null)
  .map((_, i) => ({
    id: i,
    color: `rgb(${Math.random() * 255},${Math.random() * 255},${
      Math.random() * 255
    })`,
  }));

export default function AppShowcaseJobs() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScrollPosition(
        (prevPosition) => (prevPosition + 1) % (appIcons.length * 60)
      );
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Apps section */}
      <section className="py-16 overflow-hidden">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Apps for anything else
        </h2>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          Shopify offers all the essential tools for business, but if your
          business calls for something extra, you have the Shopify App Store —
          with 8,000+ commercial apps for whatever specialized features you
          might need.
        </p>
        <motion.div
          className="flex space-x-4 py-4"
          animate={{ x: -scrollPosition }}
          transition={{ type: "tween", ease: "linear" }}
        >
          {appIcons.concat(appIcons).map((icon, index) => (
            <div
              key={index}
              className="w-12 h-12 rounded-xl flex-shrink-0"
              style={{ backgroundColor: icon.color }}
            />
          ))}
        </motion.div>
      </section>

      {/* Developers section */}
      {/* <section className="py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            By developers, for developers
          </h2>
          <p className="text-gray-400 text-center mb-8">
            APIs, SDKs, and tools empower devs and partners to build the apps,
            themes, and custom storefronts businesses are looking for.
          </p>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 opacity-20 blur-3xl"></div>
            <div className="relative bg-gray-800 rounded-lg p-4 shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900 rounded p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="text-green-400 text-sm">
                    <code>{`
$ npm install @shopify/app
$ shopify app create
...
Your app is ready!
                    `}</code>
                  </pre>
                </div>
                <div className="bg-gray-900 rounded p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="text-blue-400 text-sm">
                    <code>{`
import { shopifyApi } from "@shopify/shopify-api";

const shopify = shopifyApi({
  // Your config here
});
                    `}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// // Mock data for app icons
// const appIcons = Array(50)
//   .fill(null)
//   .map((_, i) => ({
//     id: i,
//     color: `rgb(${Math.random() * 255},${Math.random() * 255},${
//       Math.random() * 255
//     })`,
//   }));

// export default function AppShowcaseJobs() {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setScrollPosition(
//         (prevPosition) => (prevPosition + 1) % (appIcons.length * 60)
//       );
//     }, 50);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="bg-gray-900 text-white min-h-screen">
//       {/* Apps section */}
//       <section className="py-16 overflow-hidden">
//         <h2 className="text-3xl font-bold mb-4 text-center">
//           Apps for anything else
//         </h2>
//         <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
//           Shopify offers all the essential tools for business, but if your
//           business calls for something extra, you have the Shopify App Store —
//           with 8,000+ commercial apps for whatever specialized features you
//           might need.
//         </p>
//         <motion.div
//           className="flex space-x-4 py-4"
//           animate={{ x: -scrollPosition }}
//           transition={{ type: "tween", ease: "linear" }}
//         >
//           {appIcons.concat(appIcons).map((icon, index) => (
//             <div
//               key={index}
//               className="w-12 h-12 rounded-xl flex-shrink-0"
//               style={{ backgroundColor: icon.color }}
//             />
//           ))}
//         </motion.div>
//       </section>

//       {/* Developers section */}
//       <section className="py-16 relative overflow-hidden">
//         <div className="max-w-4xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-4 text-center">
//             By developers, for developers
//           </h2>
//           <p className="text-gray-400 text-center mb-8">
//             APIs, SDKs, and tools empower devs and partners to build the apps,
//             themes, and custom storefronts businesses are looking for.
//           </p>
//           <div className="relative">
//             <div className="absolute inset-0 bg-blue-500 opacity-20 blur-3xl"></div>
//             <div className="relative bg-gray-800 rounded-lg p-4 shadow-lg">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-gray-900 rounded p-4">
//                   <div className="flex items-center space-x-2 mb-2">
//                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                   </div>
//                   <pre className="text-green-400 text-sm">
//                     <code>{`
// $ npm install @shopify/app
// $ shopify app create
// ...
// Your app is ready!
//                     `}</code>
//                   </pre>
//                 </div>
//                 <div className="bg-gray-900 rounded p-4">
//                   <div className="flex items-center space-x-2 mb-2">
//                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                   </div>
//                   <pre className="text-blue-400 text-sm">
//                     <code>{`
// import { shopifyApi } from "@shopify/shopify-api";

// const shopify = shopifyApi({
//   // Your config here
// });
//                     `}</code>
//                   </pre>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
