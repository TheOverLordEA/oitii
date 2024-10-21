import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, MapPin, DollarSign, Clock } from "lucide-react";

const Page = ({ params }: { params: { category: string } }) => {
  const { category } = params; // Extract category from params

  return (
    <div className="h-screen">
      <div>Category page for: {category}</div>
      <Suspense>
        <h1>Show Jobs in {category}</h1>
      </Suspense>
      <div className="container mx-auto p-4">
        <div className="flex items-center space-x-4 mb-8">
          <div className="flex-grow">
            <Input placeholder="Software Engineer" className="w-full" />
          </div>
          <div className="flex items-center space-x-2 flex-grow">
            <span className="text-sm font-medium">roles, hiring in</span>
            <Input placeholder="United States" className="w-full" />
          </div>
          <Button variant="default">Search</Button>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              Software Engineer Jobs in United States
            </h2>
            <p className="text-gray-500 mb-4">6150 results total</p>

            <Card className="mb-4">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Cherre</h3>
                    <p className="text-sm text-gray-500">
                      The real estate industry's leading data management and
                      analytics platform
                    </p>
                    <p className="text-sm text-gray-500">51-200 Employees</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Actively Hiring
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span>B2B</span>
                  <span>Growth Stage</span>
                  <span>5.0 Highly rated</span>
                  <span>+2</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Software Engineer</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <DollarSign className="w-4 h-4" />
                        <span>$80k - $150k</span>
                        <MapPin className="w-4 h-4 ml-2" />
                        <span>New York City</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500">2 days ago</span>
                      <Button variant="outline" size="sm">
                        Save
                      </Button>
                      <Button variant="default" size="sm">
                        Apply
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">
                        Senior DevOps and Site Reliability Engineer, remote
                      </h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <DollarSign className="w-4 h-4" />
                        <span>$170k - $210k • 0.01% - 1.0%</span>
                        <MapPin className="w-4 h-4 ml-2" />
                        <span>Remote • New York City</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500">4 years ago</span>
                      <Button variant="outline" size="sm">
                        Save
                      </Button>
                      <Button variant="default" size="sm">
                        Apply
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional job listings would go here */}
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Explore other jobs in United States</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Account Executive in United States</li>
                  <li>Account Manager in United States</li>
                  <li>Backend Engineer in United States</li>
                  <li>Engineering Manager in United States</li>
                  <li>Finance in United States</li>
                  {/* More job categories... */}
                </ul>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Explore remote jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Sales Remote</li>
                  <li>Chief Information Security Officer (CISO) Remote</li>
                  <li>Cloud Architect Remote</li>
                  {/* More remote job categories... */}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
