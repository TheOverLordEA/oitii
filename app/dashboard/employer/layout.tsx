import { DashboardHeader } from "@/components/headers/DashboardHeader";
import { SidebarEmployer } from "@/components/sidebar/SideBarEmployer";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <DashboardHeader />
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="flex">
        <SidebarEmployer />
        <div className="flex-1 p-8">{children}</div>
      </div>
    </main>
  );
}
