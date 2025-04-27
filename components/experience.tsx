import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "IT Support Technician",
      company: "Whiteboard Solutions",
      location: "Parramatta NSW",
      type: "Part-Time, Remote",
      period: "Feb 2024 – Present",
      responsibilities: [
        "Manage the installation process of software and hardware solutions",
        "Respond to client inquiries and resolve issues via the ticketing system",
        "Collaborate effectively with internal teams to ensure seamless customer support",
        "Conduct on-site visits to rectify hardware or software issues",
        "Troubleshoot and resolve technical issues, administrative support and process improvement",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "Pearson Lanka",
      location: "Sri Lanka",
      type: "Full-Time",
      period: "Mar 2022 – Jan 2023",
      responsibilities: [
        "Collaborate with the team to understand requirements and deliverables",
        "Managed incidents and fixed the bugs related to learning management systems (LMS) such as Moodle",
        "Contributed to functional development in a Microservices project as a developer",
        "Built the unit test cases using the Mockito framework and helped to improve the Sonar test coverage by 20%",
        "Involved with GitLab pipeline creation for deployments",
        "Worked with Jira, Service–Now, Checkmarx and SonarQube",
      ],
    },
  ];

  return (
    <section id="experience" className="py-12 scroll-mt-20">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>
                      {exp.company} • {exp.type}
                    </CardDescription>
                  </div>
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
                <ul className="list-disc list-inside space-y-1">
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
  )
}
