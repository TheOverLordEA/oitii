import Link from "next/link";
import { Home, Search, FileText, Calendar, Settings } from "lucide-react";

export function SidebarJobSeeker() {
  return (
    <div className="pb-12 w-64">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            JobSeeker
          </h2>
          <div className="space-y-1">
            <Link
              href="/dashboard"
              className="flex items-center rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100"
            >
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/search"
              className="flex items-center rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100"
            >
              <Search className="mr-2 h-4 w-4" />
              Job Search
            </Link>
            <Link
              href="/dashboard/applications"
              className="flex items-center rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100"
            >
              <FileText className="mr-2 h-4 w-4" />
              Applications
            </Link>
            <Link
              href="/dashboard/interviews"
              className="flex items-center rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Interviews
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100"
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
