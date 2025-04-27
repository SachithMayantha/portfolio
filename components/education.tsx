import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, GraduationCap, MapPin } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Master of Information Technology",
      institution: "Central Queensland University, Melbourne Campus",
      location: "Melbourne, Australia",
      period: "June 2023 – Present",
      details: [
        "Major: Software Development and Design",
        "Minor: Project Management",
        "Key Subjects: Distributed Systems, Software Engineering, Data Structures and Algorithms, Project Management, Enterprise Computing Architecture",
        "Internship: Intern Software and Web Developer at C-Prav Certifications and Labs, Melbourne (March 2025 – 1May 2025)",
      ],
    },
    {
      degree: "B.Sc. (Hons) in Computing & Information Systems",
      institution: "Sabaragamuwa University of Sri Lanka",
      location: "Kandy, Sri Lanka",
      period: "Feb 2017 – Jan 2022",
      details: [
        "Key Subjects: Object Oriented Programming, Advanced Database Systems, Quality Assurance, Design Patterns, Agile Software Development, Software Engineering",
        "Industrial Project: Document Management System for a industry leading construction company",
        "Internship: Intern Software Engineer at Epic Lanka (Pvt) Ltd, Colombo (June 2020 – December 2020)",
      ],
    },
  ];

  return (
    <section id="education" className="py-12 scroll-mt-20">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <CardTitle>{edu.degree}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  {edu.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="leading-relaxed">
                      {detail}
                    </li>
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
