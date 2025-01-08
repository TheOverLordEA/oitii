import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Building,
  Clock,
  Globe,
  DollarSign,
  Briefcase,
} from "lucide-react";

export default function JobPreview() {
  // This would normally come from form state
  const jobData = {
    title: "Software Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    workplaceType: "Hybrid",
    experience: "3-5 years",
    description:
      "We're looking for a talented software engineer to join our team...",
    skills: ["React", "Python", "TypeScript"],
    remoteDetails: {
      policy: "Hybrid",
      timezones: "EST (UTC-5)",
      collaborationHours: "9:00 AM - 5:00 PM EST",
    },
    visaSponsorship: false,
    relocationAssistance: true,
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card>
        <CardHeader className="space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl font-bold">
                {jobData.title}
              </CardTitle>
              <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                <Building className="w-4 h-4" />
                <span>Your Company Name</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline">{jobData.type}</Badge>
              <Badge variant="outline">{jobData.workplaceType}</Badge>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{jobData.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{jobData.experience} experience</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              <span>{jobData.remoteDetails.timezones}</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground">{jobData.description}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {jobData.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Additional Details</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>
                  Collaboration Hours:{" "}
                  {jobData.remoteDetails.collaborationHours}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>
                  Visa Sponsorship:{" "}
                  {jobData.visaSponsorship ? "Available" : "Not Available"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>
                  Relocation Assistance:{" "}
                  {jobData.relocationAssistance ? "Available" : "Not Available"}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
