import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Bold,
  Italic,
  LinkIcon,
  List,
  AlignLeft,
  HelpCircle,
  X,
} from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";
export default function EditJob() {
  return (
    <>
      <div className="mt-8">
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">1. Job Details</h2>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="flex items-center gap-1">
                Title
                <span className="text-destructive">*</span>
              </label>
              <Input
                placeholder="e.g. Software Engineer, Product Designer, etc."
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label>Description</label>
              <div className="border rounded-lg">
                <div className="border-b p-2 flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Bold className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Italic className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <List className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <AlignLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <LinkIcon className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <HelpCircle className="w-4 h-4" />
                  </Button>
                </div>
                <textarea
                  className="w-full p-4 min-h-[200px] resize-none focus:outline-none"
                  placeholder="Describe the responsibilities of the position. You can always change this later."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8 max-w-3xl">
        {/* Location Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Location</h2>
          <p className="text-muted-foreground">
            Add your location policy for this job.
          </p>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="location">
                Location<span className="text-destructive">*</span>
              </Label>
              <p className="text-sm text-muted-foreground">
                Where are you hiring for this role? Hiring local, global, or
                remote talent is simple with our location filters and payroll
                integrations.
              </p>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="location"
                  placeholder="e.g. San Francisco"
                  className="pl-9"
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label>Willing to accept applicants who need to relocate?</Label>
              <RadioGroup defaultValue="yes" className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="relocate-yes" />
                  <Label htmlFor="relocate-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="relocate-no" />
                  <Label htmlFor="relocate-no">No</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="relocation-assistance" />
              <Label htmlFor="relocation-assistance">
                Willing to offer relocation assistance?
              </Label>
            </div>

            <div className="space-y-4">
              <Label>
                Willing to offer Visa Sponsorship
                <span className="text-destructive">*</span>
              </Label>
              <RadioGroup defaultValue="no" className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="visa-yes" />
                  <Label htmlFor="visa-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="visa-no" />
                  <Label htmlFor="visa-no">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </section>

        {/* Position Details Section */}
        <section className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="position-type">
                Type of position<span className="text-destructive">*</span>
              </Label>
              <Select defaultValue="full-time">
                <SelectTrigger>
                  <SelectValue placeholder="Select position type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time employee</SelectItem>
                  <SelectItem value="part-time">Part-time employee</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="primary-role">
                Primary role<span className="text-destructive">*</span>
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engineer">Software Engineer</SelectItem>
                  <SelectItem value="designer">Product Designer</SelectItem>
                  <SelectItem value="manager">Product Manager</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="link" className="p-0 h-auto text-blue-600">
                Add another role
              </Button>
            </div>

            <div className="space-y-2">
              <Label>Work experience</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select years of experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1">0-1 years</SelectItem>
                  <SelectItem value="1-3">1-3 years</SelectItem>
                  <SelectItem value="3-5">3-5 years</SelectItem>
                  <SelectItem value="5-7">5-7 years</SelectItem>
                  <SelectItem value="7+">7+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Skills</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="e.g. Python, React" className="pl-9" />
              </div>
            </div>
          </div>
        </section>

        {/* Remote Work Details Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Remote Work Details</h2>
          <p className="text-muted-foreground">
            Wellfound is the number one site to find remote hires. This section
            ensures you will be matched with candidates that fit your needs.
          </p>

          <div className="space-y-6">
            <div className="space-y-4">
              <Label>
                What's your remote policy for this job?
                <span className="text-destructive">*</span>
              </Label>
              <RadioGroup defaultValue="office" className="flex flex-col gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="office" id="remote-office" />
                  <Label htmlFor="remote-office">In office</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="hybrid" id="remote-hybrid" />
                  <Label htmlFor="remote-hybrid">Onsite or remote</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="remote" id="remote-only" />
                  <Label htmlFor="remote-only">Remote only</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="wfh-flexibility" />
                <Label htmlFor="wfh-flexibility">
                  WFH flexibility - Employees may work from home a few days a
                  week
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="auto-skip" />
                <Label htmlFor="auto-skip">
                  Auto-skip applicants who cannot relocate for this position
                </Label>
              </div>
            </div>

            <div className="space-y-4">
              <Label>
                Hiring regions for remote workers
                <span className="text-destructive">*</span>
              </Label>
              <p className="text-sm text-muted-foreground">
                Where are you willing to hire from?
              </p>
              <div className="flex items-center space-x-2">
                <Checkbox id="worldwide" />
                <Label htmlFor="worldwide">
                  Accept remote workers from anywhere in the world
                </Label>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="e.g Eastern Europe, India, etc."
                  className="pl-9"
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label>What is your remote culture?</Label>
              <RadioGroup
                defaultValue="in-person"
                className="flex flex-col gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="in-person" id="culture-in-person" />
                  <Label htmlFor="culture-in-person">
                    We mostly have an in-person set-up
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="remote" id="culture-remote" />
                  <Label htmlFor="culture-remote">
                    We're mostly remote or distributed
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label>Timezones for remote workers</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select time zones" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="est">EST (UTC-5)</SelectItem>
                  <SelectItem value="pst">PST (UTC-8)</SelectItem>
                  <SelectItem value="utc">UTC</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <Label>Collaboration Hours</Label>
              <p className="text-sm text-muted-foreground">
                The hours between which you expect employees to be available for
                synchronous communications. This is for informational purposes
                only.
              </p>
              <div className="flex items-center gap-4">
                <Input placeholder="--:-- --" className="w-32" />
                <span>-</span>
                <Input placeholder="--:-- --" className="w-32" />
                <Select defaultValue="est">
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Select time zone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="est">EST (UTC-5)</SelectItem>
                    <SelectItem value="pst">PST (UTC-8)</SelectItem>
                    <SelectItem value="utc">UTC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
