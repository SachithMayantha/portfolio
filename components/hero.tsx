import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText, NotebookPen } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-12 md:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
          <Image
            src="https://sachithmayantha.github.io/portfolio/placeholder2.png?height=920&width=720"
            alt="Sachith Fernando"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Sachith Fernando
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Software Engineer | AWS Community Builder | Blogger
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          {/* <Button variant="outline" asChild>
            <a href="#projects">View Projects</a>
          </Button> */}
          <Button variant="outline" asChild>
            <a
              href="https://drive.google.com/file/d/1YOUR_RESUME_ID/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>
        <div className="flex gap-4 pt-4">
          <a
            href="https://www.linkedin.com/in/sachith-mayantha-fernando/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/SachithMayantha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://dev.to/sachithmayantha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Blog"
          >
            <NotebookPen className="h-6 w-6" />
          </a>
        </div>
        {/* <div className="text-sm text-muted-foreground">
          <p>📍 Melbourne, Australia</p>
          <p>📧 sachithfernando599@gmail.com</p>
          <p>📱 +61 450 235 996</p>
        </div> */}
      </div>
    </section>
  );
}
