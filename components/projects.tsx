import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Client Interaction Portal",
      description: "Client Interaction and Product Management Portal built to showcase secure authentication, role-based access control, and dynamic content management",
      period: "March 2025 – May 2025 | C-Prav Certifications and Labs, Melbourne",
      details: [
        "Secure user authentication and role-based authorization.",
        "Integration with third-party identity provider (Okta).",
        "RESTful API development and consumption.",
        "Database modeling and relational integrity.",
        "Full-stack project development (backend + frontend).",
        "Real-world problem-solving (user registration, product-client linking, secure file uploads)",
      ],
      technologies: ["Spring Boot", "ReactJS", "Okta Authentication and Authorization", "MySQL", "GitHub Actions", "JUnit Testing"],
      github: "https://github.com/SachithMayantha/c-prav-portal",
    },
  ]

  return (
    <section id="projects" className="py-12 scroll-mt-20">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.period}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4">{project.description}</p>
                <ul className="list-disc list-inside space-y-1 text-sm mb-4">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <div className="flex gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
