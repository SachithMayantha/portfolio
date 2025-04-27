import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      title: "Getting Started with AWS Compute, Database, and Storage",
      issuer: "AWS Educate",
    },
    {
      title: "Agile Methodologies Overview",
      issuer: "Udemy",
    }
    // {
    //   title: "AWS Cloud Essentials",
    //   issuer: "AWS Educate",
    // },
    
  ]

  return (
    <section id="certifications" className="py-12 scroll-mt-20">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Issued by {cert.issuer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
