import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";

export default function Volunteering() {
  const volunteering = [
    {
      title: "AWS Community Builder",
      organization: "Amazon Web Services",
      location: "Global",
      type: "Volunteer",
      period: "2023 – Present",
      responsibilities: [
        "Contributing to AWS community through technical content creation",
        "Participating in AWS events and webinars",
        "Sharing knowledge about AWS services and best practices",
        "Mentoring aspiring cloud professionals",
      ],
    },
    {
      title: "Technical Writer",
      organization: "Dev.to",
      location: "Online",
      type: "Volunteer",
      period: "2022 – Present",
      responsibilities: [
        "Writing technical articles about software development",
        "Sharing knowledge about Java, Spring Boot, and AWS",
        "Creating tutorials and guides for developers",
        "Engaging with the developer community",
      ],
    },
  ];

  return (
    <section id="volunteering" className="py-12 scroll-mt-20">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Volunteering Experience
          </h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>
        <div className="space-y-6">
          {volunteering.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="space-y-1">
                  <CardTitle>{exp.title}</CardTitle>
                  <CardDescription>
                    {exp.organization} • {exp.type}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
