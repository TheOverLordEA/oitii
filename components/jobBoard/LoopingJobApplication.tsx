"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoopingJobApplication() {
  const [stage, setStage] = useState("initial");

  useEffect(() => {
    const animationSequence = () => {
      setTimeout(() => setStage("moving"), 0);
      setTimeout(() => setStage("clicking"), 1500);
      setTimeout(() => setStage("expanding"), 2000);
      setTimeout(() => setStage("form"), 2500);
      setTimeout(() => setStage("initial"), 6000);
    };

    animationSequence();
    const interval = setInterval(animationSequence, 6500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mb-10 lg:mb-0  bg-gray-100 p-16">
      <div className="w-full max-w-md relative h-64">
        <AnimatePresence mode="wait">
          {(stage === "initial" ||
            stage === "moving" ||
            stage === "clicking") && (
            <motion.div
              key="button"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Button className="w-full max-w-[200px]">Apply</Button>
            </motion.div>
          )}

          {(stage === "expanding" || stage === "form") && (
            <motion.div
              key="form"
              className="bg-white p-6 rounded-lg shadow-lg absolute inset-0"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">Job Application</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" readOnly />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    readOnly
                  />
                </div>
                <Button className="w-full">Submit Application</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {stage === "moving" && (
            <motion.div
              key="cursor"
              className="w-4 h-4 bg-black rounded-full absolute"
              initial={{ left: 0, top: "50%" }}
              animate={{ left: "100%", top: "50%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {stage === "clicking" && (
            <motion.div
              key="click"
              className="w-4 h-4 bg-black rounded-full absolute right-0 top-1/2"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 0.8, 1] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
