import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Profile</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
