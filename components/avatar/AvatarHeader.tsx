import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import React from "react";

interface AvatarProps {
  //   userName: string;
  email?: string;
}

const AvatarHeader: React.FC<AvatarProps> = ({ email }) => {
  return (
    <Link href="/dashboard">
      <Avatar>
        {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
        <AvatarFallback className="bg-black text-white">
          {email?.[0].toUpperCase() ?? "A"}
        </AvatarFallback>
      </Avatar>
    </Link>
  );
};

export default AvatarHeader;
