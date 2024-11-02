"use client";

import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
import Link from "next/link";
import { Josefin_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

interface Props {
  isOpen: boolean;
  onClose: (e?: React.MouseEvent<HTMLElement>) => void;
}

const LAUNCHLINK = "/coming-soon";

const menuItems = [
  { href: LAUNCHLINK || "#discover", label: "Jobs" },
  { href: LAUNCHLINK || "#job-seekers", label: "For employers" },
  { href: LAUNCHLINK || "#companies", label: "Post job" },
];

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

const BurgerMenuPanel: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <div className="">
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        // onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-[85%] max-w-md transform bg-white rounded-l-xl shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute flex h-full w-[90%] flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <Link
              href="/"
              className={`text-4xl font-bold text-black ${josefin_sans.className}`}
              onClick={onClose}
            >
              Oitii
            </Link>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-grow overflow-y-auto p-6">
            <div className="space-y-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between group text-black"
                  //   onClick={onClose}
                >
                  <span className="text-xl font-medium group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenuPanel;
