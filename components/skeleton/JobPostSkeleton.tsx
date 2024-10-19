import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function JobPostSkeleton() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12" />
          <div>
            <Skeleton className="h-6 w-24 mb-2" />
            <Skeleton className="h-4 w-48" />
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" disabled>
            <Skeleton className="h-4 w-12" />
          </Button>
          <Button disabled>
            <Skeleton className="h-4 w-20" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Skeleton className="h-4 w-32 bg-pink-200" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <Skeleton className="h-5 w-24 mb-2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4 mt-1" />
          </div>
          <div>
            <Skeleton className="h-5 w-32 mb-2" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <Skeleton className="h-5 w-36 mb-2" />
            <Skeleton className="h-4 w-1/2" />
          </div>
          <div>
            <Skeleton className="h-5 w-28 mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <Skeleton className="h-5 w-40 mb-2" />
            <Skeleton className="h-4 w-1/3" />
          </div>
          <div>
            <Skeleton className="h-5 w-24 mb-2" />
            <Skeleton className="h-4 w-1/4" />
          </div>
        </div>

        <div className="mt-4">
          <Skeleton className="h-5 w-16 mb-2" />
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-8 w-20" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
