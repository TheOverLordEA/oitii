import ComingSoon from "@/components/comingSoon/ComingSoon";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oitii | Coming Soon",
  description:
    "Exciting things are on the way! We’re working hard behind the scenes to bring you something special.",
};

export default function () {
  return (
    <>
      {/* <TemporaryHeader /> */}
      <ComingSoon />;
    </>
  );
}
