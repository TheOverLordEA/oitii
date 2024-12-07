import { DashboardHeader } from "@/components/headers/DashboardHeader";
import { SidebarEmployer } from "@/components/sidebar/SideBarEmployer";

export default function DashboardJobSeekerLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {/* Include shared UI here e.g. a header or sidebar */}

      <DashboardHeader />
      <div className="flex">
        <SidebarEmployer />
        <div className="flex-1 p-8">{children}</div>
      </div>
    </main>
  );
}
