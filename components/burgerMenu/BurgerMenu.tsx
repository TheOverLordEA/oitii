"use client";
import { Menu, X, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
import { useState, useEffect, useCallback } from "react";
// import Link from "next/link";
import BurgerMenuPanel from "./BurgerMenuPanel";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when escape key is pressed
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleBurgerOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleBurgerClose = useCallback((e?: React.MouseEvent<HTMLElement>) => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <Menu className="h-8 w-8 block lg:hidden" onClick={handleBurgerOpen} />

      {isOpen ? (
        <BurgerMenuPanel isOpen={isOpen} onClose={handleBurgerClose} />
      ) : (
        " "
      )}
    </>
  );
}
