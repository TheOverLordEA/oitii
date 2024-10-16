import HomePageHeader from "@/components/headers/HomePageHeader";

export default function JobsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomePageHeader />
      <main className="bg-white">{children}</main>
    </>
  );
}
