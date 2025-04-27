import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-12 scroll-mt-20">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed">
              Enthusiastic and adaptable software developer with a strong foundation in Java and SQL, seeking a
              challenging role in contributing innovative and user-centred solutions. Skilled in problem-solving,
              attention to detail, communication, and collaboration. Passionate about leveraging technology for
              organizational success.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
