import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "JavaScript", "HTML5", "CSS3"],
    },
    {
      title: "Frameworks & Tools",
      skills: ["Spring Boot", "MySQL", "MongoDB","PostgreSQL", "Git", "Jira", "Postman", "JUnit", "AWS"],
    },
    {
      title: "Operating Systems",
      skills: ["Windows","Linux"],
    },
  ]

  return (
    <section id="skills" className="py-12 scroll-mt-20">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
