import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-16">
        <div className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">
          PRICING
        </div>
        <h1 className="text-4xl font-bold mb-4">Hire talent, your way.</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Expand your reach with jobs listings, source top candidates for
          yourself, or have our team handle finding the best talent for you —
          whatever your preference may be, we have the solution for you.
        </p>
      </div>

      <div className="w-full max-w-sm mx-auto">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Essentials</CardTitle>
            <p className="text-sm text-muted-foreground">
              Advanced application tools
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <span className="text-4xl font-bold">$10</span>
              <span className="text-muted-foreground">/mo</span>
            </div>
            <ul className="space-y-2">
              {[
                "All Features in Access",
                "Custom screening questions",
                "Advanced applicant filters",
                "Save applications to prevent expiration",
                "Quick accept/reject templates",
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Sign up</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
