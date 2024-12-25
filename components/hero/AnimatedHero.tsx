"use client";

import { motion } from "framer-motion";

export default function AbstractArt() {
  return (
    <div className="container mx-auto px-8 py-8 bg-striped hidden md:block">
      <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto p-8 rounded-lg">
        {/* Curved Lines */}
        <motion.div
          className="aspect-[16/9] bg-[#FFA07A] rounded-lg p-4 relative overflow-hidden"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-[#582323] rounded-lg" />
          <svg viewBox="0 0 100 56.25" className="w-full h-full relative z-10">
            <motion.path
              d="M10,28 Q25,10 40,28 Q55,46 70,28 Q85,10 100,28"
              fill="none"
              stroke="#FFE566"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,28 Q15,46 30,28 Q45,10 60,28 Q75,46 90,28"
              fill="none"
              stroke="#2D4F2D"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>

        {/* Letter H */}
        <motion.div
          className="aspect-[16/9] relative bg-[#4B0082] rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-4 bg-[#FFB4A6] rounded-lg">
            <div className="absolute inset-4 bg-[#FF47D2] rounded-lg" />
          </div>
          {/* Corner Accents */}
          {[
            "top-2 left-2",
            "top-2 right-2",
            "bottom-2 left-2",
            "bottom-2 right-2",
          ].map((position, index) => (
            <motion.div
              key={index}
              className={`absolute w-4 h-4 bg-[#FF7F50] ${position}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            />
          ))}
        </motion.div>

        {/* Tree */}
        <motion.div
          className="aspect-[16/9] bg-[#8B4513] rounded-lg flex items-center justify-center overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <svg viewBox="0 0 100 56.25" className="w-full h-full">
            {/* Trunk */}
            <motion.path
              d="M50,56 L50,30"
              fill="none"
              stroke="#F4A460"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />
            {/* Main Branches */}
            <motion.path
              d="M50,30 L35,15 M50,30 L65,15 M50,40 L35,30 M50,40 L65,30"
              fill="none"
              stroke="#F4A460"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            {/* Smaller Branches */}
            <motion.path
              d="M35,15 L30,5 M35,15 L40,5 M65,15 L60,5 M65,15 L70,5"
              fill="none"
              stroke="#F4A460"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            />
            {/* Leaves */}
            {[
              [28, 3],
              [32, 1],
              [38, 3],
              [42, 1],
              [58, 3],
              [62, 1],
              [68, 3],
              [72, 1],
              [33, 13],
              [37, 11],
              [63, 13],
              [67, 11],
              [33, 28],
              [37, 26],
              [63, 28],
              [67, 26],
            ].map((coord, index) => (
              <motion.circle
                key={index}
                cx={coord[0]}
                cy={coord[1]}
                r="2"
                fill="#98FB98"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
              />
            ))}
          </svg>
        </motion.div>

        {/* Symmetrical Shape */}
        <motion.div
          className="aspect-[16/9] bg-[#FFD700] rounded-lg p-4 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="relative w-full h-full"
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0">
              <div className="w-full h-full relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4">
                  <div
                    className="bg-[#FF4B4B] w-full h-full"
                    style={{
                      clipPath: "path('M50,0 L100,50 L50,100 L0,50 Z')",
                    }}
                  />
                  {/* Green Dots */}
                  {[0, 90, 180, 270].map((rotation, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-4 h-4 bg-[#006400] rounded-full"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `rotate(${rotation}deg) translate(150%, -50%)`,
                      }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// Add the striped background pattern
const styles = `
  .bg-striped {
  background-image: repeating-linear-gradient(
      -45deg,
      #A8D8EA,
      #A8D8EA 10px,
      #AA96DA 10px,
      #AA96DA 20px
    );
  }
`;

// Add the styles to the document
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

// "use client";

// import { motion } from "framer-motion";

// export default function AbstractArt() {
//   return (
//     <div className="container mx-auto px-8 py-2">
//       <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto">
//         {/* Curved Lines */}
//         <motion.div
//           className="aspect-[16/9] bg-[#582323] rounded-lg p-4"
//           initial={{ scale: 0.9 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <svg viewBox="0 0 100 56.25" className="w-full h-full">
//             <motion.path
//               d="M10,28 Q25,10 40,28 Q55,46 70,28 Q85,10 100,28"
//               fill="none"
//               stroke="#FFE566"
//               strokeWidth="3"
//               initial={{ pathLength: 0 }}
//               animate={{ pathLength: 1 }}
//               transition={{ duration: 2, ease: "easeInOut" }}
//             />
//             <motion.path
//               d="M0,28 Q15,46 30,28 Q45,10 60,28 Q75,46 90,28"
//               fill="none"
//               stroke="#2D4F2D"
//               strokeWidth="3"
//               initial={{ pathLength: 0 }}
//               animate={{ pathLength: 1 }}
//               transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
//             />
//           </svg>
//         </motion.div>

//         {/* Letter H */}
//         <motion.div
//           className="aspect-[16/9] relative"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <div className="absolute inset-4 bg-[#FFB4A6] rounded-lg">
//             <div className="absolute inset-4 bg-[#FF47D2] rounded-lg" />
//           </div>
//           {/* Corner Accents */}
//           {[
//             "top-2 left-2",
//             "top-2 right-2",
//             "bottom-2 left-2",
//             "bottom-2 right-2",
//           ].map((position, index) => (
//             <motion.div
//               key={index}
//               className={`absolute w-4 h-4 bg-[#FF7F50] ${position}`}
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.5 + index * 0.1 }}
//             />
//           ))}
//         </motion.div>

//         {/* Tree */}
//         <motion.div
//           className="aspect-[16/9] bg-[#B8E6E6] rounded-lg flex items-center justify-center overflow-hidden"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.3 }}
//         >
//           <svg viewBox="0 0 100 56.25" className="w-full h-full">
//             {/* Trunk */}
//             <motion.path
//               d="M50,56 L50,30"
//               fill="none"
//               stroke="#4A321E"
//               strokeWidth="4"
//               initial={{ pathLength: 0 }}
//               animate={{ pathLength: 1 }}
//               transition={{ duration: 1 }}
//             />
//             {/* Main Branches */}
//             <motion.path
//               d="M50,30 L35,15 M50,30 L65,15 M50,40 L35,30 M50,40 L65,30"
//               fill="none"
//               stroke="#4A321E"
//               strokeWidth="3"
//               initial={{ pathLength: 0 }}
//               animate={{ pathLength: 1 }}
//               transition={{ duration: 1.5, delay: 0.5 }}
//             />
//             {/* Smaller Branches */}
//             <motion.path
//               d="M35,15 L30,5 M35,15 L40,5 M65,15 L60,5 M65,15 L70,5"
//               fill="none"
//               stroke="#4A321E"
//               strokeWidth="2"
//               initial={{ pathLength: 0 }}
//               animate={{ pathLength: 1 }}
//               transition={{ duration: 1.5, delay: 1 }}
//             />
//             {/* Leaves */}
//             {[
//               [28, 3],
//               [32, 1],
//               [38, 3],
//               [42, 1],
//               [58, 3],
//               [62, 1],
//               [68, 3],
//               [72, 1],
//               [33, 13],
//               [37, 11],
//               [63, 13],
//               [67, 11],
//               [33, 28],
//               [37, 26],
//               [63, 28],
//               [67, 26],
//             ].map((coord, index) => (
//               <motion.circle
//                 key={index}
//                 cx={coord[0]}
//                 cy={coord[1]}
//                 r="2"
//                 fill="#228B22"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
//               />
//             ))}
//           </svg>
//         </motion.div>

//         {/* Symmetrical Shape */}
//         <motion.div
//           className="aspect-[16/9] bg-[#7B68EE] rounded-lg p-4 flex items-center justify-center"
//           whileHover={{ scale: 1.05 }}
//         >
//           <motion.div
//             className="relative w-full h-full"
//             initial={{ rotate: -10 }}
//             animate={{ rotate: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <div className="absolute inset-0">
//               <div className="w-full h-full relative">
//                 <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4">
//                   <div
//                     className="bg-[#FF4B4B] w-full h-full"
//                     style={{
//                       clipPath: "path('M50,0 L100,50 L50,100 L0,50 Z')",
//                     }}
//                   />
//                   {/* Green Dots */}
//                   {[0, 90, 180, 270].map((rotation, index) => (
//                     <motion.div
//                       key={index}
//                       className="absolute w-4 h-4 bg-[#90EE90] rounded-full"
//                       style={{
//                         top: "50%",
//                         left: "50%",
//                         transform: `rotate(${rotation}deg) translate(150%, -50%)`,
//                       }}
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ delay: 1 + index * 0.1 }}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function AnimatedHero() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);
//   return (
//     <>
//       {mounted && (
//         <div className="hidden lg:block relative h-[400px] ">
//           <motion.div
//             className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <AnimatedShape
//               className="bg-emerald-700 rounded-lg"
//               hoverScale={1.05}
//               rotateOnHover={15}
//             >
//               <svg
//                 viewBox="0 0 24 24"
//                 className="w-8 h-8 text-white absolute top-2 left-2"
//                 fill="currentColor"
//               >
//                 <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
//               </svg>
//             </AnimatedShape>
//             <AnimatedShape
//               className="col-span-2 bg-yellow-100 rounded-lg overflow-hidden"
//               hoverScale={1.02}
//               rotateOnHover={-5}
//             >
//               <div className="absolute inset-0 bg-stripes rotate-45"></div>
//             </AnimatedShape>
//             <AnimatedShape
//               className="row-span-2 bg-purple-200 rounded-lg"
//               hoverScale={1.1}
//               rotateOnHover={10}
//             >
//               <span className="absolute inset-0 flex items-center justify-center text-6xl font-bold">
//                 g
//               </span>
//             </AnimatedShape>
//             <AnimatedShape
//               className="bg-coral-400 rounded-lg"
//               hoverScale={1.15}
//               rotateOnHover={-15}
//             />
//             <AnimatedShape
//               className="bg-blue-300 rounded-lg"
//               hoverScale={1.08}
//               rotateOnHover={20}
//             />
//             <AnimatedShape
//               className="bg-green-200 rounded-lg"
//               hoverScale={1.12}
//               rotateOnHover={-8}
//             />
//           </motion.div>
//         </div>
//       )}
//     </>
//   );
// }

// interface AnimatedShapeProps {
//   children?: React.ReactNode;
//   className?: string;
//   hoverScale?: number;
//   rotateOnHover?: number;
// }

// function AnimatedShape({
//   children,
//   className,
//   hoverScale = 1.05,
//   rotateOnHover = 0,
// }: AnimatedShapeProps) {
//   return (
//     <motion.div
//       className={`relative ${className}`}
//       whileHover={{ scale: hoverScale, rotate: rotateOnHover }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// // Add the stripes pattern
// const styles = `
//     .bg-stripes {
//       background-image: repeating-linear-gradient(
//         45deg,
//         rgba(0,0,0,0.1),
//         rgba(0,0,0,0.1) 2px,
//         transparent 2px,
//         transparent 12px
//       );
//     }
//   `;

// // Add the styles to the document
// if (typeof document !== "undefined") {
//   const styleSheet = document.createElement("style");
//   styleSheet.textContent = styles;
//   document.head.appendChild(styleSheet);
// }
