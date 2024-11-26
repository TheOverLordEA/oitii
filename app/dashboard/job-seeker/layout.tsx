import { DashboardHeader } from "@/components/headers/DashboardHeader";

export default function DashboardJobSeekerLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {/* Include shared UI here e.g. a header or sidebar */}

      <DashboardHeader />

      <div>{children}</div>
    </main>
  );
}
