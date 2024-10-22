import HomePageHeader from "@/components/headers/HomePageHeader";
import Footer from "@/components/footer/Footer";

export default function JobsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomePageHeader />
      <>
        <main className="bg-white">{children}</main>
      </>
      <Footer />
    </>
  );
}
