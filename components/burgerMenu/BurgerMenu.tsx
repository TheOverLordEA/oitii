"use client";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
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

  const handleBurgerClose = useCallback(
    (e?: React.MouseEvent<HTMLButtonElement>) => {
      setIsOpen(false);
    },
    []
  );

  //   const menuItems = [
  //     { href: "#discover", label: "Discover" },
  //     { href: "#job-seekers", label: "For job seekers" },
  //     { href: "#companies", label: "For companies" },
  //   ];

  return (
    <>
      {/* <Button variant="ghost" className="md:hidden block"> */}
      {/* <Button
        onClick={handleBurgerOpen}
        className="block md:hidden"
        variant="ghost"
      > */}
      <Menu className="h-8 w-8 block md:hidden" onClick={handleBurgerOpen} />
      {/* </Button> */}

      {isOpen ? (
        <BurgerMenuPanel isOpen={isOpen} onClose={handleBurgerClose} />
      ) : (
        " "
      )}
      {/* </Button> */}

      {/* {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />} */}
      {/* Overlay */}
      {/* <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-300 md:hidden",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "pointer-events-none opacity-0"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Panel */}
      {/* <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-[85%] max-w-md transform bg-white rounded-l-xl shadow-2xl transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
      {/* <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              wellfound
              <span className="text-primary">.</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div> */}

      {/* Navigation */}
      {/* <nav className="flex-grow overflow-y-auto p-6">
            <div className="space-y-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-xl font-medium group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </nav> */}

      {/* Footer */}
      {/* <div className="p-6 border-t border-gray-100">
            <Button
              className="w-full rounded-full text-lg font-semibold"
              variant="outline"
              size="lg"
            >
              Log In
            </Button>
          </div>
        </div>
      </div>  */}
    </>
  );
}
