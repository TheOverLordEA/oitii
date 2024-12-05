import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const redirectPath = "/";

export default function Page() {
  return (
    <main>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <AlertCircle className="h-6 w-6" />
              Unauthorized Access
            </CardTitle>
            <CardDescription>
              {/* {message} */}
              Unothrized user
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              If you believe this is an error, please contact the administrator
              or try logging in again.
            </p>
          </CardContent>
          <CardFooter>
            <Link href={redirectPath} passHref>
              <Button variant="outline" className="w-full">
                Return to Home
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
